import type { SubscriptionResponse } from "@/src/entities";
import { DashboardGreeting } from "./DashboardGreeting";

export default {
  title: "Dashboard/DashboardGreeting",
};

const freePlan: SubscriptionResponse = {
  subscription_id: 1,
  name: "Free",
  description: "Get started with basic link shortening",
  limit: 10,
  price: 0,
  subscribed: true,
};

const proPlan: SubscriptionResponse = {
  subscription_id: 2,
  name: "Pro",
  description: "For power users and teams",
  limit: 100,
  price: 9,
  subscribed: true,
};

export const Usage = () => (
  <DashboardGreeting name="Alvin" subscription={proPlan} urlCount={12} />
);

export const NoSubscription = () => (
  <DashboardGreeting name="Alvin" subscription={null} urlCount={3} />
);

export const ApproachingLimit = () => (
  <DashboardGreeting name="Alvin" subscription={freePlan} urlCount={8} />
);

export const AtLimit = () => (
  <DashboardGreeting name="Alvin" subscription={freePlan} urlCount={10} />
);
