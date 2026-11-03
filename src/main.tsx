import {StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import PrivacyPage from './PrivacyPage.tsx';
import './index.css';

// The HTML is already in the page (prerender.mjs); this only wakes it up.
// /privacy is its own prerendered page; everything else is the home page.
const isPrivacy = /^\/privacy\/?$/.test(window.location.pathname);

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    {isPrivacy ? <PrivacyPage /> : <App />}
  </StrictMode>,
);
