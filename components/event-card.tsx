import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface EventCardProps {
  title: string
  subtitle: string
  image: string
  description: string
  sponsor?: string
}

export function EventCard({ title, subtitle, image, description, sponsor }: EventCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-cyan-400 font-semibold">E-SUMMIT' 25</div>
          <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 mb-4 uppercase tracking-wide">{subtitle}</p>

        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {sponsor && (
          <div className="mb-4">
            <p className="text-xs text-slate-400 mb-1">POWERED BY</p>
            <p className="text-sm font-semibold text-cyan-400">{sponsor}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-xs text-slate-400">WIN BIG PRIZES</span>
            <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs px-4 py-2">
              CONTACTS
            </Button>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <span>Email us</span>
            <MessageCircle className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Card>
  )
}
