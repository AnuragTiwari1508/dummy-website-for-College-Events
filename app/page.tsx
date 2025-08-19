import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <EventsSection />
        <Footer />
      </div>
    </div>
  )
}
