import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles/global';
import { RWrapper } from 'typings/react';
import { REDUX_STORE } from 'utils/store';
import { ThemeContainer } from './theme-container';

const Root = ({ children }: { children: ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    return <React.StrictMode>{children}</React.StrictMode>;
  }

  return <>{children}</>;
};

export const RootProvider = ({ children }: RWrapper) => (
  <Root>
    <Provider store={REDUX_STORE}>
      <ThemeContainer>
        <GlobalStyle />
        {children}
      </ThemeContainer>
    </Provider>
  </Root>
);
