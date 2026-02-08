import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import emailjs from '@emailjs/browser';
import { initConsent } from './utils/cookieConsent';

// Load tracking scripts if user previously gave consent
initConsent();

// Initialize EmailJS with your public key
emailjs.init("lB8UjLGOgM6138jRr");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);