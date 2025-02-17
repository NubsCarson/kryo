import { notFound } from 'next/navigation';
import SolanaTracker from '@/components/SolanaTracker';
import { userData } from '@/config/users';

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserPage({ params }: Props) {
  const { username } = await params;
  const user = userData[username];

  if (!user) {
    notFound();
  }

  return <SolanaTracker initialData={user} />;
}

export function generateStaticParams() {
  return Object.keys(userData).map((username) => ({
    username,
  }));
} 