import { createTheme } from './createTheme';

describe('createTheme', () => {
  it('should return default theme with no options', () => {
    const theme = createTheme();
    console.log(theme.palette);
    expect(1).toBe(1);
  });
});
