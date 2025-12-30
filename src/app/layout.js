"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import "./globals.css";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Footer from "@/components/Footer";
import HeroObserver from "@/components/heroObserver";

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
        {/* GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WMNLTE5RKQ"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WMNLTE5RKQ', {
          send_page_view: false
        });
      `,
          }}
        />
      </head>

      <body>
        {hideLayout ? <NavbarIndustry /> : <Navbar />}
        <main>
          {children}
          <Analytics />
        </main>
        {!hideLayout && (
          <FadeInWhenVisible>
            <Footer />
          </FadeInWhenVisible>
        )}
        {hideLayout ? <FloatingCTA /> : <HeroObserver />}
      </body>
    </html>
  );
}
