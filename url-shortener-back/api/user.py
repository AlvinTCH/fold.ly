# routers/users.py
from fastapi import APIRouter, Depends, HTTPException, status

from sqlalchemy.orm import Session
from sqlalchemy import select

from db.models.core import User, UserAuth, Profile, ProfileSubscription, Subscription
from db.db_session import get_db
from api.entities.user import (
    UserAuthToken,
    UserAuthProfile,
    UserAuthResponse
)
from api.entities.login import LoginRequest, RegisterRequest
from api.utils.auth import create_access_token, verify_jwt
from api.utils.keystore import central_key_store
from utils.password import hash_password, verify_password

# You can prefix all routes in this file and group them with tags for documentation
user_router = APIRouter(
    prefix="/api/v1/user",
    tags=["user"]
)

def create_user_auth(db: Session, user_id: int, data: dict) -> UserAuth:
    generated_access_token = create_access_token(data=data)

    profile = db.execute(
        select(
            Profile.name,
            Profile.profile_img
        ).where(
            Profile.user_id == user_id
        )
    ).one()

    db.add(
        UserAuth(
            token=generated_access_token.token,
            refresh_token=generated_access_token.refresh_token,
            user_id=user_id
        )
    )
    db.commit()

    return UserAuthResponse(
        token=UserAuthToken(
            access_token = generated_access_token.token,
            expiry = generated_access_token.token_expiry,
            refresh_token = generated_access_token.refresh_token
        ),
        profile=UserAuthProfile(
            name=profile[0],
            profile_pic=profile[1],
        )
    )

@user_router.post("/register", response_model=UserAuthResponse)
async def register_user(payload: RegisterRequest, db: Session = Depends(get_db)):
    existing_user_id = db.scalars(
        select(User.id).where(User.username == payload.username)
    ).one_or_none()
    if existing_user_id is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User already exists. Please sign in",
        )

    decrypted_password = central_key_store.decrypt_value(payload.password)
    new_user = User(
        username=payload.username,
        password_hash=hash_password(decrypted_password),
    )
    db.add(new_user)
    db.flush()

    new_profile = Profile(
        name=payload.name,
        profile_img="",
        user_id=new_user.id
    )
    db.add(new_profile)
    db.flush()

    free_sub: Subscription = db.scalars(
        select(Subscription).where(Subscription.price == 0)
    ).one_or_none()
    if free_sub is not None:
        db.add(
            ProfileSubscription(
                profile_id=new_profile.id,
                subscription_id=free_sub.id,
                limit=free_sub.limit,
                price=free_sub.price,
            )
        )
    db.commit()

    return create_user_auth(
        db=db,
        user_id=new_user.id,
        data={"sub": payload.username}
    )

@user_router.post("/login", response_model=UserAuthResponse)
async def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user_data = db.execute(
        select(User.id, User.password_hash).where(User.username == payload.username)
    ).one_or_none()

    decrypted_password = central_key_store.decrypt_value(payload.password)

    if not user_data or not verify_password(decrypted_password, user_data[1]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return create_user_auth(
        db=db,
        user_id=user_data[0],
        data={"sub": payload.username}
    )

@user_router.get("/logout")
async def logout(user: User = Depends(verify_jwt), db: Session = Depends(get_db)) -> None:
    user_auth = db.scalars(
        select(UserAuth).where(UserAuth.user_id == user.id)
    ).first()
    if user_auth:
        user_auth.revoked = True
        db.commit()
    return

