import { Section } from "./section";

const traits = [
  "Curious",
  "Creative",
  "Problem solvers",
  "Continuous learners",
  "Detail obsessed",
  "Quietly ambitious",
];

const founders = [
  {
    initials: "MS",
    name: "Mari Sankar R",
    role: "Founder · Quality Assurance & Product Analytics",
    accent: "from-[var(--electric)] to-[var(--violet)]",
  },
  {
    initials: "KJ",
    name: "Karthikeyan J",
    role: "Founder · Brand, Social & Growth Strategy",
    accent: "from-[var(--cyan)] to-[var(--electric)]",
  },
  {
    initials: "KS",
    name: "Kevin Samson R",
    role: "Founder · Full-Stack Engineering & Experience",
    accent: "from-[var(--violet)] to-[var(--cyan)]",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="The founders"
      title={
        <>
          Three builders, one studio called{" "}
          <span className="text-gradient">NextEra.</span>
        </>
      }
      description="NextEra Digital Solutions is built by three Computer Science engineers who share the same obsession — turning ambitious ideas into intelligent, well-engineered products."
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            We're{" "}
            <span className="text-foreground">
              Mari Sankar R, Karthikeyan J and Kevin Samson R
            </span>{" "}
            — three friends, three engineers and the three founders of
            NextEra Digital Solutions. We started this studio to build the kind
            of products we always wished existed: fast, thoughtful, intelligent
            and unmistakably premium.
          </p>
          <p>
            Our journey started the way most do — with curiosity. A blinking
            cursor, an empty file and the realization that we could build
            anything we could imagine. That curiosity grew into a shared love
            for the entire stack: pixel-perfect interfaces, clean APIs,
            thoughtful databases and the AI layer quietly reshaping how
            products feel.
          </p>
          <p>
            Today we work across React, Next.js, Node, TypeScript and Tailwind
            to ship products that are fast, accessible and genuinely enjoyable
            to use. Tomorrow we're sharpening cloud computing, AI / ML, system
            design and security — the foundations for building software at real
            scale.
          </p>
          <p className="text-foreground">
            NextEra isn't just a portfolio. It's a studio of three, building
            their future one shipped product at a time.
          </p>
        </div>

        <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] p-7 backdrop-blur">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[var(--violet)]/20 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              The founding team
            </div>
            <ul className="mt-5 space-y-3">
              {founders.map((f) => (
                <li
                  key={f.name}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20"
                >
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} font-display text-sm font-semibold text-white shadow-[0_8px_30px_-10px_color-mix(in_oklab,var(--electric)_70%,transparent)]`}
                  >
                    {f.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{f.name}</div>
                    <div className="text-[11px] text-muted-foreground">
                      {f.role}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Operating principles
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {traits.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/90"
                >
                  {t}
                </li>
              ))}
            </ul>

            <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-white/10 pt-5">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Studio
                </dt>
                <dd className="mt-1 text-sm">NextEra Digital Solutions</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Focus
                </dt>
                <dd className="mt-1 text-sm">Web · AI · Startup products</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Team
                </dt>
                <dd className="mt-1 text-sm">3 founders</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Status
                </dt>
                <dd className="mt-1 flex items-center gap-1.5 text-sm">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Open for projects
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </Section>
  );
}
