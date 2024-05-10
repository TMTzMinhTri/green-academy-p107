import { FC } from 'react'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Stack,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

interface ICreateUpdateCompanyModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateUpdateCompanyModal: FC<ICreateUpdateCompanyModalProps> = ({ onClose, open }) => {
  const { control, handleSubmit } = useForm()
  const createUpdateCompany = (values: any) => { };

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <form onSubmit={handleSubmit(createUpdateCompany)}>
        <DialogTitle>Add company</DialogTitle>
        <DialogContent>
          <Controller
            control={control}
            name="company_name"
            render={({ field }) => (
              <TextField
                {...field}
                label="Company name"
                margin="normal"
                size="small"
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                margin="normal"
                size="small"
                fullWidth
              />
            )}
          />

          <Stack direction="row" spacing={2} mt={2} mb={1}>
            <Controller
              control={control}
              name="tel"
              render={({ field }) => (
                <TextField {...field} label="Tel" size="small" fullWidth />
              )}
            />
            <Controller
              control={control}
              name="fax"
              render={({ field }) => (
                <TextField {...field} label="Fax" size="small" fullWidth />
              )}
            />
          </Stack>

          <Controller
            control={control}
            name="active"
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox checked={field.value} {...field} />}
                label="Active"
              />
            )}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default CreateUpdateCompanyModal