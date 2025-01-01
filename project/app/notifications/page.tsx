"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Bell, RotateCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AlertCard } from '@/components/notifications/alert-card'
import { useSensorData } from '@/hooks/use-sensor-data'
import { THRESHOLDS } from '@/lib/constants'

export default function NotificationsPage() {
  const sensorData = useSensorData()
  const [alerts, setAlerts] = useState<Array<{
    id: number
    title: string
    message: string
    timestamp: string
    level: 'warning' | 'error' | 'success'
    type: 'temperature' | 'humidity' | 'moisture'
  }>>([])

  // Function to refresh the page
  const handleRefresh = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (sensorData.loading || sensorData.error) return

    const newAlerts: Array<{
      id: number
      title: string
      message: string
      timestamp: string
      level: 'warning' | 'error' | 'success'
      type: 'temperature' | 'humidity' | 'moisture'
    }> = []
    const now = new Date().toLocaleTimeString()

    // Check temperature
    if (sensorData.temperature > THRESHOLDS.temperature.max) {
      newAlerts.push({
        id: Date.now(),
        title: 'High Temperature Alert',
        message: `Temperature (${sensorData.temperature}${THRESHOLDS.temperature.unit}) is above optimal range of ${THRESHOLDS.temperature.min}-${THRESHOLDS.temperature.max}${THRESHOLDS.temperature.unit}`,
        timestamp: now,
        level: 'warning',
        type: 'temperature'
      })
    }

    // Check humidity
    if (sensorData.humidity < THRESHOLDS.humidity.min) {
      newAlerts.push({
        id: Date.now() + 1,
        title: 'Low Humidity Alert',
        message: `Humidity (${sensorData.humidity}${THRESHOLDS.humidity.unit}) is below optimal range of ${THRESHOLDS.humidity.min}-${THRESHOLDS.humidity.max}${THRESHOLDS.humidity.unit}`,
        timestamp: now,
        level: 'warning',
        type: 'humidity'
      })
    }

    // Check moisture
    if (sensorData.moisture < THRESHOLDS.moisture.min) {
      newAlerts.push({
        id: Date.now() + 2,
        title: 'Low Soil Moisture',
        message: `Soil moisture (${sensorData.moisture}${THRESHOLDS.moisture.unit}) is below optimal range of ${THRESHOLDS.moisture.min}-${THRESHOLDS.moisture.max}${THRESHOLDS.moisture.unit}`,
        timestamp: now,
        level: 'error',
        type: 'moisture'
      })
    }

    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 10)) // Keep last 10 alerts
    }
  }, [sensorData])

  if (sensorData.loading) {
    return (
      <div className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" onClick={handleRefresh}>
            <RotateCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
        <Card className="p-6">
          <p className="text-center text-muted-foreground">Loading sensor data...</p>
        </Card>
      </div>
    )
  }

  if (sensorData.error) {
    return (
      <div className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" onClick={handleRefresh}>
            <RotateCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
        <Card className="p-6 border-red-200 bg-red-50">
          <p className="text-center text-red-600">{sensorData.error}</p>
        </Card>
      </div>
    )
  }

  if (alerts.length === 0) {
    return (
      <div className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" onClick={handleRefresh}>
            <RotateCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
        <Card className="p-8 text-center">
          <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Alerts</h3>
          <p className="text-muted-foreground">All systems are operating within normal parameters</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button variant="outline" onClick={handleRefresh}>
          <RotateCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      <div className="grid gap-4">
        {alerts.map(alert => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  )
}
