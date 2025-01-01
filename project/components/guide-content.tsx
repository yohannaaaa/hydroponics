import { Card } from './ui/card'
import { 
  Droplet, 
  Thermometer, 
  Sun, 
  Timer, 
  Settings, 
  AlertTriangle,
  Scissors
} from 'lucide-react'

export function GuideContent() {
  return (
    <div className="space-y-12">
      <section id="getting-started">
        <h1 className="text-3xl font-bold text-green-900 mb-6">Growing Guide: Hydroponic Barley</h1>
        <Card className="p-6">
          <p className="text-green-800 mb-4">
            Welcome to our comprehensive guide on growing barley hydroponically. This guide will walk you through every step of the process, from initial setup to harvest.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quick Facts:</h3>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Growth cycle: 7-10 days</li>
              <li>Optimal temperature: 65-75°F (18-24°C)</li>
              <li>pH range: 6.0-6.5</li>
              <li>Light needs: 14-16 hours daily</li>
            </ul>
          </div>
        </Card>
      </section>

      <section id="setup" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">System Setup</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Settings className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Initial Setup Steps</h3>
              <ol className="list-decimal list-inside space-y-3 text-green-700">
                <li>Clean and sanitize all growing trays</li>
                <li>Install LED growing lights</li>
                <li>Set up water circulation system</li>
                <li>Calibrate pH and EC meters</li>
                <li>Prepare growing medium</li>
              </ol>
            </div>
          </div>
        </Card>
      </section>

      <section id="nutrients" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">Nutrient Management</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Droplet className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Nutrient Solution</h3>
              <p className="text-green-700 mb-4">
                Maintain EC levels between 1.8-2.2 mS/cm with the following nutrient ratio:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Nitrogen (N): 150-200 ppm</li>
                <li>Phosphorus (P): 50-80 ppm</li>
                <li>Potassium (K): 100-150 ppm</li>
                <li>Calcium (Ca): 100-120 ppm</li>
                <li>Magnesium (Mg): 40-50 ppm</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section id="environment" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">Environmental Control</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Thermometer className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Temperature</h3>
                <p className="text-green-700">
                  Maintain temperature between 65-75°F (18-24°C). Monitor both day and night temperatures.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Sun className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Lighting</h3>
                <p className="text-green-700">
                  Provide 14-16 hours of light daily using LED grow lights with both blue and red spectrum.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="maintenance" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">Daily Maintenance</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Timer className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Daily Tasks</h3>
              <ul className="list-disc list-inside space-y-2 text-green-700">
                <li>Check water temperature</li>
                <li>Monitor pH and EC levels</li>
                <li>Inspect for any signs of problems</li>
                <li>Clean any debris from trays</li>
                <li>Record growth progress</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section id="harvesting" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">Harvesting</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <Scissors className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Harvest Guide</h3>
              <p className="text-green-700 mb-4">
                Harvest when barley reaches 6-8 inches in height, typically 7-10 days after seeding.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Harvesting Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-green-700">
                  <li>Clean harvesting tools</li>
                  <li>Cut just above the root mat</li>
                  <li>Package immediately</li>
                  <li>Clean growing trays</li>
                  <li>Prepare for next cycle</li>
                </ol>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section id="troubleshooting" className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-900">Troubleshooting</h2>
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Issues</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Yellow Leaves</h4>
                  <p className="text-green-700">Usually indicates nutrient deficiency or pH imbalance. Check nutrient levels and pH.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Slow Growth</h4>
                  <p className="text-green-700">Check temperature and light levels. Ensure proper nutrient concentration.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mold Growth</h4>
                  <p className="text-green-700">Improve air circulation and reduce humidity. Clean affected areas with hydrogen peroxide solution.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}