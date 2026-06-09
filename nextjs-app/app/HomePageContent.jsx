'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, MapPin, Phone, Mail, Award, Layers, Clock, Leaf,
  CalendarDays, MessageCircle, ChevronDown, HelpCircle,
} from 'lucide-react';

/* ─── Hero slideshow images ─────────────────────────────────────── */
const HERO_SLIDES = [
  '/hero-bg.jpg',
  '/gallery/geburtstag-2.jpg',
  '/gallery/hochzeit-1.jpg',
  '/gallery/kinder-1.jpg',
  '/gallery/geburtstag-4.jpg',
];

/* ─── Balloon animation ──────────────────────────────────────────── */
const balloonColors = [
  'text-pink-400', 'text-blue-400', 'text-yellow-400',
  'text-green-400', 'text-orange-400', 'text-purple-400',
];
const balloonShapes = ['balloon-shape-round', 'balloon-shape-heart', 'balloon-shape-star'];
const balloonPositions = [
  { left: '8%', duration: '18s', delay: '0s', scale: 0.8 },
  { left: '15%', duration: '22s', delay: '3s', scale: 1.1 },
  { left: '25%', duration: '16s', delay: '1s', scale: 0.7 },
  { left: '35%', duration: '20s', delay: '5s', scale: 0.9 },
  { left: '45%', duration: '17s', delay: '2s', scale: 1.2 },
  { left: '55%', duration: '24s', delay: '4s', scale: 0.6 },
  { left: '63%', duration: '19s', delay: '0.5s', scale: 1.0 },
  { left: '72%', duration: '21s', delay: '3.5s', scale: 0.8 },
  { left: '80%', duration: '15s', delay: '1.5s', scale: 1.1 },
  { left: '88%', duration: '23s', delay: '6s', scale: 0.7 },
  { left: '12%', duration: '25s', delay: '2.5s', scale: 0.9 },
  { left: '50%', duration: '18s', delay: '7s', scale: 1.0 },
  { left: '30%', duration: '20s', delay: '4.5s', scale: 0.8 },
  { left: '68%', duration: '22s', delay: '1.2s', scale: 1.2 },
  { left: '92%', duration: '16s', delay: '3.8s', scale: 0.7 },
];

/* ─── Occasions ──────────────────────────────────────────────────── */
const occasions = [
  { emoji: '🎂', title: 'Geburtstag', description: 'Feiern Sie mit bunten Ballons', path: '/services/geburtstag' },
  { emoji: '💍', title: 'Hochzeit', description: 'Romantische Ballondekoration', path: '/services/hochzeit' },
  { emoji: '🎊', title: 'Kindergeburtstag', description: 'Spaß für die Kleinen', path: '/services/kindergeburtstag' },
  { emoji: '🎀', title: 'Gender Reveal/Babyparty', description: 'Unvergessliche Momente feiern', path: '/services/gender-reveal-babyparty' },
  { emoji: '👶', title: 'Geburt & Baby', description: 'Süße Ballons für den Nachwuchs', path: '/services/geburt-baby' },
  { emoji: '❤️', title: 'Liebe & Valentinstag', description: 'Romantische Ballons für besondere Momente', path: '/services/liebe-valentinstag' },
  { emoji: '✝️', title: 'Religiöse Anlässe', description: 'Taufe, Konfirmation und mehr', path: '/services/religiose-anlasse' },
  { emoji: '📚', title: 'Prüfung/Abschluss', description: 'Abitur, Abschluss und Meilensteine', path: '/services/prufung-abschluss' },
  { emoji: '🎒', title: 'Schulanfang', description: 'Motivierende Schulballons', path: '/services/schulanfang' },
  { emoji: '🎃', title: 'Halloween', description: 'Gruselige Ballondeko', path: '/services/halloween' },
  { emoji: '🎄', title: 'Weihnachten', description: 'Festliche Weihnachtsballons', path: '/services/weihnachten' },
  { emoji: '🎉', title: 'Sonstige Anlässe', description: 'Welcome, Gute Besserung, Führerschein & mehr', path: '/services/sonstige-anlasse' },
];

