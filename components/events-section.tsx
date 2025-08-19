import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"

export function EventsSection() {
  const events = [
    {
      title: "CASE CHRONICLES",
      subtitle: "ANALYZE BUSINESS, ONE SLIDE AT A TIME",
      image: "/business-case-study-meeting.png",
      description: "Dive deep into real business scenarios and present strategic solutions.",
    },
    {
      title: "PRODUCT BREAKDOWN",
      subtitle: "DESIGN THE FUTURE, BUILD WHAT MATTERS",
      image: "/product-design-workspace.png",
      description: "Innovate and create products that solve real-world problems.",
    },
    {
      title: "DEV HACKATHON",
      subtitle: "EDTECH SUSTAINABILITY & PRODUCTIVITY HEALTHTECH AI",
      image: "/software-development-team.png",
      description: "Build cutting-edge applications across multiple domains.",
      sponsor: "MAPPLS MapmyIndia",
    },
    {
      title: "PPOC",
      subtitle: "DEBATE, DECIDE, LEAD",
      image: "/corporate-boardroom-meeting.png",
      description: "Experience high-stakes corporate decision making.",
    },
    {
      title: "DESIGN ODYSSEY",
      subtitle: "THE ULTIMATE CREATIVE SHOWDOWN",
      image: "/colorful-design-studio.png",
      description: "Showcase your creative prowess in this design competition.",
    },
  ]

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">EVENTS & COMPETITIONS</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            Fest Pass
          </Button>
        </div>
      </div>
    </section>
  )
}
