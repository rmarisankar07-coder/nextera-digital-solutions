import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Command, Github, Linkedin, Menu, X } from "lucide-react";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "glass"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <LogoMark />
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              NextEra<span className="text-muted-foreground"> Digital</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="group relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="relative z-10">{it.label}</span>
                  <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-white/0 opacity-0 transition-all group-hover:scale-100 group-hover:bg-white/5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/rmarisankar07-coder"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mari-sankar-r-50022a32a"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--violet)] px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--electric)_60%,transparent)] transition-transform hover:scale-[1.03] active:scale-100 md:inline-flex"
            >
              Let's talk
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-3 md:hidden">
            <ul className="flex flex-col">
              {navItems.map((it) => (
                <li key={it.href}>
                  <a
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-white/10 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--violet)] px-3 py-2.5 text-center text-sm font-medium text-white"
                >
                  Let's talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-[var(--electric)] via-[var(--violet)] to-[var(--cyan)] opacity-90" />
      <span className="absolute inset-[2px] rounded-[6px] bg-background" />
      <span className="relative font-display text-[13px] font-black tracking-tighter text-gradient-primary">
        N
      </span>
      <span className="absolute -inset-1 -z-10 rounded-[10px] bg-[var(--electric)]/40 blur-md animate-pulse-glow" />
    </span>
  );
}
