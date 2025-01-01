import { Chatbot } from '@/components/chatbot'

export default function AIPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold text-green-900 mb-8">AI Assistant</h1>
      <Chatbot />
    </div>
  )
}