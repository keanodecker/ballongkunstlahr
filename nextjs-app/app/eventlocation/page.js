import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Eventlocation – Vereinshaus Lahr West',
  description: 'Sie suchen noch eine passende Location für Ihren Anlass? Wir bieten Ihnen das Vereinshaus Lahr West – kontaktieren Sie uns für weitere Informationen.',
};

export default function EventlocationPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eventlocation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sie suchen noch eine passende Location für Ihren Anlass?
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Vereinshaus Lahr West
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Wir bieten Ihnen das <strong>Vereinshaus Lahr West</strong> als ideale Location für Ihren besonderen Anlass.
                  Ob Geburtstag, Hochzeit, Firmenfeier oder eine andere Veranstaltung – hier finden Sie den perfekten Rahmen,
                  den wir mit unserer Ballondekoration noch schöner gestalten können.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interesse? So erreichen Sie uns:</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:mail@cesardienstleistungen.de"
                  className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  mail@cesardienstleistungen.de
                </a>
              </div>
            </div>

            {/* Location images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <img src="/location1.jpg" alt="Vereinshaus Lahr West – Innenansicht 1" className="w-full h-56 object-cover rounded-xl" />
              <img src="/location2.jpg" alt="Vereinshaus Lahr West – Innenansicht 2" className="w-full h-56 object-cover rounded-xl" />
              <img src="/location3.jpg" alt="Vereinshaus Lahr West – Innenansicht 3" className="w-full h-56 object-cover rounded-xl" />
            </div>

            <div className="text-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Zu Kontaktseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
