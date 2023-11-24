import router from '@/contants/router';
import { useToggle } from '@/hooks/useToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid, MenuItem } from '@mui/material';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import Link from '@/components/atoms/Link';

const Button = styled(MuiButton)(() => ({
  justifyContent: 'space-between',
}));

const TopMenu = () => {
  const [anchorElSample, { close: closeSample, open: openSample }] = useToggle();
  const [anchorElSampleResult, { close: closeSampleResult, open: openSampleResult }] = useToggle();
  const [anchorElMasterData, { close: closeMasterData, open: openMasterData }] = useToggle();
  const [anchorElSetup, { close: closeSetup, open: openSetup }] = useToggle();
  const [anchorElReport, { close: closeReport, open: openReport }] = useToggle();
  const [anchorElUpload, { close: closeUpload, open: openUpload }] = useToggle();

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Button variant="contained" fullWidth color="primary" size="small" LinkComponent={Link} href="/">
          home
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openSample}
          endIcon={<KeyboardArrowDownIcon />}
        >
          sample
        </Button>
        <Menu anchorEl={anchorElSample} open={Boolean(anchorElSample)} onClose={closeSample}>
          <MenuItem onClick={closeSample} disableRipple component={Link} href="/sample/create-sample">
            create sample
          </MenuItem>
          <MenuItem onClick={closeSample} disableRipple>
            sample inquiry
          </MenuItem>
          <MenuItem onClick={closeSample} disableRipple>
            view samples result
          </MenuItem>
          <MenuItem onClick={closeSample} disableRipple>
            change status
          </MenuItem>
          <MenuItem onClick={closeSample} disableRipple>
            change status history
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openSampleResult}
          endIcon={<KeyboardArrowDownIcon />}
        >
          sample result
        </Button>
        <Menu anchorEl={anchorElSampleResult} open={Boolean(anchorElSampleResult)} onClose={closeSampleResult}>
          <MenuItem onClick={closeSampleResult} disableRipple>
            Edit
          </MenuItem>
          <MenuItem onClick={closeSampleResult} disableRipple>
            Duplicate
          </MenuItem>
          <MenuItem onClick={closeSampleResult} disableRipple>
            Archive
          </MenuItem>
          <MenuItem onClick={closeSampleResult} disableRipple>
            More
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openMasterData}
          endIcon={<KeyboardArrowDownIcon />}
        >
          master data
        </Button>
        <Menu anchorEl={anchorElMasterData} open={Boolean(anchorElMasterData)} onClose={closeMasterData}>
          <MenuItem onClick={closeMasterData} disableRipple>
            Edit
          </MenuItem>
          <MenuItem onClick={closeMasterData} disableRipple>
            Duplicate
          </MenuItem>
          <MenuItem onClick={closeMasterData} disableRipple>
            Archive
          </MenuItem>
          <MenuItem onClick={closeMasterData} disableRipple>
            More
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openSetup}
          endIcon={<KeyboardArrowDownIcon />}
        >
          setup
        </Button>
        <Menu anchorEl={anchorElSetup} open={Boolean(anchorElSetup)} onClose={closeSetup}>
          <MenuItem onClick={closeSetup} disableRipple href={router.setup.companies()} component={Link}>
            Companies
          </MenuItem>
          <MenuItem onClick={closeSetup} disableRipple href={router.setup.users()} component={Link}>
            Users
          </MenuItem>
          <MenuItem onClick={closeSetup} disableRipple href={router.setup.roles()} component={Link}>
            Roles
          </MenuItem>
          <MenuItem onClick={closeSetup} disableRipple href={router.setup.permissions()} component={Link}>
            Permissions
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openReport}
          endIcon={<KeyboardArrowDownIcon />}
        >
          report
        </Button>
        <Menu anchorEl={anchorElReport} open={Boolean(anchorElReport)} onClose={closeReport}>
          <MenuItem onClick={closeReport} disableRipple>
            test
          </MenuItem>
          <MenuItem onClick={closeReport} disableRipple>
            specification
          </MenuItem>
          <MenuItem onClick={closeReport} disableRipple>
            aql
          </MenuItem>
          <MenuItem onClick={closeReport} disableRipple>
            sample
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item xs>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          size="small"
          onClick={openUpload}
          endIcon={<KeyboardArrowDownIcon />}
        >
          upload
        </Button>
        <Menu anchorEl={anchorElUpload} open={Boolean(anchorElUpload)} onClose={closeUpload}>
          <MenuItem onClick={closeUpload} disableRipple>
            Edit
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

export default TopMenu;
