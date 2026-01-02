"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Contact</h2>
        <Card className="p-12 border-border text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground text-balance">Let's Connect!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about
              technology. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-4 pt-6">
              <Button size="lg" asChild>
                <a href="mailto:tanushchintala@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/tanushc" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/tanush-chintala" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </Card>
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Tanush Chintala. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
