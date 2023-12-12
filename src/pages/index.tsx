import { ReactNode } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { BaseLayout, Link } from '@/components';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Text = dynamic(() => import('@/components/molecules/Test'), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
        lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Button variant="contained" color="secondary" component={Link} href="/hub/channel/facebook">
        connect
      </Button>
      <Link
        href={`https://www.facebook.com/v18.0/dialog/oauth?client_id=288361790845551&redirect_uri=http://localhost:3002&scope=public_profile,email,pages_show_list&response_type=granted_scopes`}
      >
        link
      </Link>
      <Text />
    </>
  );
};

HomePage.getLayout = (page: ReactNode) => {
  return <BaseLayout breadcrumbs={[]}>{page}</BaseLayout>;
};

export default HomePage;
