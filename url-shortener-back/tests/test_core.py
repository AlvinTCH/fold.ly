import pytest
from sqlalchemy import select

from db.models.core import Url


LONG_URL = "https://example.com/some/very/long/path"


# ---------------------------------------------------------------------------
# POST /api/v1/core/shorten-url
# ---------------------------------------------------------------------------

def test_anonymous_shorten_url_succeeds(client):
    resp = client.post("/api/v1/core/shorten-url", json={"original_url": LONG_URL})
    assert resp.status_code == 200
    body = resp.json()
    assert "url" in body
    assert body["url"].startswith("http")


def test_anonymous_second_shorten_returns_400(client):
    client.post("/api/v1/core/shorten-url", json={"original_url": LONG_URL})
    resp = client.post("/api/v1/core/shorten-url", json={"original_url": "https://other.com"})
    assert resp.status_code == 400
    assert "limit" in resp.json()["detail"].lower()


def test_authenticated_shorten_url_succeeds(client, auth_headers):
    resp = client.post(
        "/api/v1/core/shorten-url",
        json={"original_url": LONG_URL},
        headers=auth_headers,
    )
    assert resp.status_code == 200
    assert "url" in resp.json()


def test_authenticated_shorten_url_up_to_limit(client, auth_headers, db_session):
    for i in range(5):
        resp = client.post(
            "/api/v1/core/shorten-url",
            json={"original_url": f"https://example.com/page/{i}"},
            headers=auth_headers,
        )
        assert resp.status_code == 200, f"Failed on request {i}: {resp.json()}"

    resp = client.post(
        "/api/v1/core/shorten-url",
        json={"original_url": "https://example.com/over-limit"},
        headers=auth_headers,
    )
    assert resp.status_code == 400
    assert "limit" in resp.json()["detail"].lower()


def test_shorten_url_missing_body_returns_422(client):
    resp = client.post("/api/v1/core/shorten-url", json={})
    assert resp.status_code == 422


def test_shortened_url_id_stored_in_db(client, db_session):
    resp = client.post("/api/v1/core/shorten-url", json={"original_url": LONG_URL})
    assert resp.status_code == 200
    short_url = resp.json()["url"]
    short_id = short_url.rsplit("/", 1)[-1]

    row = db_session.execute(
        select(Url).where(Url.mapped_url_id == short_id)
    ).scalar_one_or_none()
    assert row is not None
    assert row.original_url == LONG_URL


# ---------------------------------------------------------------------------
# GET /{shortener_id}  (redirect)
# ---------------------------------------------------------------------------

def _shorten(client, url=LONG_URL):
    resp = client.post("/api/v1/core/shorten-url", json={"original_url": url})
    assert resp.status_code == 200
    return resp.json()["url"].rsplit("/", 1)[-1]


def test_redirect_known_id_redirects_to_original(client):
    short_id = _shorten(client)
    resp = client.get(f"/{short_id}", follow_redirects=False)
    assert resp.status_code == 308
    assert resp.headers["location"] == LONG_URL


def test_redirect_unknown_id_redirects_to_frontend(client):
    resp = client.get("/nonexistent-id", follow_redirects=False)
    assert resp.status_code in (301, 302, 307, 308)
    assert "nonexistent-id" in resp.headers["location"]


def test_redirect_records_analytics(client, db_session):
    from db.models.core import Analytics
    short_id = _shorten(client)
    client.get(f"/{short_id}", headers={"User-Agent": "TestAgent/1.0"}, follow_redirects=False)

    url_row = db_session.execute(
        select(Url).where(Url.mapped_url_id == short_id)
    ).scalar_one()
    analytics = db_session.execute(
        select(Analytics).where(Analytics.url_id == url_row.id)
    ).scalars().all()
    assert len(analytics) == 1
    assert analytics[0].user_agent == "TestAgent/1.0"
