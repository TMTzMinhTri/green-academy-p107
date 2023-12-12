import { FC } from 'react';
import Router from 'next/router';
import { ILoginParams } from '@/services/auth/types';
import { useLogin } from '@/services/auth/useLogin';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Form, PasswordField } from '@/components/atoms';

interface ILoginFormControllerProps {}

const scheme = yup.object({
  email: yup.string().trim().required(),
  password: yup.string().trim().required(),
});

const LoginFormController: FC<ILoginFormControllerProps> = () => {
  const login = useLogin();

  const handleSubmitLogin = async (values: ILoginParams) => {
    try {
      await login.mutateAsync({
        ...values,
      });

      Router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form<ILoginParams>
      onSubmit={handleSubmitLogin}
      schema={scheme}
      options={{
        defaultValues: { email: '', password: '' },
        mode: 'onSubmit',
      }}
    >
      {({ control, formState: { errors, isSubmitting, isValid } }) => (
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
                  helperText={errors.email?.message}
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
                  helperText={errors.password?.message}
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
      )}
    </Form>
  );
};

export default LoginFormController;
