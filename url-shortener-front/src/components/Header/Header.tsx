"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Group, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthModal } from "@/src/components/AuthModal/AuthModal";
import { UserDisplay } from "@/src/components/Header/UserDisplay/UserDisplay";
import classes from "./Header.module.css";
import { useUserStore } from "@/src/store/user-store";
import { useRouter } from "next/navigation";

export function Header() {
  const { profile } = useUserStore();
  const router = useRouter();
  const [authModalOpened, { open: openAuthModal, close: closeAuthModal }] =
    useDisclosure(false);

  function handleAuthenticated() {
    closeAuthModal();
    router.push("/dashboard");
  }

  return (
    <header className={classes.header}>
      <Group justify="space-between" className={classes.headergrp}>
        <UnstyledButton component={Link} href="/" className={classes.brand}>
          <Group gap="xs">
            <Image src="/icon.png" alt="fold.ly" width={28} height={28} />
            <Text className={classes.logo} size="lg">
              fold
              <Text inherit component="span" c="yellow.5">
                .ly
              </Text>
            </Text>
          </Group>
        </UnstyledButton>
        {profile ? (
          <UserDisplay profile_pic={profile.profile_pic} name={profile.name} />
        ) : (
          <Button size="sm" onClick={openAuthModal}>
            Sign in
          </Button>
        )}
      </Group>

      <AuthModal
        opened={authModalOpened}
        onAuthenticated={handleAuthenticated}
        onClose={closeAuthModal}
        initialMode="login"
      />
    </header>
  );
}
