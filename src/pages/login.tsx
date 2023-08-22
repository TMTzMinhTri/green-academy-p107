import { NextPage } from 'next';
import { Link } from '@/components';
import { Container, Stack, Typography } from '@mui/material';
import { LoginForm } from '@/components/molecules';

const LoginPage: NextPage = () => {
  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" spacing={2} mt={8}>
        <Typography variant="h4">Login</Typography>
        <LoginForm />
        <Link href="#" color="primary" underline="none">
          Forgot password ?
        </Link>
      </Stack>
    </Container>
  );
};

export default LoginPage;
