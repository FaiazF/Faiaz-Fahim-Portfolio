import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      <Navigation />
      <main className="lg:ml-64 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}
