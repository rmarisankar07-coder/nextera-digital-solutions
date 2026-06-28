import { useEffect, useRef, type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Bidirectional: reveal when entering, reset when fully leaving.
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-revealed");
          } else if (e.intersectionRatio === 0) {
            (e.target as HTMLElement).classList.remove("is-revealed");
          }
        });
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((t, i) => {
      t.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 70}ms`);
      io.observe(t);
    });
    return () => io.disconnect();

  }, []);

  return (
    <section ref={ref} id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <header
          className={`mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <div
              data-reveal
              className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-[var(--electric)] animate-pulse-glow" />
              {eyebrow}
            </div>
          )}
          <h2
            data-reveal
            className="reveal mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]"
          >
            {title}
          </h2>
          {description && (
            <p
              data-reveal
              className="reveal mt-5 text-base text-muted-foreground sm:text-lg"
            >
              {description}
            </p>
          )}
        </header>
        <div data-reveal className="reveal">
          {children}
        </div>
      </div>
    </section>
  );
}
