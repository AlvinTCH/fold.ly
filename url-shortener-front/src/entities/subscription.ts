interface SubscribeRequest {
  subscription_id: number;
  limit: number;
  price: number;
}

interface SubscriptionResponse {
  subscription_id: number;
  name: string;
  description: string;
  limit: number;
  price: number;
  subscribed: boolean;
}

export type { SubscribeRequest, SubscriptionResponse };
