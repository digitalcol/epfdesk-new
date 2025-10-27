import Bubbles from "@/components/reusableComponents/Bubbles";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import FAQ from "@/components/reusableComponents/FAQ";
import Footer from "@/components/reusableComponents/Footer";
import Bootcamps from "@/components/reusableComponents/Hero";
import Questioning from "@/components/reusableComponents/Questioning";
import ContentSlider from "@/components/reusableComponents/Slider";

import Upskills from "@/components/reusableComponents/Upskills";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import {
  dataTableFacility,
  faqsFacility,
  slidesFacility,
  uspDataFacility,
  videoHighlightDataFacility,
} from "@/utils/data";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk",
  description:
    "Workforce Limited offers expert compliance for Facility Management (FM) companies. We master CLRA, RCM in GST, EPF/ESIC for contract staff, and multi-state labor laws. Mitigate risk, ensure seamless operations.",
  keywords:
    "Facility management compliance, CLRA compliance, RCM GST facility management, contract staff EPF ESIC, multi-state labor compliance, facility compliance India, vendor compliance management",
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-consultant-facility-management-bangalore",
  },
  openGraph: {
    title: "Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk",
    description:
      "Expert compliance services for Facility Management companies — CLRA, RCM, EPF/ESIC, and multi-state labor law mastery for seamless operations.",
    url: "https://epfdesk.com/pf-esic-consultant-facility-management-bangalore",
    type: "website",
    locale: "en_IN",
    siteName: "EPFdesk",
    images: [
      {
        url: "https://epfdesk.com/images/facility-compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Facility Management Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facility Management Compliance: Master CLRA, RCM & Multi-Site Risk",
    description:
      "CLRA, RCM in GST, EPF/ESIC, and labor law compliance for Facility Management firms. Minimize risks and ensure full legal readiness.",
    images: ["https://epfdesk.com/images/facility-compliance-twitter.jpg"],
  },
};

function Hero() {
  return (
    <Bootcamps
      title={"Facility Management Compliance"}
      description={
        " Workforce Limited offers expert compliance for Facility Management (FM) companies. We master CLRA, RCM in GST, EPF/ESIC for contract staff, and multi-state labor laws. Mitigate risk, ensure seamless operations."
      }
    />
  );
}

const Facility = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Facility Management Compliance Services",
            provider: {
              "@type": "Organization",
              name: "Workforce Limited",
              url: "https://epfdesk.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "India",
                addressCountry: "IN",
              },
              telephone: "+91-9945933333",
            },
            areaServed: { "@type": "Country", name: "India" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Facility Management Compliance Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CLRA Registration & License Compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "GST Reverse Charge Mechanism (RCM) Compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EPF & ESIC Management for Contract Staff",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Multi-State Labor Law Compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Contractor Vetting & Audit Support",
                  },
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What compliance challenges do Facility Management companies face?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FM companies face complex CLRA, GST RCM, and labor law compliance across multiple states, especially when managing third-party or contractual workers.",
                },
              },
              {
                "@type": "Question",
                name: "How does Workforce Limited assist Facility Management firms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We handle CLRA licensing, EPF/ESIC filing, RCM GST management, and audit preparation for multi-location compliance, reducing risks and penalties.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support compliance across multiple client sites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide centralized dashboards and reporting for multi-client, multi-site Facility Management operations, ensuring consistent compliance everywhere.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <VideoHighlight data={videoHighlightDataFacility} />
      <ComplianceTable data={dataTableFacility} />
      <Questioning uspData={uspDataFacility} />
      <Bubbles />
      <ContentSlider slides={slidesFacility} />
      {/* <Testimonials/> */}
      <Upskills
        title="Transform Your Contracts & Compliance Today"
        paragraphs={[
          "Ready to master the complexities of Facility Management compliance, eliminate contractual risks, and secure your client relationships with legal certainty?",
        ]}
      />
      <FAQ faqs={faqsFacility} />
      <Footer />
    </>
  );
};

export default Facility;
