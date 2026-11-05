"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

const GREETING = "Hey, I'm\nTanush "
const EMOJI = "👋"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedText(GREETING + EMOJI)
      setShowCursor(false)
      return
    }

    let currentIndex = 0
    let hideCursor: ReturnType<typeof setTimeout> | undefined

    const typingInterval = setInterval(() => {
      if (currentIndex < GREETING.length) {
        setDisplayedText(GREETING.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Add emoji all at once after text finishes
        setDisplayedText(GREETING + EMOJI)
        // Blink cursor a few times then hide it
        hideCursor = setTimeout(() => {
          setShowCursor(false)
        }, 1000)
      }
    }, 75) // Adjust speed here (lower = faster)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(hideCursor)
    }
  }, [])

  return (
    <section id="home" className="min-h-[min(100svh,60rem)] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="relative text-5xl sm:text-6xl font-bold text-foreground tracking-tight whitespace-pre-line">
                <span className="sr-only">{(GREETING + EMOJI).replace("\n", " ")}</span>
                {/* Invisible finished line (cursor included) holds the final size, so typing never shifts the page */}
                <span aria-hidden="true" className="invisible">
                  {GREETING + EMOJI}|
                </span>
                <span aria-hidden="true" className="absolute inset-0">
                  {displayedText}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-medium text-balance">
                Co-Founder @ Kairos Health <span className="whitespace-nowrap">(YC F26)</span>
                <span className="block">CS @ Georgia Tech</span>
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              I'm passionate about building impactful software solutions, combining technology with creativity. Right now, I'm building <strong>Kairos Health (YC F26)</strong> — voice AI for dental practices — full-time in San Francisco with Y Combinator's Fall 2026 batch.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="default" size="lg" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button variant="outline" size="icon-lg" asChild>
                <a href="https://github.com/tanush-chintala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon-lg" asChild>
                <a href="https://linkedin.com/in/tanushc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon-lg" asChild>
                <a href="mailto:tanushchintala@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-full max-w-[25rem] mx-auto">
            <div className="rounded-2xl overflow-hidden border-2 border-border bg-gradient-to-br from-primary/20 to-accent/20">
              <Image
                src="/professional-headshot-with-background.JPG"
                alt="Tanush - Profile Picture"
                width={400}
                height={400}
                className="block w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
