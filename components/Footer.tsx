import { content, navLinks } from "@/lib/content";
import { SocialLinks } from "./SocialLinks";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg pb-24 pt-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold">{content.brand.name}</p>
            <p className="mt-1 text-muted">
              {content.brand.role} · {content.brand.licenseShort}
            </p>
            <p className="mt-3 max-w-[36ch] leading-relaxed text-muted">
              {content.brand.tagline}
            </p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted transition hover:text-accent-strong"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2.5 text-muted">
            <a
              href={`tel:${content.contact.whatsapp}`}
              className="hover:text-accent-strong"
            >
              {content.contact.phoneDisplay}
            </a>
            {content.contact.email && (
              <a
                href={`mailto:${content.contact.email}`}
                className="hover:text-accent-strong"
              >
                {content.contact.email}
              </a>
            )}
            <p>{content.contact.hours}</p>
            <p>{content.contact.serviceArea}</p>
            <SocialLinks className="mt-2" />
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="max-w-[80ch] text-sm leading-relaxed text-muted">
            {content.legal.disclaimer}
          </p>
          <div className="mt-4 flex flex-col gap-1.5 text-sm text-muted sm:flex-row sm:justify-between">
            <p>
              &copy; {year} {content.brand.name}. Todos los derechos reservados.
            </p>
            <p>
              Sitio web realizado por{" "}
              <a
                href="https://agenciawebhispana.com/"
                target="_blank"
                rel="noopener"
                className="font-semibold text-accent-strong hover:underline hover:underline-offset-4"
              >
                Agencia Web Hispana
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
