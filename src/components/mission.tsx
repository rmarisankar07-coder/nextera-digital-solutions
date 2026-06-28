import { Compass, Eye, Sparkles, Target } from "lucide-react";
import { Section } from "./section";

const pillars = [
  { icon: Target, title: "Mission", body: "Build intelligent, scalable, modern digital experiences that solve real-world problems through design, engineering and AI." },
  { icon: Eye, title: "Vision", body: "Grow NextEra Digital Solutions into a globally recognized software company that creates impactful technology for businesses and the people who use them." },
  { icon: Compass, title: "Approach", body: "Engineering excellence, design-led thinking and an obsession with the small details that make products feel premium and human." },
  { icon: Sparkles, title: "Principle", body: "Don't build beautiful websites — build emotional experiences. Every animation, transition and interaction should reinforce quality." },
];

export function Mission() {
  return (
    <Section
      id="mission"
      eyebrow="Why NextEra exists"
      title={
        <>
          A studio built on the belief that{" "}
          <span className="text-gradient">software should feel inevitable.</span>
        </>
      }
      description="NextEra Digital Solutions is a modern software studio for the next decade of the web — focused on intelligent products, scalable platforms and experiences that earn their place on every device they touch."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => {
          const I = p.icon;
          return (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[var(--electric)]/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--electric)]">
                  <I className="size-4.5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
