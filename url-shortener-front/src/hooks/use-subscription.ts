import SubscriptionClient from "@/src/clients/subscription";

import { useUserStore } from "@/src/store/user-store";
import { isUserExpired } from "@/src/hooks/utils/user";

import type { SubscriptionResponse } from "@/src/entities";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const useSubscription = () => {
  const subscriptionClient = new SubscriptionClient();

  const { isHydrated, loggedInExpiry, clearData } = useUserStore();

  function getSubscriptions() {
    const { data, error, isLoading, mutate } = useSWR(
      !isHydrated ? null : "subscriptions",
      () => {
        if (isUserExpired(loggedInExpiry)) {
          clearData();
          throw new Error("User not authenticated");
        }

        return subscriptionClient.getSubscriptions();
      },
    );

    return { data, error, isLoading, mutate };
  }

  function subscribe({
    successCallback,
    errorCallback,
  }: {
    successCallback: (success: boolean) => void;
    errorCallback: (error: Error) => void;
  }) {
    const { trigger, isMutating } = useSWRMutation(
      !isHydrated ? null : "subscribe",
      async (key, { arg }: { arg: SubscriptionResponse }) => {
        if (isUserExpired(loggedInExpiry)) {
          clearData();
          throw new Error("User not authenticated");
        }
        return await subscriptionClient.subscribe(arg);
      },
      {
        onSuccess: successCallback,
        onError: errorCallback,
      },
    );

    return { trigger, isMutating };
  }

  return {
    getSubscriptions,
    subscribe,
  };
};
