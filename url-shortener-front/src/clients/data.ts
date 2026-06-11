import type {
  ApiErrorResponse,
  UrlResponse,
  AnalyticsResponse,
} from "@/src/entities";

export default class DataClient {
  async getUrlList(): Promise<UrlResponse[]> {
    const response = await fetch(`/api/urls`, {
      method: "GET",
      credentials: "include",
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
        `Failed to fetch URL list with HTTP status: ${response.status}`,
      );
    }

    return data as UrlResponse[];
  }

  async getAnalytics(url_id: number): Promise<AnalyticsResponse> {
    const response = await fetch(`/api/analytics?url_id=${url_id}`, {
      method: "GET",
      credentials: "include",
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
        `Get analytics failed with HTTP status: ${response.status}`,
      );
    }

    return data as AnalyticsResponse;
  }
}
