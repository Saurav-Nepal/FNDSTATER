# 🚀 SaaS Frontend Monorepo

A scalable frontend monorepo for SaaS products built with [Turborepo](https://turbo.build/repo), [Next.js](https://nextjs.org/), and [TypeScript](https://www.typescriptlang.org/).

## 📦 What's Inside?

This monorepo includes the following packages and apps:

### Apps and Packages

- `web`: Main web application built with [Next.js](https://nextjs.org/)
- `pwa`: Progressive Web App version with offline support
- `docs`: Documentation site built with [Nextra](https://nextra.site/)
- `storybook`: Component documentation and testing with [Storybook](https://storybook.js.org/)
- `@repo/ui`: Shared React component library with [TailwindCSS](https://tailwindcss.com/)
- `@repo/hooks`: Custom React hooks and utilities
- `@repo/lib`: Business logic, types, and state management with [Zustand](https://zustand-demo.pmnd.rs/)
- `@repo/config`: Shared configuration files (ESLint, Prettier, Tailwind, TypeScript)

### 🛠️ Built With

- **[Turborepo](https://turbo.build/repo)** - High-performance build system
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety across the entire codebase
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Storybook](https://storybook.js.org/)** - Component development and testing
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - Code quality and formatting
- **[Husky](https://typicode.github.io/husky/)** & **[lint-staged](https://github.com/okonet/lint-staged)** - Git hooks for code quality

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saas-frontend-monorepo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy example files and update with your values
cp apps/web/.env.example apps/web/.env.local
cp apps/pwa/.env.example apps/pwa/.env.local
```

4. Set up git hooks:
```bash
npm run prepare
```

### Development

Start all applications in development mode:
```bash
npm run dev
```

Or start individual applications:
```bash
# Web app (http://localhost:3000)
cd apps/web && npm run dev

# PWA (http://localhost:3002)
cd apps/pwa && npm run dev

# Documentation (http://localhost:3001)
cd apps/docs && npm run dev

# Storybook (http://localhost:6006)
cd apps/storybook && npm run storybook
```

### Building

Build all applications:
```bash
npm run build
```

Build specific applications:
```bash
# Build web app
cd apps/web && npm run build

# Build Storybook
cd apps/storybook && npm run build-storybook
```

### Linting and Type Checking

```bash
# Lint all packages
npm run lint

# Fix linting issues
npm run lint:fix

# Type check all packages
npm run type-check

# Format code
npm run format
```

## 📁 Project Structure

```
├── apps/
│   ├── web/                 # Main Next.js application
│   │   ├── src/
│   │   │   ├── app/         # App Router pages
│   │   │   ├── components/  # App-specific components
│   │   │   └── styles/      # Global styles
│   │   ├── next.config.js
│   │   └── package.json
│   ├── pwa/                 # PWA version
│   ├── docs/                # Documentation (Nextra)
│   └── storybook/           # Component stories
├── packages/
│   ├── ui/                  # Shared React components
│   │   ├── src/
│   │   │   ├── components/  # Component implementations
│   │   │   └── lib/         # Utility functions
│   │   └── package.json
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Business logic and types
│   │   ├── src/
│   │   │   ├── stores/      # Zustand stores
│   │   │   ├── types.ts     # Shared TypeScript types
│   │   │   └── utils.ts     # Utility functions
│   │   └── package.json
│   └── config/              # Shared configurations
│       ├── eslint.js
│       ├── prettier.js
│       ├── tailwind.js
│       └── tsconfig.json
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI/CD
├── .husky/                  # Git hooks
├── package.json             # Root package.json
├── turbo.json              # Turborepo configuration
└── README.md
```

## 🎨 UI Components

The `@repo/ui` package includes a comprehensive set of reusable components:

- **Button** - Various styles and sizes
- **Card** - Flexible content containers
- **Input** - Form input components
- And more...

View all components in Storybook by running:
```bash
cd apps/storybook && npm run storybook
```

## 🗂️ State Management

Global state is managed using [Zustand](https://zustand-demo.pmnd.rs/) with the following stores:

- **Auth Store** (`@repo/lib`) - User authentication state
- Add more stores as needed...

Example usage:
```tsx
import { useAuthStore } from '@repo/lib';

function MyComponent() {
  const { user, login, logout } = useAuthStore();
  // Component logic...
}
```

## 🔧 Configuration

### TypeScript

All packages use shared TypeScript configuration from `@repo/config/tsconfig`. Path mapping is set up for easy imports:

```tsx
import { Button } from '@repo/ui';
import { useLocalStorage } from '@repo/hooks';
import { useAuthStore } from '@repo/lib';
```

### TailwindCSS

Shared Tailwind configuration includes:
- Custom color scheme with CSS variables
- Design tokens for consistent spacing and typography
- Animation utilities
- Responsive design utilities

### ESLint & Prettier

Consistent code style across all packages with:
- TypeScript-aware ESLint rules
- Prettier integration
- Import sorting
- React-specific rules

## 🚀 Deployment

### Environment Variables

Each app has its own environment variables. See `.env.example` files for required variables.

### CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs:
- Linting and type checking
- Building all applications
- Parallel builds for faster CI times

### Deployment Platforms

This monorepo is ready to deploy to:
- **Vercel** (recommended for Next.js apps)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

## 📚 Documentation

- Browse component documentation in Storybook
- Read detailed guides in the docs app
- Check package READMEs for specific information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint && npm run type-check`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Turborepo](https://turbo.build/repo)