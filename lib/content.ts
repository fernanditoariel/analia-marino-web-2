// Fuente de verdad del contenido del sitio.
// Datos reales tomados de la tarjeta personal de Analía Marino.
// Todo lo que diga "TODO:" es un dato que falta y hay que completar con información real.

export const content = {
  brand: {
    name: "Analía Marino",
    role: "Productora Asesora de Seguros",
    license: "Matrícula SSN N° 97725",
    licenseShort: "Mat. 97725",
    city: "Bahía Blanca",
    tagline: "Asesoría, protección y confianza",
    primaryColor: "#0F2A5F",
    secondaryColor: "#1BC5BD",
  },
  contact: {
    whatsapp: "+542914738439",
    phoneDisplay: "291 4738439",
    // TODO: sin dato real todavía. Vacío = no se muestra en ningún lado.
    email: "" as string,
    instagram: "https://www.instagram.com/analiamarinomarzocca",
    facebook: "https://www.facebook.com/share/1HpYjZcACX/",
    // TODO: confirmar el horario real de atención.
    hours: "Lun a Vie 9 a 18",
    serviceArea: "Bahía Blanca, Argentina (atención online)",
  },
  hero: {
    title: "Asegurá lo importante sin complicarte",
    subtitle:
      "Te ayudo a elegir coberturas claras y a resolver siniestros con seguimiento real.",
    ctaPrimary: "Pedir cotización por WhatsApp",
    ctaSecondary: "Ver coberturas",
    photo: "/images/analia-hero.jpg",
    // Video de fondo del hero (sin audio, 10 s en loop). Se ve desenfocado.
    video: "/video/analia-capacitacion.mp4",
    videoPoster: "/video/analia-capacitacion-poster.jpg",
  },
  valueProps: [
    {
      title: "Cotización rápida",
      desc: "Te paso opciones comparativas en poco tiempo.",
    },
    {
      title: "Acompañamiento en siniestros",
      desc: "No te dejo sola/o cuando pasa algo.",
    },
    {
      title: "Para personas, familias y empresas",
      desc: "Coberturas simples, pensadas para tu realidad.",
    },
  ],
  services: [
    { title: "Autos", desc: "Coberturas y asistencia adaptadas a tu uso." },
    {
      title: "Hogar",
      desc: "Protegé tu casa y tus cosas con opciones claras.",
    },
    {
      title: "Salud",
      desc: "Opciones de cobertura de salud para vos y tu familia.",
    },
    { title: "Vida", desc: "Planificación simple para estar tranquila/o." },
    {
      title: "Comercios y Empresas",
      desc: "Seguros para tu negocio o empresa, incluida la responsabilidad civil.",
    },
  ],
  about: {
    title: "Sobre mí",
    desc: "Soy Analía Marino, Productora Asesora de Seguros (Matrícula SSN N° 97725) en Bahía Blanca. Te ofrezco atención personalizada y seguros para vos, tu familia y tu empresa, con soluciones a tu medida pensadas en tu futuro. TODO: sumar 1 o 2 líneas propias (trayectoria, forma de trabajar).",
    photo: "/images/analia-vertical.jpg",
  },
  photos: {
    // Fotos de apoyo para las secciones.
    presenting: "/images/analia-presenta.jpg",
    withClient: "/images/analia-cliente.jpg",
    contact: "/images/analia-celeste.jpg",
  },
  testimonials: [
    { name: "Cliente 1", text: "TODO: testimonio real." },
    { name: "Cliente 2", text: "TODO: testimonio real." },
  ],
  faq: [
    {
      q: "¿Qué necesito para cotizar?",
      a: "Con algunos datos básicos te paso opciones y te explico diferencias.",
    },
    {
      q: "¿Trabajás con varias compañías?",
      a: "Sí, te propongo alternativas según tu necesidad y presupuesto.",
    },
    {
      q: "¿Cómo me ayudás si tengo un siniestro?",
      a: "Te guío paso a paso y hago seguimiento para que no quedes a la deriva.",
    },
  ],
  legal: {
    disclaimer:
      "Analía Marino, Productora Asesora de Seguros, Matrícula SSN N° 97725. La información del sitio es orientativa.",
  },
} as const;

// Textos de interfaz que no vienen en el JSON original (títulos de sección,
// pasos de "Cómo trabajo" y microcopy de confianza). Editables acá.
export const ui = {
  sections: {
    services: {
      eyebrow: "Coberturas",
      title: "Seguros para lo que hoy necesitás cuidar",
    },
    why: { title: "Por qué trabajar conmigo" },
    steps: { title: "Cómo trabajo" },
    testimonials: { title: "Lo que dicen mis clientes" },
    faq: { title: "Preguntas frecuentes" },
    contact: {
      eyebrow: "Contacto",
      title: "Contame qué necesitás asegurar",
      subtitle:
        "Escribime por WhatsApp o dejá tus datos y te respondo con opciones.",
    },
  },
  steps: [
    {
      title: "Me contás qué necesitás",
      desc: "Con algunos datos básicos entiendo tu situación.",
    },
    {
      title: "Te paso opciones comparadas",
      desc: "Te explico las diferencias entre coberturas y compañías.",
    },
    {
      title: "Elegimos y queda activo",
      desc: "Con tu decisión gestiono la contratación y sigo a tu lado ante un siniestro.",
    },
  ],
  trust: [
    { title: "Atención personalizada", desc: content.contact.serviceArea },
    {
      title: "Seguimiento en siniestros",
      desc: "Te acompaño hasta que se resuelve.",
    },
    {
      title: "Respuesta en X horas",
      desc: "TODO: confirmar el plazo real de respuesta.",
    },
    { title: "Horario de atención", desc: content.contact.hours },
  ],
  whatsappMessages: {
    // Mensaje pedido para el botón flotante y los botones principales.
    general: "Hola Analía, Obtuve tu whatsapp de tu página web. Mi nombre es: ",
    service: (service: string) =>
      `Hola Analía, obtuve tu whatsapp de tu página web. Quiero cotizar un seguro de ${service}. Mi nombre es: `,
  },
} as const;

// ---- Helpers ----

export function whatsappLink(message: string) {
  const digits = content.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

// URL pública: variable propia, o la de producción que Vercel provee, o localhost.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué elegirme" },
  { href: "#sobre-ani", label: "Sobre mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;
