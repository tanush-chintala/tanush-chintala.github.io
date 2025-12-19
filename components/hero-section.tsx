import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl font-bold text-foreground tracking-tight text-balance">Hey, I'm Tanush 👋</h1>
              <p className="text-2xl text-primary font-medium">CS Student @ Georgia Tech</p>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              I turn caffeine into code and ideas into reality. Currently learning, building, and breaking things
              (mostly on purpose) in Atlanta.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Expected to graduate in May 2027, but who's counting?
            </p>
            <div className="flex gap-3 pt-4">
              <Button variant="default" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:your.email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
              <Image
                src="/professional-headshot.png"
                alt="Tanush - Profile Picture"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">Add your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
