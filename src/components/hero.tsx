import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "20+", label: "Technologies" },
  { value: "3yr", label: "Learning journey" },
  { value: "∞", label: "Startup vision" },
];

const codeLines = [
  "const future = await build({",
  "  vision: 'intelligent products',",
  "  craft: 'pixel-perfect',",
  "  scale: 'global',",
  "});",
];

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLSpanElement>("[data-char]").forEach((s, i) => {
      s.style.animationDelay = `${i * 22}ms`;
    });
  }, []);

  const headline = "Building Intelligent Digital Experiences for Tomorrow.";

  return (
    <section className="relative isolate flex min-h-[100svh] items-center pt-28 pb-16 sm:pt-32">
      {/* floating glass orbs */}
      <FloatingPanels />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur animate-rise-in">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--electric)] opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[var(--electric)]" />
            </span>
            NextEra Digital Solutions — founded 2026 
          </div>

          <h1
            ref={headingRef}
            className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
          >
            {headline.split(" ").map((word, wi) => (
              <span key={wi} className="mr-[0.25em] inline-block">
                {word.split("").map((c, ci) => (
                  <span
                    key={ci}
                    data-char
                    className="inline-block animate-rise-in opacity-0"
                    style={{
                      animationFillMode: "forwards",
                    }}
                  >
                    {wi === 1 || wi === 2 ? (
                      <span className="text-gradient">{c}</span>
                    ) : (
                      c
                    )}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg animate-rise-in"
            style={{ animationDelay: "650ms", animationFillMode: "both" }}
          >
            Modern websites · Full-stack engineering · AI solutions · Startup products.
            We're{" "}
            <span className="text-foreground">Mari Sankar R, Karthikeyan J and Kevin Samson R</span>{" "}
            — three Computer Science engineers behind NextEra, crafting
            scalable, human-centered software for the next decade of the web.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-rise-in"
            style={{ animationDelay: "800ms", animationFillMode: "both" }}
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--violet)] px-6 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--electric)_80%,transparent)] transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">View my work</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              <Sparkles className="size-4 text-[var(--cyan)]" />
              Let's build together
            </a>
          </div>

          <dl
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 animate-rise-in"
            style={{ animationDelay: "1000ms", animationFillMode: "both" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="relative">
                <dt className="font-display text-3xl font-semibold tracking-tight text-gradient">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Glass code panel */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--electric)]/15 blur-3xl" />
          <div className="relative glass-strong rounded-3xl p-1 animate-float">
            <div className="rounded-[1.4rem] bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-400/60" />
                  <span className="size-2.5 rounded-full bg-yellow-400/60" />
                  <span className="size-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  nextera.ts
                </span>
              </div>
              <pre className="mt-4 overflow-hidden font-mono text-[13px] leading-relaxed">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="animate-rise-in opacity-0"
                    style={{
                      animationDelay: `${1200 + i * 120}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/50">
                      {i + 1}
                    </span>
                    <Highlight line={line} />
                  </div>
                ))}
              </pre>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["React", "Next.js", "Node", "TypeScript", "Tailwind", "AI"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-center font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Highlight({ line }: { line: string }) {
  const parts = line.split(/(\b(?:const|await|true|false)\b|'[^']*'|\{|\}|\(|\))/g);
  return (
    <>
      {parts.map((p, i) => {
        if (/^(const|await)$/.test(p))
          return (
            <span key={i} className="text-[var(--violet)]">
              {p}
            </span>
          );
        if (/^'.*'$/.test(p))
          return (
            <span key={i} className="text-[var(--cyan)]">
              {p}
            </span>
          );
        if (/^(\{|\}|\(|\))$/.test(p))
          return (
            <span key={i} className="text-muted-foreground">
              {p}
            </span>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function FloatingPanels() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-[8%] top-[18%] size-32 rounded-2xl glass animate-float opacity-60" />
      <div
        className="absolute right-[12%] top-[14%] size-20 rounded-full bg-gradient-to-br from-[var(--electric)]/30 to-[var(--violet)]/30 blur-2xl animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-[14%] left-[20%] size-24 rounded-2xl glass animate-float"
        style={{ animationDelay: "0.7s" }}
      />
      <div className="absolute -right-32 top-1/3 size-[28rem] rounded-full bg-gradient-to-br from-[var(--violet)]/20 to-transparent blur-3xl animate-spin-slow" />
    </div>
  );
}
