import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { content } from "@/lib/content";

const linkClass =
  "flex size-11 items-center justify-center rounded-full border border-white/40 text-text transition duration-200 hover:border-accent hover:bg-accent hover:text-on-accent active:scale-95";

export function SocialLinks({ className = "" }: { className?: string }) {
  const { instagram, facebook } = content.contact;
  const name = content.brand.name;
  if (!instagram && !facebook) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`} aria-label="Redes sociales">
      {instagram && (
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noopener"
            aria-label={`Instagram de ${name}`}
            className={linkClass}
          >
            <InstagramLogo size={22} aria-hidden />
          </a>
        </li>
      )}
      {facebook && (
        <li>
          <a
            href={facebook}
            target="_blank"
            rel="noopener"
            aria-label={`Facebook de ${name}`}
            className={linkClass}
          >
            <FacebookLogo size={22} aria-hidden />
          </a>
        </li>
      )}
    </ul>
  );
}
