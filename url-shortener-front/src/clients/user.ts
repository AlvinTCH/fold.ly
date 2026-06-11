import {
  ApiErrorResponse,
  LoginRequest,
  RegisterRequest,
  ProxyUserAuthResponse,
  SigningKeys,
} from "@/src/entities";

export default class UserClient {
  async getKeys(): Promise<SigningKeys> {
    const response = await fetch("/api/user/keys", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data) {
        const errorResponse = data as ApiErrorResponse;
        throw new Error(errorResponse.detail);
      }
      throw new Error(`Get keys failed with code: ${response.status}`);
    }

    return data as SigningKeys;
  }

  async register(
    registerData: RegisterRequest,
  ): Promise<ProxyUserAuthResponse> {
    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({
        username: registerData.username,
        password: registerData.password,
        name: registerData.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data) {
        const errorResponse = data as ApiErrorResponse;
        throw new Error(errorResponse.detail);
      }
      throw new Error(`Register failed with code: ${response.status}`);
    }

    return data as ProxyUserAuthResponse;
  }

  async login(loginRequest: LoginRequest): Promise<ProxyUserAuthResponse> {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: loginRequest.username,
        password: loginRequest.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data) {
        const errorResponse = data as ApiErrorResponse;
        throw new Error(errorResponse.detail);
      }
      throw new Error(`Login failed with code: ${response.status}`);
    }

    return data as ProxyUserAuthResponse;
  }

  async logout(): Promise<boolean> {
    const response = await fetch("/api/user/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data) {
        const errorResponse = data as ApiErrorResponse;
        throw new Error(errorResponse.detail);
      }
      throw new Error(`Logout failed with code: ${response.status}`);
    }

    return true;
  }
}
