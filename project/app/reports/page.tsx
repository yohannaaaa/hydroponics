"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Filter } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="space-y-8 pb-72" >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex gap-4">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <Card className="p-8 text-center">
        <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-semibold mb-2">No Reports Available</h3>
        <p className="text-muted-foreground mb-4">Reports will be generated as your system collects data</p>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          Generate First Report
        </Button>
      </Card>
    </div>
  )
}