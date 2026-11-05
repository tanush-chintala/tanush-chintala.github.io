import { Card } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
  {
    period: "January 2026 — Present",
    role: "Co-Founder",
    company: "Kairos Health",
    location: "San Francisco, CA",
    logo: "/project-logos/kairos.png",
    description: [
      "Backed by Y Combinator (F26) — building voice AI for dental practices full-time in San Francisco",
      "Architected and deployed real-time AI voice platform, orchestrating streaming speech recognition, LLM tool calling, speech synthesis, conversation-state management, and interruption handling for low-latency patient calls",
      "Integrated appointment scheduling, insurance verification, and patient communication workflows with dental practice-management systems, encoding clinic-specific operational policies and constraints",
      "Translated 300+ dental practice insights into automated evaluation pipelines, production monitoring, and reusable configuration systems, turning the initial prototype into a HIPAA-compliant multi-tenant platform",
      "Secured $210k in early funding and grew Kairos to $4k+ in monthly recurring revenue across 13 paying dental practices",
    ],
    skills: ["AI Voice Agents", "LLM Tool Calling", "Speech Recognition", "HIPAA Compliance", "Multi-Tenant SaaS"],
  },
  {
    period: "May 2025 — August 2025",
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "New York, NY",
    logo: "/amazon_web_services_logo.jpeg",
    description: [
      "Designed and deployed Spark observability CLI tool through CI/CD pipelines, adopted by 3 AWS GuardDuty teams (~50 engineers), reducing setup time from ~7 minutes to ~5 seconds",
      "Introduced Spark History Server support for batch & streaming EMR jobs, unlocking retrospective debugging for terminated clusters and accelerating root-cause analysis across GuardDuty teams",
      "Implemented versioned Spark workload configs with rollback support, cutting misconfig-related downtime and reducing cluster rerun costs by 15%",
    ],
    skills: ["Python", "Bash", "Spark", "AWS EMR", "Git", "CI/CD"]
  },
  {
    period: "October 2024 — April 2025",
    role: "Data Analyst Intern",
    company: "Nimbus Health",
    location: "Atlanta, GA",
    logo: "/nimbus_pulmonary_logo.jpeg",
    description: [
      "Built SQL dashboards on provider productivity and clinic performance, adopted in weekly reviews across 7 sites to guide staffing and operational improvements",
      "Automated pipeline (Google Apps Script → AWS S3) to ingest 10K+ Dialpad webhook records weekly, eliminating manual ETL and reducing backend data errors by 30%",
      "Developed ML models on 2K+ patient call transcripts to auto-route patients, reducing manual call transfers by ~25% and increasing staff call-handling capacity",
    ],
    skills: ["Python", "SQL", "AWS S3", "ETL", "Google Apps Script"],
  },
  {
    period: "February 2025 — May 2025",
    role: "Undergraduate Research Assistant",
    company: "Cope Lab",
    location: "Atlanta, GA",
    logo: "/georgia_institute_of_technology_logo.jpeg",
    description: [
      "Trained DeepLabCut ML models on rodent limb data, reducing manual labeling time for kinematic analysis by ~70% in peripheral nerve injury research",
      "Developed Python control system for lab robotic arm to standardize rodent limb manipulation, improving experiment reproducibility and cutting daily trial setup time by 40%",
    ],
    skills: ["Python", "DeepLabCut", "Robotics", "Research"],
  },
  {
    period: "May 2024 — July 2024",
    role: "Software Engineer Intern",
    company: "Cloud Ladder Consulting",
    location: "Dallas, TX",
    logo: "/cloud_ladder_consulting_logo.jpeg",
    description: [
      "Built client-facing chatbot for company website with secure PyJWT authentication, ensuring data security during sensitive queries and achieving 70% client interaction rate",
      "Integrated chatbot with Alexa voice interface, enabling natural language queries and ensuring reliable execution",
    ],
    skills: ["Python", "PyJWT", "AWS Lambda", "Alexa SDK", "NLP", "React.js"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="flex justify-center px-6 py-16 md:py-24 scroll-mt-8 md:scroll-mt-0">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 md:mb-12">Experience</h2>
        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-5 sm:p-8 border-border hover:border-primary transition-colors">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  {exp.logo && (
                    <div className="relative size-12 md:size-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start md:justify-between gap-x-6 gap-y-1">
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground text-balance">{exp.company}</h3>
                      <p className="text-base text-primary font-medium mt-0.5 md:mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-0.5 md:gap-1 text-sm md:text-base text-muted-foreground md:shrink-0 md:text-right">
                      <span className="md:whitespace-nowrap">
                        {exp.period.split(" — ").map((part, i, parts) => (
                          <span key={i}>
                            <span className="whitespace-nowrap">
                              {part}
                              {i < parts.length - 1 && " —"}
                            </span>
                            {i < parts.length - 1 && " "}
                          </span>
                        ))}
                      </span>
                      {exp.location && <span className="md:whitespace-nowrap">{exp.location}</span>}
                    </div>
                  </div>
                </div>
                <div className={exp.logo ? "md:pl-20" : undefined}>
                  <ul className="space-y-2 text-base text-foreground leading-relaxed list-disc pl-5 marker:text-muted-foreground">
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, idx) => <li key={idx}>{item}</li>)
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-md">
                        {skill}
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
