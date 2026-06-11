import { IconBolt, IconChartBar, IconLink } from "@tabler/icons-react";
import { Badge, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { ShortenForm } from "@/src/components/ShortenForm/ShortenForm";
import classes from "./Main.module.css";

const features = [
  {
    icon: IconBolt,
    title: "Instant redirects",
    description:
      "Shortened links resolve in milliseconds, wherever they're shared.",
  },
  {
    icon: IconChartBar,
    title: "Click analytics",
    description: "See device, browser, and location breakdowns for every link.",
  },
  {
    icon: IconLink,
    title: "Free to start",
    description: "No signup required to create your first short links.",
  },
];

export function Main() {
  return (
    <Container size="sm" py={80}>
      <Title className={classes.title} ta="center">
        Short links,{" "}
        <Text inherit component="span" c="yellow.5">
          Sharp impact
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
        mb="xl"
      >
        Fold long URLs into shareable links.
      </Text>

      <ShortenForm />

      <SimpleGrid
        className={classes.features}
        cols={{ base: 1, sm: 3 }}
        spacing="md"
      >
        {features.map((feature) => (
          <div className={classes.feature} key={feature.title}>
            <div className={classes.featureIcon}>
              <feature.icon size={20} stroke={1.75} />
            </div>
            <div>
              <Text className={classes.featureTitle} size="sm">
                {feature.title}
              </Text>
              <Text c="dimmed" size="sm">
                {feature.description}
              </Text>
            </div>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
