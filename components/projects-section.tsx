import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Kairos",
    description:
      "AI-powered dental receptionist and patient communications platform that answers calls 24/7, reduces no-shows, and optimizes scheduling. Features include live call answering with triage, smart scheduling engine, waitlist auto-fill for same-day cancellations, new patient intake with OCR for insurance cards, and analytics dashboard. HIPAA compliant with EHR integration.",
    technologies: ["AI/LLM", "OCR", "HIPAA Compliance"],
    demo: "https://kairoshealth.dev/",
    image: "/project-logos/kairos.png",
  },
  {
    title: "PortfoliGO",
    description:
      "Fantasy stock trading platform that combines machine learning-powered stock analysis with competitive league-based gameplay. Features include league management, snake draft system, real-time ML-powered analytics, portfolio visualization, and commissioner controls. Uses ML models for growth potential, value, and risk assessment.",
    technologies: ["React", "TypeScript", "Supabase", "Python", "Scikit-learn", "Tailwind CSS", "Vite"],
    github: "https://github.com/AbhishekM101/portfoliGO",
    demo: "https://devpost.com/software/portfoligo",
    image: "/project-logos/portfoliGO.png",
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
    title: "Eventra",
    description:
      "Web-based system that transforms unstructured natural language input into structured calendar events. Uses LLM to parse text and extract event details (title, date, time, location), automatically creates events via Google Calendar API, and visualizes event locations on an interactive Google Maps interface for route planning and schedule management.",
    technologies: ["Python", "Django", "Google Calendar API", "Google Maps API", "LLM", "HTML"],
    github: "https://github.com/rohan5986/Eventra",
    demo: "https://tanushc.pythonanywhere.com/events/",
    image: "/project-logos/Eventra.png",
  },
  {
    title: "Cigna Policy Scraper",
    description:
      "Web application that scrapes Cigna's medical coverage policy updates, parses PDF documents, and provides a modern interface for viewing and managing medical policies. Features include search, filter, sort functionality, PDF parsing, content extraction from web pages, and data export capabilities.",
    technologies: ["Python", "Flask", "SQLite", "BeautifulSoup", "Pandas", "PDF Parsing"],
    github: "https://github.com/tanush-chintala/cigna_policy_scraper",
    image: "/project-logos/cignahealthcare.png",
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
              <div className="relative h-56 bg-card rounded-t-lg p-4">
                <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    width={500}
                    height={300}
                    className="object-contain w-auto h-full max-w-full"
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
