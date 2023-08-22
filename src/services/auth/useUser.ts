import axios from '@/libs/axios';
import { ExtractFnReturnType, QueryConfig } from '@/libs/reactQuery';
import { useQuery } from '@tanstack/react-query';

import { ICurrentUser } from './types';

const getCUrrentUser = async (): Promise<ICurrentUser> => {
  return axios.get('/users/me');
};

type QueryFnType = typeof getCUrrentUser;

export const useUser = (options?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...options,
    gcTime: 0,
    queryKey: ['authenticated-user'],
    queryFn: () => getCUrrentUser(),
  });
};
