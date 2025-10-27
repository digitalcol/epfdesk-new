// "use client";
// import React, { useEffect } from "react";

// const HeroSection = ({ slide, city, slug, data }) => {
//   useEffect(() => {
//     console.log("HeroSection props:", { city, slug, data });
//   }, [city, slug, data]);

//   const formatSlug = (slug) =>
//     slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//   const { gradientClass, icon, title, subtitle } = slide;
//   useEffect(() => {
//     data;
//   }, []);
//   return (
//     <section
//       className={`relative min-h-screen flex items-center justify-center overflow-hidden animate-gradientShift`}
//       style={{
//         backgroundImage: gradientClass,
//         backgroundSize: "200% 200%",
//         backgroundPosition: "0% 50%",
//       }}
//     >
//       {/* Floating Background Shapes */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden hero-bg-animation">
//         <div className="floating-shape circle left-[10%] w-20 h-20"></div>
//         <div className="floating-shape square left-[20%] w-28 h-28"></div>
//         <div className="floating-shape circle left-[70%] w-16 h-16"></div>
//         <div className="floating-shape square left-[80%] w-24 h-24"></div>
//         <div className="floating-shape triangle left-[50%]"></div>
//         <div className="floating-shape triangle left-[30%]"></div>
//       </div>

//       {/* Particles */}
//       <div className="particle-system absolute top-0 left-0 w-full h-full z-10">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${(i + 1) * 10}%`,
//               animationDelay: `${(i % 4) * 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="hero-content relative z-20 text-center text-white px-6 max-w-4xl">
//         <div className="hero-icon-massive mx-auto mb-10">{icon}</div>
//         <h1 className="hero-title-massive">{title}</h1>
//         <p className="hero-subtitle-massive mb-8">{subtitle}</p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import React, { useEffect, useMemo } from "react";

const HeroSection = ({ slide, city, slug, data }) => {
  useEffect(() => {
    console.log("HeroSection props:", { city, slug, data });
  }, [city, slug, data]);

  // ✅ Pick display data (prefer page-specific `data`, fallback to slide)
  const { gradientClass, icon, title: slideTitle, subtitle: slideSubtitle } = slide;

  const displayTitle = useMemo(() => {
    if (data?.title) return data.title;
    if (slug?.includes("pf")) return `PF Consultants in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    if (slug?.includes("esic")) return `ESIC Consultants in ${city.charAt(0).toUpperCase() + city.slice(1)}`;
    return slideTitle;
  }, [data, city, slug, slideTitle]);

  const displaySubtitle = useMemo(() => {
    if (data?.description) return data.description;
    if (slug?.includes("pf"))
      return `End-to-end PF registration and compliance management for ${city}.`;
    if (slug?.includes("esic"))
      return `Comprehensive ESIC compliance services for ${city}.`;
    return slideSubtitle;
  }, [data, city, slug, slideSubtitle]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden animate-gradientShift"
      style={{
        backgroundImage: gradientClass,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 50%",
      }}
    >
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden hero-bg-animation">
        <div className="floating-shape circle left-[10%] w-20 h-20"></div>
        <div className="floating-shape square left-[20%] w-28 h-28"></div>
        <div className="floating-shape circle left-[70%] w-16 h-16"></div>
        <div className="floating-shape square left-[80%] w-24 h-24"></div>
        <div className="floating-shape triangle left-[50%]"></div>
        <div className="floating-shape triangle left-[30%]"></div>
      </div>

      {/* Particles */}
      <div className="particle-system absolute top-0 left-0 w-full h-full z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${(i % 4) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content relative z-20 text-center text-white px-6 max-w-4xl">
        {icon && <div className="hero-icon-massive mx-auto mb-10">{icon}</div>}
        <h1 className="hero-title-massive">{displayTitle}</h1>
        <p className="hero-subtitle-massive mb-8">{displaySubtitle}</p>
        {/* {data?.contact && (
          <p className="mt-4 text-sm text-gray-200">
            Contact: <span className="font-semibold">{data.contact}</span>
          </p>
        )} */}
      </div>
    </section>
  );
};

export default HeroSection;

