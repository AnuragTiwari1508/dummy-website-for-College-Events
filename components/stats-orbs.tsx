export function StatsOrbs() {
  const stats = [
    { number: "7,00,000+", label: "FEST REACH", color: "from-blue-500 to-cyan-500" },
    { number: "3,000+", label: "ATTENDEES", color: "from-cyan-500 to-teal-500" },
    { number: "5,000+", label: "REGISTRATIONS", color: "from-purple-500 to-pink-500" },
    { number: "3,500+", label: "CAMPUS STRENGTH", color: "from-pink-500 to-red-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 relative z-10">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color} opacity-30 blur-2xl scale-150 group-hover:scale-[1.7] transition-all duration-700`}
          />

          <div className="relative w-48 h-48 mx-auto">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stat.color} opacity-20 blur-md`} />
            <div
              className={`relative w-full h-full rounded-full bg-black/40 backdrop-blur-md border-2 border-gradient-to-br ${stat.color.replace("from-", "border-").replace("to-", "border-")} shadow-2xl group-hover:scale-105 transition-all duration-500 flex items-center justify-center`}
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 50%), 
                           radial-gradient(circle at center, rgba(0,0,0,0.8), rgba(0,0,0,0.9))`,
                boxShadow: `inset 0 0 50px rgba(255,255,255,0.1), 
                           0 0 50px var(--tw-gradient-from), 
                           0 0 100px var(--tw-gradient-to)`,
              }}
            >
              <div className="absolute inset-4 rounded-full overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-60 animate-float`}
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${15 + i * 8}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + (i % 3)}s`,
                    }}
                  />
                ))}
              </div>

              <div className="text-center relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{stat.number}</div>
                <div className="text-sm text-white/90 font-medium tracking-widest">{stat.label}</div>
              </div>

              <div
                className={`absolute inset-2 rounded-full border border-gradient-to-br ${stat.color} opacity-40`}
                style={{
                  background: `conic-gradient(from 0deg, transparent, var(--tw-gradient-from), transparent, var(--tw-gradient-to), transparent)`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
