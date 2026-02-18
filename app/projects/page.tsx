// this is my database aka an array
const projects = [
  {
    title: "joshuakung.com",
    description: `
        Spent winter break building this 🤩🤩🤩
        Coming up with designs were the hardest part.
        Twas my first time building a website.`,
    tech: ["React", "TypeScript", "Next.js", "Motion"],
    link: "https://github.com/joshuahkung/personal-website"
  },
  {
    title: "Scalable Music Streaming Database",
    description: `
        Built a baby Spotify 🎶
        An interactive front-end where users can create accounts, create playlists, search for songs, add songs, and view song information, which would execute complex queries and alterations to a relational SQL database. 
        Couldn't have done it w/o my favorite musician Chris Hyorok Lee.`,
    tech: ["Python", "PostgreSQL"],
    link: null
  },
  {
    title: "Portfolio Optimization Using Monte Carlo Simulation",
    description: `
        Designed an investment analysis tool to optimize asset allocation by employing Monte Carlo simulations; the tool forecasts 100,000+ portfolio scenarios using historical market data to enhance risk-adjusted returns. 
        Couldn't have done it w/o my favorite banker Igor Morzan-Kaplia.`,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib" ,"yfinance"],
    link: null
  },
  {
    title: "Manual Options Trade Ledger in Pine Script: TradingView",
    description: `
        Designed and published a manual options log into a live table overlay on a trading chart that auto-filled live data – timestamp, price, % change – and showed ticker, premium, contracts, strike, expiry, and notes with an export option to Google Sheets; built for traders who preferred a visual, copyable ledger that dynamically grew with their trades for a real-time trading workflow option traders. 
        So far only have six likes on it tho.`,
    tech: ["Pine Script"],
    link: "https://github.com/joshuahkung/tradingview"
  },
  {
    title: "Modular Travel Booking Engine",
    description: `
        Ever used Expedia? 
        Designed a modular booking engine supporting concurrent Admin and User workflows, implementing a Factory pattern to decouple service instantiation from the client interface and enable future protocol extensions. 
        This was one of my earliest projects. `,
    tech: ["Java", "OOP", "Design Patterns"],
    link: null
  }
]
export default function Projects() {
  return (
    <main className="pt-20">

      {/* Header Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600">
            Personal things I've built while learning to code. 
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition"
              >
                <h2 className="text-3xl font-bold mb-3">{project.title}</h2>

                <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>

                {/* Only render tech section if project.tech exists */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link or Private Label */}
                {project.link ? (
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 font-medium transition"
                  >
                    View Project →
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm italic">
                    Private project
                  </span>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}