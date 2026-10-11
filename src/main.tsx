import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// The HTML is already in the page (prerender.mjs); this only wakes it up.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
);
