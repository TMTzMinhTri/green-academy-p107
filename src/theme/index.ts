import { Roboto } from 'next/font/google';
import { ISetting } from '@/contexts/settings';
import type { ThemeOptions } from '@mui/material';

import DefaultPalette from './palette';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const themeOptions = ({ mode }: ISetting): ThemeOptions => {
  return {
    palette: DefaultPalette(mode),
    typography: {
      fontFamily: roboto.style.fontFamily,
      fontSize: 16,
    },
  };
};

export default themeOptions;
