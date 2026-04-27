import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Religiöse Anlässe',
  description: 'Festliche Ballondekoration für religiöse Anlässe wie Taufe, Konfirmation und Kommunion. Elegante, stimmungsvolle Dekoration für besondere kirchliche Feiern.',
};

export default function ReligioseAnlaessePage() {
  return (
    <>
      <ServicePage
        serviceId="religiose-anlasse"
        title="Religiöse Anlässe"
        description="Festliche Ballondekoration für religiöse Anlässe. Ob Taufe, Konfirmation oder Kommunion – wir gestalten Ihre Feier mit eleganten, stimmungsvollen Ballons."
        heroImage="https://images.unsplash.com/photo-1559181567-c3190ca9d222"
      />
      <ConsultationCTA />
    </>
  );
}
