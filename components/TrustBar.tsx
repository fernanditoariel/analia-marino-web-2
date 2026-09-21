import {
  CalendarCheck,
  Globe,
  ShieldCheck,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { ui } from "@/lib/content";
import { Container } from "./ui";

const icons = [Globe, ShieldCheck, Timer, CalendarCheck];

export function TrustBar() {
  return (
    <section
      aria-label="Por qué confiar"
      className="border-y border-line bg-bg-alt"
    >
      <Container className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {ui.trust.map((item, i) => {
          const Icon = icons[i];
          return (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-strong">
                <Icon size={24} aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-text">{item.title}</p>
                <p className="mt-0.5 text-sm leading-snug text-muted">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
