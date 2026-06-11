import { useEffect } from "react";
import { useUserStore } from "@/src/store/user-store";
import type {
  AnalyticsResponse,
  SubscriptionResponse,
  UrlResponse,
} from "@/src/entities";
import { Dashboard } from "./Dashboard";

export default {
  title: "Dashboard",
};

const mockProfile = {
  name: "Alvin",
  profile_pic: "",
};

const mockUrls: UrlResponse[] = [
  {
    id: 1,
    mapped_url_id: "a1b2c3",
    original_url: "https://www.example.com/products/long-page-name",
  },
  {
    id: 2,
    mapped_url_id: "x9y8z7",
    original_url: "https://www.another-example.com/blog/2026/06/article",
  },
  {
    id: 3,
    mapped_url_id: "qwe123",
    original_url: "https://docs.example.com/guides/getting-started",
  },
  {
    id: 4,
    mapped_url_id: "lmn456",
    original_url: "https://www.yet-another.com/page",
  },
  {
    id: 5,
    mapped_url_id: "opq789",
    original_url: "https://www.example.org/article",
  },
  {
    id: 6,
    mapped_url_id: "rst000",
    original_url: "https://www.sample.com/post",
  },
  {
    id: 7,
    mapped_url_id: "uvw111",
    original_url: "https://www.demo.com/landing",
  },
  { id: 8, mapped_url_id: "xyz222", original_url: "https://www.test.com/home" },
];

const mockSubscriptions: SubscriptionResponse[] = [
  {
    subscription_id: 1,
    name: "Free",
    description: "Get started with basic link shortening",
    limit: 10,
    price: 0,
    subscribed: false,
  },
  {
    subscription_id: 2,
    name: "Pro",
    description: "For power users and teams",
    limit: 10,
    price: 9,
    subscribed: true,
  },
];

const mockAnalytics: AnalyticsResponse = {
  count: 128,
  unique_user_count: 64,
  user_agent_analytics: [
    { browser: "Chrome", os: "Windows", device: "Desktop" },
    { browser: "Safari", os: "iOS", device: "Mobile" },
  ],
};

function jsonResponse(data: unknown, status = 200) {
  return Promise.resolve(
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    }),
  );
}

function mockFetch(input: RequestInfo | URL) {
  const url = input.toString();

  if (url.startsWith("/urls")) return jsonResponse(mockUrls);
  if (url.startsWith("/subscriptions")) return jsonResponse(mockSubscriptions);
  if (url.startsWith("/analytics")) return jsonResponse(mockAnalytics);

  return jsonResponse({ message: "Not found" }, 404);
}

function useMockSession() {
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = mockFetch as typeof fetch;

    useUserStore.setState({
      profile: mockProfile,
      loggedInExpiry: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    });

    return () => {
      window.fetch = originalFetch;
      useUserStore.setState({ profile: null, loggedInExpiry: null });
    };
  }, []);
}

export const Usage = () => <Dashboard />;

export const LoggedIn = () => {
  useMockSession();

  return <Dashboard />;
};
