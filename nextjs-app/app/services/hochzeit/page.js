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
      <ConsultationCTA />
    </>
  );
}
