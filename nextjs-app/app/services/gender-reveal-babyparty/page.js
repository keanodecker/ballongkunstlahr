import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Gender Reveal & Babyparty',
  description: 'Unvergessliche Ballondekoration für Gender Reveal und Babyparty. Zauberhafte Dekorationen in Rosa und Blau für diesen aufregenden Moment.',
};

export default function GenderRevealBabypartyPage() {
  return (
    <>
      <ServicePage
        serviceId="gender-reveal-babyparty"
        title="Gender Reveal & Babyparty"
        description="Unvergessliche Ballondekoration für Gender Reveal und Babyparty. Zauberhafte Dekorationen in Rosa und Blau für diesen aufregenden Moment."
        heroImage="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
      />
      <ConsultationCTA />
    </>
  );
}
