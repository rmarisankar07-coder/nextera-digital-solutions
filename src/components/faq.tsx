import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "./section";

const faqs = [
  {
    q: "Who is behind NextEra Digital Solutions?",
    a: "NextEra is founded by three Computer Science engineers — Mari Sankar R, Karthikeyan J and Kevin Samson R — building modern, AI-powered digital products from the ground up.",
  },
  {
    q: "What kinds of projects do you take on?",
    a: "Startup MVPs, modern marketing sites, SaaS dashboards, full-stack web apps and AI-integrated products. If it lives on the web and needs to feel premium, we're a fit.",
  },
  {
    q: "Which technologies do you build with?",
    a: "React, Next.js, TypeScript, Node, Express, MySQL, Tailwind and modern AI APIs — chosen for performance, longevity and a first-class developer experience.",
  },
  {
    q: "Can you build a complete startup product end-to-end?",
    a: "Yes. From discovery and design through to deployment and ongoing iteration — including auth, payments, dashboards, AI features and data infrastructure.",
  },
  {
    q: "How do clients usually get in touch?",
    a: "Through the contact form on this page or directly at digitalsolution.nextera@gmail.com. Most engagements start with a short discovery call.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="Common questions"
      title={<>Everything you might be <span className="text-gradient">wondering.</span></>}
    >
      <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] backdrop-blur">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-[var(--electric)]" : ""}`}
                />
              </button>
              <div
                className={`grid overflow-hidden px-6 transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
