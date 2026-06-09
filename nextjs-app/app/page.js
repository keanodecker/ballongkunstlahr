import HomePageContent from './HomePageContent';

export const metadata = {
  title: 'Ballonkunst Lahr – Ihr Ballonspezialist in Lahr/Schwarzwald',
  description:
    'Ballonkunst Lahr – Ihr Spezialist für Ballons, Ballondekoration und kreative Geschenkideen in Lahr/Schwarzwald. 19 Jahre Erfahrung. Für Geburtstag, Hochzeit, Kindergeburtstag und mehr.',
  keywords: [
    'Ballons Lahr', 'Luftballons Lahr', 'Ballondekoration Lahr',
    'Heliumballons', 'Folienballons', 'Latexballons',
    'Geburtstagsballons', 'Hochzeitsballons', 'Kindergeburtstag Ballons',
    'Ballonladen Lahr', 'Ballons Ortenau', 'Ballongeschäft Schwarzwald',
  ],
  openGraph: {
    title: 'Ballonkunst Lahr – Für jeden Anlass den perfekten Ballon',
    description:
      'Riesige Auswahl an Ballons für jeden Anlass. Geburtstag, Hochzeit, Kindergeburtstag und mehr. Besuchen Sie uns in Lahr/Schwarzwald!',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function Page() {
  return <HomePageContent />;
}
