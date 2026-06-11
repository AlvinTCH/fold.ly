# routers/core.py
import logging
from secrets import token_urlsafe
from typing import List

from fastapi import APIRouter, Depends, Header, HTTPException, Request, status
from fastapi.responses import RedirectResponse

from sqlalchemy import select, func
from sqlalchemy.orm import Session

from ua_parser import parse

from api.entities.data import UrlResponse, UserAgentAnalytics, AnalyticsResponse
from api.utils.auth import verify_jwt

from config import Settings

from db.models.core import User
from db.db_session import get_db
from db.models.core import Url, Analytics

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_settings = Settings()

data_router = APIRouter(
    prefix="/api/v1/data",
    tags=["data"]
)


@data_router.get("/urls", response_model=List[UrlResponse])
async def retrieve_url_list(
    user: User = Depends(verify_jwt),
    db: Session = Depends(get_db)
):
    urls = db.execute(
        select(Url.id, Url.mapped_url_id, Url.original_url).where(
            Url.profile_id == user.profile.id
        )
    ).all()

    return [
        UrlResponse(
            id=x[0],
            mapped_url_id=x[1],
            original_url=x[2]
        ) for x in urls
    ]

@data_router.get("/analytics", response_model=AnalyticsResponse)
async def retrieve_analytics(
    url_id: int,
    user: User = Depends(verify_jwt),
    db: Session = Depends(get_db),  
):
    analytics_data_list = db.execute(
        select(
            Analytics.query_ip, Analytics.user_agent
        )
        .join(Url)
        .where(
            Analytics.url_id == url_id
        ).where(
            Url.profile_id == user.profile.id
        )
    ).all()

    # Count filtered rows
    unique_ip_count = db.scalar(
        select(
            func.count(Analytics.query_ip.distinct())
        )
        .join(Url)
        .where(
            Analytics.url_id == url_id
        ).where(
            Url.profile_id == user.profile.id
        )
    )

    user_agent_analytics: List[UserAgentAnalytics] = []
    for analytics_data in analytics_data_list:
        ua_data = parse(analytics_data[1])
        user_agent_analytics.append(
            UserAgentAnalytics(
                browser=ua_data.user_agent.family,
                os=ua_data.os.family,
                device=ua_data.device.family,
                brand=ua_data.device.brand,
                model=ua_data.device.model,
            )
        )

    return AnalyticsResponse(
        count=len(analytics_data_list),
        unique_user_count=unique_ip_count,
        user_agent_analytics=user_agent_analytics
    )