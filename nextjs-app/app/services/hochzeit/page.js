import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Hochzeit',
  description: 'Romantische Ballondekoration für den schönsten Tag. Elegante Dekorationen in Weiß, Gold und Rosé für Ihre Traumhochzeit.',
};

const LOCAL_IMAGES = [
  '/gallery/hochzeit-1.jpg',
  '/gallery/hochzeit-2.jpg',
  '/gallery/hochzeit-3.jpg',
  '/gallery/hochzeit-4.jpg',
];

export default function HochzeitPage() {
  return (
    <>
      <ServicePage
        serviceId="hochzeit"
        title="Hochzeit"
        description="Romantische Ballondekoration für den schönsten Tag. Elegante Dekorationen in Weiß, Gold und Rosé für Ihre Traumhochzeit."
        heroImage="/gallery/hochzeit-1.jpg"
        localImages={LOCAL_IMAGES}
      />

      {/* Beschreibung / individuelle Gestaltung */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Hochzeitsballons – besondere Momente stilvoll in Szene gesetzt 🤍🎈
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Eine Hochzeit lebt von den kleinen Details, die diesen Tag unvergesslich machen. Mit
              unseren individuell gestalteten Hochzeitsballons schafft Ihr besondere Highlights – ganz
              gleich, ob als liebevolles Geschenk für das Brautpaar oder als stilvolle Dekoration für
              die Hochzeitsfeier.
            </p>
            <p>
              Von einzelnen Ballons über elegante Ballonsträuße und Geschenkballons bis hin zu
              kompletten Dekorationskonzepten für Saal, Tische oder Empfangsbereich – wir gestalten
              alles passend zu Euren Wünschen und dem Stil Eurer Feier.
            </p>
            <p>
              Bei uns steht die persönliche und individuelle Beratung im Mittelpunkt. Direkt vor Ort
              könnt Ihr verschiedene Farben, Motive und Gestaltungsmöglichkeiten anschauen und
              vergleichen, um genau die Kombination zu finden, die perfekt zu Eurem großen Tag passt.
            </p>
            <p>
              Viele Ballons lassen sich außerdem ganz individuell mit Namen, dem Hochzeitsdatum,
              liebevollen Botschaften oder persönlichen Schriftzügen gestalten und werden so zu einem
              einzigartigen Erinnerungsstück.
            </p>
            <p>
              Ein besonders beliebter Programmpunkt sind unsere <strong>Glücksballons</strong>. Diese
              werden oft nach der Trauung am Standesamt vom Brautpaar zum Platzen gebracht – dabei
              steigen viele kleine Ballons in den Himmel und sorgen für einen wunderschönen,
              emotionalen Moment.
            </p>
            <p>
              Lasst Euch bei uns inspirieren und plant gemeinsam mit uns die passende Ballongestaltung
              für Eure Hochzeit – persönlich, individuell und mit viel Liebe zum Detail. ✨🤍
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
