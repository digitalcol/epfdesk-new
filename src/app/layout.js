import Navbar from "@/components/Navbar";
import "./globals.css";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Footer from "@/components/Footer";
import HeroObserver from "@/components/heroObserver";

export const metadata = {
  title: "EPF Desk | Expert EPF Compliance & Payroll Services in India",
  description:
    "Simplify PF compliance with EPF Desk. We handle monthly filings, inspections, challans, and payroll processing for businesses across India.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EPFdesk",
    description: "EPF and Labor Compliance Management for Indian Businesses",
    serviceType: "Compliance Management",
    areaServed: "India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EPF Compliance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "EPF Management" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "ESIC Compliance" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "POSH Training" },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <FadeInWhenVisible>
          <Footer />
        </FadeInWhenVisible>
        <HeroObserver />
      </body>
    </html>
  );
}
