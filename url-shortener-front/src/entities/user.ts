interface RegisterRequest {
  username: string;
  password: string;
  name: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface UserAuthToken {
  access_token: string;
  expiry: string;
  refresh_token: string;
  token_type: "Bearer";
}

interface UserAuthProfile {
  name: string;
  profile_pic: string;
}

interface UserAuthResponse {
  token: UserAuthToken;
  profile: UserAuthProfile;
}

interface ProxyUserAuthResponse {
  expiry: string;
  name: string;
  profile_pic: string;
}

interface SigningKeys {
  keys: Record<string, string>[];
}

export type {
  RegisterRequest,
  LoginRequest,
  UserAuthToken,
  UserAuthProfile,
  UserAuthResponse,
  ProxyUserAuthResponse,
  SigningKeys,
};
