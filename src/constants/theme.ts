import { COLORS } from 'styles/color';

import { PrimaryColorTheme, ThemeParameter } from 'typings';

export const PRIMARY_COLOR_THEME: Record<PrimaryColor, PrimaryColorTheme> = {
  'light-blue': {
    opacityPrimaryColor: COLORS.opacityBlue,
    primaryColor: COLORS.blue,
  },
  green: {
    opacityPrimaryColor: COLORS.opacityGreen,
    primaryColor: COLORS.green,
  },
  pink: {
    opacityPrimaryColor: COLORS.opacityPink,
    primaryColor: COLORS.pink,
  },
  purple: {
    opacityPrimaryColor: COLORS.opacityPurple,
    primaryColor: COLORS.purple,
  },
};

export const PROJECT_THEME: Record<ThemeName, ThemeParameter> = {
  dark: {
    background: COLORS.eerieBlack,
    icon: COLORS.white,
    text: COLORS.lightGray,

    accordion: {
      border: COLORS.jet,
      active: COLORS.jet,
    },
  },
  light: {
    background: COLORS.white,
    icon: COLORS.black,
    text: COLORS.davysGrey,

    accordion: {
      active: COLORS.cultured,
      border: COLORS.ghostWhite,
    },
  },
};
