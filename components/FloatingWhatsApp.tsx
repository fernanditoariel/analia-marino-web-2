import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ui, whatsappLink } from "@/lib/content";
import { btnPrimary } from "./ui";

/*
  Botón flotante de WhatsApp: siempre visible, en todas las pantallas.
  El footer deja espacio abajo para que no tape el crédito ni los datos legales.
*/
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(ui.whatsappMessages.general)}
      target="_blank"
      rel="noopener"
      aria-label="Escribir a Analía por WhatsApp"
      className={`${btnPrimary} fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 shadow-[0_10px_30px_-8px_rgb(0_10_35/0.9)] sm:right-6`}
    >
      <WhatsappLogo size={24} weight="fill" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
