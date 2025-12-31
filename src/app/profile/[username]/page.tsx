'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProfileDisplay from '@/components/ProfileDisplay';
import ReputationScore from '@/components/ReputationScore';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getFarcasterProfile } from '@/lib/api';
import { FarcasterProfile } from '@/types';

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const username = params.username as string;
  
  const [profile, setProfile] = useState<FarcasterProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        setError(null);
        const data = await getFarcasterProfile(username);
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      loadProfile();
    }
  }, [username]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="mb-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          ← Back to Search
        </button>

        {loading && <LoadingSpinner />}

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-white rounded-lg p-6 text-center">
            <p className="text-lg font-semibold">Error Loading Profile</p>
            <p className="mt-2">{error}</p>
          </div>
        )}

        {profile && !loading && (
          <div className="space-y-6">
            <ProfileDisplay profile={profile} />
            <ReputationScore profile={profile} />
          </div>
        )}
      </div>
    </main>
  );
}
