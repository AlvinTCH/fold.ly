from contextlib import asynccontextmanager
import logging

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from sqlalchemy import text

from api.user import user_router
from api.subscription import subscription_router
from api.core import base_router, core_router
from api.data import data_router

from config import Settings
from db.db_session import get_db
from db.seed.begin_seed import run_seeder

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_settings = Settings()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # This block executes BEFORE the application starts accepting web traffic
    if app_settings.seed:
        try:
            run_seeder()
        except Exception as err:
            logger.info(f"Lifespan seeding caught an exception: {err}")
    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=app_settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthcheck")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        # Run a simple raw SQL query to test the connection live
        result = db.execute(text("SELECT 1")).fetchone()
        if result:
            return {"status": "healthy", "database": "connected successfully"}
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Database connection failed: {str(e)}"
        )

# Include the routers — base_router has a wildcard /{shortener_id} so it must come last
app.include_router(base_router)
app.include_router(core_router)
app.include_router(data_router)
app.include_router(subscription_router)
app.include_router(user_router)
    