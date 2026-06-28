import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "./section";

type FieldKey = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<FieldKey, string>>;

export function Contact() {
  const [state, setState] = useState<Record<FieldKey, string>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (s: Record<FieldKey, string>): Errors => {
    const e: Errors = {};
    if (!s.name.trim()) e.name = "Please enter your name.";
    if (!s.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim())) e.email = "Please enter a valid email address.";
    if (!s.phone.trim()) e.phone = "Please enter your mobile number.";
    else if (!/^[+\d][\d\s\-()]{6,}$/.test(s.phone.trim())) e.phone = "Please enter a valid mobile number.";
    if (!s.message.trim()) e.message = "Please tell us a little about your project.";
    return e;
  };

  const update = (key: FieldKey, v: string) => {
    setState((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <Section
      id="contact"
      eyebrow="Let's talk"
      title={<>Let's build something <span className="text-gradient">amazing together.</span></>}
      description="Have an idea, a product or a startup you want to bring to life? Tell us a little about it — we reply to every serious inquiry within 24 hours."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] p-8 backdrop-blur">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[var(--violet)]/20 blur-3xl" />
          <div className="relative space-y-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Direct line
              </div>
              <a
                href="mailto:digitalsolution.nextera@gmail.com"
                className="mt-2 flex items-center gap-2 font-display text-lg font-semibold tracking-tight hover:text-gradient"
              >
                <Mail className="size-4 text-[var(--electric)]" />
                digitalsolution.nextera@gmail.com
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/rmarisankar07-coder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mari-sankar-r-50022a32a"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </div>

            <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1.5 rounded-full bg-[var(--cyan)]" /> Project & MVP collaborations</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1.5 rounded-full bg-[var(--electric)]" /> Startup partnerships & founding work</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 size-1.5 rounded-full bg-[var(--violet)]" /> Freelance product engineering</li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Currently</div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Open for new projects · 2026
              </div>
            </div>
          </div>
        </aside>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const found = validate(state);
            if (Object.keys(found).length > 0) {
              setErrors(found);
              const firstKey = (["name", "email", "phone", "message"] as FieldKey[]).find((k) => found[k]);
              if (firstKey) {
                const el = document.getElementById(`contact-${firstKey}`);
                el?.focus();
              }
              return;
            }
            const subject = encodeURIComponent(`New project inquiry from ${state.name}`);
            const body = encodeURIComponent(
              `Name: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\n\nMessage:\n${state.message}`,
            );
            window.location.href = `mailto:digitalsolution.nextera@gmail.com?subject=${subject}&body=${body}`;
            setSent(true);
          }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] p-8 backdrop-blur"
        >
          <div className="absolute -left-20 -bottom-20 size-64 rounded-full bg-[var(--electric)]/20 blur-3xl" />

          <div className="relative space-y-5">
            <Field id="contact-name" label="Your name" value={state.name} error={errors.name} onChange={(v) => update("name", v)} />
            <Field id="contact-email" label="Email" type="email" value={state.email} error={errors.email} onChange={(v) => update("email", v)} />
            <Field id="contact-phone" label="Mobile number" type="tel" value={state.phone} error={errors.phone} onChange={(v) => update("phone", v)} />
            <Field id="contact-message" label="Tell us about your project" value={state.message} error={errors.message} onChange={(v) => update("message", v)} textarea />

            {Object.keys(errors).length > 0 && (
              <div className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2.5 text-xs text-red-200">
                <AlertCircle className="mt-0.5 size-3.5 shrink-0" />
                <span>Kindly fill the highlighted fields above before sending.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={sent}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--electric)] to-[var(--violet)] px-6 py-3.5 font-medium text-white shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--electric)_80%,transparent)] transition-transform hover:scale-[1.01] disabled:opacity-80"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="size-4" />
                  Message received — we'll be in touch
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  textarea,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const isFloating = value.length > 0;
  const Common = textarea ? "textarea" : "input";
  return (
    <label htmlFor={id} className="group relative block">
      <span
        className={`pointer-events-none absolute left-4 z-10 origin-left transition-all ${
          isFloating ? "top-1.5 scale-75" : "top-3.5 text-sm"
        } ${error ? "text-red-300" : "text-muted-foreground group-focus-within:text-[var(--cyan)]"} group-focus-within:top-1.5 group-focus-within:scale-75`}
      >
        {label}
      </span>
      <Common
        id={id}
        type={type as never}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 4 : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`block w-full resize-none rounded-xl border bg-white/[0.04] px-4 pb-2 pt-6 text-sm text-foreground outline-none transition-colors focus:ring-2 ${
          error
            ? "border-red-400/60 focus:border-red-400 focus:ring-red-400/20"
            : "border-white/10 focus:border-[var(--electric)]/60 focus:ring-[var(--electric)]/20"
        }`}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1.5 flex items-center gap-1 px-1 text-xs text-red-300">
          <AlertCircle className="size-3" />
          {error}
        </span>
      )}
    </label>
  );
}
