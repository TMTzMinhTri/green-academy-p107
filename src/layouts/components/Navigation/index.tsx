import { FC } from "react";
import { Box, List } from "@mui/material";

import Drawer from "./Drawer";
import ListItems from "./ListItems";

interface INavigationProps {
  hidden: boolean;
  navVisible: boolean;
  setNavVisible: (value: boolean) => void;
  navItems: INavItems;
}

const Navigation: FC<INavigationProps> = ({ navItems, ...props }) => {
  return (
    <Drawer {...props}>
      <Box sx={{ overflow: "hidden", position: "relative" }}>
        <List className="nav-items">
          <ListItems navItems={navItems} />
        </List>
      </Box>
    </Drawer>
  );
};

export default Navigation;
