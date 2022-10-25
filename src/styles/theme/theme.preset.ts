import { css } from 'styled-components';

import { FontSize, FontWeight, FONT_SIZES, FONT_WEIGHT } from 'styles/font';

export interface Flex {
  gap?: string;
}

export interface Typography {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

export const cssHorizontalGap = (gap?: string) => css`
  & > * + * {
    margin-left: ${gap ?? '8px'};
  }
`;

export const cssVerticalGap = (gap?: string) => css`
  & > * + * {
    margin-top: ${gap ?? '8px'};
  }
`;

export const cssText = css<Typography>(
  ({ fontSize, fontWeight }) => `
  ${fontSize ? `font-size: ${FONT_SIZES[fontSize]};` : ''}
  ${fontWeight ? `font-weight: ${FONT_WEIGHT[fontWeight]};` : ''}
  `
);

export const cssAbsoluteCentralize = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssFullSizeAbsolute = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
`;

export const cssFullScreenFixed = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
`;

export const cssSquare = (size: string) => css`
  width: ${size};
  height: ${size};
`;

export const cssRound = (size: string) => css`
  ${cssSquare(size)}
  border-radius: 50%;
`;
