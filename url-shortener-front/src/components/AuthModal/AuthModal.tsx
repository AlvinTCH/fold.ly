"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconChartBar, IconLink } from "@tabler/icons-react";
import {
  Anchor,
  Button,
  Group,
  List,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./AuthModal.module.css";
import { useUser } from "@/src/hooks/use-user";

interface AuthModalProps {
  opened: boolean;
  onAuthenticated: () => void;
  onClose: () => void;
  onContinueAsGuest?: () => void;
  initialMode?: "signup" | "login";
}

export function AuthModal({
  opened,
  onAuthenticated,
  onClose,
  onContinueAsGuest,
  initialMode = "signup",
}: AuthModalProps) {
  const [mode, setMode] = useState<"signup" | "login">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMode(initialMode);
  }, []);

  const { login, registerUser } = useUser();

  const { trigger: handleRegister, isMutating: registering } = registerUser({
    successCallback: () => {
      onAuthenticated();
    },
    errorCallback: (error) => {
      setError(error.message);
    },
  });
  const { trigger: handleLogin, isMutating: loggingIn } = login({
    successCallback: () => {
      onAuthenticated();
    },
    errorCallback: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async () => {
    if (!email || !password) return;
    mode === "signup"
      ? handleRegister({ username: email, password, name: name })
      : handleLogin({ username: email, password });
  };

  return (
    <Modal opened={opened} onClose={onClose} centered>
      <Stack gap="lg">
        <div>
          <Group gap="xs" justify="center" mb="sm">
            <Image src="/icon.png" alt="fold.ly" width={64} height={64} />
            <Text className={classes.logo} size="lg">
              fold
              <Text inherit component="span" c="yellow.5">
                .ly
              </Text>
            </Text>
          </Group>
          <Title order={3} ta="center">
            {mode === "signup" ? "Create your free account" : "Welcome back"}
          </Title>
        </div>

        {mode === "signup" && (
          <div className={classes.valueProp}>
            <List spacing="xs" size="sm" center>
              <List.Item
                icon={
                  <ThemeIcon color="yellow" size={20} radius="xl">
                    <IconLink size={12} />
                  </ThemeIcon>
                }
              >
                5 shortened links on the house
              </List.Item>
              <List.Item
                icon={
                  <ThemeIcon color="yellow" size={20} radius="xl">
                    <IconChartBar size={12} />
                  </ThemeIcon>
                }
              >
                Full click analytics for every link
              </List.Item>
            </List>
            <Text size="xs" c="dimmed" mt="xs">
              Without an account, you can shorten 1 link.
            </Text>
          </div>
        )}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <Stack gap="sm">
            {mode === "signup" ? (
              <TextInput
                label="Name"
                placeholder="John Doe"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
              />
            ) : (
              <></>
            )}
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
            />

            {error && (
              <Text c="red" size="sm" ta="center">
                {error}
              </Text>
            )}

            <Button
              type="submit"
              fullWidth
              loading={loggingIn || registering}
              mt="xs"
            >
              {mode === "signup" ? "Create free account" : "Log in"}
            </Button>
          </Stack>
        </form>

        <Text size="sm" ta="center">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <Anchor
                component="button"
                type="button"
                onClick={() => setMode("login")}
              >
                Log in
              </Anchor>
            </>
          ) : (
            <>
              New here?{" "}
              <Anchor
                component="button"
                type="button"
                onClick={() => setMode("signup")}
              >
                Create a free account
              </Anchor>
            </>
          )}
        </Text>

        {onContinueAsGuest && (
          <Anchor
            component="button"
            type="button"
            size="sm"
            c="dimmed"
            ta="center"
            onClick={onContinueAsGuest}
          >
            Continue with 1 free link
          </Anchor>
        )}
      </Stack>
    </Modal>
  );
}
