def test_healthcheck_returns_healthy(client):
    resp = client.get("/healthcheck")
    assert resp.status_code == 200
    body = resp.json()
    assert body["status"] == "healthy"
    assert "database" in body
