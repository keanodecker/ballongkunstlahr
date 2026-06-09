import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Kindergeburtstag',
  description: 'Bunte Motivballons für den Kindergeburtstag. Von Dinosauriern über Prinzessinnen bis zu Piraten.',
};

const LOCAL_IMAGES = [
  '/gallery/kinder-1.jpg',
  '/gallery/kinder-2.jpg',
  '/gallery/kinder-3.jpg',
  '/gallery/kinder-4.jpg',
  '/gallery/kinder-5.jpg',
];

export default function KindergeburtstagPage() {
  return (
    <>
      <ServicePage
        serviceId="kindergeburtstag"
        title="Kindergeburtstag"
        description="Spaß und Freude für die Kleinen! Bunte Motivballons mit beliebten Charakteren, Tieren und Superhelden."
        heroImage="/gallery/kinder-1.jpg"
        localImages={LOCAL_IMAGES}
      />

      {/* Beschreibung / individuelle Gestaltung */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Ballons für Kindergeburtstage – bunt, kreativ & voller Lieblingsmotive 🎈✨
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Ein Kindergeburtstag soll strahlende Augen und unvergessliche Momente schaffen – und
              genau dafür sorgen unsere individuell gestalteten Ballons. Ob als Überraschungsgeschenk,
              liebevolle Dekoration oder besonderes Highlight auf der Feier: Wir gestalten Ballons, die
              Kinderherzen höherschlagen lassen.
            </p>
            <p>
              Besonders beliebt sind tierische Motive, Dinosaurier, Einhörner oder bekannte Figuren aus
              TV und Kino wie PAW Patrol, Bluey oder Gabby's Dollhouse. Natürlich gibt es noch viele
              weitere Designs, passend zu fast jedem Wunsch und Motto.
            </p>
            <p>
              Neben einzelnen Ballons bieten wir auch kreative Ballonsträuße, Geschenkballons und
              komplette Dekorationen für den Kindergeburtstag an – passend zum Alter, Thema und Stil
              der Feier.
            </p>
            <p>
              Jedes Kind und jede Feier ist einzigartig. Deshalb legen wir großen Wert auf eine
              persönliche und individuelle Beratung. Vor Ort können Farben, Motive und
              Gestaltungsmöglichkeiten direkt angeschaut werden, damit genau das Richtige ausgewählt
              werden kann.
            </p>
            <p>
              Viele Ballons lassen sich außerdem mit Namen, Alter, Zahlen oder persönlichen Botschaften
              personalisieren und machen den Geburtstag so noch besonderer.
            </p>
            <p>
              Kommt vorbei und entdeckt die vielen Möglichkeiten – gemeinsam gestalten wir Ballons, die
              den Kindergeburtstag zu einem echten Highlight machen. 🎉🦄🦖🐾
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
