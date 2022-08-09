import { createTheme as createMuiTheme, Theme, ThemeOptions } from '@mui/material';
import { background, common, defaultPalette } from '../colors';

/**
 * Add more colors to text palette which are defined by Sahab Design System
 */
declare module '@mui/material/styles' {
  interface TypeText {
    light: string;
    placeholder: string;
    link: string;
  }
  interface PaletteOptions {
    disabled?: string;
  }
  interface Palette {
    disabled?: string;
  }
}

/**
 * Update the Typography's variant prop options
 * and disable the variants which are not used in Sahab Design System
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h6: false;
    subtitle2: false;
    caption: false;
    overline: false;
  }
}

const defaultOptions: ThemeOptions = {
  palette: {
    primary: { main: defaultPalette.primary },
    secondary: { main: defaultPalette.secondary },
    error: { main: defaultPalette.error },
    warning: { main: defaultPalette.warning },
    // The Sahab Design System dose not have the info color and it should be set on each project separately.
    // info: { main: '' },
    success: { main: defaultPalette.success },
    disabled: defaultPalette.disable,
    common: { ...common }, // prevent mutable object.
    background: {
      paper: background.grey,
      default: background.white,
    },
    text: { ...defaultPalette.text }, // prevent mutable object.
  },
  typography: {
    fontFamily: 'iranyekan',
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    h1: {
      fontFamily: 'iranyekan',
      fontWeight: 600,
      fontSize: '2.25rem', // 32px
      // lineHeight: 1.5, // FIXME
    },
    h2: {
      fontFamily: 'iranyekan',
      fontWeight: 600,
      fontSize: '1.5rem', // 24px
      // lineHeight: 1.5, // FIXME
    },
    h3: {
      fontFamily: 'iranyekan',
      fontWeight: 200,
      fontSize: '1.5rem', // 24px
      // lineHeight: 1.5, // FIXME
    },
    h4: {
      fontFamily: 'iranyekan',
      fontWeight: 600,
      fontSize: '1.125rem', // 18px
      // lineHeight: 1.5, // FIXME
    },
    h5: {
      fontFamily: 'iranyekan',
      fontWeight: 600,
      fontSize: '1rem', // 16px
      // lineHeight: 1.5, // FIXME
    },
    button: {
      fontFamily: 'iranyekan',
      fontWeight: 400,
      fontSize: '1rem', // 16px
      // lineHeight: 1.5, // FIXME
    },
    body1: {
      fontFamily: 'iranyekan',
      fontWeight: 200,
      fontSize: '1rem', // 16px
      // lineHeight: 1.5, // FIXME
    },
    body2: {
      fontFamily: 'iranyekan',
      fontWeight: 200,
      fontSize: '0.875rem', // 14px
      // lineHeight: 1.5, // FIXME
    },
    subtitle1: {
      fontFamily: 'iranyekan',
      fontWeight: 400,
      fontSize: '0.625rem', // 10px
      // lineHeight: 1.5, // FIXME
    },
    // Disable h6, subtitle2, caption and overline variant
    h6: undefined,
    subtitle2: undefined,
    caption: undefined,
    overline: undefined,
  },
  components: {
    MuiLink: {
      defaultProps: {
        variant: 'body2',
        color: defaultPalette.text.link,
      },
    },
  },
};

export function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createMuiTheme(defaultOptions, options, ...args);
}
