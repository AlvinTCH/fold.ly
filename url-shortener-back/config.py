from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    fastapi_cors_origins: list[str] = ["http://localhost:8080"]
    
    jwt_secret: str = ""
    jwt_alg: str = ""
    jwt_expire_mins: int = 60 * 24 * 12 # expires in 12 days

    frontend_url: str = "http://localhost:8080"
    backend_url: str = "http://localhost:8000"
    
    database_url: str = ""

    seed: bool = False
    