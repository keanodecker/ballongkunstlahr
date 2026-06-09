'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CalendarDays } from 'lucide-react';

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
              className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 max-w-md w-full shadow-2xl relative pointer-events-auto"
            >
              <button
                onClick={() => setVisible(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-200 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5 text-yellow-700" />
              </button>

              <div className="flex items-center gap-2 text-yellow-700 mb-3">
                <CalendarDays className="w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-lg">Aktuelle Hinweise</span>
              </div>

              <p className="text-yellow-800 leading-relaxed text-sm sm:text-base">
                Bitte beachten Sie unsere geänderten Öffnungszeiten an Feiertagen. Für besondere
                Anlässe empfehlen wir eine{' '}
                <strong>rechtzeitige Vorbestellung</strong> (mindestens 2–3 Tage im Voraus).
              </p>

              <button
                onClick={() => setVisible(false)}
                className="mt-5 w-full py-2.5 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white font-semibold rounded-xl transition-colors text-sm"
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
