import { FC, Fragment, PropsWithChildren } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Backdrop, Breadcrumbs, CircularProgress, Container, Grid, Paper } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AuthWrapper from '@/features/AuthWrapper';
import UserDropdown from './components/UserDropdown';
import TopMenu from './components/TopMenu';

interface IBaseLayoutProps {
  breadcrumbs: string[];
}

const BaseLayout: FC<PropsWithChildren<IBaseLayoutProps>> = ({ children, breadcrumbs }) => {
  return (
    // <AuthWrapper
    //   renderLoading={() => (
    //     <Backdrop open invisible>
    //       <CircularProgress />
    //     </Backdrop>
    //   )}
    // >
    <Fragment>
      <MuiAppBar position="fixed">
        <Toolbar>
          <Stack direction="row" justifyContent="space-between" alignItems="center" width={1}>
            <DashboardIcon sx={{ mr: 2, transform: 'translateY(-2px)' }} />
            <Typography variant="h5" fontWeight={600}>
              QUALITY & LAB ONE
            </Typography>
            <UserDropdown />
          </Stack>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
      <Container disableGutters>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12}>
            <TopMenu />
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 1 }}>
              <Breadcrumbs>
                {breadcrumbs.map((breadcrumb) => (
                  <Typography key={breadcrumb} textTransform="capitalize">
                    {breadcrumb}
                  </Typography>
                ))}
              </Breadcrumbs>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
    // </AuthWrapper>
  );
};

export default BaseLayout;
