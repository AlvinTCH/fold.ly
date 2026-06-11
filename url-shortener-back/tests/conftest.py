import os
os.environ.setdefault("DATABASE_URL", "sqlite:///:memory:")
os.environ.setdefault("JWT_SECRET", "test-secret-key-for-pytest-minimum32b")
os.environ.setdefault("JWT_ALG", "HS256")

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker

from db.models.core import ShortenerBase, Subscription, User, Profile, ProfileSubscription, UserAuth
from db.models.enum.subscription import SubscriptionEnum
from db.db_session import get_db
from utils.password import hash_password
from api.utils.keystore import central_key_store


def encrypt_password(password: str) -> str:
    """Encrypts a plaintext password the same way the frontend does before sending it to the API."""
    return central_key_store.encrypt_value(password)

# SQLite needs this pragma to honour FK constraints
SQLITE_URL = "sqlite:///:memory:"

@pytest.fixture(scope="session")
def engine():
    eng = create_engine(SQLITE_URL, connect_args={"check_same_thread": False})

    @event.listens_for(eng, "connect")
    def set_sqlite_pragma(conn, _):
        conn.execute("PRAGMA foreign_keys=ON")

    ShortenerBase.metadata.create_all(eng)
    yield eng
    ShortenerBase.metadata.drop_all(eng)


@pytest.fixture()
def db_session(engine):
    connection = engine.connect()
    transaction = connection.begin()
    Session = sessionmaker(bind=connection)
    session = Session()

    yield session

    session.close()
    transaction.rollback()
    connection.close()


@pytest.fixture()
def client(db_session):
    from main import app

    def override_get_db():
        try:
            yield db_session
        finally:
            pass

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app, raise_server_exceptions=True) as c:
        yield c
    app.dependency_overrides.clear()


@pytest.fixture()
def free_subscription(db_session):
    sub = Subscription(
        name=SubscriptionEnum.FREE,
        description="Free tier",
        limit=5,
        price=0,
    )
    db_session.add(sub)
    db_session.flush()
    return sub


@pytest.fixture()
def registered_user(db_session, free_subscription):
    """A fully registered user with profile and free subscription."""
    user = User(
        username="testuser",
        password_hash=hash_password("password123"),
    )
    db_session.add(user)
    db_session.flush()

    profile = Profile(name="Test User", profile_img="", user_id=user.id)
    db_session.add(profile)
    db_session.flush()

    db_session.add(ProfileSubscription(
        profile_id=profile.id,
        subscription_id=free_subscription.id,
        limit=free_subscription.limit,
        price=free_subscription.price,
    ))
    db_session.commit()
    return user


@pytest.fixture()
def auth_headers(client, registered_user):
    """Bearer headers for the registered_user."""
    resp = client.post("/api/v1/user/login", json={
        "username": "testuser",
        "password": encrypt_password("password123"),
    })
    assert resp.status_code == 200
    token = resp.json()["token"]["access_token"]
    return {"Authorization": f"Bearer {token}"}
