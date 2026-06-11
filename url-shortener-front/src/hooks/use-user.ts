import { LoginRequest, RegisterRequest } from "@/src/entities";

import { useUserStore } from "@/src/store/user-store";
import UserClient from "@/src/clients/user";

import useSWRMutation from "swr/mutation";

import * as jose from "jose";

export const useUser = () => {
  const userClient = new UserClient();
  const { setUserExpiry, setUserProfile } = useUserStore();

  async function encryptData(
    textData: string,
    publicJwk: Record<string, string>,
  ): Promise<string> {
    // 2. Convert the text data into a byte array (Uint8Array)
    const encoder = new TextEncoder();
    const payload = encoder.encode(textData);

    const publicKey = await jose.importJWK(publicJwk, "RSA-OAEP-256");

    const jweString = await new jose.CompactEncrypt(payload)
      .setProtectedHeader({
        alg: "RSA-OAEP-256",
        enc: "A256GCM",
      })
      .encrypt(publicKey);

    return jweString;
  }

  function registerUser({
    successCallback,
    errorCallback,
  }: {
    successCallback: (success: boolean) => void;
    errorCallback: (error: Error) => void;
  }) {
    const { trigger, isMutating } = useSWRMutation(
      "register",
      async (key, { arg }: { arg: RegisterRequest }) => {
        const { password, username, name } = arg;
        const signingKeys = await userClient.getKeys();
        const encryptedPassword = await encryptData(
          password,
          signingKeys.keys[0],
        );

        const authResponse = await userClient.register({
          username,
          name,
          password: encryptedPassword,
        });

        setUserExpiry(authResponse.expiry);
        setUserProfile({
          name: authResponse.name,
          profile_pic: authResponse.profile_pic,
        });
        return true;
      },
      {
        onSuccess: successCallback,
        onError: errorCallback,
      },
    );

    return { trigger, isMutating };
  }

  function login({
    successCallback,
    errorCallback,
  }: {
    successCallback: (success: boolean) => void;
    errorCallback: (error: Error) => void;
  }) {
    const { trigger, isMutating } = useSWRMutation(
      "login",
      async (key, { arg }: { arg: LoginRequest }) => {
        const { password, username } = arg;
        const signingKeys = await userClient.getKeys();
        const encryptedPassword = await encryptData(
          password,
          signingKeys.keys[0],
        );

        const authResponse = await userClient.login({
          username,
          password: encryptedPassword,
        });

        setUserExpiry(authResponse.expiry);
        setUserProfile({
          name: authResponse.name,
          profile_pic: authResponse.profile_pic,
        });
        return true;
      },
      {
        onSuccess: successCallback,
        onError: errorCallback,
      },
    );

    return { trigger, isMutating };
  }

  function logout({
    successCallback,
    errorCallback,
  }: {
    successCallback: (success: boolean) => void;
    errorCallback: (error: Error) => void;
  }) {
    const { trigger, isMutating } = useSWRMutation(
      "logout",
      async () => {
        return await userClient.logout();
      },
      {
        onSuccess: successCallback,
        onError: errorCallback,
      },
    );

    return { trigger, isMutating };
  }

  return {
    registerUser,
    login,
    logout,
  };
};
