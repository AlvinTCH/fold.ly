import pytest

from tests.conftest import encrypt_password


def register_payload():
    return {
        "username": "newuser",
        "password": encrypt_password("securepass"),
        "name": "New User",
        "profile_image": None,
    }


# ---------------------------------------------------------------------------
# Register
# ---------------------------------------------------------------------------

def test_register_new_user_returns_token(client, free_subscription):
    resp = client.post("/api/v1/user/register", json=register_payload())
    assert resp.status_code == 200
    body = resp.json()
    token = body["token"]
    assert "access_token" in token
    assert token["token_type"] == "bearer"
    assert "refresh_token" in token
    assert "expiry" in token
    assert body["profile"]["name"] == "New User"


def test_register_duplicate_username_returns_400(client, free_subscription):
    client.post("/api/v1/user/register", json=register_payload())
    resp = client.post("/api/v1/user/register", json=register_payload())
    assert resp.status_code == 400
    assert "already exists" in resp.json()["detail"].lower()


def test_register_missing_required_fields_returns_422(client):
    resp = client.post("/api/v1/user/register", json={"username": "x"})
    assert resp.status_code == 422


# ---------------------------------------------------------------------------
# Login
# ---------------------------------------------------------------------------

def test_login_valid_credentials_returns_token(client, registered_user):
    resp = client.post("/api/v1/user/login", json={
        "username": "testuser",
        "password": encrypt_password("password123"),
    })
    assert resp.status_code == 200
    body = resp.json()
    token = body["token"]
    assert "access_token" in token
    assert token["token_type"] == "bearer"
    assert body["profile"]["name"] == "Test User"


def test_login_wrong_password_returns_401(client, registered_user):
    resp = client.post("/api/v1/user/login", json={
        "username": "testuser",
        "password": encrypt_password("wrongpassword"),
    })
    assert resp.status_code == 401
    assert "incorrect" in resp.json()["detail"].lower()


def test_login_unknown_user_returns_401(client):
    resp = client.post("/api/v1/user/login", json={
        "username": "ghost",
        "password": encrypt_password("anything"),
    })
    assert resp.status_code == 401


def test_login_missing_fields_returns_422(client):
    resp = client.post("/api/v1/user/login", json={"username": "only"})
    assert resp.status_code == 422


# ---------------------------------------------------------------------------
# Logout
# ---------------------------------------------------------------------------

def test_logout_with_valid_token_returns_200(client, auth_headers):
    resp = client.get("/api/v1/user/logout", headers=auth_headers)
    assert resp.status_code == 200


def test_logout_without_token_returns_4xx(client, registered_user):
    resp = client.get("/api/v1/user/logout")
    assert resp.status_code in (401, 403)


def test_logout_with_invalid_token_returns_401(client, registered_user):
    resp = client.get("/api/v1/user/logout", headers={"Authorization": "Bearer invalid.token.here"})
    assert resp.status_code == 401
