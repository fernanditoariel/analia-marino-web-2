"use client";

import { useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { content, whatsappLink } from "@/lib/content";
import { btnPrimary } from "./ui";

type Fields = { nombre: string; contacto: string; tipo: string; mensaje: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "sending" | "success" | "error";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const TIPOS = [...content.services.map((s) => s.title), "Otro"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Fields): Errors {
  const errors: Errors = {};
  if (v.nombre.trim().length < 2) errors.nombre = "Ingresá tu nombre.";
  const contacto = v.contacto.trim();
  const digits = contacto.replace(/\D/g, "");
  const isPhone = /^[+\d][\d\s()-]*$/.test(contacto) && digits.length >= 8;
  if (!EMAIL_RE.test(contacto) && !isPhone) {
    errors.contacto = "Ingresá un email válido o un teléfono con código de área.";
  }
  if (!v.tipo) errors.tipo = "Elegí un tipo de seguro.";
  if (v.mensaje.length > 1000) errors.mensaje = "El mensaje es demasiado largo.";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border border-white/45 bg-bg px-4 py-3 text-base text-text placeholder:text-muted/70 transition focus:border-accent-strong aria-[invalid=true]:border-danger";

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    nombre: "",
    contacto: "",
    tipo: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const fallbackWhatsapp = whatsappLink(
    `Hola Analía, obtuve tu whatsapp de tu página web. Soy ${values.nombre || "..."}. Quiero cotizar un seguro (${values.tipo || "sin definir"}). ${values.mensaje} Mi contacto: ${values.contacto || "..."}`.trim(),
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot anti spam: los bots completan este campo, las personas no.
    if ((form.elements.namedItem("_gotcha") as HTMLInputElement)?.value) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!ENDPOINT) {
      console.warn("Falta NEXT_PUBLIC_FORMSPREE_ENDPOINT (ver .env.example).");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: `Nueva consulta de seguro (${values.tipo})`,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setValues({ nombre: "", contacto: "", tipo: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-2xl border border-accent/50 bg-accent/10 p-6"
      >
        <CheckCircle size={36} weight="fill" className="text-accent-strong" aria-hidden />
        <p className="font-display text-xl font-semibold">Recibí tu consulta</p>
        <p className="text-muted">
          Te respondo a la brevedad con opciones. Si es urgente, escribime por WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 font-semibold text-accent-strong underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="f-nombre" className="mb-2 block font-semibold">
          Nombre
        </label>
        <input
          id="f-nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          value={values.nombre}
          onChange={set("nombre")}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "e-nombre" : undefined}
          className={fieldClass}
        />
        {errors.nombre && (
          <p id="e-nombre" className="mt-2 text-sm text-danger">
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="f-contacto" className="mb-2 block font-semibold">
          Email o teléfono
        </label>
        <input
          id="f-contacto"
          name="contacto"
          type="text"
          inputMode="email"
          autoComplete="email"
          value={values.contacto}
          onChange={set("contacto")}
          aria-invalid={!!errors.contacto}
          aria-describedby={errors.contacto ? "e-contacto" : "h-contacto"}
          className={fieldClass}
        />
        {errors.contacto ? (
          <p id="e-contacto" className="mt-2 text-sm text-danger">
            {errors.contacto}
          </p>
        ) : (
          <p id="h-contacto" className="mt-2 text-sm text-muted">
            Por donde preferís que te responda.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="f-tipo" className="mb-2 block font-semibold">
          Tipo de seguro
        </label>
        <select
          id="f-tipo"
          name="tipo"
          value={values.tipo}
          onChange={set("tipo")}
          aria-invalid={!!errors.tipo}
          aria-describedby={errors.tipo ? "e-tipo" : undefined}
          className={`${fieldClass} [color-scheme:dark]`}
        >
          <option value="">Elegí una opción</option>
          {TIPOS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.tipo && (
          <p id="e-tipo" className="mt-2 text-sm text-danger">
            {errors.tipo}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="f-mensaje" className="mb-2 block font-semibold">
          Mensaje <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id="f-mensaje"
          name="mensaje"
          rows={4}
          value={values.mensaje}
          onChange={set("mensaje")}
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "e-mensaje" : undefined}
          className={fieldClass}
        />
        {errors.mensaje && (
          <p id="e-mensaje" className="mt-2 text-sm text-danger">
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Honeypot: oculto para personas y lectores de pantalla. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] size-px opacity-0"
      />

      {status === "error" && (
        <div
          role="alert"
          className="flex gap-3 rounded-xl border border-danger/60 bg-danger/10 p-4 text-sm"
        >
          <WarningCircle size={22} className="shrink-0 text-danger" aria-hidden />
          <p>
            No pude enviar el formulario. Probá de nuevo o{" "}
            <a
              href={fallbackWhatsapp}
              target="_blank"
              rel="noopener"
              className="font-semibold text-accent-strong underline underline-offset-4"
            >
              escribime por WhatsApp
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${btnPrimary} w-full disabled:opacity-70 sm:w-auto sm:self-start`}
      >
        {status === "sending" ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
