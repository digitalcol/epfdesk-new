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

export const metadata = {
  title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
  description:
    "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC.",
  alternates: { canonical: "https://epfdesk.com/construction" },
  openGraph: {
    title: `Construction Compliance: Master BOCW, Fuel Project Continuity & Safety`,
    url: "https://epfdesk.com/construction",
  },
};

function Hero() {
  return (
    // <section
    //   className="relative h-[90vh] flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage:
    //       'url("https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
    //       Construction Compliance: Master BOCW, Fuel Project Continuity & Safety
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
    //       Workforce Limited offers expert compliance for Construction Companies.
    //       Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety.
    //       Mitigate risk, from SME to MNC.
    //     </p>
    //   </div>
    // </section>
    <Bootcamps
      title="Construction Compliance"
      description={
        "Workforce Limited offers expert compliance for Construction Companies. Master BOCW Cess, CLRA, EPF, ESIC, GST RCM, and Project Safety. Mitigate risk, from SME to MNC."
      }
    />
  );
}

const Construction = () => {
  return (
    <>
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
