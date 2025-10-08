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
  dataTableManufacturing,
  faqsManufacturing,
  slidesManufacturing,
  uspDataManufacturing,
  videoHighlightDataManufacturing,
} from "@/utils/data";
import React from "react";

export const metadata = {
  title: `Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth`,
  description:
    "Workforce Limited offers expert compliance for manufacturing companies in India. Master the Factories Act, CLRA, EPF, ESIC, & Labour Laws. We mitigate risk, from SME 20+ to MNC 10,000+.",
  alternates: { canonical: "https://epfdesk.com/manufacturing" },
  openGraph: {
    title: `Manufacturing Compliance: Master the Factories Act, Fuel Sustainable Growth`,
    url: "https://epfdesk.com/manufacturing",
  },
};

function Hero() {
  return (
    // <section
    //   className="relative h-[90vh] flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage:
    //       'url("https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
    //       Manufacturing Compliance: Master the Factories Act, Fuel Sustainable
    //       Growth
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
    //       Workforce Limited offers expert compliance for manufacturing companies
    //       in India. Master the Factories Act, CLRA, EPF, ESIC, & Labour Laws. We
    //       mitigate risk, from SME 20+ to MNC 10,000+.
    //     </p>
    //   </div>
    // </section>
    <Bootcamps
      title={"Manufacturing Compliance"}
      description={`Workforce Limited offers expert compliance for manufacturing companies
          in India. Master the Factories Act, CLRA, EPF, ESIC, & Labour Laws. We
          mitigate risk, from SME 20+ to MNC 10,000+.`}
    />
  );
}

const Manufacturing = () => {
  return (
    <>
      <Hero />
      <VideoHighlight data={videoHighlightDataManufacturing} />
      <ComplianceTable data={dataTableManufacturing} />
      <Questioning uspData={uspDataManufacturing} />
      <Bubbles />
      <ContentSlider slides={slidesManufacturing} />
      {/* <Testimonials/> */}
      <Upskills
        title="Secure Your Spot: Limited Onboarding"
        paragraphs={[
          "Our commitment to flawless labor compliance is built on profound legal knowledge and meticulous, state-specific processes.",
          "Our dedication to quality means we can only partner with a select number of new manufacturing businesses each month. Secure your position for a seamless transition now.",
          "Our teams comprise labor law attorneys, compliance experts, and HR consultants with deep, hands-on experience in the unique challenges of the manufacturing sector, from factory regulations to contract labor complexities.",
        ]}
      />
      <FAQ faqs={faqsManufacturing} />
      <Footer />
    </>
  );
};

export default Manufacturing;
