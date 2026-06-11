import {
  ApiErrorResponse,
  UrlShortenerRequest,
  ShortenUrlResponse,
} from "@/src/entities";

export default class ShortenUrlClient {
  async shortenUrl(
    shortenUrlRequest: UrlShortenerRequest,
  ): Promise<ShortenUrlResponse> {
    const response = await fetch("/api/shorten-url", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        original_url: shortenUrlRequest.original_url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data) {
        const errorResponse = data as ApiErrorResponse;
        throw new Error(errorResponse.detail);
      }
      throw new Error(
        `Shorten URL failed with HTTP status: ${response.status}`,
      );
    }

    return data as ShortenUrlResponse;
  }
}
