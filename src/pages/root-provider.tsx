import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ThemeContainer } from './theme-container';

import { REDUX_STORE } from 'utils/store';

import { GlobalStyle } from 'styles/global';

import { RWrapper } from 'typings/react';

const Root = ({ children }: { children: ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    return <React.StrictMode>{children}</React.StrictMode>;
  }

  return <>{children}</>;
};

export const RootProvider: RWrapper = (props) => {
  const { children } = props;

  return (
    <Root>
      <Provider store={REDUX_STORE}>
        <ThemeContainer>
          <GlobalStyle />
          {children}
        </ThemeContainer>
      </Provider>
    </Root>
  );
};
