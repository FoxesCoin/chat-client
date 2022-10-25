export const FONT_SIZES = {
  h3: '24px',
  h4: '18px',
  regular: '16px',
  small: '14px',
  x_small: '11px',
  tiny: '10px',
};

export const FONT_WEIGHT = {
  bold: 700,
  medium: 500,
  regular: 400,
};

export type FontSize = keyof typeof FONT_SIZES;
export type FontWeight = keyof typeof FONT_WEIGHT;
