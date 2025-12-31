import { FarcasterProfile } from '@/types';

const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY;
const NEYNAR_API_BASE = 'https://api.neynar.com/v2/farcaster';

/**
 * Fetch Farcaster profile data using Neynar API
 */
export async function getFarcasterProfile(username: string): Promise<FarcasterProfile> {
  if (!NEYNAR_API_KEY) {
    console.warn('No Neynar API key found, using mock data');
    return getMockProfile(username);
  }

  try {
    const response = await fetch(
      `${NEYNAR_API_BASE}/user/by_username?username=${encodeURIComponent(username)}`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'api_key': NEYNAR_API_KEY,
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Neynar API error:', response.status, errorText);
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }

    const data = await response.json();
    
    // Handle Neynar v2 API response structure
    const user = data.user || data;

    return {
      fid: user.fid || 0,
      username: user.username || username,
      display_name: user.display_name || user.displayName || username,
      pfp_url: user.pfp_url || user.pfp?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      bio: user.profile?.bio?.text || user.bio || '',
      follower_count: user.follower_count || user.followerCount || 0,
      following_count: user.following_count || user.followingCount || 0,
      cast_count: user.cast_count || user.castCount || 0,
    };
  } catch (error) {
    console.error('Error fetching profile:', error);
    // Fallback to mock data on error
    return getMockProfile(username);
  }
}

/**
 * Mock profile data for demonstration
 */
function getMockProfile(username: string): FarcasterProfile {
  const seed = username.toLowerCase();
  return {
    fid: Math.floor(Math.random() * 100000),
    username: username,
    display_name: username.charAt(0).toUpperCase() + username.slice(1),
    pfp_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`,
    bio: 'Farcaster user exploring Web3 and decentralized social media. Building the future of online communities.',
    follower_count: Math.floor(Math.random() * 5000) + 100,
    following_count: Math.floor(Math.random() * 1000) + 50,
    cast_count: Math.floor(Math.random() * 10000) + 100,
  };
}
