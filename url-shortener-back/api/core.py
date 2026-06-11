# routers/core.py
import logging
from secrets import token_urlsafe
from typing import Annotated

from fastapi import APIRouter, Depends, Header, HTTPException, Request, status
from fastapi.responses import JSONResponse, RedirectResponse

from sqlalchemy import select, func
from sqlalchemy.orm import Session

from api.entities.shortener import UrlShortenerRequest, ShortenUrlResponse
from api.utils.auth import get_optional_current_user
from api.utils.keystore import central_key_store

from config import Settings

from db.models.core import User
from db.db_session import get_db
from db.models.core import Analytics, Url, ProfileSubscription, Subscription
from db.models.enum.subscription import SubscriptionEnum

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_settings = Settings()

core_router = APIRouter(
    prefix="/api/v1/core",
    tags=["core"]
)

@core_router.post("/shorten-url", response_model=ShortenUrlResponse)
async def shorten_url(
    request: Request,
    url_shorten_body: UrlShortenerRequest,
    user: User | None = Depends(get_optional_current_user),
    db: Session = Depends(get_db)
):
    creator_ip = request.client.host

    if user is None:
        session_count = db.scalar(
            select(func.count(Url.id))
            .where(Url.creator_ip == creator_ip)
            .where(Url.soft_deleted == False)
        )
        if session_count >= 1:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="You have reached the limit. Please log in to create more urls"
            )
    else:
        session_count = db.scalar(
            select(func.count(Url.id))
            .where(Url.profile_id == user.profile.id)
            .where(Url.soft_deleted == False)
        )
        limit_data = db.execute(
            select(ProfileSubscription.limit, Subscription.name)
            .join(Subscription, ProfileSubscription.subscription_id == Subscription.id)
            .where(ProfileSubscription.profile_id == user.profile.id)
        ).one_or_none()

        if limit_data is not None:
            higher_tier = SubscriptionEnum.PRO
            if limit_data[1] == SubscriptionEnum.PRO:
                higher_tier = SubscriptionEnum.PROPLUS

            if session_count >= limit_data[0]:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"You have reached the limit. Subscribe to {higher_tier} to create more urls"
                )

    mapped_url_id = token_urlsafe(16)

    while db.scalar(
        select(Url.mapped_url_id).where(Url.mapped_url_id == mapped_url_id)
    ) is not None:
        mapped_url_id = token_urlsafe(8)

    data = Url(
        creator_ip=creator_ip,
        original_url=url_shorten_body.original_url,
        mapped_url_id=mapped_url_id,
        **{"profile_id": user.profile.id} if user else {}
    )

    db.add(data)
    db.commit()

    return ShortenUrlResponse(
        id = data.id,
        url = f"{app_settings.backend_url}/{mapped_url_id}"
    )


base_router = APIRouter()

@base_router.get("/{shortener_id}", response_model=None)
def redirect_shortened_url(request: Request, user_agent: Annotated[str | None, Header()], shortener_id: str, db: Session = Depends(get_db)):
    logger.info(f"shortened: {shortener_id}")
    url_data = db.execute(
        select(Url.id, Url.original_url).where(Url.mapped_url_id == shortener_id)
    ).one_or_none()

    if not url_data:
        return RedirectResponse(f"{app_settings.frontend_url}/404?short_id={shortener_id}")

    db.add(
        Analytics(
            user_agent=user_agent or "",
            query_ip=request.client.host,
            url_id=url_data[0]
        )
    )
    db.commit()

    return RedirectResponse(url_data[1], status_code=308)

@base_router.get("/.well-known/signing-keys.json", response_model=dict)
def signing_keys():
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "keys": [
               central_key_store.get_jwks()
            ]
        }
    )
