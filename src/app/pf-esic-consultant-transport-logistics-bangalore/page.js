import {
  dataTableTransport,
  faqsTransport,
  slidesTransport,
  uspDataTransport,
  videoHighlightDataTransport,
} from "@/utils/data";
import React from "react";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import Footer from "@/components/reusableComponents/Footer";
import Questioning from "@/components/reusableComponents/Questioning";
import Bubbles from "@/components/reusableComponents/Bubbles";
import ContentSlider from "@/components/reusableComponents/Slider";
import Upskills from "@/components/reusableComponents/Upskills";
import FAQ from "@/components/reusableComponents/FAQ";
import Bootcamps from "@/components/reusableComponents/Hero";
import Script from "next/script";

export const metadata = {
  title:
    "Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk",
  description:
    "Workforce Limited offers expert compliance for Transport & Logistics companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and multi-state labor laws. Mitigate risk, ensure zero disruption.",
  alternates: { canonical: "https://epfdesk.com/pf-esic-consultant-transport-logistics-bangalore" },
  openGraph: {
    title:
      "Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk",
    description:
      "Workforce Limited offers expert compliance for Transport & Logistics companies. Ensure compliance with MTWA, GST RCM (GTA), EPF/ESIC for drivers, and multi-state labor laws.",
    url: "https://epfdesk.com/pf-esic-consultant-transport-logistics-bangalore",
    siteName: "EPFDesk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk",
    description:
      "Expert compliance for India's transport & logistics sector — MTWA, GST RCM (GTA), EPF, ESIC & mobile workforce regulations.",
  },
};

function Hero() {
  return (
    <Bootcamps
      title={"Transport & Warehousing Compliance"}
      description={`Workforce Limited offers expert compliance for Transport & Logistics
          companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and
          multi-state labor laws. Mitigate risk, ensure zero disruption.`}
    />
  );
}

const Transport = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Workforce Limited",
        url: "https://epfdesk.com",
        logo: "https://epfdesk.com/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/workforcelimited/",
          "https://x.com/epfdesk",
          "https://www.facebook.com/epfdesk",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9945933333",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://epfdesk.com/pf-esic-consultant-transport-logistics-bangalore",
        url: "https://epfdesk.com/pf-esic-consultant-transport-logistics-bangalore",
        name: "Transport & Warehousing Compliance: Mastering MTWA, GST RCM & Mobile Workforce Risk",
        description:
          "Workforce Limited offers expert compliance for Transport & Logistics companies. Master MTWA, GST RCM (GTA), EPF/ESIC for drivers, and multi-state labor laws.",
        isPartOf: { "@id": "https://epfdesk.com/#website" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://epfdesk.com/images/transport-cover.jpg",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://epfdesk.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: "https://epfdesk.com/industries",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Transport & Warehousing Compliance",
            item: "https://epfdesk.com/transport",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqsTransport.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return (
    <>
      <Script
        id="transport-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <VideoHighlight data={videoHighlightDataTransport} />
      <ComplianceTable data={dataTableTransport} />
      <Questioning uspData={uspDataTransport} />
      <Bubbles />
      <ContentSlider slides={slidesTransport} />

      <Upskills
        title="Protection for Your Contracts"
        paragraphs={[
          "Our expertise is built on deep legal knowledge and dedicated processes specific to the transport and contract-based service industry.",
          "We go beyond compliance, providing holistic management that safeguards your business and enhances operational efficiency.",
          "Our meticulous processes significantly reduce the risk of client contract termination due to third-party or sub-contractor non-compliance.",
          "Ready to master the complexities of Transport & Warehousing compliance, eliminate contractual risks, and secure your client relationships with legal certainty?",
        ]}
      />
      <FAQ faqs={faqsTransport} />
      <Footer />
    </>
  );
};

export default Transport;
