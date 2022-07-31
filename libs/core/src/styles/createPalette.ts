import { Palette, PaletteOptions } from '@mui/material';
import createMuiPalette from '@mui/material/styles/createPalette';
import { deepmerge } from '@mui/utils';
import { grey } from '../colors';
import { common } from '../colors/common';
import { primary as mainPrimary, secondary as mainSecondary } from '../colors/palette';

export function createPalette(options: PaletteOptions): Palette {
  // Set default palette colors if it's not provided
  const primary = options.primary || { main: mainPrimary };
  const secondary = options.secondary || { main: mainSecondary };
  const error = options.error || getDefaultError(mode);
  const info = options.info || getDefaultInfo(mode);
  const success = options.success || getDefaultSuccess(mode);
  const warning = options.warning || getDefaultWarning(mode);

  const palette = createMuiPalette({
    primary,
  });
  palette.grey = {};
  deepmerge();
  return {
    common: { ...common },
    grey: grey,
  };
}
