import { FC } from 'react';
import { companyTypeOptions, statusOptions } from '@/contants/filterOptions';
import { Grid, Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Controller, useForm } from 'react-hook-form';

export type IFilterParams = {
  keyword: string;
  status: string;
  type: string;
};

const CompanyFilter: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      keyword: '',
      status: statusOptions[0].key,
      type: companyTypeOptions[0].key,
    },
    mode: 'onSubmit',
  })

  const getCompanies = (values: IFilterParams) => { };

  return (
    <Paper variant="outlined" sx={{ p: 1 }}>
      <form onSubmit={handleSubmit(getCompanies)}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <FormControl size="small" fullWidth>
                  <Select
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    name={field.name}
                  >
                    {companyTypeOptions.map((option) => (
                      <MenuItem value={option.key} key={option.key}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <FormControl size="small" fullWidth>
                  <Select
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    name={field.name}
                  >
                    {statusOptions.map((option) => (
                      <MenuItem value={option.key} key={option.key}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs>
            <Controller
              name="keyword"
              control={control}
              render={({ field }) => (
                <Stack direction="row" spacing={1}>
                  <OutlinedInput
                    {...field}
                    fullWidth
                    size="small"
                    placeholder="Enter the keyword..."
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    type="submit"
                  >
                    Search
                  </Button>
                </Stack>
              )}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CompanyFilter;
