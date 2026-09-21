import Image from "next/image";
import { content } from "@/lib/content";
import { Container, SectionHeading } from "./ui";

export function About() {
  const { title, desc, photo } = content.about;
  return (
    <section
      id="sobre-ani"
      aria-labelledby="sobre-ani-titulo"
      className="bg-bg-alt py-20 lg:py-28"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src={photo}
              alt={`${content.brand.name}, ${content.brand.role}, en su oficina`}
              width={900}
              height={1600}
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </div>
        </div>
        <div>
          <SectionHeading id="sobre-ani-titulo" title={title} />
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">
            {desc}
          </p>
        </div>
      </Container>
    </section>
  );
}
