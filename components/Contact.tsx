import {
  Clock,
  Envelope,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { content, ui, whatsappLink } from "@/lib/content";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";
import { btnPrimary, Container, SectionHeading } from "./ui";

export function Contact() {
  const { email, hours, serviceArea, whatsapp, phoneDisplay } =
    content.contact;
  // El email se muestra solo si tiene dato real.
  const items: { Icon: typeof Phone; label: string; href?: string }[] = [
    { Icon: Phone, label: phoneDisplay, href: `tel:${whatsapp}` },
    ...(email ? [{ Icon: Envelope, label: email, href: `mailto:${email}` }] : []),
    { Icon: Clock, label: hours },
    { Icon: MapPin, label: serviceArea },
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="py-20 lg:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contacto-titulo"
            eyebrow={ui.sections.contact.eyebrow}
            title={ui.sections.contact.title}
            subtitle={ui.sections.contact.subtitle}
          />
          <a
            href={whatsappLink(ui.whatsappMessages.general)}
            target="_blank"
            rel="noopener"
            className={`${btnPrimary} mt-8`}
          >
            <WhatsappLogo size={22} weight="fill" aria-hidden />
            {content.hero.ctaPrimary}
          </a>
          <ul className="mt-10 flex flex-col gap-4">
            {items.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-strong">
                  <Icon size={22} aria-hidden />
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener" : undefined}
                    className="break-all text-text underline-offset-4 hover:underline"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-text">{label}</span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-3 font-semibold">Seguime en redes</p>
            <SocialLinks />
          </div>
          <div className="mt-10 max-w-md overflow-hidden rounded-2xl border border-line">
            <Image
              src={content.photos.contact}
              alt={`${content.brand.name}, ${content.brand.role}, frente a una oficina de seguros`}
              width={900}
              height={1600}
              sizes="(min-width: 1024px) 28vw, 90vw"
              className="aspect-[4/3] w-full object-cover object-[center_22%]"
            />
          </div>
        </div>

        {/* El formulario acompaña el scroll en desktop para no dejar hueco a la derecha. */}
        <div className="self-start rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:sticky lg:top-24">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
