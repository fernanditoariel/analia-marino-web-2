import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { content, ui, whatsappLink } from "@/lib/content";
import { HeroVideo } from "./HeroVideo";
import { btnPrimary, btnSecondary, Container } from "./ui";

export function Hero() {
  const { title, subtitle, ctaPrimary, ctaSecondary, video, videoPoster } =
    content.hero;
  // Las últimas dos palabras del titular van en el color de acento.
  const words = title.split(" ");
  const lead = words.slice(0, -2).join(" ");
  const accent = words.slice(-2).join(" ");

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[600px] items-center overflow-hidden lg:min-h-[680px]"
    >
      {/* Fondo: video desenfocado + velo navy para sostener el contraste del texto. */}
      <div className="absolute inset-0 -z-10 bg-bg" aria-hidden>
        <HeroVideo src={video} poster={videoPoster} />
        {/* Mobile: velo parejo (el texto ocupa todo el ancho). Desktop: degradé, más transparente donde no hay texto. */}
        <div className="absolute inset-0 bg-bg/75 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-bg/90 via-bg/70 to-bg/20 lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Container className="py-16 lg:py-24">
        <div className="max-w-2xl">
          <h1
            className="rise font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {lead}
            <span className="block text-accent">{accent}</span>
          </h1>
          <p
            className="rise mt-6 max-w-[46ch] text-lg leading-relaxed text-text/85 sm:text-xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {subtitle}
          </p>
          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <a
              href={whatsappLink(ui.whatsappMessages.general)}
              target="_blank"
              rel="noopener"
              className={btnPrimary}
            >
              <WhatsappLogo size={22} weight="fill" aria-hidden />
              {ctaPrimary}
            </a>
            <a href="#servicios" className={btnSecondary}>
              {ctaSecondary}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
