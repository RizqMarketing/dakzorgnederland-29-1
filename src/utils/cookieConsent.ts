export interface CookieConsent {
  essential: boolean;
  marketing: boolean;
  analytics: boolean;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    _fbq: any;
  }
}

const CONSENT_KEY = 'dakzorg_cookie_consent';
const CONSENT_DATE_KEY = 'dakzorg_cookie_consent_date';

export function getConsent(): CookieConsent | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {}
  return null;
}

export function setConsent(consent: CookieConsent): void {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
  applyConsent(consent);
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}

export function applyConsent(consent: CookieConsent): void {
  if (consent.marketing) {
    loadGoogleAds();
    loadFacebookPixel();
  }
}

/** Initialize consent on page load — loads scripts if user previously accepted */
export function initConsent(): void {
  const consent = getConsent();
  if (consent) {
    applyConsent(consent);
  }
}

function loadGoogleAds(): void {
  // Prevent double-loading
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js?id=AW-17928005169"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17928005169';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'AW-17928005169');
}

function loadFacebookPixel(): void {
  // Prevent double-loading
  if (document.querySelector('script[src*="connect.facebook.net"]')) return;

  const n: any = (window.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  });
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', '1295475249253352');
  window.fbq('track', 'PageView');
}
