import { FC, Fragment } from 'react';
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
import { Controller } from 'react-hook-form';
import { Form } from '@/components/atoms';

interface ICompanyFormModalProps {
  open: boolean;
  onClose: () => void;
}

const CompanyFormModal: FC<ICompanyFormModalProps> = ({ open, onClose }) => {
  const handleSubmit = (values: any) => {};

  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        options={{
          defaultValues: {
            company_name: '',
            address: '',
            tel: '',
            fax: '',
            active: true,
          },
          mode: 'onSubmit',
        }}
      >
        {({ control }) => (
          <Fragment>
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
          </Fragment>
        )}
      </Form>
    </Dialog>
  );
};

export default CompanyFormModal;
