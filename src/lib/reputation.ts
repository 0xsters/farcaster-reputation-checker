import { FarcasterProfile, ReputationScore } from '@/types';

/**
 * Calculate reputation score based on multiple factors
 */
export function calculateReputationScore(profile: FarcasterProfile): ReputationScore {
  // Calculate engagement score (0-100)
  const engagementScore = calculateEngagementScore(profile);
  
  // Calculate activity score (0-100)
  const activityScore = calculateActivityScore(profile);
  
  // Calculate network score (0-100)
  const networkScore = calculateNetworkScore(profile);
  
  // Calculate influence score (0-100)
  const influenceScore = calculateInfluenceScore(profile);
  
  // Overall score is weighted average
  const overall = Math.round(
    (engagementScore * 0.3) +
    (activityScore * 0.25) +
    (networkScore * 0.25) +
    (influenceScore * 0.2)
  );

  return {
    overall,
    engagement: engagementScore,
    activity: activityScore,
    network: networkScore,
    influence: influenceScore,
  };
}

/**
 * Calculate engagement score based on follower interaction
 */
function calculateEngagementScore(profile: FarcasterProfile): number {
  const { follower_count, cast_count } = profile;
  
  if (cast_count === 0) return 0;
  
  // Engagement ratio: followers per cast (normalized)
  const engagementRatio = follower_count / cast_count;
  
  // Normalize to 0-100 scale (assuming max ratio of 10)
  const score = Math.min(100, (engagementRatio / 10) * 100);
  
  return Math.round(score);
}

/**
 * Calculate activity score based on cast frequency
 */
function calculateActivityScore(profile: FarcasterProfile): number {
  const { cast_count } = profile;
  
  // Score based on total casts (logarithmic scale)
  // 0 casts = 0, 100 casts = 50, 1000 casts = 75, 10000+ casts = 100
  if (cast_count === 0) return 0;
  if (cast_count < 100) return Math.round((cast_count / 100) * 50);
  if (cast_count < 1000) return Math.round(50 + ((cast_count - 100) / 900) * 25);
  if (cast_count < 10000) return Math.round(75 + ((cast_count - 1000) / 9000) * 25);
  
  return 100;
}

/**
 * Calculate network score based on follower/following ratio
 */
function calculateNetworkScore(profile: FarcasterProfile): number {
  const { follower_count, following_count } = profile;
  
  if (following_count === 0) return follower_count > 0 ? 100 : 0;
  
  // Ratio score (followers / following)
  const ratio = follower_count / following_count;
  
  // Normalize to 0-100 scale
  // ratio < 0.5 = low score, ratio = 1 = mid score, ratio > 2 = high score
  let score;
  if (ratio < 0.5) {
    score = ratio * 50; // 0-25
  } else if (ratio < 1) {
    score = 25 + ((ratio - 0.5) * 50); // 25-50
  } else if (ratio < 2) {
    score = 50 + ((ratio - 1) * 30); // 50-80
  } else {
    score = Math.min(100, 80 + ((ratio - 2) * 10)); // 80-100
  }
  
  return Math.round(score);
}

/**
 * Calculate influence score based on overall reach
 */
function calculateInfluenceScore(profile: FarcasterProfile): number {
  const { follower_count } = profile;
  
  // Score based on follower count (logarithmic scale)
  // 0 followers = 0, 100 followers = 40, 1000 followers = 70, 10000+ followers = 100
  if (follower_count === 0) return 0;
  if (follower_count < 100) return Math.round((follower_count / 100) * 40);
  if (follower_count < 1000) return Math.round(40 + ((follower_count - 100) / 900) * 30);
  if (follower_count < 10000) return Math.round(70 + ((follower_count - 1000) / 9000) * 30);
  
  return 100;
}
