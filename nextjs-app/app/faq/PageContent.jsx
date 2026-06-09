'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    category: 'Haltbarkeit & Helium',
    items: [
      {
        q: 'Wie lange halten Ballons mit Helium?',
        a: (
          <>
            <p>Das hängt vom Material und der Behandlung ab:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Latexballons: ca. 6–12 Stunden</li>
              <li>
                Mit einer speziellen Versiegelung (z. B. Hi-Float) verlängert sich die Haltbarkeit
                auf ca. 1–3 Tage
              </li>
              <li>
                Folienballons: ca. 3–7 Tage, oft sogar länger (je nach Größe, Qualität und Lagerung)
              </li>
            </ul>
            <p className="mt-3">
              👉 Tipp: Für wichtige Anlässe empfehlen wir, Latexballons mit Hi-Float zu behandeln
              oder auf Folienballons zurückzugreifen, wenn sie länger schweben sollen.
            </p>
          </>
        ),
      },
      {
        q: 'Wie lange halten Ballons ohne Helium (mit Luft)?',
        a: (
          <p>
            Mit Luft gefüllte Ballons halten oft mehrere Tage bis Wochen, da keine Luft entweicht wie
            bei Helium.
          </p>
        ),
      },
      {
        q: 'Warum halten eure Ballons länger als meine?',
        a: (
          <>
            <p>
              Unsere Ballons bleiben länger schön und schweben länger, weil wir erfahren im Befüllen
              und Umgang mit Helium sind und hochwertige Materialien verwenden:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Optimale Befüllung: Wir füllen die Ballons mit der richtigen Heliummenge, damit sie
                nicht zu schnell absinken oder platzen.
              </li>
              <li>
                Hi-Float Behandlung bei Latexballons: Auf Wunsch versiegeln wir Latexballons mit
                Hi-Float, wodurch sie bis zu mehreren Tagen länger schweben.
              </li>
              <li>
                Hochwertige Materialien: Wir nutzen qualitativ geprüfte Latex- und Folienballons, die
                langlebiger sind als viele günstige Ballons aus dem Handel.
              </li>
              <li>
                Erfahrung: Erfahrungsgemäß berichten viele Kunden, dass selbstgefüllte Ballons oft
                bereits am nächsten Tag auf dem Boden liegen oder Folienballons platzen oder gar nicht
                schweben. Bei uns passiert das nicht, da wir wissen, wie man jede Art von Ballon
                professionell behandelt.
              </li>
            </ul>
            <p className="mt-3">
              👉 Das Ergebnis: Längere Haltbarkeit, sichere Handhabung und perfekte Optik – besonders
              bei wichtigen Anlässen zahlt sich das aus.
            </p>
          </>
        ),
      },
      {
        q: 'Warum werden meine Ballons kleiner?',
        a: (
          <>
            <p>
              Ballons verlieren mit der Zeit langsam Gas – bei Latexballons passiert das schneller als
              bei Folien- oder Bobo-Ballons. Außerdem kann Kälte den Ballon schrumpfen lassen, während
              er sich bei Wärme wieder ausdehnt.
            </p>
            <p className="mt-3">
              👉 Tipp: Für längeres Schweben von Latexballons eignet sich eine Behandlung mit
              Hi-Float, Folienballons bleiben in der Regel mehrere Tage bis Wochen prall.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Bestellung & Verfügbarkeit',
    items: [
      {
        q: 'Muss ich Ballons im Voraus bestellen?',
        a: (
          <>
            <p>
              Ja, sehr gerne! Bei größeren Mengen, aufwendigeren Dekorationen oder personalisierten
              Ballons empfehlen wir unbedingt eine Vorbestellung, damit wir alles in Ruhe und perfekt
              vorbereiten können. Bitte beachte, dass je nach Saison oder bei hohem Kundenaufkommen
              spontane oder kurzfristige Bestellungen in größeren Mengen oder aufwendige Dekorationen
              nicht immer möglich sind.
            </p>
            <p className="mt-3">
              Kleinere Mengen (bis ca. 10 Ballons) bekommst du oft auch spontan bei uns im Laden.
              Einzelne Ballons kannst du in der Regel direkt mitnehmen.
            </p>
          </>
        ),
      },
      {
        q: 'Kann ich Ballons spontan kaufen?',
        a: (
          <p>
            Ja 😊 Wir haben eine sehr große Auswahl direkt im Laden, sodass du auch spontan schöne
            Ballons für jeden Anlass findest. Für spezielle Wünsche oder größere Mengen bitte
            vorbestellen.
          </p>
        ),
      },
      {
        q: 'Kann ein bestimmter Ballon beim Lieferanten bestellt werden, wenn ihr ihn nicht vorrätig habt?',
        a: (
          <>
            <p>
              Grundsätzlich prüfen wir, ob der gewünschte Ballon beim Lieferanten verfügbar ist.
              Allerdings gibt es dabei einige Einschränkungen: Einzelne Ballons können meist nicht
              separat bestellt werden, da Lieferanten Mindestbestellmengen vorgeben oder zusätzliche
              Lieferkosten anfallen.
            </p>
            <p className="mt-3">
              Wenn wir gerade eine größere Bestellung aufgeben, kann der Ballon in der Regel
              mitbestellt werden. Lieferzeiten variieren je nach Produkt und sind nicht immer exakt
              kalkulierbar. Spontane oder kurzfristige Bestellungen sind daher leider nicht möglich.
            </p>
          </>
        ),
      },
      {
        q: 'Wie habt ihr geöffnet und gibt es Betriebsurlaub?',
        a: (
          <>
            <p>
              Unser Laden ist regulär zu den angegebenen Öffnungszeiten geöffnet. Diese findest du{' '}
              <Link href="/kontakt" className="text-primary underline hover:text-primary/80">
                HIER
              </Link>
              . Gelegentlich kann es kurze Schließzeiten geben, z. B. für Betriebsurlaub oder Messen.
            </p>
            <p className="mt-3">
              Wir informieren unsere Kunden rechtzeitig über solche Termine auf unserer Homepage{' '}
              <Link href="/" className="text-primary underline hover:text-primary/80">
                HIER
              </Link>
              , damit ihr eure Bestellungen oder Abholungen planen könnt.
            </p>
          </>
        ),
      },
      {
        q: 'Wo kommen eure Ballons her?',
        a: (
          <>
            <p>
              Wir beziehen unsere Ballons von verschiedenen namhaften Lieferanten, darunter Sempertex,
              Riedmüller, Amscan, PremiOloon und Party Deco.
            </p>
            <p className="mt-3">
              Die Produkte kommen teils aus Deutschland, teils aus dem europäischen Ausland oder auch
              international. Unser Ziel ist es, qualitativ hochwertige Ballons für jede Gelegenheit
              anzubieten, unabhängig vom Herkunftsland.
            </p>
            <p className="mt-3">
              👉 Wichtig für dich zu wissen: Je nach Hersteller und Lieferant kann das Sortiment
              leicht variieren, und nicht immer sind alle Varianten sofort verfügbar. Wir achten jedoch
              stets darauf, dass Material und Sicherheit den deutschen Standards entsprechen.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Helium & Sicherheit',
    items: [
      {
        q: 'Warum sollte ich Ballons bei euch kaufen und füllen lassen und nicht selbst im Internet bestellen?',
        a: (
          <>
            <p>
              Es gibt mehrere Gründe, warum es oft vorteilhafter ist, Ballons direkt bei uns zu kaufen
              und befüllen zu lassen:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>
                Qualität &amp; Sicherheit: Wir verwenden hochwertige Ballons und geprüfte
                Heliumflaschen, sodass deine Ballons lange schön schweben und keine Risiken entstehen.
              </li>
              <li>
                Richtige Befüllung: Das Befüllen mit Helium erfordert Erfahrung – zu viel oder zu wenig
                Helium kann die Haltbarkeit oder Optik beeinträchtigen. Erfahrungsgemäß berichten
                Kunden, dass selbstgefüllte Latexballons oft schon am nächsten Tag auf dem Boden liegen
                und Folienballons platzen oder gar nicht erst schweben. Bei uns passiert das nicht, da
                wir erfahren im Befüllen und Handling aller Ballonarten sind.
              </li>
              <li>
                Personalisierung &amp; Dekoration: Bei uns kannst du Text, Zahlen oder individuelle
                Designs direkt auf den Ballon bekommen. Außerdem übernehmen wir auf Wunsch komplette
                Dekorationen.
              </li>
              <li>
                Stressfreie Planung: Du sparst Zeit und Aufwand – kein Bestellen, Transportieren,
                Lagern oder unsachgemäßes Befüllen.
              </li>
            </ol>
            <p className="mt-3">
              👉 Kurz gesagt: Mit uns bekommst du perfekte Ballons ohne Risiko, Aufwand oder
              Überraschungen, die lange Freude machen – gerade für besondere Anlässe lohnt sich der
              professionelle Service.
            </p>
          </>
        ),
      },
      {
        q: 'Kann ich Ballons, die ich selbst gekauft habe, bei euch mit Helium füllen?',
        a: (
          <>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Latexballons: Grundsätzlich nicht möglich. Viele selbstgekaufte Latexballons sind zu
                klein, schon gealtert oder platzen direkt, wenn Helium eingefüllt wird. Wir führen
                jedoch eine große Auswahl an Farben und Größen, sodass du bei uns fast jeden Ballon
                bekommst.
              </li>
              <li>
                Folienballons: Hier ist eine Befüllung prinzipiell möglich, allerdings können wir nicht
                garantieren, dass sie schweben, auch wenn der Hersteller dies angibt.
              </li>
            </ul>
            <p className="mt-3">
              ⚠️ Wichtig: Sobald Helium eingefüllt wird, muss der Kunde die Befüllung bezahlen. Die
              Nutzung erfolgt also auf eigenes Risiko, da wir keine Gewähr für selbst mitgebrachtes
              Material übernehmen können.
            </p>
          </>
        ),
      },
      {
        q: 'Kann man bei euch Helium kaufen?',
        a: (
          <>
            <p>
              Ja, wir haben in der Regel Einweg-Heliumflaschen, mit denen sich bis zu 30 oder bis zu 50
              Ballons befüllen lassen. Bitte frage vorher kurz nach, ob aktuell welche vorrätig sind.
            </p>
            <p className="mt-3">
              Wenn verfügbar, kann man auch größere Heliumflaschen mieten. Dafür berechnen wir eine
              Kaution von 100 € für Flasche und Ventil. Zusätzlich wird der Verbrauch berechnet: je nach
              Ballongröße kostet ein selbst gefüllter Ballon ca. 1,20 €.
            </p>
            <p className="mt-3">
              👉 Tipp: Bitte rechtzeitig anfragen, ob Mietflaschen verfügbar sind, damit alles für dich
              bereitsteht.
            </p>
          </>
        ),
      },
      {
        q: 'Ist Helium gefährlich?',
        a: (
          <>
            <p>
              Helium ist ein ungiftiges, geruchloses Gas und grundsätzlich unbedenklich im Umgang – es
              wird z. B. auch für Ballons verwendet, weil es leichter als Luft ist.
            </p>
            <p className="mt-3">
              ⚠️ Wichtig: Helium sollte nicht eingeatmet werden. Auch wenn es oft harmlos wirkt (z. B.
              wegen der veränderten Stimme), kann es Sauerstoff verdrängen und dadurch zu Schwindel,
              Ohnmacht oder im schlimmsten Fall zu ernsthaften gesundheitlichen Problemen führen.
            </p>
            <p className="mt-3">
              👉 Für den normalen Gebrauch (Ballons befüllen und nutzen) ist Helium also sicher –
              solange es nicht eingeatmet wird und sachgemäß verwendet wird.
            </p>
          </>
        ),
      },
      {
        q: 'Ist Helium entflammbar?',
        a: (
          <>
            <p>
              Nein – Helium ist nicht entflammbar und kann auch nicht explodieren. Es ist ein
              sogenanntes Edelgas und reagiert nicht mit anderen Stoffen.
            </p>
            <p className="mt-3">
              Viele verwechseln Helium mit Wasserstoff – dieses Gas ist tatsächlich hochentzündlich und
              wurde früher z. B. bei Luftschiffen verwendet. Helium hingegen ist sicher und wird deshalb
              heute für Ballons eingesetzt.
            </p>
            <p className="mt-3">
              👉 Du kannst Heliumballons also bedenkenlos verwenden – sie sind nicht brennbar.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Besondere Ballons & Personalisierung',
    items: [
      {
        q: 'Kann ich Geld in Ballons verpacken?',
        a: (
          <>
            <p>
              Ja, das ist möglich! Es gibt verschiedene Möglichkeiten und Preiskategorien, je nachdem,
              wie aufwendig der Ballon gestaltet werden soll.
            </p>
            <p className="mt-3">
              💡 Wichtig: Bitte immer Bargeld mitbringen und den Ballon vorab bestellen, damit wir alles
              passend vorbereiten können.
            </p>
          </>
        ),
      },
      {
        q: 'Macht ihr Ballons für Gender Reveal?',
        a: (
          <>
            <p>Ja, wir bieten verschiedene Möglichkeiten für Gender-Reveal-Ballons an.</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Mit Helium gefüllt: Der Ballon muss in der Regel am selben Tag geplatzt werden, da
                Helium schneller entweicht.
              </li>
              <li>
                Mit Luft gefüllt: Der Ballon kann auch später geöffnet werden, da Luft nicht so schnell
                entweicht.
              </li>
            </ul>
            <p className="mt-3">
              Je nach Verfügbarkeit bieten wir außerdem Konfetti oder Puderkanonen an, um die
              Gender-Reveal-Überraschung noch spektakulärer zu gestalten.
            </p>
          </>
        ),
      },
      {
        q: 'Bietet ihr Hochzeitsballons an, aus denen beim Platzen kleine Ballons herausfliegen?',
        a: (
          <>
            <p>
              Ja, solche Ballons fertigen wir gerne an – wir nennen sie Glücksballons. Der besondere
              Effekt: beim Platzen fliegen kleine Ballons heraus und sorgen für eine schöne
              Überraschung.
            </p>
            <p className="mt-3">
              Am besten lässt du dich vor Ort beraten, damit wir Größe, Farbe und Beschriftung optimal
              auf eure Feier abstimmen können. Wichtig: Der Ballon muss am selben Tag befüllt und
              geplatzt werden, damit der Effekt funktioniert. Die Glücksballons sind personalisierbar,
              z. B. mit dem Namen des Paares, dem Hochzeitsdatum oder einem kurzen Text.
            </p>
          </>
        ),
      },
      {
        q: 'Kann ich Ballons personalisieren lassen?',
        a: (
          <p>
            Ja! Wir gestalten Ballons mit Namen, Zahlen oder individuellen Texten – perfekt für
            Geburtstage, Hochzeiten oder Events.
          </p>
        ),
      },
      {
        q: 'Wie lange dauert die Anfertigung personalisierter Ballons?',
        a: (
          <p>
            In der Regel 2–3 Werktage. Bei größeren Bestellungen bitte etwas mehr Zeit einplanen.
          </p>
        ),
      },
      {
        q: 'Welche Texte sind möglich?',
        a: <p>Fast alles 😊 Kurze, klare Texte wirken am schönsten auf Ballons.</p>,
      },
    ],
  },
  {
    category: 'Transport & Lagerung',
    items: [
      {
        q: 'Wie transportiere ich Ballons am besten?',
        a: (
          <>
            <p>
              Am besten transportierst du Ballons im Auto, z. B. auf dem Rücksitz oder im Kofferraum.
              Achte darauf, sie nicht in zu kleine Räume zu pressen, damit sie nicht beschädigt werden.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Im Sommer: Ballons nicht in direkter Sonne oder in heißen Autos lagern – die Hitze kann
                sie zum Platzen bringen.
              </li>
              <li>
                Im Winter: Kälte lässt Heliumballons schrumpfen; nach dem Einsteigen in ein warmes Auto
                dehnen sie sich wieder aus.
              </li>
            </ul>
            <p className="mt-3">
              👉 Tipp: Große Folien- oder Bobo-Ballons am besten locker transportieren und nach
              Möglichkeit aufrecht halten.
            </p>
          </>
        ),
      },
      {
        q: 'Passen Ballons in jedes Auto?',
        a: (
          <p>
            Nicht immer – besonders große Folien- oder Bobo-Ballons brauchen Platz. Wir beraten dich
            gerne vorab, damit deine Ballons sicher transportiert werden und alles gut passt. Zwei große
            Zahlenballons und ein paar Latex- oder Folienballons bekommst du problemlos auf dem Rücksitz
            unter.
          </p>
        ),
      },
      {
        q: 'Was muss ich bei Ballons beachten?',
        a: (
          <>
            <p>Damit deine Ballons lange schön bleiben, solltest du Folgendes beachten:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Vor Hitze und direkter Sonne schützen, sonst dehnen sich die Ballons zu stark oder
                können platzen.
              </li>
              <li>
                Nicht im kalten Auto lagern, da sich Helium zusammenzieht und der Ballon kleiner wirkt.
              </li>
              <li>
                Kontakt mit spitzen Gegenständen vermeiden, um Löcher oder Platzen zu verhindern.
              </li>
            </ul>
            <p className="mt-3">
              👉 Tipp: Ballons am besten in einem geschützten, temperierten Raum lagern, bis sie
              gebraucht werden.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Umwelt',
    items: [
      {
        q: 'Dürfen Ballons steigen gelassen werden?',
        a: (
          <>
            <p>
              Grundsätzlich ist das Steigenlassen von Ballons erlaubt. Allerdings gelten je nach Region
              unterschiedliche Vorschriften – insbesondere bei größeren Mengen. Wir empfehlen, vorab bei
              der zuständigen Stadt oder Gemeinde nachzufragen. In Lahr/Schwarzwald gibt es aufgrund der
              Nähe zum Flughafen besondere Regelungen, die unbedingt beachtet werden sollten.
            </p>
            <p className="mt-3">⚠️ Außerdem spielt das Material eine wichtige Rolle:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Latexballons sind biologisch abbaubar, und wir verwenden dafür Bioband, sodass sie
                umweltfreundlich steigen gelassen werden können.
              </li>
              <li>
                Folienballons und normales Polyband sind nicht abbaubar und dürfen daher nicht zum
                Steigenlassen verwendet werden.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: 'Sind alle Ballons umweltfreundlich?',
        a: (
          <p>
            Nein, die Umweltfreundlichkeit hängt stark vom Material ab. Latexballons sind biologisch
            abbaubar, während Folien- oder Kunststoffballons nicht biologisch abbaubar sind.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Geschenke & Dekoration',
    items: [
      {
        q: 'Welche Ballons eignen sich als Geschenk?',
        a: (
          <>
            <p>
              Grundsätzlich eignet sich jeder Ballon als Geschenk 😊 Besonders beliebt sind jedoch
              personalisierte Ballons oder Ballons, in denen z. B. Geld oder kleine Geschenke verpackt
              sind.
            </p>
            <p className="mt-3">
              👉 Bitte beachte: Diese Varianten benötigen etwas Vorbereitung – daher am besten vorab
              bestellen.
            </p>
          </>
        ),
      },
      {
        q: 'Bietet ihr auch Komplettdekorationen an?',
        a: (
          <>
            <p>
              Ja, wir gestalten auf Wunsch individuelle Dekorationen für Events wie Geburtstage,
              Hochzeiten oder Firmenfeiern.
            </p>
            <p className="mt-3">
              Bitte beachte, dass hierfür eine rechtzeitige Vorbestellung notwendig ist. Je nach Umfang
              bestellen wir Materialien bei unseren Lieferanten, wodurch Lieferzeiten berücksichtigt
              werden müssen. Zudem kann es vorkommen, dass bestimmte Artikel nicht sofort vorrätig sind.
              Auch die personelle Planung für Aufbau und Umsetzung spielt eine wichtige Rolle.
            </p>
            <p className="mt-3">
              👉 Daher empfehlen wir, frühzeitig anzufragen, damit wir deine Dekoration optimal umsetzen
              können.
            </p>
          </>
        ),
      },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5 hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 text-base md:text-lg">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 leading-relaxed">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPageContent() {
  const [openKey, setOpenKey] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const visibleCategories = activeCategory
    ? faqCategories.filter((cat) => cat.category === activeCategory)
    : faqCategories;

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Häufige Fragen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Hier findest du Antworten auf die häufigsten Fragen rund um unsere Ballons, Helium,
            Bestellungen und mehr. Ist deine Frage nicht dabei? Dann{' '}
            <Link href="/kontakt" className="text-primary underline hover:text-primary/80">
              kontaktiere uns gerne
            </Link>
            .
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          <button
            onClick={() => { setActiveCategory(null); setOpenKey(null); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === null
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
            }`}
          >
            Alle
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => { setActiveCategory(cat.category); setOpenKey(null); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory ?? 'all'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            {visibleCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 px-1">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.items.map((item) => {
                    const key = `${cat.category}-${item.q}`;
                    return (
                      <FAQItem
                        key={key}
                        item={item}
                        isOpen={openKey === key}
                        onToggle={() => setOpenKey(openKey === key ? null : key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
