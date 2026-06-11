import {
  ApiErrorResponse,
  SubscribeRequest,
  SubscriptionResponse,
} from "@/src/entities";

export default class SubscriptionClient {
  async getSubscriptions(): Promise<SubscriptionResponse[]> {
    const response = await fetch(`/api/subscriptions`, {
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
      throw new Error(`Get subscriptions failed with code: ${response.status}`);
    }

    return data as SubscriptionResponse[];
  }

  async subscribe(subscribeRequest: SubscribeRequest): Promise<boolean> {
    const response = await fetch(`/api/subscribe`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        subscription_id: subscribeRequest.subscription_id,
        limit: subscribeRequest.limit,
        price: subscribeRequest.price,
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
      throw new Error(`Subscribe failed with code: ${response.status}`);
    }

    return response.ok;
  }
}
