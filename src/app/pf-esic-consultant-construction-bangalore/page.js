// import Bubbles from "@/components/reusableComponents/Bubbles";
// import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
// import FAQ from "@/components/reusableComponents/FAQ";
// import Footer from "@/components/reusableComponents/Footer";
// import Bootcamps from "@/components/reusableComponents/Hero";
// import Questioning from "@/components/reusableComponents/Questioning";
// import ContentSlider from "@/components/reusableComponents/Slider";
// import Upskills from "@/components/reusableComponents/Upskills";
// import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
// import {
//   dataTableConstruction,
//   faqsConstruction,
//   slidesConstruction,
//   uspDataConstruction,
//   videoHighlightDataConstruction,
// } from "@/utils/data";
// import React from "react";

// export const metadata = {
//   title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
//   description:
//     "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC.",
//   alternates: { canonical: "https://epfdesk.com/construction" },
//   openGraph: {
//     title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
//     url: "https://epfdesk.com/construction",
//   },
// };

// function Hero() {
//   return (
//     // <section
//     //   className="relative h-[90vh] flex items-center justify-center text-white"
//     //   style={{
//     //     backgroundImage:
//     //       'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg")',
//     //     backgroundSize: "cover",
//     //     backgroundPosition: "center",
//     //   }}
//     // >
//     //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
//     //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//     //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
//     //       Construction Compliance: Master BOCW, Fuel Project Continuity & Safety
//     //     </h1>
//     //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
//     //       Workforce Limited offers expert compliance for Construction Companies.
//     //       Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety.
//     //       Mitigate risk, from SME to MNC.
//     //     </p>
//     //   </div>
//     // </section>
//     <Bootcamps
//       title="Construction Compliance"
//       description={
//         "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC."
//       }
//     />
//   );
// }

// const Construction = () => {
//   return (
//     <>
//       <Hero />
//       <VideoHighlight data={videoHighlightDataConstruction} />
//       <ComplianceTable data={dataTableConstruction} />
//       <Questioning uspData={uspDataConstruction} />
//       <Bubbles />
//       <ContentSlider slides={slidesConstruction} />

//       <Upskills
//         title="Transform Your Projects & Compliance Today"
//         paragraphs={[
//           "Our expertise is built on deep legal knowledge and dedicated processes specific to the contract-based construction industry.",
//           "Our proactive monitoring significantly reduces the risk of project delays or stop-work orders caused by compliance lapses.",
//           "Ready to master the complexities of Construction compliance, eliminate project risks, and secure your contracts with legal certainty?",
//         ]}
//       />
//       <FAQ faqs={faqsConstruction} />
//       <Footer />
//     </>
//   );
// };

// export default Construction;

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
  dataTableConstruction,
  faqsConstruction,
  slidesConstruction,
  uspDataConstruction,
  videoHighlightDataConstruction,
} from "@/utils/data";
import React from "react";
import Script from "next/script";

export const metadata = {
  title:
    "Construction Compliance: Master BOCW, Fuel Project Continuity & Safety - EPF Desk",
  description:
    "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC.",
  keywords:
    "construction compliance, BOCW compliance, CLRA registration, construction ESIC, construction EPF, GST RCM construction, labour law audit, project safety compliance",
  alternates: {
    canonical: "https://epfdesk.com/pf-esic-consultant-construction-bangalore",
  },
  openGraph: {
    title: "Construction Compliance: Master BOCW, Fuel Project Continuity & Safety",
    description:
      "Full-scope construction compliance management: BOCW, CLRA, EPF, ESIC, and GST RCM. Ensure project safety, cost control, and legal readiness.",
    url: "https://epfdesk.com/pf-esic-consultant-construction-bangalore",
    type: "website",
    locale: "en_IN",
    siteName: "EPF Desk",
    images: [
      {
        url: "https://epfdesk.com/images/construction-compliance-og.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Compliance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Compliance | BOCW, CLRA, EPF, ESIC, GST RCM",
    description:
      "Comprehensive construction compliance for projects — from BOCW to GST RCM. Expert support for project safety and statutory risk reduction.",
    images: ["https://epfdesk.com/images/construction-compliance-twitter.jpg"],
  },
};

function Hero() {
  return (
    <Bootcamps
      title="Construction Compliance"
      description="Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC."
    />
  );
}

const Construction = () => {
  return (
    <>
      {/* Schema Markup: Service */}
      <Script
        id="construction-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Construction Compliance Services",
            provider: {
              "@type": "ProfessionalService",
              name: "EPF Desk",
              url: "https://epfdesk.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              telephone: "+91-9945933333",
            },
            areaServed: { "@type": "Country", name: "India" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "End-to-End Construction Compliance Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BOCW Cess Compliance & Labour Welfare",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "CLRA Licensing & Contractor Management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "EPF & ESIC Compliance for Construction Sites",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "GST Reverse Charge Mechanism (RCM) Management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Safety & Legal Risk Audits for Projects",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Schema Markup: FAQ */}
      <Script
        id="construction-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is included in construction compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Construction compliance includes BOCW Cess registration, CLRA licensing, EPF & ESIC compliance, GST RCM filing, labour law audit support, and project safety documentation.",
                },
              },
              {
                "@type": "Question",
                name: "Why is BOCW compliance important for construction companies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BOCW compliance ensures worker welfare, legal project execution, and prevents penalties or site shutdowns due to non-compliance with labour laws.",
                },
              },
              {
                "@type": "Question",
                name: "Do you handle compliance for contractors and subcontractors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide comprehensive compliance management covering principal employers, contractors, and subcontractors under CLRA, EPF, ESIC, and BOCW frameworks.",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Content */}
      <Hero />
      <VideoHighlight data={videoHighlightDataConstruction} />
      <ComplianceTable data={dataTableConstruction} />
      <Questioning uspData={uspDataConstruction} />
      <Bubbles />
      <ContentSlider slides={slidesConstruction} />
      <Upskills
        title="Transform Your Projects & Compliance Today"
        paragraphs={[
          "Our expertise is built on deep legal knowledge and dedicated processes specific to the contract-based construction industry.",
          "Our proactive monitoring significantly reduces the risk of project delays or stop-work orders caused by compliance lapses.",
          "Ready to master the complexities of Construction compliance, eliminate project risks, and secure your contracts with legal certainty?",
        ]}
      />
      <FAQ faqs={faqsConstruction} />
      <Footer />
    </>
  );
};

export default Construction;
