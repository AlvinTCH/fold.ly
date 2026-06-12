"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck, IconCopy } from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  CopyButton,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthModal } from "@/src/components/AuthModal/AuthModal";
import { useShortener } from "@/src/hooks/use-shortener";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/src/store/user-store";

import classes from "./ShortenForm.module.css";

export function ShortenForm() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [authModalOpened, { open: openAuthModal, close: closeAuthModal }] =
    useDisclosure(false);

  const { profile } = useUserStore()

  const { shortenUrl } = useShortener();

  const { trigger, isMutating } = shortenUrl({
    successCallback: (response) => {
      setUrl("");
      setShortUrl(response.url);
    },
    errorCallback: (error: Error) => {
      setError(error.message);
    },
  });

  const performShorten = async () => {
    trigger({ original_url: url });
  };

  const handleSubmit = () => {
    if (!url) return;
    profile
      ? handleAuthenticated()
      : openAuthModal()
  }
    

  const handleAuthenticated = () => {
    closeAuthModal();
    if (url) performShorten();
    router.push("/dashboard");
  };

  const handleContinueAsGuest = () => {
    closeAuthModal();
    if (url) performShorten();
  };

  return (
    <>
      <AuthModal
        opened={authModalOpened}
        onAuthenticated={handleAuthenticated}
        onClose={closeAuthModal}
        onContinueAsGuest={handleContinueAsGuest}
      />
      <form
        className={classes.wrapper}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          className={classes.input}
          size="lg"
          placeholder="Paste a long URL to shorten"
          aria-label="URL to shorten"
          value={url}
          error={error}
          onChange={(event) => setUrl(event.currentTarget.value)}
        />
        <Button
          className={classes.button}
          size="lg"
          type="submit"
          loading={isMutating}
          rightSection={<IconArrowRight size={18} />}
        >
          Shorten
        </Button>
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
    </>
  );
}
