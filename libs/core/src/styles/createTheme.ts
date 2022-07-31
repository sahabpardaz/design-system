import { createTheme as createMuiTheme, Theme, ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';
import createPalette from '@mui/material/styles/createPalette';
import { defaultPalette } from '../colors/palette';
import { black, white } from '../colors';

declare module '@mui/material/styles' {
  /*   interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  } */
  interface TypeText {
    lightColor: string;
    placeholder: string;
    link: string;
  }
}

export const defaultOptions: ThemeOptions = {
  palette: {
    primary: { main: defaultPalette.primary },
    secondary: { main: defaultPalette.secondary },
    error: { main: defaultPalette.negative },
    warning: { main: defaultPalette.warning },
    // info: { main: defaultPalette.warning }, TODO ask UI/UX
    success: { main: defaultPalette.positive },
    common: {
      white,
      black,
    },
    background: {
      // TODO ask UI/UX
      // paper:
      // default:
    },
    text: {
      primary: '',
      secondary: '',
      lightColor: '',
      disabled: '',
      link: '',
      placeholder: '',
    },
  },
  typography: {
    fontFamily: 'IRANYekan',
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    h1: {
      fontFamily: 'IRANYekan',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.5,
      letterSpacing: '',
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    button: {},
    body1: {},
    body2: {},
    subtitle1: {},
  },
  components: {
    MuiLink: {
      defaultProps: {
        variant: 'body2',
        color: defaultPalette.textLink,
      },
    },
  },
};

export function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createMuiTheme(deepmerge(defaultOptions, options), ...args);
}
