import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

export default function PlaybooksPage() {
  return (
    <div className="grid-pattern min-h-screen flex flex-col">
      <Navbar />

      <main className="px-6 py-24 flex-1">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Ejecución
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Playbooks
          </h1>
          <p className="mt-6 text-lg text-muted">
            Frameworks accionables para construir, escalar y alinear producto
            con negocio.
          </p>

          <div className="mt-16 border-t border-border pt-16">
            <p className="text-center text-muted">
              Próximamente: playbooks de crecimiento, arquitectura y alineación
              estratégica.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
