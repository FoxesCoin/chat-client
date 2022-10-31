import { css } from 'styled-components';

import { FontSize, FontWeight, FONT_SIZES, FONT_WEIGHT } from 'styles/font';

export interface GapStyling {
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

export const cssVerticalCentralize = css`
  top: 50%;
  transform: translateY(-50%);
`;

export const cssHideScrollbar = css`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const cssSquare = (size: string) => css`
  width: ${size};
  height: ${size};
`;

export const cssRound = (size: string) => css`
  ${cssSquare(size)}
  border-radius: 50%;
`;
