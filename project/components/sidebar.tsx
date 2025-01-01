"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Book, Sprout, Menu, Settings, Bell, MessageSquare, LineChart, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  
  const navigation = [
    { name: 'Getting Started', href: '/', icon: Home },
    { name: 'Analytics', href: '/analytics', icon: LineChart },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Status', href: '/status', icon: Settings },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Growing Guide', href: '/guide', icon: Book },
    { name: 'AI Assistant', href: '/ai', icon: MessageSquare }
  ]

  return (
    <>
      <div className={cn(
        "fixed top-0 left-0 h-full border-r transition-all duration-300 z-40 bg-background",
        isOpen ? "w-64" : "w-16"
      )}>
        <div className="p-4 border-b flex items-center justify-between">
          <div className={cn("flex items-center", !isOpen && "justify-center")}>
            <Sprout className="h-6 w-6 text-green-600 dark:text-green-400" />
            {isOpen && (
              <span className="ml-2 text-lg font-bold">HydroGrow</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="p-0 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    pathname === item.href && "bg-accent text-accent-foreground",
                    !isOpen && "justify-center p-2"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isOpen && "mr-2")} />
                  {isOpen && <span>{item.name}</span>}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className={cn(
        "transition-all duration-300",
        isOpen ? "ml-64" : "ml-16"
      )}>
        {/* Content wrapper */}
      </div>
    </>
  )
}