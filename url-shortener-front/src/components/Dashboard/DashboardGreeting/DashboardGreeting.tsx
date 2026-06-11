import { Badge, Group, Progress, Stack, Text, Title } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import type { SubscriptionResponse } from "@/src/entities";

import classes from "./DashboardGreeting.module.css";

interface DashboardGreetingProps {
  name: string;
  subscription: SubscriptionResponse | null;
  urlCount: number;
  onPlanClick?: () => void;
}

function getTimeOfDayGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardGreeting({
  name,
  subscription,
  urlCount,
  onPlanClick,
}: DashboardGreetingProps) {
  const limit = subscription?.limit ?? 0;
  const hasLimit = limit > 0;
  const ratio = hasLimit ? urlCount / limit : 0;

  const isAtLimit = hasLimit && urlCount >= limit;
  const isApproaching = hasLimit && !isAtLimit && ratio >= 0.8;

  const progressColor = isAtLimit ? "red" : isApproaching ? "orange" : "teal";

  return (
    <div className={classes.wrapper}>
      <div>
        <Title order={2} fw={400} mb={4}>
          {getTimeOfDayGreeting()},{" "}
          <Text component="span" inherit fw={700} className={classes.greeting}>
            {name}
          </Text>
        </Title>
        {subscription && (
          <Badge
            color="yellow"
            variant="light"
            radius="sm"
            className={classes.planBadge}
            onClick={onPlanClick}
            style={{ cursor: onPlanClick ? "pointer" : undefined }}
          >
            {subscription.name} plan
          </Badge>
        )}
      </div>

      {hasLimit && (
        <Stack gap={4} className={classes.usage}>
          <Group justify="space-between" gap="xs" wrap="nowrap">
            {isAtLimit || isApproaching ? (
              <Group
                gap={4}
                wrap="nowrap"
                c={isAtLimit ? "red" : "orange"}
                className={classes.usageLabel}
              >
                <IconAlertTriangle size={14} />
                <Text size="sm" fw={500} c="inherit">
                  {isAtLimit ? "Link limit reached" : "Approaching link limit"}
                </Text>
              </Group>
            ) : (
              <Text size="sm" c="dimmed">
                Links used
              </Text>
            )}
            <Text size="sm" fw={600} className={classes.usageCount}>
              {urlCount} / {limit}
            </Text>
          </Group>
          <Progress
            value={Math.min(ratio * 100, 100)}
            color={progressColor}
            size="sm"
            radius="xl"
          />
        </Stack>
      )}
    </div>
  );
}
