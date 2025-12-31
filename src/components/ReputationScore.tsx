import { FarcasterProfile } from '@/types';
import { calculateReputationScore } from '@/lib/reputation';

interface ReputationScoreProps {
  profile: FarcasterProfile;
}

export default function ReputationScore({ profile }: ReputationScoreProps) {
  const reputation = calculateReputationScore(profile);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-blue-400';
    if (score >= 40) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    return 'Growing';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/30">
      <h2 className="text-2xl font-bold text-white mb-6">Reputation Analysis</h2>

      {/* Overall Score */}
      <div className="text-center mb-8 bg-purple-600/30 rounded-xl p-8">
        <p className="text-purple-200 text-lg mb-2">Overall Reputation Score</p>
        <p className={`text-7xl font-bold ${getScoreColor(reputation.overall)}`}>
          {reputation.overall}
        </p>
        <p className="text-2xl text-purple-100 mt-2">
          {getScoreLabel(reputation.overall)}
        </p>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Engagement Score */}
        <div className="bg-purple-600/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Engagement</h3>
            <span className={`text-2xl font-bold ${getScoreColor(reputation.engagement)}`}>
              {reputation.engagement}
            </span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all"
              style={{ width: `${reputation.engagement}%` }}
            />
          </div>
          <p className="text-purple-200 text-sm mt-2">
            Based on follower interaction and activity
          </p>
        </div>

        {/* Activity Score */}
        <div className="bg-purple-600/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Activity</h3>
            <span className={`text-2xl font-bold ${getScoreColor(reputation.activity)}`}>
              {reputation.activity}
            </span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all"
              style={{ width: `${reputation.activity}%` }}
            />
          </div>
          <p className="text-purple-200 text-sm mt-2">
            Based on cast frequency and consistency
          </p>
        </div>

        {/* Network Score */}
        <div className="bg-purple-600/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Network</h3>
            <span className={`text-2xl font-bold ${getScoreColor(reputation.network)}`}>
              {reputation.network}
            </span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all"
              style={{ width: `${reputation.network}%` }}
            />
          </div>
          <p className="text-purple-200 text-sm mt-2">
            Based on follower and following ratio
          </p>
        </div>

        {/* Influence Score */}
        <div className="bg-purple-600/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Influence</h3>
            <span className={`text-2xl font-bold ${getScoreColor(reputation.influence)}`}>
              {reputation.influence}
            </span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all"
              style={{ width: `${reputation.influence}%` }}
            />
          </div>
          <p className="text-purple-200 text-sm mt-2">
            Based on overall reach and impact
          </p>
        </div>
      </div>
    </div>
  );
}
