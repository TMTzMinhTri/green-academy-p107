import { FC, PropsWithChildren } from 'react';
import themeOptions from '@/theme';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

import { useSetting } from './settings';

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
