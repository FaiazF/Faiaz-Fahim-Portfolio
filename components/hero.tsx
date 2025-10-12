"use client"

import { useState, useEffect } from "react"
import { Download } from "lucide-react"

const roles = ["a VR Developer", " a Game Developer", "a 3D Artist", "a Graphic Designer", "an IT Support Assistant", "an Entrepreneur"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = roles[currentRole]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        } else {
          setDisplayText(
            isDeleting
              ? currentWord.substring(0, displayText.length - 1)
              : currentWord.substring(0, displayText.length + 1),
          )
        }
      },
      isDeleting && displayText === "" ? 0 : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Picture */}
        <div className="flex-shrink-0 animate-on-scroll">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="MD Faiaz Fahim"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="mb-6">
            <p className="text-primary text-sm font-mono mb-4 animate-on-scroll stagger-1">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance animate-on-scroll stagger-2">
              MD Faiaz Fahim
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 text-balance animate-on-scroll stagger-3 min-h-[4rem]">
              I am <span className="text-primary">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty animate-on-scroll stagger-4">
            I'm a VR developer and 3D artist specializing in creating immersive training simulations and interactive
            experiences using Unreal Engine. With five years of combined experience in VR development, 3D asset
            creation, and game development, I bring virtual worlds to life.
          </p>
          <div className="mt-12 flex gap-4 animate-on-scroll stagger-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Work Overview
            </a>
            <a
              href="/resume.pdf"
              download="MD_Faiaz_Fahim_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
