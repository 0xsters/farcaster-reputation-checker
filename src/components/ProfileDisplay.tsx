import { FarcasterProfile } from '@/types';
import Image from 'next/image';

interface ProfileDisplayProps {
  profile: FarcasterProfile;
}

export default function ProfileDisplay({ profile }: ProfileDisplayProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400">
          {profile.pfp_url ? (
            <img
              src={profile.pfp_url}
              alt={profile.display_name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-purple-600 flex items-center justify-center text-4xl text-white">
              {profile.display_name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-2">
            {profile.display_name}
          </h1>
          <p className="text-xl text-purple-200 mb-4">@{profile.username}</p>
          
          {profile.bio && (
            <p className="text-purple-100 mb-6">{profile.bio}</p>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-purple-600/30 rounded-lg p-4">
              <p className="text-purple-200 text-sm">Followers</p>
              <p className="text-2xl font-bold text-white">
                {profile.follower_count.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-600/30 rounded-lg p-4">
              <p className="text-purple-200 text-sm">Following</p>
              <p className="text-2xl font-bold text-white">
                {profile.following_count.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-600/30 rounded-lg p-4">
              <p className="text-purple-200 text-sm">Casts</p>
              <p className="text-2xl font-bold text-white">
                {profile.cast_count?.toLocaleString() || '0'}
              </p>
            </div>
            <div className="bg-purple-600/30 rounded-lg p-4">
              <p className="text-purple-200 text-sm">FID</p>
              <p className="text-2xl font-bold text-white">
                {profile.fid}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
