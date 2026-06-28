import {
  Code2,
  FlaskConical,
  Lightbulb,
  PencilRuler,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./section";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Search, title: "Discover", description: "Listen, audit, understand the problem space." },
  { icon: Lightbulb, title: "Research", description: "Study the market, users and competitive edge." },
  { icon: PencilRuler, title: "Plan & design", description: "Wireframes, design system and product flow." },
  { icon: Code2, title: "Develop", description: "Type-safe, modular, performance-first builds." },
  { icon: FlaskConical, title: "Test", description: "Cross-device QA, accessibility and edge cases." },
  { icon: Rocket, title: "Deploy", description: "Ship to production with CI and zero-downtime." },
  { icon: ShieldCheck, title: "Secure", description: "Hardening, monitoring and graceful fallbacks." },
  { icon: Settings2, title: "Maintain", description: "Iterate, measure and grow the product." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="The workflow"
      title={<>How an idea becomes a <span className="text-gradient">shipped product.</span></>}
      description="A repeatable, transparent process — borrowed from the best product teams and tuned for the speed a startup needs."
    >
      <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const I = s.icon;
          return (
            <li
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--cyan)] transition-transform group-hover:scale-110">
                <I className="size-4.5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--electric)]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
