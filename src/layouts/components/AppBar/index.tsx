import { FC } from "react";
import { Menu } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { Link } from "@/components/atoms";

import AutoComplete from "./AutoComplete";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

interface IAppBarProps {
  toggleNavVisibility: () => void;
}

const AppBar: FC<IAppBarProps> = ({ toggleNavVisibility }) => {
  return (
    <MuiAppBar
      color="default"
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2} alignItems="center" flex="1 1 30%">
          <IconButton color="inherit" onClick={toggleNavVisibility}>
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            underline="none"
            href="/"
          >
            Photos
          </Typography>
        </Stack>
        <Box flex="1 1 30%">
          <AutoComplete />
        </Box>
        <Stack direction="row" spacing={1} flex="1 1 30%" justifyContent="end">
          <NotificationDropdown />
          <UserDropdown />
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
