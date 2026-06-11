# routers/users.py
from fastapi import APIRouter, Depends, HTTPException, status

from sqlalchemy.orm import Session
from sqlalchemy import select

from api.utils.auth import verify_jwt

from db.models.core import User, ProfileSubscription, Subscription
from db.db_session import get_db
from api.entities.subscription import SubscribeRequest, SubscriptionResponse

# You can prefix all routes in this file and group them with tags for documentation
subscription_router = APIRouter(
    prefix="/api/v1/subscription",
    tags=["user"]
)

@subscription_router.get("/subscriptions", response_model=list[SubscriptionResponse])
async def get_subscriptions(user: User = Depends(verify_jwt), db: Session = Depends(get_db)):
    existing_subscription_id: int = 0
    existing_subscription = db.scalar(
        select(
            ProfileSubscription
        ).where(
            ProfileSubscription.profile_id == user.profile.id
        )
    )
    if existing_subscription is not None:
        existing_subscription_id = existing_subscription.subscription_id

    all_subscriptions = db.scalars(
        select(Subscription)
    ).all()

    subscription_list: list[SubscriptionResponse] = []
    for x in all_subscriptions:
        sub_response = SubscriptionResponse(
            subscription_id=x.id,
            name=x.name,
            description=x.description,
            limit=x.limit,
            price=x.price,
            subscribed=x.id == existing_subscription_id
        )
        if x.id == existing_subscription_id:
            sub_response.limit = existing_subscription.limit
            sub_response.price = existing_subscription.price
        subscription_list.append(sub_response)
    return subscription_list

@subscription_router.post("/subscribe")
async def subscribe(payload: SubscribeRequest, user: User = Depends(verify_jwt), db: Session = Depends(get_db)):
    # get related sub
    subscription: Subscription = db.scalars(
        select(
            Subscription
        ).where(
            Subscription.id == payload.subscription_id
        )
    ).one_or_none()

    if not subscription:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid subscription id",
        )
    
    if (
        (subscription.price != payload.price) |
        (subscription.limit != payload.limit)
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid subscription data",
        )

    existing_subscription = db.scalars(
        select(
            ProfileSubscription
        ).where(
            ProfileSubscription.profile_id == user.profile.id
        )
    ).one_or_none()
    if not existing_subscription:
        db.add(
            ProfileSubscription(
                profile_id=user.profile.id,
                subscription_id=payload.subscription_id,
                limit=payload.limit,
                price=payload.price
            )
        )
    else:
        existing_subscription.subscription_id = payload.subscription_id
        existing_subscription.limit = payload.limit
        existing_subscription.price = payload.price
    db.commit()

    return