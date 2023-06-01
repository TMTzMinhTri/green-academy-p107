import { FC, PropsWithChildren } from "react";
import { Toolbar } from "@mui/material";
import MuiSwipeableDrawer from "@mui/material/SwipeableDrawer";

interface IDrawerProps extends PropsWithChildren {
  hidden: boolean;
  navVisible: boolean;
  setNavVisible: (value: boolean) => void;
}

const Drawer: FC<IDrawerProps> = ({
  children,
  hidden,
  navVisible,
  setNavVisible,
}) => {
  const variant = hidden ? "temporary" : "permanent";

  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true,
    },
  };
  const DesktopDrawerProps = {
    open: false,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  };

  return (
    <MuiSwipeableDrawer
      variant={variant}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{
        style: {
          pointerEvents:
            variant === "temporary" && !navVisible ? "none" : "initial",
        },
        sx: {
          bgcolor: "background.default",
          width: (theme) => theme.spacing(37),
        },
      }}
      sx={{
        width: (theme) => theme.spacing(37),
      }}
    >
      <Toolbar />
      {children}
    </MuiSwipeableDrawer>
  );
};

export default Drawer;
