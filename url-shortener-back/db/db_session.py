import os

from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# 1. Get the database URL from the environment variable (fallback to local if running outside Docker)
DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "postgresql://app_user:app_secure_password@localhost:5432/app_database"
)

# 2. Create the SQLAlchemy Engine
# The engine manages the actual pool of connections to the database
engine = create_engine(DATABASE_URL, echo=True)  # echo=True logs all SQL queries to the console

# 3. Create a Session Local class
# Each instance of SessionLocal will be a distinct database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. Create a Base class for your models to inherit from
Base = declarative_base()

# 5. Dependency injection helper for FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()  # Ensures the connection is closed after the request is finished