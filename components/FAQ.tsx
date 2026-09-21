import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { content, ui } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="bg-bg-alt py-20 lg:py-28"
    >
      <Container className="max-w-3xl">
        <SectionHeading id="faq-titulo" title={ui.sections.faq.title} />
        <div className="mt-8 flex flex-col gap-3">
          {content.faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-line bg-surface-soft open:border-accent/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-6 py-5 text-lg font-semibold">
                {item.q}
                <CaretDown
                  size={20}
                  aria-hidden
                  className="shrink-0 text-accent-strong transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
