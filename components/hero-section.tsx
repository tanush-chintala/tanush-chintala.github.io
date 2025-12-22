"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const textPart = "Hey, I'm Tanush "
  const emoji = "👋"
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    setDisplayedText("")
    setShowCursor(true)
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < textPart.length) {
        setDisplayedText(textPart.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Add emoji all at once after text finishes
        setDisplayedText(textPart + emoji)
        // Blink cursor a few times then hide it
        setTimeout(() => {
          setShowCursor(false)
        }, 1000)
      }
    }, 75) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl font-bold text-foreground tracking-tight text-balance">
                {displayedText}
                {showCursor && <span className="animate-pulse">|</span>}
              </h1>
              <p className="text-2xl text-primary font-medium">CS Student @ Georgia Tech</p>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              I'm passionate about building impactful software solutions, combining technology with creativity. Right now, I'm exploring <strong>ML applications</strong>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Expected to graduate in May 2027
            </p>
            <div className="flex gap-3 pt-4">
              <Button variant="default" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/tanush-chintala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/tanushc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:tanushchintala@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative max-w-md mx-auto w-full pt-8">
            <div className="relative rounded-2xl overflow-hidden border-2 border-border bg-muted inline-block bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                src="/professional-headshot-with-background.JPG"
                alt="Tanush - Profile Picture"
                width={400}
                height={400}
                className="object-contain block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
