"use client";

import { useState } from "react";
import { List, ShieldCheck, WhatsappLogo, X } from "@phosphor-icons/react";
import { content, navLinks, ui, whatsappLink } from "@/lib/content";
import { btnPrimary, Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <a
          href="#inicio"
          onClick={close}
          className="flex items-center gap-3"
          aria-label={`${content.brand.name}, ir al inicio`}
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-on-accent">
            <ShieldCheck size={24} weight="fill" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">
              {content.brand.name}
            </span>
            <span className="block text-xs text-muted">
              Productora Asesora · {content.brand.licenseShort}
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-text/90 transition hover:text-accent-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(ui.whatsappMessages.general)}
            target="_blank"
            rel="noopener"
            className={`${btnPrimary} !px-5 !py-2.5 max-lg:hidden`}
          >
            <WhatsappLogo size={20} weight="fill" aria-hidden />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex size-11 items-center justify-center rounded-full border border-white/30 text-text transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={22} aria-hidden /> : <List size={22} aria-hidden />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menú móvil"
          className="border-t border-line bg-bg lg:hidden"
        >
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3.5 text-lg text-text transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
