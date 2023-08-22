import { FC, Fragment } from 'react';
import { useRouter } from 'next/router';
import { useToggle } from '@/hooks/useToggle';
import { useLogout } from '@/services/auth/useLogout';
import { useUser } from '@/services/auth/useUser';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

const UserDropdown: FC = () => {
  const { mutateAsync } = useLogout();
  const router = useRouter();
  const { data } = useUser();
  const [target, { open, close }] = useToggle();

  const handleLogOut = async () => {
    await mutateAsync();
    close();
    router.push('/login');
  };

  return (
    <Fragment>
      <Tooltip title="Account settings">
        <IconButton onClick={open}>
          <Avatar
            alt="John Doe"
            sx={{ width: 40, height: 40 }}
            src="/images/avatars/1.png"
          />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={target} open={Boolean(target)} onClick={close}>
        <MenuItem onClick={close}>
          <ListItemIcon>
            <PersonAddIcon fontSize="small" />
          </ListItemIcon>
          {data?.name}
        </MenuItem>
        <MenuItem onClick={close}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
