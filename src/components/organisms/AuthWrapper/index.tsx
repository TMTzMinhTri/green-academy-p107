import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { queryClient } from '@/libs/reactQuery';
import { useUser } from '@/services/auth/useUser';
import { useQueryClient } from '@tanstack/react-query';

interface IAuthWrapper {
  renderUnauthenticated?: () => JSX.Element;
  renderLoading: () => JSX.Element;
  renderError?: (error: Error) => JSX.Element;
}

const AuthWrapper: FC<PropsWithChildren<IAuthWrapper>> = ({
  children,
  renderUnauthenticated,
  renderLoading,
}) => {
  const query = useQueryClient(queryClient);
  const { isSuccess, isFetched, status, data } = useUser({});
  const router = useRouter();

  useEffect(() => {
    if (status === 'error') {
      router.replace('/login');
    }
  }, [status, router, query]);

  if (isSuccess) {
    if (renderUnauthenticated && !data) {
      return renderUnauthenticated();
    }
    return <>{children}</>;
  }

  if (!isFetched) {
    return renderLoading();
  }

  return null;
};

export default AuthWrapper;
