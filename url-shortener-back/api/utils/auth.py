from datetime import datetime, timedelta, timezone
from secrets import token_urlsafe
from typing import Optional

from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Depends, HTTPException, status

from sqlalchemy import select
from sqlalchemy.orm import Session

import jwt

from api.entities.access_token import GenerateAccessTokenResult
from config import Settings
from db.models.core import User
from db.db_session import get_db

bearer_security = HTTPBearer()
optional_bearer_security = HTTPBearer(auto_error=False)
app_settings = Settings()

def create_access_token(data: dict) -> GenerateAccessTokenResult:
    now_dt = datetime.now(timezone.utc)
    expiry = now_dt + timedelta(minutes=app_settings.jwt_expire_mins)

    encoded_jwt = jwt.encode({
        **data,
        "exp": expiry
    }, app_settings.jwt_secret, algorithm=app_settings.jwt_alg)

    return GenerateAccessTokenResult(
        token=encoded_jwt,
        refresh_token=token_urlsafe(32),
        token_expiry=expiry.isoformat()
    )

async def verify_jwt(db: Session = Depends(get_db), token: HTTPAuthorizationCredentials = Depends(bearer_security)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token.credentials, app_settings.jwt_secret, algorithms=[app_settings.jwt_alg])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except jwt.PyJWTError:
        raise credentials_exception

    user = db.scalars(
        select(User).where(User.username == username)
    ).one_or_none()
    if user is None:
        raise credentials_exception
    return user

async def get_optional_current_user(db: Session = Depends(get_db), token: Optional[HTTPAuthorizationCredentials] = Depends(optional_bearer_security)):
    if token is None:
        return None
    try:
        payload = jwt.decode(token.credentials, app_settings.jwt_secret, algorithms=[app_settings.jwt_alg])
        username: str = payload.get("sub")
        if username is None:
            return None
    except jwt.PyJWTError:
        return None

    return db.scalars(
        select(User).where(User.username == username)
    ).one_or_none()
