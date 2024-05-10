import { FC, Fragment } from 'react';
import { useToggle } from '@/hooks/useToggle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MuiPopover, { popoverClasses } from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Popover = styled(MuiPopover)(() => ({
  [`& .${popoverClasses.paper}`]: {
    width: 380,
    overflow: 'hidden',
  },
}));

const Body = styled('div')({
  minHeight: 50,
  maxHeight: 349,
});

const NotificationDropdown: FC = () => {
  const [target, { open, close }] = useToggle();
  return (
    <Fragment>
      <IconButton onClick={open}>
        <NotificationsIcon />
      </IconButton>
      <Popover
        anchorEl={target}
        open={Boolean(target)}
        onClose={close}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          p={(theme) => theme.spacing(1, 2)}
        >
          <Typography fontWeight={600} variant="body1">
            Notifications
          </Typography>
        </Stack>
        <Body>
          <Typography textAlign="center">Empty</Typography>
        </Body>
        <Box p={(theme) => theme.spacing(1, 2)}>
          <Button fullWidth variant="contained">
            Read all
          </Button>
        </Box>
      </Popover>
    </Fragment>
  );
};

export default NotificationDropdown;
