import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  PencilRuler,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./section";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    icon: Rocket,
    title: "Startup MVPs",
    description:
      "Zero-to-launch builds for founders. From idea sprint to production deployment with the architecture to scale tomorrow.",
    tags: ["Next.js", "Postgres", "Stripe"],
  },
  {
    icon: Code2,
    title: "Modern Websites",
    description:
      "Marketing sites, portfolios and brand experiences engineered for speed, SEO and an unmistakable visual identity.",
    tags: ["React", "Tailwind", "Motion"],
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    description:
      "End-to-end product engineering — authentication, dashboards, billing, real-time data and everything in between.",
    tags: ["Node", "Express", "MySQL"],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "LLM-powered features, semantic search, agents and intelligent automations woven cleanly into your product.",
    tags: ["OpenAI", "RAG", "Agents"],
  },
  {
    icon: PencilRuler,
    title: "UI / UX Design",
    description:
      "Design systems, micro-interactions and pixel-perfect interfaces that make your product feel premium from first click.",
    tags: ["Figma", "Design Systems"],
  },
  {
    icon: Wrench,
    title: "Optimization & Care",
    description:
      "Performance audits, Core Web Vitals, accessibility and long-term maintenance to keep products in peak shape.",
    tags: ["Lighthouse", "A11y"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we build"
      title={
        <>
          Premium software, <span className="text-gradient">end to end.</span>
        </>
      }
      description="Six focused offerings — each built with the same obsession for craft, performance and the small details that make a product feel alive."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>

      <SubCapabilities />
    </Section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--sx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--sy", `${e.clientY - r.top}px`);
      }}
    >
      {/* spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--sx,50%) var(--sy,50%), color-mix(in oklab, var(--electric) 18%, transparent), transparent 60%)",
        }}
      />
      {/* gradient border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
        background: "linear-gradient(135deg, color-mix(in oklab, var(--electric) 50%, transparent), transparent 40%, color-mix(in oklab, var(--violet) 40%, transparent))",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
      }} />

      <div className="relative">
        <div className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--electric)] transition-all duration-500 group-hover:scale-110 group-hover:text-[var(--cyan)]">
          <Icon className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

const sub = [
  { icon: Cpu, label: "SaaS platforms" },
  { icon: Database, label: "Backend & APIs" },
  { icon: ShieldCheck, label: "Auth & security" },
  { icon: Cloud, label: "Cloud deploys" },
  { icon: Boxes, label: "Component systems" },
  { icon: Sparkles, label: "Animation & motion" },
];

function SubCapabilities() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {sub.map((s) => {
        const I = s.icon;
        return (
          <div
            key={s.label}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs text-muted-foreground"
          >
            <I className="size-3.5 text-[var(--cyan)]" />
            {s.label}
          </div>
        );
      })}
    </div>
  );
}
