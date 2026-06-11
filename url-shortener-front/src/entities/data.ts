type UaCategory = "browser" | "os" | "device";

interface UrlResponse {
  id: number;
  mapped_url_id: string;
  original_url: string;
}

interface UserAgentAnalytics {
  browser: string;
  os: string;
  device: string;
  brand?: string;
  model?: string;
}

interface AnalyticsResponse {
  count: number;
  unique_user_count: number;
  user_agent_analytics: UserAgentAnalytics[];
}

type CountsPerCategory = Record<UaCategory, Record<string, number>>;

interface ParsedAnalytics {
  count: number;
  unique_user_count: number;
  counts_per_category: CountsPerCategory;
}

export type {
  UaCategory,
  UrlResponse,
  AnalyticsResponse,
  CountsPerCategory,
  UserAgentAnalytics,
  ParsedAnalytics,
};
