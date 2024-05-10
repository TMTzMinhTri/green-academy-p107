import { ParsedUrlQuery } from 'querystring';
import { ReactElement } from 'react';
import { NextPage } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { GetServerSidePropsContext } from 'next/types';
import { BaseLayout } from '@/layouts';
import { CompanyList } from '@/features/setting-company'
import { PermissionList } from '@/features/setting-permission'
import { RoleList } from '@/features/setting-role'
import { UserList } from '@/features/setting-user'
interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PageFactories: Record<string, ReactElement> = {
  companies: <CompanyList />,
  users: <UserList />,
  permissions: <PermissionList />,
  roles: <RoleList />,
};

export function getServerSideProps(ctx: GetServerSidePropsContext<IParams>) {
  const slug = ctx.query.slug as string;
  if (!slug || !Object.keys(PageFactories).includes(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
}

const SetupPage: NextPage<IParams> = ({ slug }) => {
  return PageFactories[slug];
};

SetupPage.getLayout = (page: ReactElement<Params>) => {
  const { slug } = page.props;
  return <BaseLayout breadcrumbs={['setup', slug]}>{page}</BaseLayout>;
};

export default SetupPage;
