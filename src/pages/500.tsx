import { ReactNode } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Link } from '@/components';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// import BlankLayout from '@/layouts/BlankLayout';

const ImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 400,
  width: 700,
  [theme.breakpoints.up('md')]: {
    height: 450,
  },
}));

const ServerErrorPage: NextPage = () => {
  return (
    <Container className="content-center">
      <Stack alignItems="center" spacing={2} width={1}>
        <Stack alignItems="center" spacing={1}>
          <Typography variant="h1">500</Typography>
          <Stack alignItems="center">
            <Typography variant="h5">Internal server error 👨🏻‍💻</Typography>
            <Typography variant="body2">Oops, something went wrong!</Typography>
          </Stack>
        </Stack>
        <ImageWrapper>
          <Image
            src="/images/pages/500.png"
            alt="internet-error-icon"
            fill
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px)50vw,
                    33vw"
            priority
          />
        </ImageWrapper>
        <Button href="/" component={Link} variant="contained">
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
};

// ServerErrorPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default ServerErrorPage;
