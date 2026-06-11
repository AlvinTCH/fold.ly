import {
  ActionIcon,
  Box,
  Card,
  Center,
  Combobox,
  CopyButton,
  Group,
  Input,
  InputBase,
  Loader,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  useCombobox,
} from "@mantine/core";
import { IconExternalLink, IconCheck, IconCopy } from "@tabler/icons-react";
import { UrlResponse } from "@/src/entities";
import classes from "./UrlList.module.css";

interface UrlListProps {
  urls: UrlResponse[];
  isLoading: boolean;
  errorMsg?: string;
  selectedUrlId: number | null;
  onSelect: (id: number) => void;
}

export function UrlList({
  urls,
  isLoading,
  errorMsg,
  selectedUrlId,
  onSelect,
}: UrlListProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const selectedUrl = urls.find((url) => url.id === selectedUrlId);

  if (isLoading) {
    return (
      <Card withBorder radius="md" padding="lg">
        <Title order={3} mb="md">
          Your links
        </Title>
        <Center className={classes.loading}>
          <Loader color="yellow.5" />
        </Center>
      </Card>
    );
  }

  if (errorMsg) {
    return (
      <Card withBorder radius="md" padding="lg">
        <Title order={3} mb="md">
          Your links
        </Title>
        <Text c="red" size="sm">
          {errorMsg}
        </Text>
      </Card>
    );
  }

  if (urls.length === 0) {
    return (
      <Card withBorder radius="md" padding="lg">
        <Title order={3} mb="md">
          Your links
        </Title>
        <Text c="dimmed" size="sm">
          You haven&apos;t shortened any links yet.
        </Text>
      </Card>
    );
  }

  return (
    <Card withBorder radius="md" padding="lg">
      <Group justify="space-between" mb="md">
        <Title order={3}>Your links</Title>
        {
          selectedUrl && (
            <Group>
              <Tooltip label="Open link" disabled={!selectedUrl}>
                <CopyButton value={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${selectedUrl!.mapped_url_id}`}>
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
              </Tooltip>
              <Tooltip label="Open link" disabled={!selectedUrl}>
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  disabled={!selectedUrl}
                  onClick={() => {
                    if (selectedUrl) {
                      window.open(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/${selectedUrl.mapped_url_id}`,
                        "_blank",
                      );
                    }
                  }}
                >
                  <IconExternalLink size={18} />
                </ActionIcon>
              </Tooltip>
            </Group>
          )
        }      
      </Group>

      <Box visibleFrom="lg">
        <Stack gap={4}>
          {urls.map((url) => (
            <UnstyledButton
              key={url.id}
              className={classes.item}
              data-active={url.id === selectedUrlId || undefined}
              onClick={() => onSelect(url.id)}
            >
              <Text className={classes.shortUrl} fw={600} size="sm">
                {url.mapped_url_id}
              </Text>
              <Text c="dimmed" size="xs" truncate>
                {url.original_url}
              </Text>
            </UnstyledButton>
          ))}
        </Stack>
      </Box>

      <Box hiddenFrom="lg">
        <Combobox
          store={combobox}
          onOptionSubmit={(value) => {
            onSelect(Number(value));
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <InputBase
              className={classes.combobox}
              component="button"
              type="button"
              pointer
              rightSection={<Combobox.Chevron />}
              onClick={() => combobox.toggleDropdown()}
            >
              {selectedUrl ? (
                <>
                  <Text className={classes.shortUrl} fw={600} size="sm">
                    {selectedUrl.mapped_url_id}
                  </Text>
                  <Text c="dimmed" size="xs" truncate>
                    {selectedUrl.original_url}
                  </Text>
                </>
              ) : (
                <Input.Placeholder>Select a link</Input.Placeholder>
              )}
            </InputBase>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              {urls.map((url) => (
                <Combobox.Option
                  value={String(url.id)}
                  key={url.id}
                  active={url.id === selectedUrlId}
                >
                  <Text className={classes.shortUrl} fw={600} size="sm">
                    {url.mapped_url_id}
                  </Text>
                  <Text c="dimmed" size="xs" truncate>
                    {url.original_url}
                  </Text>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </Box>
    </Card>
  );
}
