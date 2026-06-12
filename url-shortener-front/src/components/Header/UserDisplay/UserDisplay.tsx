"use client";
import { useUser } from "@/src/hooks/use-user";
import { useUserStore } from "@/src/store/user-store";
import { Avatar, UnstyledButton, Menu, LoadingOverlay } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconEye, IconLogout } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

interface UserDisplayProps {
  profile_pic?: string;
  name: string;
}

export function UserDisplay({ profile_pic, name }: UserDisplayProps) {
  const { logout } = useUser();

  const router = useRouter();
  const pathname = usePathname();
  const { clearData } = useUserStore();

  const { trigger, isMutating } = logout({
    successCallback: (success: boolean) => {
      if (!success) return;
      clearData();
      handleRedirect("/");
    },
    errorCallback: (error: Error) => {
      notifications.show({
        color: "red",
        title: "Logout failed",
        message: error.message || "Something went wrong. Please try again.",
      });
    },
  });

  const handleRedirect = (path: string) => {
    setTimeout(() => {
      router.push(path);
    }, 10);
  };

  return (
    <>
      <Menu withArrow closeOnItemClick={true}>
        <Menu.Target>
          <UnstyledButton>
            <Avatar src={profile_pic || "/empty_profile_img.png"} alt={name} />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          {pathname != "/dashboard" ? (
            <>
              <Menu.Item
                leftSection={<IconEye size={14} />}
                onClick={() => {
                  handleRedirect("/dashboard");
                }}
              >
                View Dashboard
              </Menu.Item>
              <Menu.Divider />
            </>
          ) : (
            <></>
          )}
          <Menu.Item
            leftSection={<IconLogout size={14} />}
            onClick={() => {
              trigger();
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