/* ─── FAQ (compact subset for homepage) ─────────────────────────── */
const faqCategories = [
  {
    category: 'Haltbarkeit & Helium',
    items: [
      { q: 'Wie lange halten Ballons mit Helium?', a: 'Latexballons: ca. 6–12 Stunden, mit Hi-Float 1–3 Tage. Folienballons: 3–7 Tage oder länger.' },
      { q: 'Wie lange halten Ballons ohne Helium (mit Luft)?', a: 'Mit Luft gefüllte Ballons halten oft mehrere Tage bis Wochen.' },
      { q: 'Warum werden meine Ballons kleiner?', a: 'Ballons verlieren mit der Zeit langsam Gas. Kälte lässt den Ballon schrumpfen – in Wärme dehnt er sich wieder aus.' },
    ],
  },
  {
    category: 'Bestellung & Verfügbarkeit',
    items: [
      { q: 'Muss ich Ballons im Voraus bestellen?', a: 'Für größere Mengen und aufwendige Dekorationen empfehlen wir Vorbestellung (2–3 Tage). Kleinere Mengen oft spontan möglich.' },
      { q: 'Kann ich Ballons spontan kaufen?', a: 'Ja 😊 Wir haben eine sehr große Auswahl direkt im Laden für spontane Besuche.' },
      { q: 'Wie habt ihr geöffnet?', a: 'Unsere Öffnungszeiten finden Sie auf der Kontaktseite. Gelegentlich gibt es kurze Schließzeiten (Urlaub, Messen) – wir informieren rechtzeitig.' },
    ],
  },
  {
    category: 'Helium & Sicherheit',
    items: [
      { q: 'Kann man bei euch Helium kaufen?', a: 'Ja – wir haben Einweg-Heliumflaschen (30 oder 50 Ballons). Größere Mietflaschen auf Anfrage (Kaution 100 €).' },
      { q: 'Ist Helium gefährlich?', a: 'Helium ist ungiftig und geruchlos. Nicht einatmen! Es kann Sauerstoff verdrängen und zu Schwindel führen.' },
      { q: 'Ist Helium entflammbar?', a: 'Nein – Helium ist ein Edelgas und vollkommen nicht brennbar. Verwechseln Sie es nicht mit Wasserstoff.' },
    ],
  },
  {
    category: 'Besondere Ballons & Personalisierung',
    items: [
      { q: 'Kann ich Ballons personalisieren lassen?', a: 'Ja! Wir gestalten Ballons mit Namen, Zahlen oder individuellen Texten – perfekt für Geburtstage, Hochzeiten oder Events.' },
      { q: 'Kann ich Geld in Ballons verpacken?', a: 'Ja, das ist möglich! Bitte Bargeld mitbringen und den Ballon vorab bestellen.' },
      { q: 'Macht ihr Ballons für Gender Reveal?', a: 'Ja – mit Helium (für gleichen Tag) oder Luft (für später). Auf Wunsch auch mit Konfetti oder Puderkanonen.' },
    ],
  },
  {
    category: 'Transport & Lagerung',
    items: [
      { q: 'Wie transportiere ich Ballons am besten?', a: 'Im Auto auf dem Rücksitz – nicht in direkter Sonne oder Kälte lagern. Große Ballons locker transportieren.' },
      { q: 'Was muss ich bei Ballons beachten?', a: 'Vor Hitze/Sonne schützen, Kälte vermeiden, von spitzen Gegenständen fernhalten. In temperierten Räumen lagern.' },
    ],
  },
  {
    category: 'Umwelt',
    items: [
      { q: 'Dürfen Ballons steigen gelassen werden?', a: 'Grundsätzlich ja. In Lahr besondere Regelungen wegen Flughafen beachten! Nur Latexballons mit Bioband sind umweltfreundlich.' },
      { q: 'Sind alle Ballons umweltfreundlich?', a: 'Latexballons sind biologisch abbaubar. Folien-/Kunststoffballons hingegen nicht.' },
    ],
  },
  {
    category: 'Geschenke & Dekoration',
    items: [
      { q: 'Welche Ballons eignen sich als Geschenk?', a: 'Jeder Ballon! Besonders beliebt: personalisierte Ballons oder Ballons mit verpacktem Geld.' },
      { q: 'Bietet ihr auch Komplettdekorationen an?', a: 'Ja – für Geburtstage, Hochzeiten, Firmenfeiern. Rechtzeitige Vorbestellung nötig (je nach Umfang).' },
    ],
  },
];

