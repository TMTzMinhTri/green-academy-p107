import dayjs from 'dayjs';
import Cookies from 'js-cookie';

const storage = {
  getToken: () => {
    return window.localStorage.getItem('access_token');
  },
  setToken: (token: string, expired_at: number) => {
    return Cookies.set('access_token', token, {
      expires: dayjs().add(expired_at, 'seconds').toDate(),
    });
  },
  deleteToken() {
    return Cookies.remove('access_token');
  },
  setCsrfToken: (token: string) => {
    return window.localStorage.setItem('csrf', token);
  },
  deleteCsrfToken: () => {
    return window.localStorage.removeItem('csrf');
  },
  getRefreshToken: () => {
    return Cookies.get('jwt_refresh');
  },
};

export default storage;
