import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Sonstige Anlässe',
  description: 'Ballons für jeden besonderen Moment – Welcome Back, Gute Besserung, Führerschein und viele weitere Anlässe. Wir haben für jeden Grund zum Feiern das Richtige.',
};

export default function SonstigeAnlaessePage() {
  return (
    <>
      <ServicePage
        serviceId="sonstige-anlasse"
        title="Sonstige Anlässe"
        description="Ballons für jeden besonderen Moment – Welcome Back, Gute Besserung, Führerschein und viele weitere Anlässe. Wir haben für jeden Grund zum Feiern das Richtige."
        heroImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
      />
      <ConsultationCTA />
    </>
  );
}
