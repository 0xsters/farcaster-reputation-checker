import SearchBar from '@/components/SearchBar';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Farcaster Reputation Checker 🎯
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Analyze and discover reputation scores for any Farcaster account
          </p>
        </div>

        {/* Search Section */}
        <SearchBar />

        {/* Features */}
        <FeaturesSection />
      </div>
    </main>
  );
}
