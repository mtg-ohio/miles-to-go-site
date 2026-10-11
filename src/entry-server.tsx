import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';

// Build-time only: the page as plain HTML, so it reads without JavaScript.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
