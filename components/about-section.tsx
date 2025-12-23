import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I'm Tanush Chintala, a junior studying Computer Science and
              recipient of the Stamps President’s Scholarship (top 1% of incoming students)
              at Georgia Tech.
            </p>
            <p>
              My journey into tech has been driven by curiosity and experimentation, 
              from building full-stack applications in hackathons to developing
              statistical and ML models to tackle complex problems systematically. I've
              deeply interested in how sofware and data can be used to design scalable, 
              high-impact solutions across domains.
            </p>
            <p>
              I'm also interested in startup culture, where learning happens quickly and visions are
              designed, built, and shipped continuously. I enjoy working end-to-end and taking ownership of
              problems.
            </p>
            <p>
            Outside of tech, I'm a basketball fan and avid Dallas Mavericks supporter.
            I also enjoy traveling, exploring different cuisines, and have been spending more time reading.
            </p>
          </div>

          {/* Workspace/Lifestyle Images */}
          <div className="space-y-4">
            <div className="relative w-full rounded-xl overflow-hidden border-2 border-border bg-muted">
              <Image
                src="/96304011-7AC5-4EFD-AC40-C4283D8167A6_1_105_c.jpeg"
                alt="Tanush with Georgia Tech Buzz mascot"
                width={500}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="relative w-full rounded-xl overflow-hidden border-2 border-border bg-muted">
              <Image
                src="/Piedmont-Park_GettyImages-585832633.webp"
                alt="Piedmont Park"
                width={500}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
