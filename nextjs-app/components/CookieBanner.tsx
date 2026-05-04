'use client';

import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

type ConsentPreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentData = {
  decided: boolean;
  preferences: ConsentPreferences;
  timestamp: number;
};

const STORAGE_KEY = 'cookieConsent';

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

function CategoryToggle({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl">
      <div className="flex-1">
        <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        role="switch"
        aria-checked={enabled}
        aria-label={enabled ? 'Deaktivieren' : 'Aktivieren'}
        className={`flex-shrink-0 w-10 h-6 rounded-full transition-colors duration-200 relative ${
          enabled ? 'bg-primary' : 'bg-gray-200'
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            enabled ? 'translate-x-5' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>({ ...defaultPreferences });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }

    const handleReopen = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const data: ConsentData = JSON.parse(stored);
          setPrefs(data.preferences);
        }
      } catch {}
      setShowConfig(true);
      setVisible(true);
    };

    window.addEventListener('openCookieSettings', handleReopen);
    return () => window.removeEventListener('openCookieSettings', handleReopen);
  }, []);

  const saveConsent = (preferences: ConsentPreferences) => {
    const data: ConsentData = { decided: true, preferences, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setVisible(false);
    setShowConfig(false);
  };

  const acceptAll = () =>
    saveConsent({ necessary: true, functional: true, analytics: true, marketing: true });

  const rejectAll = () =>
    saveConsent({ necessary: true, functional: false, analytics: false, marketing: false });

  const saveConfig = () => saveConsent(prefs);

  if (!visible) return null;

  return (
    <>
      {showConfig && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowConfig(false)}
        />
      )}

      {!showConfig && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                  Wir respektieren Ihre Privatsphäre
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Nutzungserfahrung zu bieten.
                  Technisch notwendige Cookies werden stets gesetzt. Weitere Informationen in unserer{' '}
                  <a href="/datenschutz" className="text-primary underline hover:text-primary/80">
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
              <button
                onClick={acceptAll}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Accept all
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Reject all
              </button>
              <button
                onClick={() => setShowConfig(true)}
                className="flex-1 border border-gray-300 hover:border-primary hover:text-primary text-gray-600 font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Configure
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfig && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-6">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-gray-900">Cookie-Einstellungen</h3>
              </div>
              <button
                onClick={() => setShowConfig(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-3 max-h-[55vh] overflow-y-auto">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Notwendige Cookies</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Diese Cookies sind für den Betrieb der Website erforderlich und können nicht
                    deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einwilligung.
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-6 bg-primary/40 rounded-full cursor-not-allowed" />
              </div>

              <CategoryToggle
                title="Funktionale Cookies"
                description="Ermöglichen erweiterte Funktionen wie das Speichern von Einstellungen und Präferenzen."
                enabled={prefs.functional}
                onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
              <CategoryToggle
                title="Analyse-Cookies"
                description="Helfen uns zu verstehen, wie Besucher unsere Website nutzen. Aktuell nicht in Verwendung."
                enabled={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryToggle
                title="Marketing-Cookies"
                description="Werden verwendet, um Ihnen relevante Werbung anzuzeigen. Aktuell nicht in Verwendung."
                enabled={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-5 sm:p-6 border-t border-gray-100">
              <button
                onClick={acceptAll}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Accept all
              </button>
              <button
                onClick={rejectAll}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Reject all
              </button>
              <button
                onClick={saveConfig}
                className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 px-4 rounded-full transition-all duration-200 text-sm"
              >
                Save settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
