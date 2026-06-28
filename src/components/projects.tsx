import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./section";

const projects = [
  {
    name: "Travel Planner",
    tag: "AI Travel Planner",
    description:
      "Plan an entire trip in minutes. Travel Planner builds day-by-day itineraries with a live budget tracker, curated places to visit and real-time hotel availability — all tuned to how you actually like to travel.",
    stack: ["Next.js", "Node", "Postgres", "Maps API"],
    accent: "from-[var(--electric)] to-[var(--violet)]",
    mockup: "travel",
  },
  {
    name: "Velora Ecommerce",
    tag: "E-Commerce Platform",
    description:
      "A modern headless storefront with instant search, smart cart, checkout flows and a dashboard built for operators who hate clunky admin tools.",
    stack: ["React", "Node", "MySQL", "Stripe"],
    accent: "from-[var(--cyan)] to-[var(--electric)]",
    mockup: "shop",
  },
  {
    name: "SkillSwap",
    tag: "Skill Exchange Platform",
    description:
      "A community where people trade what they know. Match with someone whose skill complements yours, then learn together through real-time chat, live calls and a shared library of resources — no money changes hands, only knowledge.",
    stack: ["React", "Node", "WebRTC", "Socket.IO"],
    accent: "from-[var(--cyan)] to-[var(--violet)]",
    mockup: "skill",
  },
  {
    name: "Retainly",
    tag: "Student Retention Intelligence",
    description:
      "An early-warning platform for educators. Retainly analyses attendance, grades and engagement signals to surface students at risk of dropping out — giving mentors the context they need to step in before it's too late.",
    stack: ["Next.js", "Python", "ML", "Postgres"],
    accent: "from-[var(--violet)] to-[var(--electric)]",
    mockup: "insight",
  },
];

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={<>Products engineered to <span className="text-gradient">earn their place.</span></>}
      description="A glimpse into the kind of products we build at NextEra — each one shaped by a real problem, careful design and engineering you can ship to production."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-56 overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30`} />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
        <Mockup type={project.mockup} />
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {project.tag}
            </span>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>
          </div>
          <div className="flex gap-2">
            <button className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="size-4" />
            </button>
            <button className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground" aria-label="Live demo">
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Mockup({ type }: { type: string }) {
  return (
    <div className="absolute inset-x-6 bottom-[-2.5rem] top-6 rounded-t-xl border border-white/10 bg-[color-mix(in_oklab,var(--surface-elevated)_85%,transparent)] backdrop-blur shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03] group-hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <div className="flex gap-1">
          <span className="size-2 rounded-full bg-red-400/50" />
          <span className="size-2 rounded-full bg-yellow-400/50" />
          <span className="size-2 rounded-full bg-green-400/50" />
        </div>
        <div className="font-mono text-[9px] text-muted-foreground">nextera.dev</div>
        <div className="w-6" />
      </div>
      <div className="grid grid-cols-12 gap-2 p-3">
        {type === "travel" && (
          <>
            <div className="col-span-7 aspect-[16/10] rounded-md bg-[radial-gradient(circle_at_25%_35%,color-mix(in_oklab,var(--electric)_35%,transparent),transparent_55%),radial-gradient(circle_at_75%_70%,color-mix(in_oklab,var(--violet)_30%,transparent),transparent_55%),color-mix(in_oklab,var(--surface)_80%,transparent)]">
              <div className="relative h-full w-full">
                {[[18,28],[40,55],[62,38],[78,65]].map(([x,y], i) => (
                  <span key={i} className="absolute size-1.5 rounded-full bg-[var(--electric)] shadow-[0_0_10px_var(--electric)]" style={{ left: `${x}%`, top: `${y}%` }} />
                ))}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <path d="M 18% 28% Q 30% 50% 40% 55% T 62% 38% T 78% 65%" stroke="rgba(120,200,255,0.45)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                </svg>
              </div>
            </div>
            <div className="col-span-5 space-y-1.5">
              <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1">
                <div className="h-1.5 w-12 rounded bg-white/15" />
                <div className="h-1.5 w-8 rounded bg-[var(--electric)]/60" />
              </div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-0.5 rounded bg-white/[0.04] p-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-white/15" />
                  <div className="h-1.5 w-1/2 rounded bg-white/8" />
                </div>
              ))}
            </div>
          </>
        )}
        {type === "shop" && (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="col-span-4 space-y-1">
                <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-white/10 to-white/5" />
                <div className="h-2 w-3/4 rounded bg-white/10" />
                <div className="h-2 w-1/2 rounded bg-white/5" />
              </div>
            ))}
          </>
        )}
        {type === "skill" && (
          <>
            <div className="col-span-5 space-y-1.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-1.5 rounded bg-white/5 p-1.5">
                  <span className="size-4 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--violet)]" />
                  <div className="flex-1 space-y-0.5">
                    <div className="h-1.5 w-3/4 rounded bg-white/15" />
                    <div className="h-1 w-1/2 rounded bg-white/8" />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-7 space-y-1.5">
              <div className="h-5 w-2/3 rounded-xl bg-white/8" />
              <div className="ml-auto h-5 w-3/4 rounded-xl bg-gradient-to-r from-[var(--cyan)]/40 to-[var(--violet)]/40" />
              <div className="h-5 w-1/2 rounded-xl bg-white/8" />
              <div className="ml-auto flex items-center gap-1 rounded-xl bg-gradient-to-r from-[var(--cyan)]/40 to-[var(--violet)]/40 px-2 py-1 w-fit">
                <span className="size-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <div className="h-1.5 w-10 rounded bg-white/30" />
              </div>
            </div>
          </>
        )}
        {type === "insight" && (
          <>
            <div className="col-span-8 space-y-1.5">
              <div className="flex h-16 items-end gap-1 rounded-md bg-white/[0.03] p-1.5">
                {[40,55,35,70,45,80,60,90,50,75,65,85].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[var(--electric)]/60 to-[var(--violet)]/60" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {["At risk","Watch","Stable"].map((l, i) => (
                  <div key={l} className="rounded bg-white/[0.04] p-1.5">
                    <div className="h-1 w-1/2 rounded bg-white/15" />
                    <div className={`mt-1 h-3 w-3/4 rounded ${i===0?"bg-red-400/50":i===1?"bg-yellow-300/40":"bg-emerald-400/40"}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-4 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-1 rounded bg-white/[0.04] p-1">
                  <span className={`size-1.5 rounded-full ${i<2?"bg-red-400":i<3?"bg-yellow-300":"bg-emerald-400"}`} />
                  <div className="h-1.5 flex-1 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
