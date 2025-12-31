export interface FarcasterProfile {
  fid: number;
  username: string;
  display_name: string;
  pfp_url: string;
  bio: string;
  follower_count: number;
  following_count: number;
  cast_count: number;
}

export interface ReputationScore {
  overall: number;
  engagement: number;
  activity: number;
  network: number;
  influence: number;
}
