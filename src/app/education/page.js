import React from "react";
import VideoHighlight from "@/components/reusableComponents/VideoHighlight";
import ComplianceTable from "@/components/reusableComponents/ComplianceTable";
import Questioning from "@/components/reusableComponents/Questioning";
import ContentSlider from "@/components/reusableComponents/Slider";
import Testimonials from "@/components/reusableComponents/Testimonial";
import FAQ from "@/components/reusableComponents/FAQ";
import Footer from "@/components/reusableComponents/Footer";
import Upskills from "@/components/reusableComponents/Upskills";
import Bubbles from "@/components/reusableComponents/Bubbles";
import {
  dataTableEducation,
  faqsEducation,
  slidesEducation,
  testimonialsEducation,
  uspDataEducation,
  videoHighlightDataEducation,
} from "@/utils/data";
import Bootcamps from "@/components/reusableComponents/Hero";

export const metadata = {
  title: `Educational Institutions Compliance: Protecting Your Reputation, Empowering Your Staff`,
  description:
    "Workforce Limited offers specialized compliance solutions for schools & colleges. We handle EPF, ESIC, POSH & labor laws for faculty and staff, ensuring institutional integrity and protecting your reputation",
  alternates: { canonical: "https://epfdesk.com/education" },
  openGraph: {
    title: `Educational Institutions Compliance: Protecting Your Reputation, Empowering Your Staff`,
    url: "https://epfdesk.com/education",
  },
};

function Hero() {
  return (
    // <section
    //   className="relative h-[90vh] flex items-center justify-center text-white"
    //   style={{
    //     backgroundImage:
    //       'url("https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg")',
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
    //   <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    //     <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
    //       Educational Institutions Compliance: Protecting Your Reputation,
    //       Empowering Your Staff
    //     </h1>
    //     <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
    //       Workforce Limited offers specialized compliance solutions for schools
    //       & colleges. We handle EPF, ESIC, POSH & labor laws for faculty and
    //       staff, ensuring institutional integrity and protecting your
    //       reputation.
    //     </p>
    //   </div>
    // </section>
    <Bootcamps
      title={"Educational Institutions Compliance"}
      description={
        "Workforce Limited offers specialized compliance solutions for schools & colleges. We handle EPF, ESIC, POSH & labor laws for faculty and staff, ensuring institutional integrity and protecting your reputation."
      }
    />
  );
}

const Education = () => {
  return (
    <>
      <Hero />
      <VideoHighlight data={videoHighlightDataEducation} />
      <ComplianceTable data={dataTableEducation} />
      <Questioning uspData={uspDataEducation} />
      <Bubbles />
      <ContentSlider slides={slidesEducation} />
      <Testimonials testimonials={testimonialsEducation} />
      <Upskills
        title="Secure Your Spot: Limited Onboarding"
        paragraphs={[
          "Our dedication to quality means we can only partner with a select number of new educational institutions each month. Secure your position for a seamless transition now.",
        ]}
      />
      <FAQ faqs={faqsEducation} />
      <Footer />
    </>
  );
};

export default Education;
