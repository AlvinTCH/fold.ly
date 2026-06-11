import { AnalyticsPanel } from "./AnalyticsPanel";

export default {
  title: "Dashboard/AnalyticsPanel",
};

export const Usage = () => <AnalyticsPanel selectedUrlId={1} />;

export const Empty = () => <AnalyticsPanel selectedUrlId={null} />;
