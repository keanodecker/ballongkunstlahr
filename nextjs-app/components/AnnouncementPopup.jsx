'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function AnnouncementPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="popup"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative pointer-events-auto max-h-[88vh] flex flex-col"
            >
              <button
                onClick={() => setVisible(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-200 transition-colors z-10"
                aria-label="Schließen"
              >
                <X className="w-5 h-5 text-yellow-700" />
              </button>

              <div className="flex items-center gap-2 text-yellow-700 mb-4 pr-8">
                <span className="text-2xl flex-shrink-0">🎈</span>
                <span className="font-bold text-lg leading-tight">
                  Wichtige Information für unsere Kunden
                </span>
              </div>

              <div className="text-yellow-900 leading-relaxed text-sm sm:text-base space-y-4 overflow-y-auto pr-1">
                <div className="bg-red-600 text-white rounded-xl p-4 shadow-md">
                  <p className="font-extrabold text-base sm:text-lg flex items-center gap-2 uppercase tracking-wide">
                    <span className="text-2xl">⚠️</span> Einmalige Ausnahme
                  </p>
                  <p className="mt-2 font-bold text-base sm:text-lg leading-snug">
                    Nur diesen Donnerstag, den 30.07., haben wir ausschließlich von{' '}
                    <span className="underline decoration-2">16:00 – 18:00 Uhr</span> geöffnet!
                  </p>
                  <p className="mt-2 text-sm text-red-50">
                    An allen anderen Donnerstagen gelten die regulären Zeiten (09:30 – 12:30 Uhr).
                  </p>
                </div>

                <p>Liebe Kunden,</p>
                <p>
                  bitte beachten Sie unsere geänderten Öffnungszeiten während der Sommerzeit:
                </p>

                <div>
                  <p className="font-bold flex items-center gap-2">
                    <span>☀️</span> Sommeröffnungszeiten im August
                  </p>
                  <p className="mt-1">
                    Im gesamten August sind wir zu folgenden Zeiten für Sie da:
                  </p>
                  <div className="mt-3 bg-white/60 rounded-xl p-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-medium">Mo, Di, Do &amp; Fr</span>
                      <span className="whitespace-nowrap">🕤 09:30 – 12:30 Uhr</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-medium">Samstag</span>
                      <span className="whitespace-nowrap">🕤 09:30 – 13:00 Uhr</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-medium">Mittwoch</span>
                      <span className="whitespace-nowrap">❌ geschlossen</span>
                    </div>
                  </div>
                </div>

                <p>
                  Ab September gelten wieder unsere <strong>regulären Öffnungszeiten</strong>.
                </p>
                <p>
                  Vielen Dank für Ihr Verständnis. Wir wünschen Ihnen einen schönen Sommer und
                  freuen uns auf Ihren Besuch! 🎈😊
                </p>
              </div>

              <button
                onClick={() => setVisible(false)}
                className="mt-5 w-full py-2.5 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-semibold rounded-xl transition-colors text-sm flex-shrink-0"
              >
                Verstanden &amp; schließen
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
