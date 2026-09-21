import {
  ArrowRight,
  Buildings,
  CarProfile,
  FirstAidKit,
  HandHeart,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";
import { content, ui, whatsappLink } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

// Íconos duotone de Phosphor (MIT), uno con significado propio por servicio.
const icons = [CarProfile, HouseLine, FirstAidKit, HandHeart, Buildings];

// Grilla de 6 columnas con 5 tarjetas: 3+3 arriba y 2+2+2 abajo. Sin celdas vacías.
// En tablet (2 columnas) la última tarjeta ocupa el ancho completo.
const layout = [
  "lg:col-span-3 bg-gradient-to-br from-accent/25 via-surface to-surface",
  "lg:col-span-3 bg-surface-soft",
  "lg:col-span-2 bg-surface-soft",
  "lg:col-span-2 bg-gradient-to-tl from-accent/20 via-surface to-surface",
  "sm:col-span-2 lg:col-span-2 bg-surface-soft",
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="servicios-titulo"
          eyebrow={ui.sections.services.eyebrow}
          title={ui.sections.services.title}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {content.services.map((service, i) => {
            const Icon = icons[i];
            return (
              <li
                key={service.title}
                className={`group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-line p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 sm:p-8 ${layout[i]}`}
              >
                {/* Ícono grande de fondo, solo textura. */}
                <Icon
                  size={150}
                  weight="duotone"
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 text-accent opacity-[0.07] transition duration-300 group-hover:opacity-[0.12]"
                />
                <span className="relative flex size-16 items-center justify-center rounded-2xl border border-accent/35 bg-gradient-to-br from-accent/30 to-accent/5 text-accent-strong shadow-[inset_0_1px_0_rgb(255_255_255/0.14)]">
                  <Icon size={36} weight="duotone" aria-hidden />
                </span>
                <h3 className="relative mt-6 font-display text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="relative mt-2 max-w-[42ch] leading-relaxed text-muted">
                  {service.desc}
                </p>
                <a
                  href={whatsappLink(ui.whatsappMessages.service(service.title))}
                  target="_blank"
                  rel="noopener"
                  className="relative mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-accent-strong after:absolute after:inset-0 after:rounded-2xl"
                  aria-label={`Cotizar seguro de ${service.title} por WhatsApp`}
                >
                  Cotizar
                  <ArrowRight
                    size={18}
                    aria-hidden
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
