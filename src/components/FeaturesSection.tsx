export default function FeaturesSection() {
  const features = [
    {
      icon: '🔍',
      title: 'Deep Analysis',
      description: 'Comprehensive reputation scoring based on multiple metrics'
    },
    {
      icon: '📊',
      title: 'Real-time Data',
      description: 'Live data from Farcaster protocol'
    },
    {
      icon: '⚡',
      title: 'Fast & Accurate',
      description: 'Quick results with precise calculations'
    },
    {
      icon: '🎯',
      title: 'Multi-factor Score',
      description: 'Engagement, activity, network, and influence analysis'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-300/30 hover:bg-white/20 transition-all"
        >
          <div className="text-4xl mb-3">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-purple-200">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
