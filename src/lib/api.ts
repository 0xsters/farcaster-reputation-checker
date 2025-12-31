import { FarcasterProfile } from '@/types';

const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY;
const NEYNAR_API_BASE = 'https://api.neynar.com/v2/farcaster';

/**
 * Fetch Farcaster profile data using Neynar API
 */
export async function getFarcasterProfile(username: string): Promise<FarcasterProfile> {
  if (!NEYNAR_API_KEY) {
    // Return mock data for demo purposes when API key is not configured
    return getMockProfile(username);
  }

  try {
    const response = await fetch(
      `${NEYNAR_API_BASE}/user/by_username?username=${username}`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': NEYNAR_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.statusText}`);
    }

    const data = await response.json();
    const user = data.user;

    return {
      fid: user.fid,
      username: user.username,
      display_name: user.display_name,
      pfp_url: user.pfp_url,
      bio: user.profile?.bio?.text || '',
      follower_count: user.follower_count,
      following_count: user.following_count,
      cast_count: user.verifications?.length || 0,
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
  return {
    fid: Math.floor(Math.random() * 100000),
    username: username,
    display_name: username.charAt(0).toUpperCase() + username.slice(1),
    pfp_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    bio: 'Farcaster user exploring Web3 and decentralized social media. Building the future of online communities.',
    follower_count: Math.floor(Math.random() * 5000) + 100,
    following_count: Math.floor(Math.random() * 1000) + 50,
    cast_count: Math.floor(Math.random() * 10000) + 100,
  };
}
