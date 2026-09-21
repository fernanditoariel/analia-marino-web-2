import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyMe } from "@/components/WhyMe";
import { content, siteUrl } from "@/lib/content";

// Datos estructurados para buscadores. Sin calle ni número: solo la ciudad (dato de la tarjeta).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: `${content.brand.name}, ${content.brand.role}`,
  description: `${content.brand.role} en ${content.brand.city}. ${content.brand.tagline}.`,
  url: siteUrl,
  telephone: content.contact.whatsapp,
  ...(content.contact.email && { email: content.contact.email }),
  address: {
    "@type": "PostalAddress",
    addressLocality: content.brand.city,
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: content.brand.city },
    { "@type": "Country", name: "Argentina" },
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [content.contact.instagram, content.contact.facebook].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyMe />
        <Steps />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
