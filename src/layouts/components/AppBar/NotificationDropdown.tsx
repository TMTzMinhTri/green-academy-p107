import React from "react";
import { Notifications } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const NotificationDropdown: React.FC = () => {
  return (
    <>
      <IconButton>
        <Notifications />
      </IconButton>
    </>
  );
};

export default NotificationDropdown;
