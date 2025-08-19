import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"
import { StatsOrbs } from "./stats-orbs"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 relative z-10">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight animate-pulse">FEST'26</h1>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          IET DAVV presents the ultimate entrepreneurship summit bringing together innovators, investors, and industry
          leaders to shape the future of business.
        </p>

        <StatsOrbs />

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <Ticket className="w-5 h-5 mr-2" />
            Get Your Fest Pass
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
          >
            <Ticket className="w-5 h-5 mr-2" />
            Fest Pass
          </Button>
        </div>
      </div>
    </section>
  )
}
