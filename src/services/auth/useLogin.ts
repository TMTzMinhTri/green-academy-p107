import axios from '@/libs/axios';
import storage from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import dayjs from 'dayjs';

import { ILoginParams, ILoginResponse } from './types';

const login = async (loginParams: ILoginParams): Promise<ILoginResponse> => {
  return axios.post('/users/login', { ...loginParams });
};

export const useLogin = () => {
  return useMutation({
    onSuccess(response) {
      const { access_token, access_expires_at, csrf } = response;
      setCookie('access_token', access_token, {
        expires: dayjs().add(access_expires_at, 'seconds').toDate(),
      });
      storage.setCsrfToken(csrf);
      return response;
    },
    mutationFn: login,
  });
};
