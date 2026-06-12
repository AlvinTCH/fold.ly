"use client";

import { useState } from "react";
import { ActionIcon, Button, Card, CopyButton, Stack, TextInput, Title, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useShortener } from "@/src/hooks/use-shortener";

import classes from "./ShortenCard.module.css";

interface ShortenCardProps {
  onShortened: () => void;
}

export function ShortenCard({ onShortened }: ShortenCardProps) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { shortenUrl } = useShortener();

  const { trigger, isMutating } = shortenUrl({
    successCallback: (response) => {
      setUrl("");
      setShortUrl(response.url);
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
      
      {shortUrl && (
        <div className={classes.result}>
          <a
            href={shortUrl}
            target="_blank"
            rel="noreferrer"
            className={classes.resultLink}
          >
            {shortUrl}
          </a>
          <CopyButton value={shortUrl}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? "Copied" : "Copy"} withArrow>
                <ActionIcon
                  variant="subtle"
                  color={copied ? "yellow" : "gray"}
                  onClick={copy}
                >
                  {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      )}
    </Card>
  );
}
