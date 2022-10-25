import { createGlobalStyle } from 'styled-components';

import { FONT_SIZES, FONT_WEIGHT } from './font';
import { PC_MEDIA } from './media';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: ${FONT_SIZES.regular};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${(props) => props.theme.text};
}

*, *::before, *::after {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

#root {
  
  ${PC_MEDIA} {
    grid-template-columns: min-content 300px 1fr;
  }
}
`;
