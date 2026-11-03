import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';
import PrivacyPage from './PrivacyPage.tsx';

// Build-time only: a page as plain HTML, so it reads without JavaScript.
export function render(path = '/') {
  return renderToString(
    <StrictMode>
      {path === '/privacy' ? <PrivacyPage /> : <App />}
    </StrictMode>,
  );
}