/* ─── Framer variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* ─── FAQ item ───────────────────────────────────────────────────── */
function HomeFAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 text-left px-4 py-3 hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function HomePageContent() {
  const [faqCategory, setFaqCategory] = useState(null);
  const [faqOpenKey, setFaqOpenKey] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleFaqCats = faqCategory
    ? faqCategories.filter((c) => c.category === faqCategory)
    : faqCategories;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow background */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={slideIndex}
              src={HERO_SLIDES[slideIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              fetchpriority={slideIndex === 0 ? 'high' : undefined}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === slideIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating balloons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {balloonPositions.map((pos, i) => (
            <div
              key={i}
              className={`balloon-wrapper ${balloonColors[i % balloonColors.length]}`}
              style={{ left: pos.left, animationDuration: pos.duration, animationDelay: pos.delay, transform: `scale(${pos.scale})` }}
            >
              <div className={balloonShapes[i % balloonShapes.length]}>
                <div className="balloon-string" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl text-center z-10 pt-36 pb-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-9xl mt-8 md:mt-0 mb-8 inline-block"
            >
              🎈
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Für jeden Anlass den{' '}
              <span className="text-pink-300">perfekten Ballon</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Willkommen bei Ballonkunst Lahr – Ihrem Spezialgeschäft für Ballons und kreative
              Geschenkideen im Herzen von Lahr. Wir bringen Farbe in Ihr Leben!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Jetzt vorbeikommen <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/anlasse"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Ballons vorbestellen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Occasions Grid (FIRST after hero) ───────────────────── */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Ballons für jeden Anlass
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              Bei Ballonkunst Lahr finden Sie eine riesige Auswahl an Ballons für jeden Anlass –
              von klassischen Latexballons über elegante Folienballons bis hin zu personalisierten
              Ballons mit Beschriftung. Wir haben alles, was Ihr Herz begehrt.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              Entdecken Sie unsere vielfältige Auswahl für alle besonderen Momente.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {occasions.map((occasion, index) => (
              <Link href={occasion.path} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center cursor-pointer group h-full flex flex-col justify-center"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {occasion.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{occasion.title}</h3>
                  <p className="text-sm text-gray-600">{occasion.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Business Info Banner (stats – AFTER occasions) ───────── */}
      <section className="relative -mt-0 z-20 bg-white py-2">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100"
          >
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">19 Jahre Erfahrung</h3>
              <p className="text-gray-600">mit Ballons und Dekorationen in Lahr</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">600+ Themenballons</h3>
              <p className="text-gray-600">riesige Auswahl für jeden Anlass</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nachhaltigkeit & Umwelt</h3>
              <p className="text-gray-600">Auch naturabbaubare Ballons erhältlich</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Geschenke & Deko</h3>
              <p className="text-gray-600 font-medium text-primary">Bitte rechtzeitig vorbestellen!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gift Ideas ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kreative Geschenkideen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Überraschen Sie Ihre Liebsten mit einzigartigen Ballongeschenken! Von Ballonboxen über
              Ballonsträuße bis hin zu Geldgeschenk-Ballons – bei uns finden Sie das perfekte Geschenk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Ballonboxen', description: 'Überraschungsboxen gefüllt mit bunten Ballons', icon: '🎁' },
              { title: 'Ballonsträuße', description: 'Wunderschöne Arrangements für besondere Momente', icon: '💐' },
              { title: 'Geldgeschenke', description: 'Kreative Verpackungen für Geldgeschenke', icon: '💰' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
              >
                <div className="text-7xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dekoration"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Zur Dekoration <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ──────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-pink-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impressionen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lassen Sie sich von unseren kreativen Ballondekorationen inspirieren
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              '/gallery/geburtstag-1.jpg', '/gallery/hochzeit-1.jpg',
              '/gallery/kinder-1.jpg', '/gallery/geburtstag-2.jpg',
              '/gallery/hochzeit-2.jpg', '/gallery/kinder-2.jpg',
              '/gallery/geburtstag-3.jpg', '/gallery/hochzeit-3.jpg',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/galerie"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Zur Galerie <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Besuchen Sie uns in Lahr!</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Wir freuen uns auf Ihren Besuch in unserem Geschäft. Lassen Sie sich persönlich beraten
              und entdecken Sie unsere große Auswahl an Ballons und Geschenkideen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Adresse</h3>
                <p>Kaiserstraße 25</p>
                <p>77933 Lahr</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefon</h3>
                <a href="tel:+4978213270082" className="hover:underline">+49 7821 327082</a>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <a href="https://wa.me/491781510567?text=Hallo%20Ballonkunst%20Lahr%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Ballons!" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +49 178 1510567
                </a>
              </div>
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Kontakt <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Häufige Fragen</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Schnelle Antworten auf die wichtigsten Fragen. Mehr auf der{' '}
              <Link href="/faq" className="text-primary underline hover:text-primary/80">FAQ-Seite</Link>.
            </p>
          </motion.div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => { setFaqCategory(null); setFaqOpenKey(null); }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                faqCategory === null ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              Alle
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setFaqCategory(cat.category); setFaqOpenKey(null); }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  faqCategory === cat.category ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={faqCategory ?? 'all'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-6"
            >
              {visibleFaqCats.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-base font-bold text-gray-700 mb-2 px-1 uppercase tracking-wide text-xs">
                    {cat.category}
                  </h3>
                  <div className="space-y-2">
                    {cat.items.map((item) => {
                      const key = `${cat.category}-${item.q}`;
                      return (
                        <HomeFAQItem
                          key={key}
                          q={item.q}
                          a={item.a}
                          isOpen={faqOpenKey === key}
                          onToggle={() => setFaqOpenKey(faqOpenKey === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg"
            >
              Alle Fragen ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
