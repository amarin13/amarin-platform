import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { SocialLinks } from "@/app/components/social-links";

export const metadata = {
  title: "About — AMARIN",
  description:
    "AMARIN is a living laboratory exploring product architecture, systems thinking and scalable MVP design.",
};

export default function AboutPage() {
  return (
    <div className="grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="px-6 py-24 flex-1">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            About
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            From Frontend to Systems
          </h1>
          <p className="mt-6 text-xl text-muted">
            AMARIN is a living laboratory where product architecture, systems
            thinking and experimental building converge.
          </p>

          {/* Origin */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Origin
            </p>
            <div className="space-y-4 text-lg text-muted">
              <p>I started as a frontend engineer building interfaces.</p>
              <p>
                Then I built startups. Then products. Then the systems behind
                those products.
              </p>
              <p className="text-foreground font-medium">
                Somewhere in between, I realized the real work is not features —
                it is architecture.
              </p>
            </div>
          </section>

          {/* What This Lab Explores */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              What This Lab Explores
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Product architecture",
                "Systems thinking",
                "Scalable MVP design",
                "Technical decision models",
                "Business–product alignment",
                "Growth as a system, not a tactic",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg">
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why AMARIN Exists */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Why AMARIN Exists
            </p>
            <div className="space-y-3 text-muted">
              <p>
                Because most MVPs die not from lack of code — but lack of
                architecture.
              </p>
              <p>
                Because speed without systems creates technical debt, not
                products.
              </p>
              <p>Because growth collapses when structure was never designed.</p>
              <p>
                AMARIN exists to document how to build things that can actually
                survive success.
              </p>
            </div>
          </section>

          {/* Beyond Software */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Beyond Software
            </p>
            <div className="space-y-4 text-muted text-lg">
              <p>
                Also, my electronics engeneering background remains present in
                my leisure time by implementing and building physical electronic
                systems, from DIY instrumentation to high-voltage probes,
                ignition circuits and hardware prototypes.
              </p>
              <p>
                And after many years at the trenches is funny to realized how
                working with physical constraints, electricity, tolerances and
                real-world failure modes makes one thing very clear:
              </p>
              <p className="text-foreground font-medium">
                The same architectural laws govern both software and hardware
                systems.
              </p>
              <p>
                Feedback loops, load, scaling, redundancy, bottlenecks, entropy,
                decay — systems behave the same, regardless of their medium.
              </p>
              <p>
                AMARIN is not about code.
                <br />
                It is about understanding systems and designing them to survive
                reality.
              </p>
            </div>
          </section>

          {/* Core Ideas */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Core Ideas
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Systems Thinking",
                  desc: "Products are organisms, not features",
                },
                {
                  title: "First Principles",
                  desc: "Architecture before imitation",
                },
                {
                  title: "Scalable MVP",
                  desc: "Fast but structurally sound",
                },
                {
                  title: "Intentional Engineering",
                  desc: "Every line has a reason",
                },
                {
                  title: "Growth Systems",
                  desc: "Metrics are architecture",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="flex items-baseline gap-4">
                  <span className="text-foreground font-medium">
                    {pillar.title}
                  </span>
                  <span className="text-muted">— {pillar.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Connect */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Connect
            </p>
            <SocialLinks links={["linkedin"]} />
          </section>

          {/* Closing */}
          <section className="mt-16 pt-16 border-t border-border">
            <p className="text-2xl font-light leading-relaxed md:text-3xl text-center">
              AMARIN is a place to study how products are actually designed —
              <span className="accent-gradient font-medium">
                {" "}
                before they become fragile companies.
              </span>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
