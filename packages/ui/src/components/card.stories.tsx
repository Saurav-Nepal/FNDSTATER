import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithComplexContent: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage your account settings and preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600">
            Last login: 2 hours ago
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};