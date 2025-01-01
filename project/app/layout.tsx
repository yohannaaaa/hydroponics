import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HydroGrow - Modern Hydroponics Solutions',
  description: 'Expert hydroponics growing solutions with focus on barley cultivation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <Header />
              <main className="p-6">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}