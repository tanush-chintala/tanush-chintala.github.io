import Image from "next/image"

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", logo: "/skill-logos/python.svg" },
      { name: "Java", logo: "/skill-logos/java.svg" },
      { name: "JavaScript", logo: "/skill-logos/javascript.svg" },
      { name: "TypeScript", logo: "/skill-logos/typescript.svg" },
      { name: "SQL", logo: "/skill-logos/sql.svg" },
      { name: "HTML", logo: "/skill-logos/html.svg" },
      { name: "CSS", logo: "/skill-logos/css.svg" },
      { name: "Bash", logo: "/skill-logos/bash.svg" },
      { name: "C", logo: "/skill-logos/c.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", logo: "/skill-logos/react.svg" },
      { name: "Next.js", logo: "/skill-logos/nextjs.svg" },
      { name: "Node.js", logo: "/skill-logos/nodejs.svg" },
      { name: "Express.js", logo: "/skill-logos/express.svg" },
      { name: "Flask", logo: "/skill-logos/flask.svg" },
      { name: "TensorFlow", logo: "/skill-logos/tensorflow.svg" },
      { name: "scikit-learn", logo: "/skill-logos/scikit-learn.svg" },
      { name: "pandas", logo: "/skill-logos/pandas.svg" },
      { name: "NumPy", logo: "/skill-logos/numpy.svg" },
      { name: "Matplotlib", logo: "/skill-logos/matplotlib.svg" },
      { name: "PyJWT", logo: "/skill-logos/pyjwt.svg" },
      { name: "AWS CDK", logo: "/skill-logos/aws-cdk.svg" },
      { name: "Apache Spark", logo: "/skill-logos/apache-spark.svg" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS", logo: "/skill-logos/aws.svg" },
      { name: "Git", logo: "/skill-logos/git.svg" },
      { name: "PostgreSQL", logo: "/skill-logos/postgresql.svg" },
      { name: "MongoDB", logo: "/skill-logos/mongodb.svg" },
      { name: "Docker", logo: "/skill-logos/docker.svg" },
      { name: "Kubernetes", logo: "/skill-logos/kubernetes.svg" },
      { name: "Postman", logo: "/skill-logos/postman.svg" },
      { name: "Linux", logo: "/skill-logos/linux.svg" },
      { name: "Google Apps Script", logo: "/skill-logos/google-apps-script.svg" },
      { name: "Jupyter", logo: "/skill-logos/jupyter.svg" },
    ],
  },
  {
    category: "Concepts & Domains",
    skills: [
      { name: "Machine Learning" },
      { name: "Data Engineering" },
      { name: "Distributed Systems" },
      { name: "Software Architecture" },
      { name: "API Design" },
      { name: "Database Design" },
      { name: "Cloud Computing" },
      { name: "DevOps" },
      { name: "Full-Stack Development" },
      { name: "NLP" },
      { name: "ETL" },
      { name: "CI/CD" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-3 py-2 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    {"logo" in skill && skill.logo && (
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="text-sm text-secondary-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
