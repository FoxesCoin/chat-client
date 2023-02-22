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

const DARK: ThemeParameter = {
  background: COLORS.eerieBlack,
  icon: COLORS.white,
  text: COLORS.lightGray,

  accordion: {
    border: COLORS.jet,
    active: COLORS.jet,
  },

  switch: {
    background: COLORS.jet,
    dot: COLORS.white,
    border: COLORS.white,
  },

  chat: {
    unreadCounter: COLORS.silver,
  },

  search: {
    placeholder: COLORS.sonicSilver,
    background: COLORS.jet,
    icon: COLORS.lightGray,
  },
};

const LIGHT: ThemeParameter = {
  background: COLORS.white,
  icon: COLORS.black,
  text: COLORS.davysGrey,

  accordion: {
    active: COLORS.cultured,
    border: COLORS.ghostWhite,
  },

  switch: {
    border: COLORS.silver,
    background: COLORS.ghostWhite,
    dot: COLORS.silver,
  },

  chat: {
    unreadCounter: COLORS.onyx,
  },

  // TODO correct color for light theme
  search: {
    placeholder: COLORS.sonicSilver,
    background: COLORS.silver,
    icon: COLORS.lightGray,
  },
};

export const PROJECT_THEME: Record<ThemeName, ThemeParameter> = {
  dark: DARK,
  light: LIGHT,
};
