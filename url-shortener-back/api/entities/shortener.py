from pydantic import BaseModel

# Define the expected JSON structure
class UrlShortenerRequest(BaseModel):
    original_url: str


class ShortenUrlResponse(BaseModel):
    id: int
    url: str