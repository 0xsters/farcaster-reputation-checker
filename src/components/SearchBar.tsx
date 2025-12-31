'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const cleanUsername = username.trim().replace('@', '');
      router.push(`/profile/${cleanUsername}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Farcaster username (e.g., vitalik.eth, dwr.eth)"
          className="w-full px-6 py-4 text-lg rounded-full bg-white/10 backdrop-blur-md border border-purple-300/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors"
        >
          Search 🔍
        </button>
      </form>
    </div>
  );
}
