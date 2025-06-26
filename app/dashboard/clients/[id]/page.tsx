import ClientDetailClient from './ClientDetailClient';
import { useClientStore } from '@/lib/store';
// import { notFound } from 'next/navigation';

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const clients = useClientStore.getState().clients; // Charger les clients dynamiquement
  clients.find((client) => client.id === params.id);

  // if (!client) {
  //   notFound(); // Redirige vers une page 404 si l'ID est inconnu
  // }

  return <ClientDetailClient clientId={params.id} />;
}