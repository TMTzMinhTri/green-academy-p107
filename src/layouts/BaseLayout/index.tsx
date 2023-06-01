import { FC, PropsWithChildren, useState } from "react";
import { Box, Stack, Theme, Toolbar, useMediaQuery } from "@mui/material";

import adminSideBarMenu from "@/contants/adminSideBarMenu";

import AppBar from "../components/AppBar";
import Navigation from "../components/Navigation";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <Stack direction="row">
      <AppBar toggleNavVisibility={toggleNavVisibility} />
      <Navigation
        navItems={adminSideBarMenu}
        hidden={hidden}
        navVisible={navVisible}
        setNavVisible={setNavVisible}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Stack>
  );
};

export default BaseLayout;
