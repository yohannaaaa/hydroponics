"use client"

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Since it's January and launch, we'll show empty states
export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Analytics Overview</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Yield</h3>
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No yield data available yet</p>
              <p className="text-sm text-muted-foreground">Data will appear after first harvest</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Resource Distribution</h3>
          <div className="h-[400px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No resource data available yet</p>
              <p className="text-sm text-muted-foreground">Resource usage will be tracked as the system operates</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}