import ServicePage from '@/components/ServicePage';
import ConsultationCTA from '@/components/ConsultationCTA';

export const metadata = {
  title: 'Prüfung & Abschluss',
  description: 'Stilvolle Ballons für bestandene Prüfungen und Abschlüsse. Ob Abitur, Gesellenprüfung oder Bachelor – feiern Sie den Meilenstein mit bunten Glückwunschballons.',
};

export default function PrufungAbschlussPage() {
  return (
    <>
      <ServicePage
        serviceId="prufung-abschluss"
        title="Prüfung & Abschluss"
        description="Stilvolle Ballons für bestandene Prüfungen und Abschlüsse. Ob Abitur, Gesellenprüfung oder Bachelor – feiern Sie den Meilenstein mit bunten Glückwunschballons."
        heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      />
      <ConsultationCTA />
    </>
  );
}
