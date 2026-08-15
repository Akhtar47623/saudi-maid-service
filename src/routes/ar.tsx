import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";
import { ar } from "@/lib/site-content";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: ar.seo.title },
      { name: "description", content: ar.seo.description },
      { property: "og:title", content: ar.seo.ogTitle },
      { property: "og:description", content: ar.seo.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:url", content: "/ar" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/ar" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: ar.brand,
          description: ar.seo.ogDescription,
          telephone: "+966570567188",
          areaServed: { "@type": "City", name: "الرياض" },
          address: {
            "@type": "PostalAddress",
            addressLocality: "الرياض",
            addressCountry: "SA",
          },
          makesOffer: ar.services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: ar.faq.items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <LandingPage c={ar} />,
});
