FROM python:3.14-slim

# 1. Copy the uv binary from the official image
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Enable bytecode compilation for faster container starts
ENV UV_COMPILE_BYTECODE=1

# 4. Copy ONLY the dependency files first to leverage Docker's layer caching
COPY pyproject.toml uv.lock ./

# 5. Run uv sync to install dependencies.
# --frozen tells uv not to update the lockfile, ensuring reproducible builds.
# --no-install-project skips installing the app itself if it's a package, 
# keeping the layer cached even when source code changes.
RUN uv sync --frozen --no-cache --no-install-project

# 6. Copy the rest of your application code
COPY . .

# 7. Complete the sync so your project code is fully recognized (if applicable)
RUN uv sync --frozen --no-cache