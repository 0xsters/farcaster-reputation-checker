# Farcaster Reputation Checker 🎯

A Farcaster mini app to check and analyze account reputation and social metrics.

## Status

Last verified 22 November 2026: `npm run build` passes (Next.js 14.2.35), `npm run lint` passes with one pre-existing warning in `src/components/ProfileDisplay.tsx` (plain `<img>` instead of `next/image`), and the production build serves `/`, `/profile/dwr`, and `/profile/vitalik.eth` with HTTP 200. The 22 November checks ran without a Neynar API key, so the profile pages used the mock-data fallback in `src/lib/api.ts`. Live Neynar data was last verified on 21 November 2026: user lookup and `/feed/user/casts` return data for `dwr` (fid 3) and `vitalik.eth` (fid 5650). No API key is bundled with this repo; set your own key as described below.

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
- npm (`package-lock.json` is committed, so `npm ci` works too)
- A Neynar API key from https://dev.neynar.com (your own key; none is included in this repo)

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
```

Edit `.env` and set `NEXT_PUBLIC_NEYNAR_API_KEY` to your Neynar API key. `.env.example` lists three variables:

| Variable | Required? |
|---|---|
| `NEXT_PUBLIC_NEYNAR_API_KEY` | Yes, for live Farcaster data. Without it the app falls back to mock data (see `src/lib/api.ts`). |
| `NEXT_PUBLIC_AIRSTACK_API_KEY` | No. Present in `.env.example` but not read by the current code. |
| `NEXT_PUBLIC_APP_URL` | No. Present in `.env.example` but not read by the current code. The template defaults to `http://localhost:3000`. |

Never commit a real key: `.env` is git-ignored.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app!

For a production build, set the key in `.env` before building, because `NEXT_PUBLIC_` values are baked in at build time:

```bash
npm run build
npm run start
```

Check the code with:

```bash
npm run lint
```

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

Set `NEXT_PUBLIC_NEYNAR_API_KEY` in `.env` as described in Getting Started. Get a key at https://dev.neynar.com. Never commit a real key to the repo.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository: `0xsters/farcaster-reputation-checker`
4. Add environment variable:
   - `NEXT_PUBLIC_NEYNAR_API_KEY` = your Neynar API key (from https://dev.neynar.com; set it before deploying so the production build picks it up)
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
