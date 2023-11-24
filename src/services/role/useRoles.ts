import axios from '@/libs/axios';
import { ExtractFnReturnType } from '@/libs/reactQuery';
import { useQuery } from '@tanstack/react-query';

import { IRole } from './types';

const getRoles = async (): Promise<IApiResponse<IRole[]>> => {
  return await axios.get('/roles');
};
type QueryFnType = typeof getRoles;

export const useRoles = () => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['roles'],
    queryFn: () => getRoles(),
  });
};
