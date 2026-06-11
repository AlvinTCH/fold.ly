import { SubscriptionModal } from "./SubscriptionModal";

export default {
  title: "SubscriptionModal",
};

export const NonLimitReached = () => (
  <SubscriptionModal limitReached={false} opened onClose={() => {}} />
);

export const LimitReached = () => (
  <SubscriptionModal limitReached={true} opened onClose={() => {}} />
);
