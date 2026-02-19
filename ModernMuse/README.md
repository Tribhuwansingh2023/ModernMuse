# ModernMuse

A premium editorial platform exploring the intersection of technology, culture, and the art of living well — from the heart of India.

## About

ModernMuse is a modern editorial website built with React, TypeScript, and Tailwind CSS. It features:

- **Role-based system**: Regular Users, Verified Creators, and Admin roles
- **Verification badges**: Highlight trusted creators
- **Monetization features**: Subscription management and earnings dashboard for creators
- **Rich editorial experience**: Beautiful typography, smooth animations, and responsive design
- **Article management**: Create, publish, and monetize content
- **User profiles**: Personalized profiles with earnings tracking for creators

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd editorial-excellence

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```sh
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── ui/           # shadcn-ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AuthModal.tsx
│   ├── ArticleCard.tsx
│   ├── VerificationBadge.tsx
│   ├── EarningsDashboard.tsx
│   └── ...
├── pages/            # Page components
│   ├── Index.tsx
│   ├── ArticleDetail.tsx
│   ├── ProfilePage.tsx
│   ├── CreatePostPage.tsx
│   └── ...
├── types/            # TypeScript type definitions
│   └── user.ts
├── data/             # Static data
│   └── articles.ts
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── styles/           # Global styles
└── main.tsx          # Application entry point
```

## Technology Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Routing**: React Router v6
- **Form Management**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest

## Features

### For Regular Users
- Browse and read articles
- Like and bookmark articles
- User authentication
- View creator profiles

### For Verified Creators
- Verification badge
- Publish articles
- Enable subscription content
- View earnings dashboard
- Manage monetization settings
- Track subscriber metrics

### For Admins
- Full administrative access
- User and content management

## Development Scripts

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint
```

## Customization

### Branding
- Update site name and description in `index.html`
- Modify colors in `tailwind.config.ts`
- Replace favicon in `public/favicon.svg`

### Content
- Edit articles in `src/data/articles.ts`
- Customize categories and content structure

### Styling
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes
- Dark mode support via `next-themes`

## License

© 2026 ModernMuse. All rights reserved.

## Support

For questions or support, please contact us through the website's contact page.
