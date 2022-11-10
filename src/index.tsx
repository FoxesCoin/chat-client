import { createRoot } from 'react-dom/client';

import { App } from 'pages/app';
import { RootProvider } from 'pages/root-provider';

import 'styles/reset.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root component not found');
}

const root = createRoot(container);

root.render(
  <RootProvider>
    <App />
  </RootProvider>
);
