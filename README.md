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
- **Farcaster Integration:** Neynar API / Airstack API
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Farcaster API key (Neynar or Airstack)

### Installation

```bash
# Clone the repository
git clone https://github.com/0xsters/farcaster-reputation-checker.git

# Navigate to project directory
cd farcaster-reputation-checker

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API keys to .env
# NEXT_PUBLIC_NEYNAR_API_KEY=your_api_key_here

# Run development server
npm run dev
```

## Project Structure

```
farcaster-reputation-checker/
├── src/
│   ├── components/     # React components
│   ├── lib/           # API and utility functions
│   ├── types/         # TypeScript types
│   └── app/           # Next.js app directory
├── public/            # Static assets
└── README.md
```

## Features Roadmap

- [ ] Basic account lookup
- [ ] Reputation score calculation
- [ ] Engagement metrics
- [ ] Historical data analysis
- [ ] Comparative analytics
- [ ] Export reports

## API Integration

This app uses Farcaster data APIs to fetch:
- User profiles
- Cast history
- Follower/following counts
- Engagement metrics
- Activity patterns

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License

## Author

Built by [@0xsters](https://github.com/0xsters)

## Links

- [Farcaster](https://www.farcaster.xyz/)
- [Neynar API](https://neynar.com/)
- [Airstack](https://www.airstack.xyz/)
