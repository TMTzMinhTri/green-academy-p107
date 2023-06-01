import React, { MouseEvent } from "react";
import { ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";

interface INavLinkProps {
  item: INavLink;
}

const NavLink: React.FC<INavLinkProps> = ({ item }) => {
  const handleClickItem = (e: MouseEvent<HTMLAnchorElement>) => {
    if (item.path === undefined) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        href={item.path === undefined ? "/" : `${item.path}`}
        {...(item.openInNewTab ? { target: "_blank" } : null)}
        onClick={handleClickItem}
        sx={{
          py: 2.25,
        }}
      >
        {item.title}
      </ListItemButton>
    </ListItem>
  );
};

export default NavLink;
