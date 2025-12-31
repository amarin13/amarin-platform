import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

export const metadata = {
  title: "About — AMARIN",
  description:
    "Product Architect & Systems Designer. Building scalable digital products from idea to impact.",
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
            Product Architect &<br />
            Systems Designer
          </h1>
          <p className="mt-6 text-xl text-muted">
            Building scalable digital products from idea to impact.
          </p>

          {/* Position */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Position
            </p>
            <div className="space-y-4 text-lg text-muted">
              <p>Not a developer. Not a product manager. Not a consultant.</p>
              <p className="text-foreground font-medium">
                A Product Architect — the person who designs the system behind
                the product.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              What I Bring
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Product architecture",
                "Systems design",
                "Technical strategy",
                "Decision frameworks",
                "Growth playbooks",
                "Product–Business alignment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-lg">
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Problem I Solve */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Problems I Solve
            </p>
            <div className="space-y-3 text-muted">
              <p>Startups with good products but bad systems</p>
              <p>Scaleups growing without architecture</p>
              <p>Teams building fast but without coherence</p>
              <p>Founders without systemic vision</p>
            </div>
          </section>

          {/* Pillars */}
          <section className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              Intellectual Pillars
            </p>
            <div className="space-y-4">
              {[
                { title: "Systems Thinking", desc: "Everything is a system" },
                { title: "First Principles", desc: "Nothing is copied" },
                { title: "Product Architecture", desc: "Before features" },
                { title: "Strategic Engineering", desc: "Code with intention" },
                { title: "Measurable Growth", desc: "No metrics, no product" },
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

          {/* Promise */}
          <section className="mt-16 pt-16 border-t border-border">
            <p className="text-2xl font-light leading-relaxed md:text-3xl text-center">
              I help founders and teams design products that{" "}
              <span className="accent-gradient font-medium">
                don&apos;t collapse when they succeed.
              </span>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
