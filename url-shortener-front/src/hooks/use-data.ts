import DataClient from "@/src/clients/data";

import { useUserStore } from "@/src/store/user-store";
import { isUserExpired } from "@/src/hooks/utils/user";

import type {
  UserAgentAnalytics,
  CountsPerCategory,
  ParsedAnalytics,
} from "@/src/entities";
import useSWR from "swr";

export const useData = () => {
  const dataClient = new DataClient();
  const { isHydrated, loggedInExpiry, clearData } = useUserStore();

  function getUrlList() {
    const { data, error, isLoading, mutate } = useSWR(
      !isHydrated ? null : "url_list",
      () => {
        if (isUserExpired(loggedInExpiry)) {
          clearData();
          throw new Error("User not authenticated");
        }

        return dataClient.getUrlList();
      },
    );

    return { data, error, isLoading, mutate };
  }

  function __transformAnalytics(
    user_agent_analytics: UserAgentAnalytics[],
  ): CountsPerCategory {
    const counts_per_category: CountsPerCategory = {
      browser: {},
      os: {},
      device: {},
    };

    user_agent_analytics.forEach((entry) => {
      counts_per_category.browser = {
        ...counts_per_category.browser,
        [entry.browser]: (counts_per_category.browser[entry.browser] || 0) + 1,
      };
      counts_per_category.browser = {
        ...counts_per_category.os,
        [entry.os]: (counts_per_category.os[entry.os] || 0) + 1,
      };
      counts_per_category.device = {
        ...counts_per_category.device,
        [entry.device]: (counts_per_category.device[entry.device] || 0) + 1,
      };
    });

    return counts_per_category;
  }

  function getAnalytics(url_id: number | null) {
    const { data, error, isLoading, mutate } = useSWR(
      url_id && isHydrated ? `analytics/${url_id}` : null,
      async () => {
        if (isUserExpired(loggedInExpiry)) {
          clearData();
          throw new Error("User not authenticated");
        }

        const data = await dataClient.getAnalytics(url_id as number);
        if (!data) return;
        const { count, unique_user_count, user_agent_analytics } = data;
        return {
          count,
          unique_user_count,
          counts_per_category: __transformAnalytics(user_agent_analytics),
        };
      },
    );

    return { data, error, isLoading };
  }

  return {
    getUrlList,
    getAnalytics,
  };
};
