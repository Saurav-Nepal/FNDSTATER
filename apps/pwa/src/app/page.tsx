"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { useAuthStore } from "@repo/lib";

export default function PWAHomePage() {
  const { user, isAuthenticated, login, logout } = useAuthStore();

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📱 SaaS PWA
          </h1>
          <p className="text-gray-600">
            Progressive Web App Version
          </p>
        </header>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>PWA Features</CardTitle>
              <CardDescription>
                Offline-first progressive web app
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Installable on mobile devices</li>
                <li>✅ Offline support</li>
                <li>✅ Push notifications ready</li>
                <li>✅ App-like experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Shared state across the monorepo
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isAuthenticated ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Welcome, <strong>{user?.name}</strong>!
                  </p>
                  <Button onClick={logout} variant="destructive" className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Please log in to continue
                  </p>
                  <Button onClick={handleLogin} className="w-full">
                    Login (Demo)
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mobile Optimized</CardTitle>
              <CardDescription>
                Designed for mobile-first experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline">Touch</Button>
                <Button size="sm" variant="outline">Friendly</Button>
                <Button size="sm" variant="outline">Fast</Button>
                <Button size="sm" variant="outline">Responsive</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}