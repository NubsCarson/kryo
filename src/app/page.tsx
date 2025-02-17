'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { userData } from '@/config/users';

const features = [
  {
    title: 'Real-Time Tracking',
    description: 'Sub-second balance updates with direct RPC connection',
    icon: '⚡'
  },
  {
    title: 'PnL Analytics',
    description: 'Advanced profit/loss tracking with daily baselines',
    icon: '📈'
  },
  {
    title: 'Multi-Wallet Support',
    description: 'Track multiple wallets simultaneously',
    icon: '👛'
  },
  {
    title: 'Privacy Focused',
    description: 'No data storage, direct blockchain queries',
    icon: '🔒'
  }
];

const socials = [
  {
    name: 'NubsCarson.com',
    url: 'https://nubscarson.com',
    icon: '🌐'
  },
  {
    name: '@monerosolana',
    url: 'https://x.com/monerosolana',
    icon: '𝕏'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff66cc]/20 via-[#aa66ff]/20 to-[#ff66cc]/20 animate-gradient" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff66cc] to-[#aa66ff]"
          >
            Solana PnL Tracker
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-8"
          >
            High-performance wallet balance and PnL tracking
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            {Object.keys(userData).map((username) => (
              <Link 
                key={username}
                href={`/${username}`}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff66cc] to-[#aa66ff] hover:opacity-90 transition-opacity font-medium"
              >
                Track {username}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <span className="text-2xl">↓</span>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-[#222] hover:bg-[#333] transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#222] hover:bg-[#333] transition-colors"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Built with 🖤 by NubsCarson
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
