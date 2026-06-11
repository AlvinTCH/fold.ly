import { UserDisplay } from "./UserDisplay";

export default {
  title: "UserDisplay",
};

export const WithImg = () => (
  <UserDisplay
    name="Test"
    profile_pic="https://api.dicebear.com/7.x/bottts/svg?seed=pro"
  />
);
export const EmptyImg = () => <UserDisplay name="Test" />;
