import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "SlumberScan",
    description:
      "AI-powered sleep analysis platform that simplifies the detection of sleep disorders using Polysomnography (PSG) data, helping doctors quickly and accurately diagnose conditions like insomnia, sleep apnea, and narcolepsy. Built with a deep neural network for sleep pattern analysis, interactive web application with secure authentication, and an AI chatbot for sleep-related queries.",
    technologies: ["React", "Python", "PyTorch", "MongoDB", "Node.js", "JWT", "OpenAI API", "NumPy", "Pandas"],
    github: "https://github.com/AgastyaK87/hacklytics2025",
    demo: "https://devpost.com/software/slumberscan",
    image: "/project-logos/slumberscan.png",
  },
  {
    title: "GTCal",
    description:
      "Centralized collaborative calendar platform to help Georgia Tech students discover and filter campus events from multiple organizations in one unified calendar view. Features event filtering by category, location, and organization, with calendar and list views for easy navigation of campus activities.",
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/mayazhang1241/gt-cal",
    demo: "https://gt-cal-git-main-maya-zhangs-projects.vercel.app",
    image: "/project-logos/gtcal.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:border-primary transition-all hover:shadow-lg flex flex-col"
            >
              <div className="relative h-48 bg-card rounded-t-lg p-4">
                <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    width={500}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                  {(!project.image || project.image === "/placeholder.svg") && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                      <p className="text-xs text-muted-foreground px-4 text-center">Add project screenshot</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="space-y-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
