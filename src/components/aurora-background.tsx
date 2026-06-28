import { useEffect, useRef } from "react";

/** Cinematic aurora + grid + spotlight background. Fixed, pointer-events none. */
export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        // @ts-expect-error css vars
        "--mx": "50vw",
        "--my": "30vh",
      }}
    >
      {/* base */}
      <div className="absolute inset-0 bg-background" />
      {/* aurora blobs */}
      <div className="absolute inset-0 aurora-bg animate-aurora opacity-90" />
      {/* mesh grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, white 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, white 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      {/* cursor spotlight */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), color-mix(in oklab, var(--electric) 18%, transparent), transparent 60%)",
        }}
      />
      {/* noise overlay */}
      <div className="absolute inset-0 noise opacity-[0.5] mix-blend-overlay" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,var(--background)_100%)]" />
    </div>
  );
}
