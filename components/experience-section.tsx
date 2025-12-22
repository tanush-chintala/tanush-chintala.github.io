import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "2024 — Present",
    role: "Software Engineering Intern",
    company: "Tech Company",
    description: "Working on full-stack development projects, contributing to both frontend and backend systems.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2023 — 2024",
    role: "Research Assistant",
    company: "Georgia Tech",
    description: "Assisted in computer science research projects focusing on machine learning applications.",
    skills: ["Python", "TensorFlow", "Data Analysis"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 border-border hover:border-primary transition-colors">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-base text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-base text-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
