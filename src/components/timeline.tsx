import { Section } from "./section";

const items = [
  { year: "2024", title: "First lines of code", body: "Discovered web development and fell in love with the craft of building for the browser." },
  { year: "2025", title: "Engineering foundations", body: "Computer Science Engineering — deep dives into algorithms, databases and systems thinking." },
  { year: "2026", title: "Full-stack era", body: "React, Node and SQL clicked into place. Started shipping real products end-to-end." },
  { year: "2026", title: "NextEra Digital Solutions", body: "Mari Sankar R, Karthikeyan J and Kevin Samson R founded NextEra — turning shared craft into a studio building intelligent digital products." },
  { year: "Next", title: "AI, cloud & scale", body: "Sharpening AI, cloud-native architecture and system design to build the products of tomorrow." },
];

export function Timeline() {
  return (
    <Section
      id="journey"
      eyebrow="The journey"
      title={<>From <span className="text-gradient">first commit</span> to founding NextEra.</>}
      description="A short timeline of the milestones that shaped the way we think about software, design and building companies together."
    >
      <ol className="relative mx-auto max-w-3xl">
        <span className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)]/60 via-white/15 to-[var(--violet)]/60" />
        {items.map((it, i) => (
          <li key={it.title} className="relative pl-12 pb-10 last:pb-0">
            <span className="absolute left-1.5 top-1.5 size-3 rounded-full bg-gradient-to-br from-[var(--electric)] to-[var(--violet)] shadow-[0_0_18px_color-mix(in_oklab,var(--electric)_70%,transparent)]" />
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {it.year} · Chapter {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
