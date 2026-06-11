"use client";

import { useState } from "react";
import { PieChart } from "@mantine/charts";
import {
  Card,
  Center,
  Loader,
  SimpleGrid,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { useData } from "@/src/hooks/use-data";

import type { CountsPerCategory } from "@/src/entities";

import classes from "./AnalyticsPanel.module.css";

interface AnalyticsPanelProps {
  selectedUrlId: number | null;
}

type Category = "browser" | "os" | "device";

const SEGMENT_COLORS = [
  "yellow.5",
  "yellow.7",
  "gray.4",
  "gray.6",
  "dark.2",
  "dark.4",
];

function buildSegments(
  analytics: CountsPerCategory | null,
  category: Category,
): { name: string; value: number; color: string }[] {
  if (!analytics) return [];
  if (!analytics[category]) return [];

  const categoryDataToList = [];
  for (const [key, value] of Object.entries(analytics[category])) {
    categoryDataToList.push({ name: key, value: value });
  }

  return categoryDataToList
    .sort((a, b) => b["value"] - a["value"])
    .map(({ name, value }, index) => ({
      name,
      value,
      color: SEGMENT_COLORS[index % SEGMENT_COLORS.length],
    }));
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={64}
      height={64}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label="Share your link"
    >
      <circle
        cx="18"
        cy="5"
        r="2.5"
        stroke="var(--mantine-color-yellow-5)"
        strokeWidth="1.5"
      />
      <circle
        cx="6"
        cy="12"
        r="2.5"
        stroke="var(--mantine-color-gray-4)"
        strokeWidth="1.5"
      />
      <circle
        cx="18"
        cy="19"
        r="2.5"
        stroke="var(--mantine-color-yellow-5)"
        strokeWidth="1.5"
      />
      <path
        d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4"
        stroke="var(--mantine-color-gray-5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CategoryPanel({
  analytics,
  category,
}: {
  analytics: CountsPerCategory | null;
  category: Category;
}) {
  const segments = buildSegments(analytics, category);

  if (segments.length === 0) {
    return (
      <div className={classes.empty}>
        <ShareIcon className={classes.emptyGraphic} />
        <Text c="dimmed" size="sm">
          No analytics data yet. Share your link to start collecting clicks.
        </Text>
      </div>
    );
  }

  return (
    <div className={classes.chart}>
      <PieChart
        data={segments}
        withLabels
        withTooltip
        labelsType="percent"
        size={220}
      />
    </div>
  );
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "browser", label: "Browser" },
  { value: "os", label: "OS" },
  { value: "device", label: "Device" },
];

export function AnalyticsPanel({ selectedUrlId }: AnalyticsPanelProps) {
  const [category, setCategory] = useState<Category>("browser");

  const { getAnalytics } = useData();

  const { data: analytics, error, isLoading } = getAnalytics(selectedUrlId);

  if (isLoading) {
    return (
      <Card withBorder radius="md" padding="lg">
        <Center className={classes.loading}>
          <Loader color="yellow.5" />
        </Center>
      </Card>
    );
  }

  if (error) {
    return (
      <Card withBorder radius="md" padding="lg">
        <Text c="red" size="sm">
          Failed to load analytics. Please try again later.
        </Text>
      </Card>
    );
  }

  return (
    <Card withBorder radius="md" padding="lg">
      <SimpleGrid cols={2} mb="lg">
        <div>
          <Text c="dimmed" size="sm">
            Total clicks
          </Text>
          <Title order={2}>{analytics?.count || 0}</Title>
        </div>
        <div>
          <Text c="dimmed" size="sm">
            Unique users
          </Text>
          <Title order={2}>{analytics?.unique_user_count || 0}</Title>
        </div>
      </SimpleGrid>

      <Tabs
        value={category}
        onChange={(value) => setCategory((value as Category) ?? "browser")}
      >
        <Tabs.List mb="lg">
          {CATEGORIES.map(({ value, label }) => (
            <Tabs.Tab key={value} value={value}>
              {label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {CATEGORIES.map(({ value }) => (
          <Tabs.Panel key={value} value={value}>
            <CategoryPanel
              analytics={analytics?.counts_per_category || null}
              category={value}
            />
          </Tabs.Panel>
        ))}
      </Tabs>
    </Card>
  );
}
