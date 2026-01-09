# Casino Slots

A fun and interactive slot machine game built with React, TypeScript, and Vite. Spin the reels, manage your coin balance, and try your luck at winning jackpots!

This project is a Lexicon assignment.

## Features

- Interactive 3-reel slot machine with multiple symbols
- Coin balance management system (starting with 100 coins)
- Multiple win conditions and payout levels:
  - **Royal Flush** (Jack, Queen, King) - 500 coins
  - **Joker Jackpot** (Three Jokers) - Special win
  - **Big Win** (Three matching symbols) - 100 coins
  - **Small Win** (Two matching symbols) - 20 coins
- Responsive design with SCSS modules
- React Router for navigation (Home, Game, Balance)
- TypeScript for type safety
- Context API for global coin state management
- Animated reel spinning effects

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router** for routing
- **SCSS Modules** for styling
- **ESLint** for code quality
- **Context API** for state management

## Live Site
[View the live casino site](https://arh-lexicon-casino.netlify.app/)

## Getting Started (for local testing)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm preview
```

## Project Structure

- `src/components/` - Reusable UI components (Button, Reel, SlotMachine, Layout, etc.)
- `src/pages/` - Page components (Home, Game, Balance)
- `src/contexts/` - React Context providers (CoinContext)
- `src/constants/` - Slot symbols and game constants
- `src/styles/` - Global styles and SCSS configuration
- `src/assets/images/` - Slot symbols and favicon images

## License

© 2026 Arden Haldorson
