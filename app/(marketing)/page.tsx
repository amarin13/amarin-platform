import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

const PILLARS = [
  { title: "Systems Thinking", desc: "Everything is a system" },
  { title: "First Principles", desc: "Built from first principles" },
  { title: "Product Architecture", desc: "Architecture before features" },
  { title: "Strategic Engineering", desc: "Intentional engineering" },
  { title: "Measurable Growth", desc: "Measurable by design" },
];

const OFFERINGS = [
  "Product system architectures",
  "Decision frameworks",
  "Growth and measurement loops",
  "UX and interaction systems",
  "Analytics and feedback infrastructures",
  "Product–business alignment models",
];

export default function HomePage() {
  return (
    <div className="grid-pattern min-h-screen">
      <Navbar />

      {/* Hero */}
      <header className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="animate-fade-up mb-6 font-mono text-sm uppercase tracking-[0.3em] text-muted">
            A public lab for product architecture and digital systems
          </p>

          <h1 className="animate-fade-up animation-delay-100 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            <span className="accent-gradient">AMARIN</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 text-xl text-gray-500 md:text-2xl">
            Exploring how real products are designed, built and scaled — from
            first principles to production.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-12">
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-all hover:border-accent hover:text-accent"
            >
              Explore the lab ↓
            </a>
          </div>
        </div>
      </header>

      {/* Manifesto */}
      <section id="manifesto" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-widest text-accent">
            Manifesto
          </p>

          <blockquote className="text-2xl font-light leading-relaxed text-gray-500 md:text-3xl">
            Most products fail not because of bad code —<br />
            <span className="text-foreground">
              but because they are built without systems thinking.
            </span>
          </blockquote>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              This lab does not focus on features.
              <br />
              <span className="text-foreground font-medium">
                It studies product architectures.
              </span>
            </p>

            <p className="text-gray-500">
              Product architectures define how products grow, how teams operate,
              how decisions are made, and how value is created.
            </p>

            <p className="text-foreground">
              From first principles to production.
            </p>
          </div>

          <p className="mt-6 text-sm text-muted">
            Some systems are commercial. Some are experimental. Some are my own.
            All of them are real.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-accent">
            System Foundations
          </p>

          <div className="grid gap-1 md:grid-cols-5">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group border border-border p-6 transition-all hover:border-accent hover:bg-gray-100"
              >
                <span className="mb-4 block font-mono text-xs text-gray-400">
                  0{i + 1}
                </span>
                <h3 className="mb-2 font-medium tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I bring */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-accent">
            What is explored here
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {OFFERINGS.map((item) => (
              <div key={item} className="flex items-center gap-3 text-lg">
                <span className="text-accent">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-light leading-relaxed md:text-3xl">
            This lab exists to explore how products can grow{" "}
            <span className="accent-gradient font-medium">
              without collapsing when they succeed
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
