import { Section } from "./section";

const current = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "Tailwind CSS", "MySQL", "REST APIs", "Git", "Vite", "Figma",
];
const future = [
  "Cloud Computing", "AI / ML", "Cyber Security", "System Design", "DevOps", "Kubernetes",
];

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="The toolkit"
      title={<>An engineering stack <span className="text-gradient">built for the long run.</span></>}
      description="The tools I reach for today, and the disciplines I'm sharpening for tomorrow. Every choice is deliberate — modern, scalable and developer-friendly."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* current — constellation */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-8 backdrop-blur">
          <div className="absolute -right-32 -top-32 size-80 rounded-full bg-[var(--electric)]/15 blur-3xl" />
          <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-[var(--violet)]/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Working stack</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Production-ready
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {current.map((tech, i) => (
                <TechChip key={tech} label={tech} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* future */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-8 backdrop-blur">
          <div className="absolute right-0 top-0 size-64 rounded-full bg-[var(--cyan)]/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Next horizons</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Learning
              </span>
            </div>
            <ul className="mt-8 space-y-3">
              {future.map((f, i) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="relative flex size-6 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[var(--violet)]/20" />
                    <span className="font-mono text-[10px] text-[var(--cyan)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TechChip({ label, index }: { label: string; index: number }) {
  return (
    <span
      className="group relative cursor-default rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-foreground"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--electric) 25%, transparent), color-mix(in oklab, var(--violet) 25%, transparent))" }}
      />
    </span>
  );
}
