import { createGlobalStyle } from 'styled-components';

import { COLORS } from './color';
import { FONT_SIZES } from './font-size';
import { PC_MEDIA } from './media';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: ${FONT_SIZES.regular};
  color: ${COLORS.black};
}

*, *::before, *::after {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

#root {
  
  ${PC_MEDIA} {
    grid-template-columns: min-content 1fr;
  }
}
`;
