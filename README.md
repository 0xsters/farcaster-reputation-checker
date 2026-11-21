# Farcaster Reputation Checker 🎯

A Farcaster mini app to check and analyze account reputation and social metrics.

## Features

- 🔍 Check Farcaster account reputation
- 📊 View social metrics (followers, following, casts)
- ⭐ Analyze engagement and activity scores
- 🎨 Clean and intuitive UI
- 🚀 Fast and responsive

## Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Farcaster Integration:** Neynar API
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neynar API key (already configured)

### Installation

```bash
# Clone the repository
git clone https://github.com/0xsters/farcaster-reputation-checker.git

# Navigate to project directory
cd farcaster-reputation-checker

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# The Neynar API key is already configured in .env.example
# Just copy it to .env and you're ready to go!

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app!

## Project Structure

```
farcaster-reputation-checker/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Landing page
│   │   ├── layout.tsx                  # App layout
│   │   ├── globals.css                 # Global styles
│   │   └── profile/[username]/
│   │       └── page.tsx                # Dynamic profile page
│   ├── components/
│   │   ├── SearchBar.tsx               # Search input component
│   │   ├── ProfileDisplay.tsx          # User profile card
│   │   ├── ReputationScore.tsx         # Score calculator UI
│   │   ├── FeaturesSection.tsx         # Features grid
│   │   └── LoadingSpinner.tsx          # Loading state
│   ├── lib/
│   │   ├── api.ts                      # Neynar API integration
│   │   └── reputation.ts               # Score calculation logic
│   └── types/
│       └── index.ts                    # TypeScript interfaces
├── public/                              # Static assets
├── .env.example                         # Environment variables template
└── README.md
```

## Features Detail

### Reputation Scoring Algorithm

The app calculates a comprehensive reputation score based on 4 key factors:

1. **Engagement Score (30% weight)**
   - Measures follower interaction per cast
   - Higher ratio = better engagement

2. **Activity Score (25% weight)**
   - Based on total cast count
   - Logarithmic scale rewards consistent activity

3. **Network Score (25% weight)**
   - Analyzes follower/following ratio
   - Balanced ratios indicate healthy networking

4. **Influence Score (20% weight)**
   - Based on total follower count
   - Measures overall reach and impact

**Overall Score:** Weighted average of all 4 factors (0-100)
- 80-100: Excellent ⭐
- 60-79: Good 💙
- 40-59: Average 💛
- 0-39: Growing 🧡

## API Integration

This app uses the Neynar API to fetch real-time Farcaster data:
- User profiles
- Cast history
- Follower/following counts
- Engagement metrics
- Activity patterns

### API Key Setup

Copy `.env.example` to `.env` and fill in your own Neynar API key:

```bash
cp .env.example .env
```

Get a key at https://dev.neynar.com and set it as `NEXT_PUBLIC_NEYNAR_API_KEY` in `.env`. Never commit a real key to the repo.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done! ✅)
2. Visit [vercel.com](https://vercel.com)
3. Import repository: `0xsters/farcaster-reputation-checker`
4. Add environment variable:
   - `NEXT_PUBLIC_NEYNAR_API_KEY` = your Neynar API key (from https://dev.neynar.com)
5. Click Deploy
6. Your app will be live in ~2 minutes! 🚀

## Usage

1. Enter any Farcaster username (with or without @)
2. View detailed profile information
3. Analyze reputation scores across 4 metrics
4. Understand social standing and influence

### Example Usernames to Try
- `dwr.eth` (Dan Romero, Farcaster co-founder)
- `vitalik.eth` (Vitalik Buterin)
- `jessepollak` (Jesse Pollak, Base)

## Features Roadmap

- [x] Basic account lookup
- [x] Reputation score calculation
- [x] Engagement metrics
- [ ] Historical data analysis
- [ ] Comparative analytics
- [ ] Export reports
- [ ] Trending accounts
- [ ] Leaderboard

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

MIT License

## Author

Built with ❤️ by [@0xsters](https://github.com/0xsters)

## Links

- **Live Demo:** [Deploy to see your live URL]
- [Farcaster](https://www.farcaster.xyz/)
- [Neynar API](https://neynar.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

---

### Quick Start

```bash
git clone https://github.com/0xsters/farcaster-reputation-checker.git
cd farcaster-reputation-checker
npm install
cp .env.example .env
npm run dev
```

🎉 Start checking Farcaster reputations at http://localhost:3000
