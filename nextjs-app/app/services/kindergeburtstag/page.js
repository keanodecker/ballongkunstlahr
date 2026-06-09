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
      <ConsultationCTA />
    </>
  );
}
