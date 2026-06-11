import pytest

from db.models.core import Analytics, Profile, Url, User
from utils.password import hash_password


IPHONE_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1"


def _create_url(db_session, profile_id, mapped_url_id, original_url, creator_ip="127.0.0.1"):
    url = Url(
        creator_ip=creator_ip,
        mapped_url_id=mapped_url_id,
        original_url=original_url,
        profile_id=profile_id,
    )
    db_session.add(url)
    db_session.commit()
    return url


# ---------------------------------------------------------------------------
# GET /api/v1/data/urls
# ---------------------------------------------------------------------------

def test_retrieve_urls_requires_auth(client):
    resp = client.get("/api/v1/data/urls")
    assert resp.status_code in (401, 403)


def test_retrieve_urls_returns_only_own_urls(client, db_session, registered_user, auth_headers):
    own_url = _create_url(
        db_session,
        profile_id=registered_user.profile.id,
        mapped_url_id="own-url-1",
        original_url="https://example.com/mine",
    )

    resp = client.get("/api/v1/data/urls", headers=auth_headers)
    assert resp.status_code == 200

    body = resp.json()
    assert len(body) == 1
    assert body[0] == {
        "id": own_url.id,
        "mapped_url_id": "own-url-1",
        "original_url": "https://example.com/mine",
    }


def test_retrieve_urls_excludes_other_profiles_and_anonymous(client, db_session, registered_user, auth_headers, free_subscription):
    # Url owned by current user
    _create_url(
        db_session,
        profile_id=registered_user.profile.id,
        mapped_url_id="own-url-2",
        original_url="https://example.com/mine-2",
    )

    # Url owned by another user's profile
    other_user = User(username="otheruser", password_hash=hash_password("password123"))
    db_session.add(other_user)
    db_session.flush()
    other_profile = Profile(name="Other User", profile_img="", user_id=other_user.id)
    db_session.add(other_profile)
    db_session.flush()
    _create_url(
        db_session,
        profile_id=other_profile.id,
        mapped_url_id="other-url",
        original_url="https://example.com/other",
    )

    # Anonymous url with no profile
    _create_url(
        db_session,
        profile_id=None,
        mapped_url_id="anon-url",
        original_url="https://example.com/anon",
    )

    resp = client.get("/api/v1/data/urls", headers=auth_headers)
    assert resp.status_code == 200

    body = resp.json()
    assert [item["mapped_url_id"] for item in body] == ["own-url-2"]


def test_retrieve_urls_empty_when_no_urls(client, auth_headers):
    resp = client.get("/api/v1/data/urls", headers=auth_headers)
    assert resp.status_code == 200
    assert resp.json() == []


# ---------------------------------------------------------------------------
# GET /api/v1/data/analytics
# ---------------------------------------------------------------------------

def test_retrieve_analytics_requires_auth(client):
    resp = client.get("/api/v1/data/analytics", params={"url_id": "1"})
    assert resp.status_code in (401, 403)


def test_retrieve_analytics_requires_url_id_param(client, auth_headers):
    resp = client.get("/api/v1/data/analytics", headers=auth_headers)
    assert resp.status_code == 422


def test_retrieve_analytics_returns_parsed_user_agent(client, db_session, registered_user, auth_headers):
    url = _create_url(
        db_session,
        profile_id=registered_user.profile.id,
        mapped_url_id="analytics-url",
        original_url="https://example.com/analytics",
    )
    db_session.add(Analytics(query_ip="1.2.3.4", user_agent=IPHONE_UA, url_id=url.id))
    db_session.commit()

    resp = client.get("/api/v1/data/analytics", params={"url_id": str(url.id)}, headers=auth_headers)
    assert resp.status_code == 200

    body = resp.json()
    assert body["count"] == 1
    assert body["unique_user_count"] == 1
    assert len(body["user_agent_analytics"]) == 1
    assert body["user_agent_analytics"][0]["os"] == "iOS"
    assert body["user_agent_analytics"][0]["device"] == "iPhone"
    assert body["user_agent_analytics"][0]["brand"] == "Apple"
    assert body["user_agent_analytics"][0]["model"] == "iPhone"


def test_retrieve_analytics_empty_for_unknown_url_id(client, auth_headers):
    resp = client.get("/api/v1/data/analytics", params={"url_id": "999999"}, headers=auth_headers)
    assert resp.status_code == 200
    assert resp.json() == {
        "count": 0,
        "unique_user_count": 0,
        "user_agent_analytics": [],
    }


def test_retrieve_analytics_excludes_other_profiles_urls(client, db_session, registered_user, auth_headers):
    other_user = User(username="otheruser2", password_hash=hash_password("password123"))
    db_session.add(other_user)
    db_session.flush()
    other_profile = Profile(name="Other User 2", profile_img="", user_id=other_user.id)
    db_session.add(other_profile)
    db_session.flush()

    other_url = _create_url(
        db_session,
        profile_id=other_profile.id,
        mapped_url_id="other-analytics-url",
        original_url="https://example.com/other-analytics",
    )
    db_session.add(Analytics(query_ip="5.6.7.8", user_agent=IPHONE_UA, url_id=other_url.id))
    db_session.commit()

    resp = client.get("/api/v1/data/analytics", params={"url_id": str(other_url.id)}, headers=auth_headers)
    assert resp.status_code == 200
    assert resp.json() == {
        "count": 0,
        "unique_user_count": 0,
        "user_agent_analytics": [],
    }
