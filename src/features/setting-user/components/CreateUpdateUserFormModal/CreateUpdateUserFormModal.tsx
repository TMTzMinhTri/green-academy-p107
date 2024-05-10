import { FC } from 'react';
import { useRoles } from '@/services/role/useRoles';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

interface ICreateUpdateUserFormModalProps {
  open: boolean;
  onClose: () => void;
}
const CreateUpdateUserFormModal: FC<ICreateUpdateUserFormModalProps> = ({ onClose, open }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      full_name: '',
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      active: true,
    },
    mode: 'onSubmit',
  })
  const { data } = useRoles();
  const roles = data ? data.data : [];

  const createNewUser = (values: any) => { };

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <form onSubmit={handleSubmit(createNewUser)}>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField {...field} label="User name" margin="normal" size="small" fullWidth />
            )}
          />
          <Controller
            control={control}
            name="full_name"
            render={({ field }) => (
              <TextField {...field} label="Full name" margin="normal" size="small" fullWidth />
            )}
          />
          <Stack direction="row" spacing={2} mt={2} mb={1} display="inline-flex" width={1}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => <TextField {...field} label="Email" size="small" fullWidth required />}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => <TextField {...field} label="Phone" size="small" fullWidth required />}
            />
          </Stack>
          <Stack direction="row" spacing={2} mt={2} mb={1} display="inline-flex" width={1}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField {...field} label="Password" size="small" fullWidth required margin="normal" />
              )}
            />
            <Controller
              control={control}
              name="password_confirmation"
              render={({ field }) => (
                <TextField {...field} label="Confirm password" size="small" fullWidth required margin="normal" />
              )}
            />
          </Stack>
          <FormControl component="fieldset" variant="outlined" sx={{ width: 1 }}>
            <FormLabel component="legend">Roles</FormLabel>
            <Paper variant="outlined">
              <FormGroup>
                {roles.map((item) => (
                  <FormControlLabel sx={{ m: 0 }} key={item.id} control={<Checkbox />} label={item.name} />
                ))}
              </FormGroup>
            </Paper>
          </FormControl>
          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <FormControlLabel control={<Checkbox checked={field.value} {...field} />} label="Active" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateUpdateUserFormModal;
