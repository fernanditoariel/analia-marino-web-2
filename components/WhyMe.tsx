import Image from "next/image";
import { Handshake, Lifebuoy, Lightning } from "@phosphor-icons/react/dist/ssr";
import { content, ui } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

const icons = [Lightning, Lifebuoy, Handshake];

export function WhyMe() {
  return (
    <section
      id="por-que"
      aria-labelledby="por-que-titulo"
      className="bg-bg-alt py-20 lg:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading id="por-que-titulo" title={ui.sections.why.title} />
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <Image
              src={content.photos.presenting}
              alt={`${content.brand.name} presentando un seguro de vida a un grupo`}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 32vw, 90vw"
              className="aspect-[4/3] w-full object-cover object-[62%_center]"
            />
          </div>
        </div>
        <ul className="divide-y divide-line self-center">
          {content.valueProps.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-strong">
                  <Icon size={26} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[50ch] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
