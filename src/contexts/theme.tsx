import { FC, PropsWithChildren } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSetting } from "./settings";
import themeOptions from "@/theme";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setting } = useSetting();
  const coreThemeConfig = themeOptions(setting);
  let theme = createTheme(coreThemeConfig);
  theme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
export default ThemeProvider;
