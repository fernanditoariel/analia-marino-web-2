# Analía Marino | Productora Asesora de Seguros (Bahía Blanca) - versión con video en el hero

Sitio one-page de Analía Marino, Productora Asesora de Seguros (Matrícula SSN N° 97725), Bahía Blanca.
Next.js (App Router) + Tailwind CSS v4. Íconos: Phosphor. Tipografías: Outfit y Geist con `next/font`.

## Correr en local

```bash
npm install
cp .env.example .env.local   # completar las variables (ver abajo)
npm run dev
```

Abrir <http://localhost:3000>. Otros comandos: `npm run build`, `npm run start`, `npm run lint`.

## Variables de entorno

| Variable | Para qué sirve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (metadata, Open Graph, JSON-LD). Sin barra final. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Endpoint de [Formspree](https://formspree.io) para el formulario de contacto. |

Si falta el endpoint de Formspree, el formulario valida igual pero al enviar muestra un error
con un botón alternativo para escribir por WhatsApp (con los datos ya cargados).

## Dónde editar el contenido

Todo el contenido vive en [`lib/content.ts`](lib/content.ts):

- `content`: el JSON de contenido (marca, contacto, hero, servicios, sobre mí, testimonios, FAQ, legales).
- `ui`: títulos de sección, pasos de "Cómo trabajo", microcopy de confianza y mensajes prearmados de WhatsApp.

Los datos reales (nombre, matrícula, teléfono, ciudad, servicios) salen de la tarjeta personal de Analía.
Todo lo que dice `TODO:` es un dato pendiente:

- [ ] Email (`contact.email`). Vacío = no se muestra en ningún lado. Instagram y Facebook ya están cargados (`contact.instagram`, `contact.facebook`).
- [ ] Confirmar el horario (`contact.hours`) y la zona de atención (`contact.serviceArea`).
- [ ] Bio: sumar 1 o 2 líneas propias en `about.desc`.
- [ ] Testimonios reales.
- [ ] Plazo real de respuesta ("Respuesta en X horas", en `ui.trust`).
- [ ] Descripción del servicio de Salud (`services`), redactada de forma genérica.

Video del hero: `public/video/analia-capacitacion.mp4` (sin audio, 885 KB) y su póster; se ve desenfocado (`blur-[4px]` en `components/HeroVideo.tsx`) con un velo navy en `components/Hero.tsx`. La foto `analia-hero.jpg` ya no se usa en esta versión.

Fotos en `public/images/` (`analia-hero`, `analia-vertical`, `analia-celeste`, `analia-cliente`, `analia-presenta`, `analia-oficina`).
`analia-vertical.jpg` va en "Sobre mí" y `analia-celeste.jpg` al final de "Contacto". `analia-oficina.jpg` todavía no se usa en la web.

Botón flotante de WhatsApp: `components/FloatingWhatsApp.tsx`. El mensaje se cambia en `ui.whatsappMessages`.

## Estructura

```
app/
  layout.tsx            fuentes, metadata, viewport
  page.tsx              one-page + JSON-LD (LocalBusiness / InsuranceAgency)
  globals.css           tokens de diseño (colores, foco, animación de entrada)
  icon.tsx              favicon generado
  opengraph-image.tsx   imagen para compartir generada
components/             Header, Hero, TrustBar, Services, WhyMe, Steps, About,
                        Testimonials, FAQ, Contact, ContactForm, FloatingWhatsApp, Footer
lib/content.ts          contenido y helpers (whatsappLink)
public/images/          fotos (placeholder)
```

Anclas de navegación: `#inicio`, `#servicios`, `#por-que`, `#como-trabajo`, `#sobre-ani`, `#testimonios`, `#faq`, `#contacto`.

## Deploy en Vercel

1. Subir el proyecto a un repositorio de GitHub.
2. En [vercel.com/new](https://vercel.com/new), importar el repositorio (Vercel detecta Next.js solo).
3. En **Settings > Environment Variables** cargar `NEXT_PUBLIC_SITE_URL` y `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
4. Deploy. Cada push a `main` publica automáticamente; las ramas generan previews.
5. (Opcional) Conectar el dominio propio en **Settings > Domains** y actualizar `NEXT_PUBLIC_SITE_URL`.
