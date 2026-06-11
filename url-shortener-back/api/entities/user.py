from typing import Literal

from pydantic import BaseModel

class UserAuthToken(BaseModel):
    access_token: str
    expiry: str
    refresh_token: str
    token_type: Literal["bearer"] = "bearer"

class UserAuthProfile(BaseModel):
    name: str
    profile_pic: str

class UserAuthResponse(BaseModel):
    token: UserAuthToken
    profile: UserAuthProfile