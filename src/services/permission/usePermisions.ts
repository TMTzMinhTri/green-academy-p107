import axios from '@/libs/axios';
import { useQuery } from '@tanstack/react-query';

import { IPermission } from './types';

const getPermissions = async (): Promise<IApiResponse<IPermission[]>> => {
  return await axios.get('/permissions');
};

export const usePermissions = () => {
  return useQuery({
    queryKey: ['permissions'],
    queryFn: getPermissions,
  });
};
