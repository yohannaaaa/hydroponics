"use client";

import { Card } from "@/components/ui/card"; // Ensure this file exports `Card`
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"; // Recharts should be correctly installed and imported
import { Activity, TrendingUp, Users, Plant } from "lucide-react"; // Ensure `lucide-react` is properly installed


const data = [
  { name: "Jan", growth: 4000, temp: 24, humidity: 65 },
  { name: "Feb", growth: 3000, temp: 23, humidity: 59 },
  { name: "Mar", growth: 2000, temp: 25, humidity: 80 },
  { name: "Apr", growth: 2780, temp: 26, humidity: 70 },
  { name: "May", growth: 1890, temp: 24, humidity: 65 },
  { name: "Jun", growth: 2390, temp: 25, humidity: 67 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">System Health</p>
              <h3 className="text-2xl font-bold">98%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
              <Plant className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Growth Rate</p>
              <h3 className="text-2xl font-bold">+12.5%</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Yield Forecast</p>
              <h3 className="text-2xl font-bold">2.4 tons</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
              <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Systems</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Growth Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="growth" stroke="#22c55e" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Environmental Metrics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#ef4444" />
                <Line type="monotone" dataKey="humidity" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
