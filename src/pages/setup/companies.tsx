import React, { ReactNode } from 'react';
import { BaseLayout } from '@/components';
import { Breadcrumbs, Grid, Paper, Typography } from '@mui/material';
import ListCompany from '@/components/organisms/ListCompany';

const SetupCompaniesPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 1 }}>
          <Breadcrumbs>
            <Typography>Setup</Typography>
            <Typography>Companies</Typography>
          </Breadcrumbs>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <ListCompany />
      </Grid>
    </Grid>
  );
};

SetupCompaniesPage.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default SetupCompaniesPage;
