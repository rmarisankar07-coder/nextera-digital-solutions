import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { LogoMark } from "./nav-bar";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10">
      <div className="absolute inset-x-0 -top-32 mx-auto h-64 max-w-5xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--electric)_25%,transparent),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark size={32} />
              <span className="font-display text-base font-semibold">NextEra Digital Solutions</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A modern software studio crafting intelligent digital products,
              scalable web platforms and beautiful user experiences.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Github, href: "https://github.com", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:digitalsolution.nextera@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={[
            { label: "Mission", href: "#mission" },
            { label: "Services", href: "#services" },
            { label: "Stack", href: "#stack" },
            { label: "Work", href: "#work" },
          ]} />
          <FooterCol title="Studio" links={[
            { label: "Process", href: "#process" },
            { label: "Journey", href: "#journey" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ]} />
          <FooterCol title="Connect" links={[
            { label: "Email", href: "mailto:digitalsolution.nextera@gmail.com" },
            { label: "GitHub", href: "https://github.com/rmarisankar07-coder" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mari-sankar-r-50022a32a" },
          ]} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} NextEra Digital Solutions · Crafted by Team NextEra
          </div>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-foreground/85 transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
