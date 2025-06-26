import ClientDetailClient from './ClientDetailClient';

export async function generateStaticParams() {
  const clients =  [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
  return clients.map((client) => ({
    id: client.id,
  }));
}
export default function ClientDetailPage({ params }: { params: { id: string } }) {
  return <ClientDetailClient clientId={params.id} />;
}