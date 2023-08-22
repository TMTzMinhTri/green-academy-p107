export type ILoginParams = {
  login: string;
  password: string;
};

export interface IClientAuthenticationParams extends ILoginParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  redirect_uri: string;
}
export const authKey = ['authenticated-user'];

export interface ICurrentUser {
  id: string;
  name: string;
}

export interface ILoginResponse {
  access_token: string;
  csrf: string;
  access_expires_at: number;
}
