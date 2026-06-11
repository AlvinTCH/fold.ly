from typing import Optional, List
from pydantic import BaseModel

class UrlResponse(BaseModel):
    id: int
    mapped_url_id: str
    original_url: str

class UserAgentAnalytics(BaseModel):
    browser: str
    os: str
    device: str
    brand: Optional[str] = None
    model: Optional[str] = None

class AnalyticsResponse(BaseModel):
    count: int
    unique_user_count: int
    user_agent_analytics: List[UserAgentAnalytics]
