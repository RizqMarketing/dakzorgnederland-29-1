import { useState, useEffect } from 'react';
import { Shield, Settings, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hasConsent, setConsent } from '../utils/cookieConsent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (!hasConsent()) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    setConsent({ essential: true, marketing: true, analytics: true });
    setVisible(false);
  };

  const rejectNonEssential = () => {
    setConsent({ essential: true, marketing: false, analytics: false });
    setVisible(false);
  };

  const savePreferences = () => {
    setConsent({ essential: true, marketing, analytics });
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-fade-in"
        onClick={rejectNonEssential}
      />

      {/* Banner */}
      <div className="relative w-full max-w-2xl mx-3 mb-3 sm:mx-4 sm:mb-4 animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
          {/* Header */}
          <div className="p-5 sm:p-6 pb-3 sm:pb-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Wij respecteren uw privacy
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Wij gebruiken cookies om onze website te verbeteren en om de effectiviteit
                  van onze advertenties te meten via Google Ads en Facebook. U kunt zelf
                  kiezen welke cookies u accepteert.{' '}
                  <Link
                    to="/cookiebeleid"
                    className="text-brand-600 hover:text-brand-700 underline"
                  >
                    Lees ons cookiebeleid
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="px-5 sm:px-6 pb-3 sm:pb-4 space-y-2">
              <div className="border-t border-stone-100 pt-3" />

              {/* Essential */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                <div className="pr-4">
                  <p className="font-semibold text-slate-900 text-sm">Noodzakelijke cookies</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Vereist voor de basisfunctionaliteit
                  </p>
                </div>
                <div className="flex-shrink-0 w-11 h-6 bg-brand-500 rounded-full relative cursor-not-allowed opacity-80">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                <div className="pr-4">
                  <p className="font-semibold text-slate-900 text-sm">Marketing cookies</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Google Ads & Facebook Pixel voor advertenties
                  </p>
                </div>
                <button
                  onClick={() => setMarketing(!marketing)}
                  className={`flex-shrink-0 relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    marketing ? 'bg-brand-500' : 'bg-stone-300'
                  }`}
                  aria-label="Marketing cookies aan/uit"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
                      marketing ? 'left-[22px]' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                <div className="pr-4">
                  <p className="font-semibold text-slate-900 text-sm">Analytische cookies</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Helpen ons de website te verbeteren
                  </p>
                </div>
                <button
                  onClick={() => setAnalytics(!analytics)}
                  className={`flex-shrink-0 relative w-11 h-6 rounded-full transition-colors duration-200 ${
                    analytics ? 'bg-brand-500' : 'bg-stone-300'
                  }`}
                  aria-label="Analytische cookies aan/uit"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
                      analytics ? 'left-[22px]' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-5 sm:p-6 pt-2 sm:pt-3 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={acceptAll}
              className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 sm:py-3 px-5 rounded-xl transition-all duration-200 text-sm"
            >
              Alles accepteren
            </button>
            {showSettings ? (
              <button
                onClick={savePreferences}
                className="flex-1 bg-stone-900 hover:bg-stone-800 text-white font-bold py-2.5 sm:py-3 px-5 rounded-xl transition-all duration-200 text-sm"
              >
                Voorkeuren opslaan
              </button>
            ) : (
              <button
                onClick={rejectNonEssential}
                className="flex-1 bg-stone-100 hover:bg-stone-200 text-slate-900 font-bold py-2.5 sm:py-3 px-5 rounded-xl transition-all duration-200 text-sm"
              >
                Alleen noodzakelijk
              </button>
            )}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center justify-center gap-1.5 text-stone-600 hover:text-slate-900 font-semibold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-200 text-sm border border-stone-200 hover:border-stone-300"
            >
              {showSettings ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Sluiten
                </>
              ) : (
                <>
                  <Settings className="w-4 h-4" />
                  Instellingen
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
