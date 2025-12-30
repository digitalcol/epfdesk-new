import React from "react";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import Testimonials from "@/components/reusableComponents/Testimonial";
import Bubbles from "@/components/reusableComponents/Bubbles";
import Questioning from "@/components/reusableComponents/Questioning";
import Slider from "@/components/reusableComponents/Slider";
import Upskills from "@/components/reusableComponents/Upskills";
import Footer from "@/components/reusableComponents/Footer";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import FAQ from "@/components/reusableComponents/FAQ";
import {
  dataTableHospitality,
  faqsHospitality,
  slidesHospitality,
  testimonialsHospitality,
  uspDataHospitality,
  videoHighlightDataHospitality,
} from "@/utils/data";
import Bootcamps from "@/components/reusableComponents/Hero";
import Script from "next/script";

export const metadata = {
  title: "Hospitality Compliance: The Hidden Cost of Guest Experience",
  description:
    "Workforce Limited offers specialized compliance for restaurants, hotels, cafés, and cloud kitchens. We manage EPF, ESIC, GST, and POSH compliance to protect your brand and ensure legal continuity across all locations.",
  keywords:
    "hospitality compliance, restaurant compliance, hotel compliance, EPF ESIC compliance, POSH compliance hospitality, labor law for hotels, GST compliance for restaurants, Workforce Limited compliance",
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-consultant-hospitality-bangalore",
  },
  openGraph: {
    title: "Hospitality Compliance: The Hidden Cost of Guest Experience",
    description:
      "End-to-end compliance for hospitality businesses — EPF, ESIC, GST, POSH & labor law management for hotels, restaurants, and cloud kitchens.",
    url: "https://epfdesk.com/pf-esic-consultant-hospitality-bangalore",
    type: "website",
    locale: "en_IN",
    siteName: "EPFdesk",
    images: [
      {
        url: "https://epfdesk.com/images/hospitality-compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hospitality Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Compliance: The Hidden Cost of Guest Experience",
    description:
      "Expert compliance for the hospitality industry — hotels, restaurants, and cafés. Ensure full legal readiness and zero penalties.",
    images: ["https://epfdesk.com/images/hospitality-compliance-twitter.jpg"],
  },
};

function Hero() {
  return (
    <Bootcamps
      title="Hospitality Compliance"
      description="One Execution Infrastructure for Hotels, Restaurants, Cafés, Bars, Pubs & Cloud Kitchens
Workforce is India’s only compliance execution system built for the hospitality industry.
We manage every registration, license, inspection, renewal, and closure — across all 29 states
and 1,000+ local authorities."
    />
  );
}

const Hospitality = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Hospitality Compliance Services",
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
              name: "Comprehensive Hospitality Compliance Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EPF & ESIC Compliance for Hotel & Restaurant Staff",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "GST & RCM Compliance for Hospitality Businesses",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "POSH Act Compliance for Staff & Management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Shops & Establishments Act Registration & Renewal",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Multi-Location License & Inspection Management",
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
                name: "What compliance challenges do hospitality businesses face?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Restaurants and hotels face complex compliance across EPF, ESIC, POSH, GST, and local labor laws. Multi-location operations increase the risk of missed renewals and penalties.",
                },
              },
              {
                "@type": "Question",
                name: "How does Workforce Limited help the hospitality industry?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide end-to-end compliance execution — registration, license renewal, inspection handling, and filing across 29 states and 1,000+ authorities for hotels, cafés, and restaurant chains.",
                },
              },
              {
                "@type": "Question",
                name: "Can Workforce manage compliance across multiple outlets or franchises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We centralize compliance across all outlets, ensuring zero missed filings or renewals with unified tracking and real-time dashboards.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <VideoHighlight data={videoHighlightDataHospitality} />
      <ComplianceTable data={dataTableHospitality} />
      <Questioning uspData={uspDataHospitality} />
      <Bubbles />
      <Slider slides={slidesHospitality} />
      <Testimonials testimonials={testimonialsHospitality} />
      <Upskills
        title="What Changes When Compliance Becomes Infrastructure"
        paragraphs={[
          "Workforce turns regulation into infrastructure — predictable, programmable, perpetual. Every filing, inspection, and renewal is executed through one pane of glass across all departments and entities.",
          "0 missed renewals. 30–60% faster approvals. A unified compliance control plane that powers legal continuity as a product feature.",
          "From mapping Acts and assembling documentation to executing and sustaining renewals automatically, Workforce converts every compliance into a workflow that runs itself.",
          "Build without fear. We handle the law.",
        ]}
      />

      <FAQ faqs={faqsHospitality} />
      <Footer />
    </>
  );
};

export default Hospitality;
