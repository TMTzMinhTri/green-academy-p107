import { NextPage } from 'next';
import { Link, PasswordField } from '@/components';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const scheme = yup.object({
  email: yup.string().trim().required(),
  password: yup.string().trim().required(),
});

const LoginPage: NextPage = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm({
    defaultValues: {
      email: '', password: ''
    },
    resolver: yupResolver(scheme)
  })

  const handleLogin = () => { }

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" spacing={2} mt={8}>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Stack spacing={2}>
            <div>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoComplete="username"
                    fullWidth
                    error={Boolean(errors.email?.message)}
                    // ={errors.email?.message}
                    margin="normal"
                    label="Username"
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <PasswordField
                    {...field}
                    fullWidth
                    error={Boolean(errors.password?.message)}
                    // helperText={errors.password?.message}
                    margin="normal"
                    label="Password"
                  />
                )}
              />
            </div>
            <Button fullWidth type="submit" variant="contained" disabled={!isValid}>
              Login
            </Button>
          </Stack>
        </form>
        <Link href="#" color="primary" underline="none">
          Forgot password ?
        </Link>
      </Stack>
    </Container >
  );
};

export default LoginPage;
