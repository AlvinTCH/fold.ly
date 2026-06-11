"use client";

import { useEffect, useState } from "react";
import {
  IconAlertTriangle,
  IconCheck,
  IconLink,
  IconSparkles,
  IconHeadset,
  IconCubeUnfolded,
} from "@tabler/icons-react";
import {
  Badge,
  Button,
  Group,
  Loader,
  Modal,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./SubscriptionModal.module.css";
import { useSubscription } from "@/src/hooks/use-subscription";

interface SubscriptionModalProps {
  opened: boolean;
  limitReached: boolean;
  onClose: () => void;
}

export function SubscriptionModal({
  opened,
  limitReached,
  onClose,
}: SubscriptionModalProps) {
  const [errorMsg, setErrorMsg] = useState("");

  const { getSubscriptions, subscribe } = useSubscription();

  const { data: plans, error, isLoading, mutate } = getSubscriptions();

  const { trigger, isMutating } = subscribe({
    successCallback: () => {
      mutate();
      onClose();
    },
    errorCallback: (error: Error) => {
      setErrorMsg(error.message);
    },
  });

  useEffect(() => {
    if (opened) mutate();
  }, [opened]);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      title={null}
      size="1200px"
    >
      <Stack gap="lg">
        {limitReached ? (
          <div>
            <Group gap="xs" justify="center" mb="sm">
              <ThemeIcon color="yellow" size={40} radius="xl">
                <IconAlertTriangle size={22} />
              </ThemeIcon>
            </Group>
            <Title order={3} ta="center">
              You&apos;ve reached your limit
            </Title>
            <Text c="dimmed" ta="center" size="sm" mt={4}>
              Upgrade your plan to create more links and unlock higher quotas.
            </Text>
          </div>
        ) : (
          <div>
            <Group gap="xs" justify="center" mb="sm">
              <ThemeIcon color="yellow" size={40} radius="xl">
                <IconCubeUnfolded size={22} />
              </ThemeIcon>
            </Group>
            <Title order={3} ta="center">
              Ready to fold more URLs?
            </Title>
            <Text c="dimmed" ta="center" size="sm" mt={4}>
              Choose from a multitude of plans that suits your needs
            </Text>
          </div>
        )}

        {isLoading && (
          <Group justify="center" py="lg">
            <Loader color="yellow" />
          </Group>
        )}

        {!isLoading && (errorMsg || error) && (
          <Stack align="center" gap="xs" py="lg">
            <Text c="red" size="sm" ta="center">
              {errorMsg || error.message}
            </Text>
            <Button variant="light" color="yellow" onClick={() => mutate()}>
              Retry
            </Button>
          </Stack>
        )}

        {!isLoading && !error && !errorMsg && (
          <SimpleGrid
            cols={{ base: 1, lg: (plans || []).length || 1 }}
            spacing="md"
          >
            {(plans || []).map((plan) => (
              <Stack
                key={plan.subscription_id}
                justify="space-between"
                gap="sm"
                className={`${classes.planCard} ${plan.subscribed ? classes.planCardCurrent : ""}`}
              >
                <div>
                  <Group gap="xs" wrap="nowrap">
                    <Text className={classes.planName} size="lg">
                      {plan.name}
                    </Text>
                    {plan.subscribed && (
                      <Badge
                        color="yellow"
                        variant="light"
                        leftSection={<IconCheck size={12} />}
                      >
                        Current plan
                      </Badge>
                    )}
                  </Group>
                  <Text c="dimmed" size="sm" mt={4}>
                    {plan.description}
                  </Text>

                  {plan.name === "enterprise" ? (
                    <>
                      <Group gap={4} align="baseline" mt="md">
                        <Title order={2} className={classes.priceValue}>
                          Speak to our sales team
                        </Title>
                      </Group>

                      <Group gap="xs" mt="sm">
                        <ThemeIcon
                          color="yellow"
                          size={20}
                          radius="xl"
                          variant="light"
                        >
                          <IconHeadset size={12} />
                        </ThemeIcon>
                        <Text size="sm">Customized solutions</Text>
                      </Group>
                    </>
                  ) : (
                    <>
                      <Group gap={4} align="baseline" mt="md">
                        <Title order={2} className={classes.priceValue}>
                          ${plan.price}
                        </Title>
                        <Text c="dimmed" size="xs">
                          /mo
                        </Text>
                      </Group>

                      <Group gap="xs" mt="sm">
                        <ThemeIcon
                          color="yellow"
                          size={20}
                          radius="xl"
                          variant="light"
                        >
                          <IconLink size={12} />
                        </ThemeIcon>
                        <Text size="sm">
                          Up to {plan.limit} links per month
                        </Text>
                      </Group>
                    </>
                  )}
                </div>

                <Button
                  fullWidth
                  variant={plan.subscribed ? "default" : "filled"}
                  color="yellow"
                  disabled={plan.subscribed}
                  loading={isLoading || isMutating}
                  leftSection={!plan.subscribed && <IconSparkles size={16} />}
                  onClick={() => trigger(plan)}
                >
                  {plan.subscribed ? "Subscribed" : `Upgrade to ${plan.name}`}
                </Button>
              </Stack>
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Modal>
  );
}
