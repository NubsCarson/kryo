import { notFound } from 'next/navigation';
import SolanaTracker from '@/components/SolanaTracker';
import { userData } from '@/config/users';

interface Props {
  params: {
    username: string;
  };
}

export default function UserPage({ params: { username } }: Props) {
  const user = userData[username];

  if (!user) {
    notFound();
  }

  return <SolanaTracker username={username} initialData={user} />;
}

export function generateStaticParams() {
  return Object.keys(userData).map((username) => ({
    username,
  }));
} 