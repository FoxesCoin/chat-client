import styled from 'styled-components';

import {
  cssFlexCenter,
  cssHorizontalGap,
  cssText,
  cssVerticalGap,
  GapStyling,
  Typography,
} from './theme.preset';

const showCursor = (props: any) => (props.onClick ? 'cursor: pointer;' : '');

export const Theme = {
  Paragraph: styled.p<Typography>`
    ${showCursor}
    ${cssText}
  `,
  Text: styled.span<Typography>`
    ${showCursor}
    ${cssText}
  `,
  FlexLine: styled.div`
    ${showCursor}
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  GapRow: styled.div<GapStyling>`
    ${showCursor}
    ${(props) => cssHorizontalGap(props?.gap)}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div<GapStyling>`
    ${showCursor}
    ${(props) => cssVerticalGap(props?.gap)}
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  FlexCenter: styled.div`
    ${showCursor}
    ${cssFlexCenter}
  `,
};
