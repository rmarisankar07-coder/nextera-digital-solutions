import { useEffect, useState } from "react";
import { LogoMark } from "./nav-bar";

const PHASES = [
  "booting kernel",
  "loading shaders",
  "compiling experience",
  "calibrating aurora",
  "ready",
];

export function CinematicLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // ease-in-out-quint for a more cinematic curve
      const eased =
        p < 0.5 ? 16 * p * p * p * p * p : 1 - Math.pow(-2 * p + 2, 5) / 2;
      const v = Math.floor(eased * 100);
      setProgress(v);
      setPhase(Math.min(PHASES.length - 1, Math.floor(eased * PHASES.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 520);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-[900ms] ease-[cubic-bezier(.16,.84,.24,1)] ${
        done ? "pointer-events-none scale-[1.04] opacity-0" : "opacity-100"
      }`}
    >
      {/* Aurora wash */}
      <div className="absolute inset-0 aurora-bg opacity-70 animate-aurora" />
      {/* Animated grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, white 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, white 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Sweeping light beam */}
      <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-[14deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent loader-sweep" />

      <div className="relative flex w-[min(560px,90vw)] flex-col items-center gap-8">
        {/* Logo with concentric rings */}
        <div className="relative grid place-items-center">
          <div className="absolute size-44 rounded-full border border-white/5 animate-spin-slow" />
          <div
            className="absolute size-32 rounded-full border border-white/10"
            style={{ animation: "spin-slow 18s linear infinite reverse" }}
          />
          <div className="absolute size-44 rounded-full bg-[var(--electric)]/15 blur-3xl animate-pulse-glow" />
          <div className="relative animate-float">
            <LogoMark size={64} />
          </div>
        </div>

        <div className="text-center">
          <div className="font-display text-lg font-semibold tracking-[-0.01em]">
            <span className="text-gradient">NextEra</span>
            <span className="text-foreground/80"> Digital Solutions</span>
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            crafting tomorrow, today
          </div>
        </div>

        {/* Progress row: counter — bar — phase */}
        <div className="flex w-full items-center gap-5">
          <div className="font-mono text-3xl font-light tabular-nums text-foreground">
            {progress}
            <span className="ml-0.5 text-base text-muted-foreground">%</span>
          </div>
          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--electric)] via-[var(--cyan)] to-[var(--violet)] shadow-[0_0_18px_color-mix(in_oklab,var(--electric)_70%,transparent)] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_var(--electric)] transition-[left] duration-150 ease-out"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:block">
            {PHASES[phase]}
          </div>
        </div>
      </div>
    </div>
  );
}
