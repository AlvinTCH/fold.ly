"use client";

import { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mantine/core";
import { AnalyticsPanel } from "./AnalyticsPanel/AnalyticsPanel";
import { DashboardGreeting } from "./DashboardGreeting/DashboardGreeting";
import { ShortenCard } from "./ShortenCard/ShortenCard";
import { UrlList } from "./UrlList/UrlList";
import { SubscriptionModal } from "../Subscription/SubscriptionModal";
import { useData } from "@/src/hooks/use-data";
import { useUserStore } from "@/src/store/user-store";
import { useSubscription } from "@/src/hooks/use-subscription";
import { useRouter } from "next/navigation";

import type { SubscriptionResponse } from "@/src/entities";

export function Dashboard() {
  const [selectedUrlId, setSelectedUrlId] = useState<number | null>(null);
  const [currentSubscription, setCurrentSubscription] =
    useState<SubscriptionResponse | null>(null);
  const [subscriptionModalOpened, setSubscriptionModalOpened] = useState(false);
  const [subscriptionLimitReached, setSubscriptionLimitReached] =
    useState(false);

  const { isHydrated, profile } = useUserStore();

  const router = useRouter();

  const { getUrlList } = useData();

  const { getSubscriptions } = useSubscription();

  const { data: urls, error: urlsError, isLoading, mutate } = getUrlList();
  const { data: subscriptions, error: subscriptionError } = getSubscriptions();

  useEffect(() => {
    if (!subscriptions) return;
    for (let i = 0; i < subscriptions.length; i++) {
      const subscription = subscriptions[i];
      if (!subscription.subscribed) continue;
      setCurrentSubscription(subscription);
      return;
    }
  }, [subscriptions]);

  useEffect(() => {
    if (!urls) return;
    if (urls.length === 0) return;
    setSelectedUrlId((current) => current ?? urls?.[0]?.id ?? null);
    if (!currentSubscription) return;
    if (urls.length < currentSubscription.limit) return;
    setSubscriptionLimitReached(true);
    setSubscriptionModalOpened(true);
  }, [urls]);

  useEffect(() => {
    if (!isHydrated) return;
    if (!profile) router.replace("/");
  }, [isHydrated, profile]);

  return (
    <Container size="xl" py="xl">
      {profile && (
        <DashboardGreeting
          name={profile.name}
          subscription={currentSubscription}
          urlCount={urls?.length ?? 0}
          onPlanClick={() => setSubscriptionModalOpened(true)}
        />
      )}
      <SubscriptionModal
        opened={subscriptionModalOpened}
        limitReached={subscriptionLimitReached}
        onClose={() => {
          setSubscriptionLimitReached(false);
          setSubscriptionModalOpened(false);
        }}
      />
      <Grid gap="lg">
        <Grid.Col span={{ base: 12, lg: 7 }}>
          <Stack gap="lg">
            <ShortenCard onShortened={() => mutate()} />
            <UrlList
              urls={urls ?? []}
              isLoading={isLoading}
              selectedUrlId={selectedUrlId}
              onSelect={setSelectedUrlId}
              errorMsg={urlsError?.message}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <AnalyticsPanel selectedUrlId={selectedUrlId} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
