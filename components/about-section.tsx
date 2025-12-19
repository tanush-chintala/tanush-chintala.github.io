import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I'm a Computer Science student at <span className="text-primary font-medium">Georgia Tech</span>, where I
              spend my days debugging code, attending lectures, and pretending I understand everything about algorithms
              on the first try.
            </p>
            <p>
              My journey into tech started with a simple question: "How does this work?" Now, I find myself asking that
              question about everything—from web apps to machine learning models to why my code works on my machine but
              nowhere else.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech stacks, working on side projects that may or may
              not make it to production, or trying to explain to my non-CS friends what I actually do.
            </p>
            <p className="text-base text-muted-foreground pt-4">
              <span className="font-medium text-foreground">Current interests:</span> Full-stack development, AI/ML,
              building things that scale, and occasionally touching grass.
            </p>
          </div>

          {/* Workspace/Lifestyle Image Placeholder */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border-2 border-border bg-muted">
              <Image
                src="/developer-workspace-desk-setup-computer.jpg"
                alt="Workspace setup"
                width={500}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">Add workspace photo</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border-2 border-border bg-muted">
              <Image
                src="/georgia-tech-campus-yellow-jackets.jpg"
                alt="Georgia Tech campus"
                width={500}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">Add campus/personal photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
