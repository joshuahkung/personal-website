import FlipCard from "@/components/FlipCard";

const featuredProjects = [
  {
    title: "joshuakung.com",
    description: "How's my very first website?",
    tech: ["React", "TypeScript", "Next.js", "Motion"],
    link: "/projects"
  },
  {
    title: "Scalable Music Streaming Database",
    description: "Built a baby Spotify.",
    tech: ["Python", "PostgreSQL"],
    link: "/projects"
  },
  {
    title: "Portfolio Optimization Using Monte Carlo Simulation",
    description: "Forecasted 100,000+ portfolio scenarios using historical market data.",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "yfinance"],
    link: "/projects"
  },
  {
    title: "Manual Options Trade Ledger in Pine Script: TradingView",
    description: "Designed and published a manual options log into a live table overlay.",
    tech: ["Pine Script"],
    link: "/projects"
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="text-center px-8">
          {/* Name - Strong and clear */}
          <h1 className="text-7xl md:text-8xl font-bold mb-8 animate-fade-in">
            Joshua Kung
          </h1>

          {/* Subtle label - Fades in after name */}
          <div className="animate-fade-in-delayed">
            <p className="text-2xl text-gray-600">
              Grad Student • Technical Project Manager
            </p>
          </div>
        </div>

        {/* Subtle scroll hint */}
        <div className="absolute bottom-12 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="bio" className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto mb">

          {/* Polariod + Bio Section */}
          <div className="flex gap-8 items-start mb-12">

            {/* LEFT: Pokemon Flip + Polariod */}
            <FlipCard />

            {/* RIGHT: Bio */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Josh Kung.</h1>
              <p className="text-gray-600 leading-relaxed mb-4">
                I like strategy and building software.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a technical program manager in education, currently building a curriculum for justice-impacted youth to leverage LLMs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I read books to elementary students every week with Read Ahead.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm currently pursuing my MS in CS/ML at Columbia University in New York City. I graduated from USC Spring '24 with my BS in Business Admin.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Updated 01/07/26
              </p>

              {/* LEARN MORE BUTTON */}
              <a
                href="/about"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                About me →
              </a>
            </div>
          </div>
        </div>

      </section>
      {/* Projects section */}
      <section id="projects" className="min-h-screen bg-white-100 p-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex gap-12">

            {/* Sticky sidebar */}
            <div className="w-1/3 sticky top-24 self-start">
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-600 mb-6">
                I've worked on some of these in my free time.
              </p>
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all projects →
              </a>
            </div>

            {/* Scrolling project cards */}
            <div className="w-2/3 space-y-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
      {/* CONTACT/FOOTER SECTION */}
      <section id="contact"
        className="min-h-[50vh] flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Work in Progress</h2>
          <p className="text-gray-600 mb-8">
            I'll update more over
          </p>
          <div className="flex gap-4 justify-center">

            {/* Social links or email button */}
          </div>
        </div>
      </section>
    </main>
  )
}