'use client';

import { useEffect, useState } from 'react';
import { UserData } from '../types';
import { fetchBalance } from '../utils/solana';
import Image from 'next/image';

interface Props {
  username: string;
  initialData: UserData;
}

export default function SolanaTracker({ username, initialData }: Props) {
  const [data, setData] = useState<UserData>(initialData);

  useEffect(() => {
    const updateBalance = async () => {
      const balance = await fetchBalance(data.wallet);
      if (balance !== null) {
        setData(prev => {
          // If this is the first update, set both baseline and current
          if (prev.baseline_balance === 0 && prev.current_balance === 0) {
            return {
              ...prev,
              baseline_balance: balance,
              current_balance: balance,
              last_update: new Date().toLocaleTimeString()
            };
          }
          // Otherwise just update current balance
          return {
            ...prev,
            current_balance: balance,
            last_update: new Date().toLocaleTimeString()
          };
        });
      }
    };

    updateBalance();
    const interval = setInterval(updateBalance, 5000);
    return () => clearInterval(interval);
  }, [data.wallet]);

  const pnl = data.current_balance - data.baseline_balance;
  const isPnlPositive = pnl >= 0;

  return (
    <div className="min-h-screen bg-[#111] flex justify-center items-center p-5">
      <div className="bg-gradient-to-r from-[#ff66cc] via-[#aa66ff] to-[#ff66cc] p-1.5 rounded-[20px] animate-gradient">
        <div className="bg-[#222] rounded-[16px] w-[320px] p-5 text-center">
          <div className="text-[#ff66cc] text-sm uppercase mb-1.5">Balance</div>
          <div className="flex items-baseline justify-center gap-2 text-2xl font-bold text-white mb-5">
            <Image src="/solana-logo.png" alt="SOL" width={36} height={36} className="relative top-1" />
            <span>{data.current_balance.toFixed(2)}</span>
          </div>

          <div className="text-[#ff66cc] text-sm uppercase mb-1.5">PnL Today</div>
          <div className="inline-block">
            <div className="bg-[#222] rounded-[9px] p-2.5 flex items-center justify-center gap-2 text-2xl font-bold">
              <Image src="/solana-logo.png" alt="SOL" width={36} height={36} />
              <span className={isPnlPositive ? 'text-[#7FFF00]' : 'text-[#ff6666]'}>
                {isPnlPositive ? '+' : ''}{pnl.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-[#999] text-xs mt-4">
            <a href="https://nubscarson.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Built by NubsCarson.com
            </a>
            <a href="https://x.com/monerosolana" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Follow @monerosolana
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 