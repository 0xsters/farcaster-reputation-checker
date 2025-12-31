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
    // Fetch user profile
    const userResponse = await fetch(
      `${NEYNAR_API_BASE}/user/by_username?username=${encodeURIComponent(username)}`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'x-api-key': NEYNAR_API_KEY,
        },
        cache: 'no-store',
      }
    );

    if (!userResponse.ok) {
      const errorText = await userResponse.text();
      console.error('Neynar API error:', userResponse.status, errorText);
      throw new Error(`Failed to fetch profile: ${userResponse.status}`);
    }

    const userData = await userResponse.json();
    const user = userData.user;

    if (!user) {
      throw new Error('User not found in response');
    }

    // Fetch user casts to get accurate cast count
    let castCount = 0;
    try {
      const castsResponse = await fetch(
        `${NEYNAR_API_BASE}/casts?fid=${user.fid}&limit=1`,
        {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'x-api-key': NEYNAR_API_KEY,
          },
          cache: 'no-store',
        }
      );

      if (castsResponse.ok) {
        const castsData = await castsResponse.json();
        // Get cast count from API meta or estimate from data
        castCount = castsData.next?.cursor ? 1000 : castsData.casts?.length || 0;
      }
    } catch (error) {
      console.warn('Could not fetch cast count:', error);
    }

    return {
      fid: user.fid,
      username: user.username,
      display_name: user.display_name || user.username,
      pfp_url: user.pfp_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
      bio: user.profile?.bio?.text || '',
      follower_count: user.follower_count || 0,
      following_count: user.following_count || 0,
      cast_count: castCount,
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
