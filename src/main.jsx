import '@styles/index.css';
import { App } from '@components';
import { CurrentPageProvider } from '@contexts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrentPageProvider>
      <App/>
    </CurrentPageProvider>
  </StrictMode>
);
