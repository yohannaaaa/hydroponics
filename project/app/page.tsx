import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Droplet, Sun, Thermometer } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 dark:from-green-950 to-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-green-900 dark:text-green-50 mb-4 md:mb-6">
                Modern Hydroponics Solutions for Barley Growing
              </h1>
              <p className="text-base md:text-lg text-green-700 dark:text-green-200 mb-6 md:mb-8">
                Experience the future of agriculture with our innovative hydroponic systems. 
                Grow nutritious barley efficiently and sustainably.
              </p>
              <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[200px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/model.jpg"
                alt="Hydroponic System Model"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-16 px-4 md:px-0 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 dark:text-green-50 mb-8 md:mb-12">
            Key Features of Our System
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="p-4 md:p-6">
              <Droplet className="h-8 md:h-12 w-8 md:w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-green-900 dark:text-green-50 mb-2">
                Water Efficiency
              </h3>
              <p className="text-green-700 dark:text-green-200 text-sm md:text-base">
                Uses 90% less water than traditional farming methods while maximizing yield.
              </p>
            </Card>
            <Card className="p-4 md:p-6">
              <Sun className="h-8 md:h-12 w-8 md:w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-green-900 dark:text-green-50 mb-2">
                Optimal Light Control
              </h3>
              <p className="text-green-700 dark:text-green-200 text-sm md:text-base">
                LED lighting system provides perfect spectrum for barley growth.
              </p>
            </Card>
            <Card className="p-4 md:p-6 sm:col-span-2 md:col-span-1">
              <Thermometer className="h-8 md:h-12 w-8 md:w-12 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-green-900 dark:text-green-50 mb-2">
                Climate Control
              </h3>
              <p className="text-green-700 dark:text-green-200 text-sm md:text-base">
                Maintains ideal temperature and humidity for maximum growth rate.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}