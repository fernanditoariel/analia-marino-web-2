import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { content, siteUrl } from "@/lib/content";

const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const title = `${content.brand.name} | Productora de seguros en ${content.brand.city}`;
const description =
  "Seguros de autos, hogar, salud, vida, comercios y empresas en Bahía Blanca. Asesoramiento personalizado, cotizaciones comparadas y seguimiento real en siniestros.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${content.brand.name}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: `${content.brand.name}, Productora de seguros`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: content.brand.primaryColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
