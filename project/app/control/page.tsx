"use client"

import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Fan, Droplets, LightbulbIcon, Bell } from 'lucide-react'

export default function ControlPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[200px] rounded-lg overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/50" />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-4xl font-bold text-white mb-2">Control Panel</h1>
          <p className="text-green-100">Manage your hydroponics system</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Fan className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fan</h3>
                <p className="text-sm text-gray-500">Ventilation control</p>
              </div>
            </div>
            <Switch />
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Droplets className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Pump</h3>
                <p className="text-sm text-gray-500">Water circulation</p>
              </div>
            </div>
            <Switch />
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <LightbulbIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">LED</h3>
                <p className="text-sm text-gray-500">Growth lighting</p>
              </div>
            </div>
            <Switch />
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <Bell className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">System</h3>
                <p className="text-sm text-gray-500">Main control</p>
              </div>
            </div>
            <Switch />
          </div>
        </Card>
      </div>
    </div>
  )
}