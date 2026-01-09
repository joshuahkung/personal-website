"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const sections = [
  {
    title: "Bio",
    photo: "/gradPic.jpg",
    content: 
        `I'm currently living in New York City. I was born in Los Angeles, CA and raised in the greater Anaheim area.

        I love my friends and family.`
  },
  {
    title: "Work Experience",
    photo: "/coldSpr.jpg",
    content: 
        `I currently work as a technical program manager for STEM+SEL 501(c)(3), teaching kids in Harlem. I robotics to kids at GOSO.
        
        A year prior, I worked as a product manager intern for a healthcare start up. 
        
        During my time at USC, I worked as an AI Data Analyst Intern for the City of Palo Alto. I built a pretty cool tool that would ingest thousands of emails and draft up responses for legal aides, and I tried to look at voter trends with census data.
        
        I project managed a digital banking transformation with KPMG LLP.

        I worked strategic partnerships for T-Mobile for Business as a strategy analyst intern covering UCaaS, Metaverse, and Web3.`
  },
  {
    title: "Volunteering",
    photo: "/sfHat.jpg",
    content: 
      `I've volunteered in education for almost 10 years now 🤯🤯🤯

      Currently, I read books weekly to elementary school students with Read Ahead. 
      
      In undergrad, I taught math/coding to kids ranging from elementary to 12th. I also helped with writing college apps for underrepresented HS seniors in the greater LA area.
      
      In HS, I volunteered to help students with disabilties.
      
      I'm the first in my fam to go to college so education speaks to me.`
  },
  {
    title: "Interests",
    photo: "/winter.jpg",
    content: 
      `I love listening to new music, creating new playlists, going on long walks (30+ min), driving, and trying new foods. 

      I try to stay pretty active year-round. I like strength training and playing basketball. I just started going on jogs this past winter (I hate running btw), so we'll see if that sticks through the new year.

      I'm a lowkey gamer. On mobile, we got Supercell games, Pokemon TCGP, Duolingo (100+ day streak), and GamePigeon. On PC, I play Riot Games. On console, I play XBOX gen1 games, 2k, RDR2, Last of Us, Mario Kart, Super Smash Bros., etc. Unfortunately, I don't have my own console or PC, so I seldom play only when my roomates or my little brother allow me to. But, perhaps, my favorite type of games are board/card games, especially Catan and Poker. I just played my very first Poker tourney this past winter (KK pre-flop all-in bad beat, I can tell you about it 🫩) and plan to play in the WSOP one day.

      I like watching scary movies and animation. I'm like 10 years behind on all pop-culture/cinema content.
      
      If you ever see me in public, I'll likely be walking around with headphones or on my computer at a cafe.`
  }
]

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="pt-20">
      
      {/* Header */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-6xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            My name is Joshua Kung.
          </p>
        </div>
      </section>

      {/* Sticky Photo + Scrolling Content */}
      <section className="py-20 bg-white-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12 ">
            
            {/* LEFT: Sticky Photo */}
            <div className="md:w-1/3 md:sticky md:top-32 self-start">
              <div className="bg-purple-50 p-5 pb-10 shadow-lg rounded-sm">
                <img
                  src={sections[activeSection].photo}
                  alt={sections[activeSection].title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Scrolling Content */}
            <div className="md:w-2/3 space-y-32 whitespace-pre-line">
              {sections.map((section, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    sectionRefs.current[index] = el
                  }}
                  className="min-h-[60vh]"
                >
                  <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Rest of about page... */}
      
    </main>
  )
}