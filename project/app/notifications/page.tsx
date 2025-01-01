"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThermometerIcon, Droplets, Bell } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([])
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    humidity: 0,
    soilMoisture: 0
  })

  useEffect(() => {
    const arduinoBaseUrl = "http://192.168.43.9"

    const fetchData = async () => {
      try {
        const dhtResponse = await fetch(`${arduinoBaseUrl}/readDHT`)
        if (dhtResponse.ok) {
          const dhtData = await dhtResponse.text()
          const [temp, hum] = JSON.parse(dhtData)
          setSensorData(prev => ({ ...prev, temperature: temp, humidity: hum }))
        }

        const moistureResponse = await fetch(`${arduinoBaseUrl}/readMoisture`)
        if (moistureResponse.ok) {
          const moisture = await moistureResponse.text()
          setSensorData(prev => ({ ...prev, soilMoisture: parseInt(moisture) }))
        }
      } catch (error) {
        console.error("Error fetching sensor data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const newNotifications = []

    if (sensorData.temperature > 24) {
      newNotifications.push({
        id: 1,
        type: 'warning',
        title: 'High Temperature Alert',
        message: `Temperature reached ${sensorData.temperature}°C, above optimal range of 18-24°C`,
        timestamp: '1 minute ago',
        icon: ThermometerIcon,
        status: 'urgent'
      })
    }

    if (sensorData.humidity > 70) {
      newNotifications.push({
        id: 2,
        type: 'warning',
        title: 'High Humidity Alert',
        message: `Humidity levels have risen to ${sensorData.humidity}%, above optimal range`,
        timestamp: '1 minute ago',
        icon: Droplets,
        status: 'active'
      })
    }

    if (sensorData.soilMoisture < 30) {
      newNotifications.push({
        id: 3,
        type: 'warning',
        title: 'Low Soil Moisture',
        message: `Soil moisture is at ${sensorData.soilMoisture}%, below optimal range`,
        timestamp: '1 minute ago',
        icon: Droplets,
        status: 'urgent'
      })
    }

    setNotifications(newNotifications)
  }, [sensorData])

  if (notifications.length === 0) {
    return (
      <div className="space-y-6 md:space-y-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">Monitor your system alerts and updates</p>
          </div>
        </div>
        <Card className="p-6 md:p-8 text-center">
          <Bell className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Notifications</h3>
          <p className="text-muted-foreground">All systems are operating within normal parameters</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Notifications</h1>
          <p className="text-muted-foreground">Monitor your system alerts and updates</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          Mark all as read
        </Button>
      </div>

      <div className="grid gap-4">
        {notifications.map((notification) => {
          const Icon = notification.icon
          return (
            <Card key={notification.id} className={`p-4 border-l-4 ${
              notification.type === 'warning' ? 'border-l-yellow-500' :
              notification.type === 'error' ? 'border-l-red-500' :
              notification.type === 'success' ? 'border-l-green-500' :
              'border-l-blue-500'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${
                  notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' :
                  notification.type === 'error' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' :
                  notification.type === 'success' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                  'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="font-semibold truncate">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.timestamp}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      notification.status === 'urgent' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' :
                      notification.status === 'active' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' :
                      notification.status === 'resolved' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                      'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                    }`}>
                      {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}