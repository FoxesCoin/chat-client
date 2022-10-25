export const COLORS = <const>{
  transparent: 'transparent',

  white: '#fff',
  ghostWhite: '#f0f0f5',
  cultured: '#EFEFF2',

  lightGray: '#ABB3BB',

  black: '#282828',
  jet: '#2E2E2E',
  eerieBlack: '#262626',
  onyx: '#3b3c3c',
  davysGrey: '#4B5259',

  gray: '#999',
  silver: '#8F9198',
  sonicSilver: '#757575',

  blue: '#50a5f1',
  opacityBlue: '#64B3F8aa',

  green: '#4eac6d',
  opacityGreen: '#5DB67Aaa',

  purple: '#6153CC',
  opacityPurple: '#8D80F1aa',

  pink: '#EF476F',
  opacityPink: '#F86889aa',
};

export type Color = keyof typeof COLORS;
