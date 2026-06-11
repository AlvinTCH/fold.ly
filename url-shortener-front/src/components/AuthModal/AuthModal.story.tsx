import { AuthModal } from "./AuthModal";

export default {
  title: "AuthModal",
};

export const SignUp = () => (
  <AuthModal
    opened
    initialMode="signup"
    onClose={() => {}}
    onAuthenticated={() => {}}
    onContinueAsGuest={() => {}}
  />
);

export const Login = () => (
  <AuthModal
    opened
    initialMode="login"
    onClose={() => {}}
    onAuthenticated={() => {}}
  />
);
