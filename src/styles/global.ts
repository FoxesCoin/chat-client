import { createGlobalStyle } from 'styled-components';
import { FONT_SIZES, FONT_WEIGHT } from './font';
import { PC_MEDIA } from './media';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: ${FONT_SIZES.regular};
  font-weight: ${FONT_WEIGHT.regular};
  color: ${(props) => props.theme.text};
  font-family: 'Rubik', sans-serif;    
}

*, ::before, ::after {
  box-sizing: border-box;  
  min-width: 0;
  min-height: 0;
}

* { 
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

body,
html,
#root {
  height: 100vh;
  width: 100%;
}

#modal {
  position: relative;
  z-index: 5;
}

// If we have open modal block scroll in #root
#modal:not(:empty) ~ #root {
  overflow: hidden;
}



#root {
  display: grid;
  
  ${PC_MEDIA} {
    grid-template-columns: min-content 1fr;
  }
}
`;
