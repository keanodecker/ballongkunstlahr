'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Layers, Clock, Leaf, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const ServicePage = ({ serviceId, title: defaultTitle, description: defaultDesc, heroImage: defaultHero }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDesc);
  const [heroImage, setHeroImage] = useState(defaultHero);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      const keys = [`service_${serviceId}_title`, `service_${serviceId}_description`, `service_${serviceId}_hero`];
      const [{ data: settings }, { data: imgs }] = await Promise.all([
        supabase.from('site_settings').select('key, value').in('key', keys),
        supabase.from('gallery_images').select('*').eq('category', serviceId).order('created_at', { ascending: false }),
      ]);
      settings?.forEach(({ key, value }) => {
        if (!value) return;
        if (key.endsWith('_title')) setTitle(value);
        if (key.endsWith('_description')) setDescription(value);
        if (key.endsWith('_hero')) setHeroImage(value);
      });
      setImages(imgs ?? []);
      setLoaded(true);
    }
    load();
  }, [serviceId]);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 drop-shadow-md">
            {description}
          </motion.p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { Icon: Award, color: 'text-primary', title: '19 Jahre Erfahrung', sub: 'mit Ballons' },
              { Icon: Layers, color: 'text-secondary', title: '600+ Themenballons', sub: 'verschiedene zur Auswahl' },
              { Icon: Leaf, color: 'text-green-600', title: 'Nachhaltigkeit & Umwelt', sub: 'naturabbaubare Ballons' },
              { Icon: Clock, color: 'text-accent', title: 'Geschenke & Dekoration', sub: 'bitte rechtzeitig vorbestellen' },
            ].map(({ Icon, color, title: t, sub }) => (
              <div key={t} className="flex flex-col items-center justify-center p-4">
                <Icon className={`w-8 h-8 ${color} mb-2`} />
                <span className="font-semibold text-gray-900">{t}</span>
                <span className="text-sm text-gray-500">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <ImageIcon className="w-8 h-8 text-primary" /> Galerie
        </h2>

        {!loaded ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-pink-400" />
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
              <motion.div key={img.id}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img)}
                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img src={img.image_url} alt={img.caption ?? title} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-dashed border-primary/30">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Besuchen Sie uns!</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Für aktuelle Bilder unserer {title}-Dekorationen besuchen Sie uns in unserem Geschäft in Lahr
              oder folgen Sie uns auf Instagram.
            </p>
            <a href="https://www.instagram.com/ballonkunst_lahr/" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors">
              Instagram besuchen
            </a>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} className="relative max-w-4xl max-h-[90vh] w-full">
              <button onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition">
                <X className="w-6 h-6 text-white" />
              </button>
              <img src={selectedImage.image_url} alt={selectedImage.caption ?? title}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
              {selectedImage.caption && (
                <p className="text-white text-center mt-3 text-sm">{selectedImage.caption}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicePage;
