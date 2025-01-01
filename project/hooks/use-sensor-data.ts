import { useState, useEffect } from 'react'
import { ARDUINO_BASE_URL } from '@/lib/constants'

export type SensorData = {
  temperature: number
  humidity: number
  moisture: number
  loading: boolean
  error: string | null
}

export function useSensorData() {
  const [data, setData] = useState<SensorData>({
    temperature: 0,
    humidity: 0,
    moisture: 0,
    loading: true,
    error: null
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const [moistureRes, dhtRes] = await Promise.all([
          fetch(`${ARDUINO_BASE_URL}/readMoisture`),
          fetch(`${ARDUINO_BASE_URL}/readDHT`)
        ])

        const moisture = await moistureRes.text()
        const dhtData = await dhtRes.text()
        const [temp, hum] = JSON.parse(dhtData)

        setData({
          temperature: temp,
          humidity: hum,
          moisture: parseInt(moisture),
          loading: false,
          error: null
        })
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to fetch sensor data'
        }))
      }
    }

    fetchData()
  }, []) // Only run once on mount

  return data
}