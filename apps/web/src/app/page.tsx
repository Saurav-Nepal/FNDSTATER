"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from "@repo/ui";
import { useAuthStore } from "@repo/lib";
import { useLocalStorage } from "@repo/hooks";

export default function HomePage() {
  const { user, isAuthenticated, login, logout } = useAuthStore();
  const [welcomeMessage, setWelcomeMessage] = useLocalStorage("welcome", "Welcome to our SaaS!");

  const handleLogin = () => {
    login({
      id: "1",
      email: "user@example.com",
      name: "John Doe",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {welcomeMessage}
          </h1>
          <p className="text-xl text-gray-600">
            Built with Turborepo, Next.js, and TypeScript
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Demo</CardTitle>
              <CardDescription>
                Test the shared Zustand auth store
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAuthenticated ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Logged in as: <strong>{user?.name}</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Email: <strong>{user?.email}</strong>
                  </p>
                  <Button onClick={logout} variant="destructive">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Not authenticated
                  </p>
                  <Button onClick={handleLogin}>
                    Login (Demo)
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Local Storage Demo</CardTitle>
              <CardDescription>
                Test the useLocalStorage hook
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  placeholder="Enter a welcome message"
                />
                <p className="text-sm text-gray-600">
                  This message is stored in localStorage and will persist across page reloads.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Shared UI Components</CardTitle>
            <CardDescription>
              Examples of components from @repo/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}