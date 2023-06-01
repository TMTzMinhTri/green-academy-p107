import React from "react";
import { ListSubheader } from "@mui/material";

interface INavSectionTitleProps {
  item: INavSectionTitle;
}

const NavSectionTitle: React.FC<INavSectionTitleProps> = ({ item }) => {
  return <ListSubheader>NavSectionTitle</ListSubheader>;
};

export default NavSectionTitle;
