import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { content, ui } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

export function Testimonials() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-titulo"
      className="py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          id="testimonios-titulo"
          title={ui.sections.testimonials.title}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          {content.testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-surface-soft p-7 sm:p-9"
            >
              <Quotes size={32} weight="fill" className="text-accent" aria-hidden />
              <blockquote className="mt-4 text-xl leading-relaxed text-text">
                {t.text}
              </blockquote>
              <figcaption className="mt-auto pt-6 font-semibold text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
