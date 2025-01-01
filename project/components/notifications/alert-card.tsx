import { Card } from '@/components/ui/card'
import { AlertTriangle, ThermometerIcon, Droplets } from 'lucide-react'
import { cn } from '@/lib/utils'

type AlertLevel = 'warning' | 'error' | 'success'

interface AlertCardProps {
  title: string
  message: string
  timestamp: string
  level: AlertLevel
  type: 'temperature' | 'humidity' | 'moisture'
}

const iconMap = {
  temperature: ThermometerIcon,
  humidity: Droplets,
  moisture: Droplets
}

const levelStyles = {
  warning: 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/10',
  error: 'border-l-red-500 bg-red-50 dark:bg-red-900/10',
  success: 'border-l-green-500 bg-green-50 dark:bg-green-900/10'
}

export function AlertCard({ title, message, timestamp, level, type }: AlertCardProps) {
  const Icon = iconMap[type]

  return (
    <Card className={cn(
      'p-4 border-l-4 transition-colors',
      levelStyles[level]
    )}>
      <div className="flex items-start gap-4">
        <div className={cn(
          'p-2 rounded-full',
          level === 'warning' && 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400',
          level === 'error' && 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400',
          level === 'success' && 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
        )}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">{title}</h3>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{message}</p>
        </div>
      </div>
    </Card>
  )
}