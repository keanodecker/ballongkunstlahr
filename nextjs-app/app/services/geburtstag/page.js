import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Geburtstag',
  description: 'Feiern Sie Ihren besonderen Tag mit bunten Ballons. Von klassischen Zahlenballons bis zu personalisierten Geburtstagsballons – wir haben alles für Ihre Feier.',
};

const LOCAL_IMAGES = [
  '/gallery/geburtstag-1.jpg',
  '/gallery/geburtstag-2.jpg',
  '/gallery/geburtstag-3.jpg',
  '/gallery/geburtstag-4.jpg',
  '/gallery/geburtstag-5.jpg',
  '/gallery/geburtstag-6.jpg',
];

export default function GeburtstagPage() {
  return (
    <>
      <ServicePage
        serviceId="geburtstag"
        title="Geburtstag"
        description="Feiern Sie Ihren besonderen Tag mit bunten Ballons. Von klassischen Zahlenballons bis zu personalisierten Geburtstagsballons – wir haben alles für Ihre Feier. (Auswahl an Servietten, Tellern, Bechern…)"
        heroImage="/gallery/geburtstag-1.jpg"
        localImages={LOCAL_IMAGES}
      />

      {/* Beschreibung / individuelle Gestaltung */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Geburtstagsballons – persönlich, individuell & mit Liebe gestaltet 🎈
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Mach den Geburtstag zu etwas ganz Besonderem – mit individuell gestalteten Ballons aus
              unserem Laden. Ob bunt, elegant, verspielt oder modern: Bei uns findest Du den passenden
              Ballon für jedes Alter und jeden Anlass.
            </p>
            <p>
              Dabei bieten wir nicht nur einzelne Ballons, sondern auch kreative Ballonsträuße,
              Geschenkballons und Dekorationen für Geburtstagsfeiern – von kleinen Überraschungen bis
              hin zur großen Partydekoration, die vor Ort angefertigt wird.
            </p>
            <p>
              Jeder Kunde wird bei uns persönlich und individuell beraten, damit alles genau so wird,
              wie Du es Dir vorstellst. Vor Ort kannst Du verschiedene Farben, Motive und Designs
              direkt anschauen und auswählen. So bekommst Du einen direkten Eindruck und findest
              garantiert die perfekte Kombination.
            </p>
            <p>
              Viele unserer Ballons sind außerdem mit Namen, Texten, Zahlen oder persönlichen
              Botschaften personalisierbar – ideal für Kindergeburtstage, runde Geburtstage oder ganz
              besondere Überraschungen.
            </p>
            <p>
              Komm vorbei und lass Dich inspirieren – gemeinsam gestalten wir Deine individuelle
              Geburtstagsdekoration, die garantiert für strahlende Augen sorgt. 🎉
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
