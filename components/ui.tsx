import type { ReactNode } from "react";

/*
  Piezas compartidas. Escala de z-index del sitio:
  header = z-40, CTA fijo mobile = z-30.
*/

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-base font-semibold transition duration-200 active:scale-[0.98]";

export const btnPrimary = `${btnBase} bg-accent text-on-accent hover:bg-accent-strong`;
export const btnSecondary = `${btnBase} border border-white/40 text-text hover:bg-white/10`;
