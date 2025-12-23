import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "May 2025 — August 2025",
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "New York, NY",
    description: [
      "Designed and deployed Spark observability CLI tool through CI/CD pipelines, adopted by 3 AWS GuardDuty teams (~50 engineers), reducing setup time from ~7 minutes to ~5 seconds",
      "Introduced Spark History Server support for batch & streaming EMR jobs, unlocking retrospective debugging for terminated clusters and accelerating root-cause analysis across GuardDuty teams",
      "Implemented versioned Spark workload configs with rollback support, cutting misconfig-related downtime and reducing cluster rerun costs by 15%",
    ],
    skills: ["Python", "Bash", "Spark", "AWS", "Git", "CI/CD"]
  },
  {
    period: "October 2024 — April 2025",
    role: "Data Analyst Intern",
    company: "Nimbus Health",
    location: "Atlanta, GA",
    description: [
      "Built SQL dashboards on provider productivity and clinic performance, adopted in weekly reviews across 7 sites to guide staffing and operational improvements",
      "Automated pipeline (Google Apps Script → AWS S3) to ingest 10K+ Dialpad webhook records weekly, eliminating manual ETL and reducing backend data errors by 30%",
      "Developed ML models on 2K+ patient call transcripts to auto-route patients, reducing manual call transfers by ~25% and increasing staff call-handling capacity",
    ],
    skills: ["SQL", "AWS S3", "ML", "Python", "ETL", "Google Apps Script"],
  },
  {
    period: "February 2025 — May 2025",
    role: "Undergraduate Research Assistant",
    company: "Cope Lab",
    location: "Atlanta, GA",
    description: [
      "Trained DeepLabCut ML models on rodent limb data, reducing manual labeling time for kinematic analysis by ~70% in peripheral nerve injury research",
      "Developed Python control system for lab robotic arm to standardize rodent limb manipulation, improving experiment reproducibility and cutting daily trial setup time by 40%",
    ],
    skills: ["Python", "DeepLabCut", "ML", "Robotics", "Research"],
  },
  {
    period: "May 2024 — July 2024",
    role: "Software Engineer Intern",
    company: "Cloud Ladder Consulting",
    location: "Dallas, TX",
    description: [
      "Built client-facing chatbot for company website with secure PyJWT authentication, ensuring data security during sensitive queries and achieving 70% client interaction rate",
      "Integrated chatbot with Alexa voice interface, enabling natural language queries and ensuring reliable execution",
    ],
    skills: ["Python", "PyJWT", "Chatbot", "Alexa", "NLP", "Web Development"],
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
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-base text-primary font-medium mt-1">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-base text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    {exp.location && (
                      <span className="text-base text-muted-foreground whitespace-nowrap">{exp.location}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-2 text-base text-foreground leading-relaxed list-disc list-inside">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
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
