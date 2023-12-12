import { API_URL } from '@/config';
import storage from '@/utils/storage';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse, isAxiosError } from 'axios';
import { getCookie } from 'cookies-next';

const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

let refreshTOkenRequest: Promise<any> | null = null;

axios.interceptors.request.use((config) => {
  const token = getCookie('access_token');
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (e: AxiosError | Error) => {
    if (isAxiosError(e)) {
      const config = e.config as AxiosRequestConfig;
      const { status, data } = (e.response as AxiosResponse<{ status: number; error: string }>) ?? {};
      if (status === 401) {
        if (data.error === 'JWTSessions::Errors::Unauthorized') {
          storage.deleteToken();
          storage.deleteCsrfToken();
          return Promise.reject(e);
        } else if (/Signature has expired/.test(data.error) && config.url !== '/users/refresh_token') {
          refreshTOkenRequest = refreshTOkenRequest ? refreshTOkenRequest : axios.get('/users/refresh_token');
          const { csrf, access, access_expires_at } = await refreshTOkenRequest;
          storage.setToken(access, access_expires_at);
          storage.setCsrfToken(csrf);
          refreshTOkenRequest = null;
          return axios(config);
        } else {
          return Promise.reject(e);
        }
      }
    }
    return Promise.reject(e);
  },
);

export default axios;
