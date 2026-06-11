"use client";

import { useState } from "react";
import { Button, Card, Stack, TextInput, Title } from "@mantine/core";
import { useShortener } from "@/src/hooks/use-shortener";

interface ShortenCardProps {
  onShortened: () => void;
}

export function ShortenCard({ onShortened }: ShortenCardProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { shortenUrl } = useShortener();

  const { trigger, isMutating } = shortenUrl({
    successCallback: () => {
      setUrl("");
      onShortened();
    },
    errorCallback: (error: Error) => {
      setError(error.message);
    },
  });

  return (
    <Card withBorder radius="md" padding="lg">
      <Title order={3} mb="md">
        Shorten a new link
      </Title>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!url) return;
          trigger({ original_url: url });
        }}
      >
        <Stack gap="sm">
          <TextInput
            placeholder="Paste a long URL to shorten"
            aria-label="URL to shorten"
            value={url}
            error={error}
            onChange={(event) => setUrl(event.currentTarget.value)}
          />
          <Button type="submit" fullWidth loading={isMutating}>
            Shorten
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
