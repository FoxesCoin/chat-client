import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'pages/app';
import { ThemeContainer } from 'pages/theme-container';

import { store } from 'utils/store';

import { GlobalStyle } from 'styles/global';
import 'styles/reset.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root component not found');
}

const root = createRoot(container);

const Root = ({ children }: { children: ReactNode }) => {
  if (process.env.NODE_ENV === 'development') {
    return <React.StrictMode>{children}</React.StrictMode>;
  }

  return <>{children}</>;
};

root.render(
  <Root>
    <Provider store={store}>
      <ThemeContainer>
        <GlobalStyle />
        <App />
      </ThemeContainer>
    </Provider>
  </Root>
);
