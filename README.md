# Url Shortener

## Description

`fold.ly` is a full-stack URL shortener. Users can register and log in, generate shortened
links, view click analytics, and jump straight to a link's redirect target. The project consists
of two services:

- **`url-shortener-back`** — a FastAPI + SQLAlchemy backend, backed by Postgres, with JWT-based
  auth and JWE-encrypted passwords in transit
- **`url-shortener-front`** — a Next.js + Mantine frontend, running on Bun

## Setup

### Backend
1. Configure your `.env` file (see `url-shortener-back/.env.example` for the required variables)

| Variable | Description |
| --- | --- |
| `JWT_SECRET` | Secret key used to sign and verify JWTs |
| `JWT_ALG` | Algorithm used to sign JWTs (e.g. `HS256`) |
| `FRONTEND_URL` | URL of the frontend, used for redirect on 404 |
| `CORS_ORIGINS` |Used for CORS |
| `DATABASE_URL` | Postgres connection string |
| `SEED` | Set to `True` to seed the database with sample data on startup |

2. Generate a value for `JWT_SECRET`

Python:
```python
from secrets import token_urlsafe
secret_code = token_urlsafe(128)
```

Bash:
```
uuidgen
```

#### Local development
1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/)
2. Run `uv sync`
3. Run `uv run main.py` 

### Frontend
1. Configure your `.env` file (see `url-shortener-front/.env.example` for the required variables)

| Variable | Description |
| --- | --- |
| `BACKEND_URL` | URL of the FastAPI backend, used server-side by the BFF API routes |
| `NEXT_PUBLIC_BACKEND_URL` | URL of the FastAPI backend, exposed to the browser |

#### Local development
1. Install [bun](https://bun.com/docs/installation)
2. Install dependencies with `bun install`
3. Run `bun run dev`

### Storybook
1. Navigate to the frontend folder
2. Run `bun run storybook`

### Running everything
1. Install Docker and Docker Compose
2. From the repo root, run `docker compose up --build`
   - This spins up Postgres, the FastAPI backend (migrations applied automatically), and the Next.js frontend

Alternatively, if you're on a Mac, run `./run_ios.sh` from the repo root — it opens two terminal
tabs, one running the backend via `docker compose up` and the other running the frontend via
`bun run dev`. This is easier debugging in local development

## Testing
- **Backend:** `pytest` (run from `url-shortener-back`)

## Deployment

The frontend builds with `output: 'standalone'` and ships via a multi-stage Dockerfile that
produces a lean production image, started with `bun server.js`. The root `docker-compose.yml`
builds and runs the database, backend, and frontend together.

The database connection string can easily be swapped to point at the deployed database.

As this is a read-heavy service, it would benefit from a cache layer such as Redis for the
`mapped_url_id -> original_url` lookup. Writing analytics could also be moved to a
`BackgroundTasks` task so it no longer blocks the redirect response.

## User Paths
1. Users can shorten one URL without logging in. Anonymous users are tracked by IP address
2. When a user shortens a URL, a modal pops up inviting them to sign up for an account
3. Users can sign in by clicking the "Sign in" button in the top-left corner
4. If a user is logged in when they shorten a URL, the URL is automatically tagged to their account
5. After logging in, the user is taken to the dashboard page
6. The dashboard page greets the user
7. Users can click on a shortened URL to view its analytics, which currently track the user agents and IP addresses of visitors who follow the shortened link
8. Users can click the "Open link" action on a selected URL to visit its redirect target directly
9. Users can click the "Copy" action on a selected URL to copy the URL for sharing
10. Users can shorten additional URLs
11. Once a user reaches their subscription's URL limit, a modal listing the available subscription tiers appears
12. Users can subscribe to different tiers, which currently grant different limits on the number of URLs they can shorten
13. Users can open the subscription modal by clicking the badge that shows their current subscription
14. Users are returned to the home page upon logging out, which also revokes their session server-side

## Other features
1. End to end password encryption with JWK, with the public key served via a JWKS endpoint (`/.well-known/signing-keys.json`)
2. The Next.js frontend acts as a Backend-for-Frontend (BFF), proxying requests to the FastAPI backend through its own API routes

## Possible features to implement
1. Password length validation
2. QR code for the shortened URL
3. Payment service for subscription
4. User redirected to our page before redirecting them to the final URL for free tier users
5. Brand images for QR code
6. Admin panel
7. Basic profile settings
8. Custom alias / vanity URLs
9. Link expiration (TTL or max-click count)
10. Forgot/reset password flow
11. Geolocation in analytics (country/city, in addition to IP and user agent)
12. CSV export of analytics
13. API keys for programmatic shortening
14. Password-protected links
15. Bulk URL shortening