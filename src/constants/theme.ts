import { COLORS } from 'styles/color';

import { PrimaryColorTheme, ThemeParameter } from 'typings';

export const PRIMARY_COLOR_THEME: Record<PrimaryColor, PrimaryColorTheme> = {
  'light-blue': {
    opacityPrimaryColor: COLORS.blue,
    primaryColor: COLORS.blue,
  },
  gray: {
    opacityPrimaryColor: COLORS.dimGray,
    primaryColor: COLORS.dimGray,
  },
  green: {
    opacityPrimaryColor: COLORS.green,
    primaryColor: COLORS.green,
  },
  pink: {
    opacityPrimaryColor: COLORS.red,
    primaryColor: COLORS.red,
  },
  purple: {
    opacityPrimaryColor: COLORS.lightBlue,
    primaryColor: COLORS.lightBlue,
  },
};

export const PROJECT_THEME: Record<ThemeName, ThemeParameter> = {
  dark: {
    background: COLORS.black,
    iconColor: COLORS.white,
  },
  light: {
    background: COLORS.white,
    iconColor: COLORS.black,
  },
};
