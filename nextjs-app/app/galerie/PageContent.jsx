'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, Loader2 } from 'lucide-react';
import ConsultationCTA from '@/components/ConsultationCTA';
import { supabase } from '@/lib/supabase';

const CATEGORY_LABELS = {
  'hochzeit': 'Hochzeit',
  'geburtstag': 'Geburtstag',
  'kindergeburtstag': 'Kindergeburtstag',
  'baby-shower': 'Baby Shower',
  'geburt-baby': 'Geburt & Baby',
  'schulanfang': 'Schulanfang',
  'taufe': 'Taufe',
  'abitur-konfirmation': 'Abitur & Konfirmation',
  'halloween': 'Halloween',
  'weihnachten': 'Weihnachten',
  'liebe-valentinstag': 'Valentinstag',
};

export default function GalleryPage() {
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    supabase.from('gallery_images').select('*').order('created_at', { ascending: false })
      .then(({ data }) => { setAllImages(data ?? []); setLoading(false); });
  }, []);

  const categories = ['Alle', ...Array.from(new Set(
    allImages.filter(img => img.category).map(img => CATEGORY_LABELS[img.category] || img.category)
  ))];

  const filteredItems = activeFilter === 'Alle'
    ? allImages
    : allImages.filter(img => (CATEGORY_LABELS[img.category] || img.category) === activeFilter);

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex flex-col">
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Galerie</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lassen Sie sich von unseren bisherigen Arbeiten und Ballondekorationen inspirieren.
          </p>
        </div>
      </section>

      {categories.length > 1 && (
        <section className="py-6 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-20 z-30 shadow-sm">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600 mr-2 hidden sm:block" />
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                    activeFilter === cat
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'border-gray-200 text-gray-700 hover:border-primary hover:text-primary bg-white'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-10 h-10 animate-spin text-pink-400" /></div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-lg">Noch keine Bilder vorhanden</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div key={item.id} layout
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                    onClick={() => setSelectedItem(item)} whileHover={{ scale: 1.03 }}
                    className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative">
                    <img src={item.image_url} alt={item.caption ?? ''} className="w-full h-full object-cover" />
                    {(item.caption || item.category) && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-end">
                        <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                          {item.caption && <p className="text-white text-sm font-medium truncate">{item.caption}</p>}
                          {item.category && (
                            <span className="text-xs text-white/80 bg-white/20 px-2 py-0.5 rounded-full">
                              {CATEGORY_LABELS[item.category] || item.category}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          <div className="mt-12 bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mehr Bilder auf Instagram</h3>
            <p className="text-gray-600 mb-4">Entdecken Sie noch mehr Inspirationen auf unserem Instagram-Profil!</p>
            <a href="https://www.instagram.com/ballonkunst_lahr/" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors">
              Zu Instagram
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} className="relative max-w-4xl max-h-[90vh] w-full">
              <button onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <X className="w-6 h-6 text-white" />
              </button>
              <img src={selectedItem.image_url} alt={selectedItem.caption ?? ''}
                className="w-full max-h-[85vh] object-contain rounded-xl" />
              {(selectedItem.caption || selectedItem.category) && (
                <div className="text-center mt-3">
                  {selectedItem.caption && <p className="text-white font-medium">{selectedItem.caption}</p>}
                  {selectedItem.category && (
                    <span className="text-sm text-white/70">{CATEGORY_LABELS[selectedItem.category] || selectedItem.category}</span>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConsultationCTA />
    </div>
  );
}
