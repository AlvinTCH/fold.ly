interface UrlShortenerRequest {
  original_url: string;
}

interface ShortenUrlResponse {
  id: number;
  url: string;
}

export type { UrlShortenerRequest, ShortenUrlResponse };
