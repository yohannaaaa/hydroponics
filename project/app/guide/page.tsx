import { GuideContent } from '@/components/guide-content'

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GuideContent />
      </div>
    </div>
  )
}