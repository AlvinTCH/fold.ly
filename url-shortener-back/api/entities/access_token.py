from pydantic import BaseModel, Field

class GenerateAccessTokenResult(BaseModel):
    token: str = Field(..., description="Generated JWT token")
    token_expiry: str = Field(..., description="Expiry date of the JWT token")
    refresh_token: str = Field(..., description="Generated refresh token for auth for presistent auth")