import ClientDetailClient from './ClientDetailClient';
import { useClientStore } from '@/lib/store';

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const clients = useClientStore.getState().clients; // Charger les clients dynamiquement
  clients.find((client) => client.id === params.id);

  return <ClientDetailClient clientId={params.id} />;
}