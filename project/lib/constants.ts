export const THRESHOLDS = {
    temperature: {
      min: 18,
      max: 24,
      unit: '°C'
    },
    humidity: {
      min: 40,
      max: 70,
      unit: '%'
    },
    moisture: {
      min: 30,
      max: 80,
      unit: '%'
    }
  } as const
  
  export const ARDUINO_BASE_URL = 'http://192.168.43.9'