export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Welcome</h1>
        <p className="max-w-md text-center text-lg text-zinc-600 dark:text-zinc-400">
          Explore articles, playbooks, and tools.
        </p>
      </main>
    </div>
  );
}
