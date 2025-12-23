import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that actually works (most of the time). Built with Next.js and PostgreSQL, featuring real-time updates and authentication that doesn't make users want to throw their keyboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "/modern-web-dashboard.png",
  },
  {
    title: "ML Prediction Model",
    description:
      "Built a machine learning model that predicts outcomes with 95% accuracy. The other 5%? Well, we're working on it. Used Python and TensorFlow to make sense of data that initially made no sense.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    github: "https://github.com",
    image: "/machine-learning-data-visualization-graphs.jpg",
  },
  {
    title: "Task Manager App",
    description:
      "A mobile app for people who love making lists almost as much as they love procrastinating. Features offline support and cloud sync, so your unfinished tasks can haunt you across all devices.",
    technologies: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "/mobile-task-management.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative aspect-video md:aspect-auto md:min-h-full bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                    <p className="text-xs text-muted-foreground px-4 text-center">Add project screenshot</p>
                  </div>
                </div>

                <div className="md:col-span-3 p-6 md:p-8">
                  <div className="space-y-4 h-full flex flex-col">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
