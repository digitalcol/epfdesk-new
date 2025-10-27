// import Navbar from "@/components/Navbar";
// import "./globals.css";
// import FadeInWhenVisible from "@/components/fadeInWhenVisible";
// import Footer from "@/components/Footer";
// import HeroObserver from "@/components/heroObserver";

// export const metadata = {
//   title: "EPF Desk | Expert EPF Compliance & Payroll Services in India",
//   description:
//     "Simplify PF compliance with EPF Desk. We handle monthly filings, inspections, challans, and payroll processing for businesses across India.",
// };

// export default function RootLayout({ children }) {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ProfessionalService",
//     name: "EPFdesk",
//     description: "EPF and Labor Compliance Management for Indian Businesses",
//     serviceType: "Compliance Management",
//     areaServed: "India",
//     hasOfferCatalog: {
//       "@type": "OfferCatalog",
//       name: "EPF Compliance Services",
//       itemListElement: [
//         {
//           "@type": "Offer",
//           itemOffered: { "@type": "Service", name: "EPF Management" },
//         },
//         {
//           "@type": "Offer",
//           itemOffered: { "@type": "Service", name: "ESIC Compliance" },
//         },
//         {
//           "@type": "Offer",
//           itemOffered: { "@type": "Service", name: "POSH Training" },
//         },
//       ],
//     },
//   };

//   return (
//     <html lang="en">
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </head>
//       <body>
//         <Navbar />
//         <main>{children}</main>
//         <FadeInWhenVisible>
//           <Footer />
//         </FadeInWhenVisible>
//         <HeroObserver />
//       </body>
//     </html>
//   );
// }

// "use client";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";
// import "./globals.css";
// import FadeInWhenVisible from "@/components/fadeInWhenVisible";
// import Footer from "@/components/Footer";
// import HeroObserver from "@/components/heroObserver";
// import LocationBanner from "@/components/LocationBanner";
// import { Analytics } from "@vercel/analytics/react";
// import NavbarNew from "@/components/NavbarNew";
// import Script from "next/script";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
  
//   const hiddenRoutes = ["/hospitality", "/education","/manufacturing","/facility","/construction","/transport","/epfBangalore"];
//  const showNavbarNew = pathname === "/epfBangalore";
//   const hideLayout = hiddenRoutes.some((route) =>
//     pathname.startsWith(route)
//   );

//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics Script */}
//         <Script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
//         />
//         <Script id="google-analytics">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-WMNLTE5RKQ');
//           `}
//         </Script>
//       </head>
//       <body>
//         {!hideLayout && <Navbar />}
//          {showNavbarNew && <NavbarNew />}
//         <main>
//           {children}
//           <Analytics />
//         </main>
//         {/* <LocationBanner /> */}
//         {!hideLayout && (
//           <FadeInWhenVisible>
//             <Footer />
//           </FadeInWhenVisible>
//         )}
//         {!hideLayout && <HeroObserver />}
//       </body>
//     </html>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import "./globals.css";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Footer from "@/components/Footer";
import HeroObserver from "@/components/heroObserver";
import LocationBanner from "@/components/LocationBanner";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import NavbarIndustry from "@/components/reusableComponents/NavbarIndustry";
import FloatingCTA from "@/components/reusableComponents/FloatingCTAIndustry";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/pf-esic-consultant-construction-bangalore",
    "/pf-esic-consultant-education-sector-bangalore",
    "/pf-esic-consultant-facility-management-bangalore",
    "/pf-esic-consultant-hospitality-bangalore",
    "/pf-esic-consultant-manufacturing-bangalore",
    "/pf-esic-consultant-transport-logistics-bangalore",
  ];

  const hideLayout = hiddenRoutes.some((route) => pathname.startsWith(route));

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMNLTE5RKQ');
          `}
        </Script>
      </head>
      <body>
        {/* {!hideLayout && <Navbar />} */}
        {hideLayout ? <NavbarIndustry /> : <Navbar />}
        <main>
          {children}
          <Analytics />
        </main>
        {/* <LocationBanner /> */}
        {!hideLayout && (
          <FadeInWhenVisible>
            <Footer />
          </FadeInWhenVisible>
        )}
        {/* {!hideLayout && <HeroObserver />} */}
        {hideLayout ? <FloatingCTA /> : <HeroObserver />}
      </body>
    </html>
  );
}
