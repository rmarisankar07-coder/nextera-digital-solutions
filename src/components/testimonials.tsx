import { Quote } from "lucide-react";
import { Section } from "./section";

const placeholders = [
  { role: "Founder · Early-stage SaaS", body: "Reserved for our first launch partner — your story will live here." },
  { role: "Product Lead · Fintech", body: "We're building space for the teams we'll ship alongside in 2026." },
  { role: "Designer · Creative studio", body: "Future collaborators welcome — clients we craft long-term work with." },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Voices"
      title={<>Reserved for the teams we'll <span className="text-gradient">build with next.</span></>}
      description="Honest placeholders, not fake quotes. As NextEra grows, real client stories will replace each card below."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((p, i) => (
          <figure
            key={i}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] p-7 backdrop-blur"
          >
            <Quote className="size-6 text-[var(--electric)]/70" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
              "{p.body}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-sm font-medium">Open seat</div>
                <div className="text-xs text-muted-foreground">{p.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
