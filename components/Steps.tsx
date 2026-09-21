import Image from "next/image";
import { ChatCircleText, CheckCircle, Scales } from "@phosphor-icons/react/dist/ssr";
import { content, ui } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

const icons = [ChatCircleText, Scales, CheckCircle];

export function Steps() {
  return (
    <section
      id="como-trabajo"
      aria-labelledby="como-trabajo-titulo"
      className="py-20 lg:py-28"
    >
      <Container>
        <SectionHeading id="como-trabajo-titulo" title={ui.sections.steps.title} />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line">
          <Image
            src={content.photos.withClient}
            alt={`${content.brand.name} explicando opciones de cobertura a un cliente`}
            width={1600}
            height={900}
            sizes="(min-width: 1152px) 1088px, 92vw"
            className="aspect-[4/3] w-full object-cover object-[40%_center] sm:aspect-[16/8] sm:object-[center_30%]"
          />
        </div>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {ui.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="border-t-2 border-accent/50 pt-6">
                <Icon size={36} weight="duotone" className="text-accent-strong" aria-hidden />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
