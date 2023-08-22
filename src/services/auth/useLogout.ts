import axios from '@/libs/axios';
import storage from '@/utils/storage';
import { useMutation } from '@tanstack/react-query';

const logOut = async (): Promise<string> => {
  return axios.delete('/users/log_out');
};

export const useLogout = () => {
  // const queryClient = useQueryClient();

  // const setUser = useCallback(
  //   (data: ICurrentUser) => queryClient.setQueryData(authKey, data),
  //   [queryClient]
  // );

  return useMutation({
    onSuccess() {
      storage.deleteToken();
      storage.deleteCsrfToken();
    },

    mutationFn: logOut,
  });
};
