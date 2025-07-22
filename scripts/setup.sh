#!/bin/bash

echo "🚀 Setting up SaaS Frontend Monorepo..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up git hooks
echo "🪝 Setting up git hooks..."
npm run prepare

# Copy environment files
echo "🔧 Setting up environment files..."
if [ ! -f "apps/web/.env.local" ]; then
    cp apps/web/.env.example apps/web/.env.local
    echo "✅ Created apps/web/.env.local"
fi

if [ ! -f "apps/pwa/.env.local" ]; then
    cp apps/pwa/.env.example apps/pwa/.env.local
    echo "✅ Created apps/pwa/.env.local"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Update environment variables in .env.local files"
echo "  2. Run 'npm run dev' to start all applications"
echo "  3. Visit the applications:"
echo "     - Web app: http://localhost:3000"
echo "     - PWA: http://localhost:3002"
echo "     - Docs: http://localhost:3001"
echo "     - Storybook: http://localhost:6006"
echo ""