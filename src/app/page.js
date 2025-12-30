import Script from "next/script";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Hero from "@/components/hero";
import LargeCardSlider from "@/components/largeCards";
import LimitedCapacitySection from "@/components/limitedCapacitySection";
import MazeEscapeSection from "@/components/mazeEscapeSection";
import StackedCards from "@/components/scrollCards";
import ServiceCards from "@/components/serviceCards";
import CustomerCarousel from "@/components/customerCarousel";
import { largeCardsLanding, slidesLandingPage } from "@/utils/data";
import { Toaster } from "react-hot-toast";

/* ===========================
   METADATA
=========================== */
export const metadata = {
  title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
  description:
    "EPFDesk.com frees your HR and Finance teams to focus on growth while we manage EPF & ESIC compliance across India.",
  alternates: { canonical: "https://epfdesk.com" },
  openGraph: {
    title: "EPF Desk | Simplifying EPF Compliance for Businesses in India",
    description:
      "India’s trusted EPF & ESIC compliance platform serving 800+ districts.",
    url: "https://epfdesk.com",
    siteName: "EPFDesk",
    images: [
      {
        url: "https://epfdesk.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EPFDesk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://epfdesk.com/images/logo.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <>
      {/* ================== ORGANIZATION SCHEMA ================== */}
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EPFDesk",
          alternateName: "EPF Desk India",
          url: "https://epfdesk.com",
          logo: "https://epfdesk.com/images/logo.jpg",
          description:
            "India's leading EPF and ESIC compliance platform serving 800+ districts.",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-9945933333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          ],

          sameAs: [
            "https://www.facebook.com/epfdesk",
            "https://www.linkedin.com/company/epfdesk",
            "https://twitter.com/epfdesk",
          ],
        })}
      </Script>

      {/* ================== WEBSITE SCHEMA ================== */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "EPFDesk",
          url: "https://epfdesk.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://epfdesk.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {/* ================== PROFESSIONAL SERVICE SCHEMA (CRITICAL FIX) ================== */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",

          name: "EPFDesk - EPF & ESIC Compliance Services",
          url: "https://epfdesk.com",
          image: "https://epfdesk.com/images/logo.jpg",

          description:
            "Comprehensive EPF registration, ESIC compliance, payroll structuring, and labour law advisory services across India.",

          telephone: "+91-9945933333",
          priceRange: "₹₹₹",

          address: {
            "@type": "PostalAddress",
            streetAddress: "Church Street",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560001",
            addressCountry: "IN",
          },

          areaServed: {
            "@type": "Country",
            name: "India",
          },

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "250",
          },

          sameAs: [
            "https://www.facebook.com/epfdesk",
            "https://www.linkedin.com/company/epfdesk",
            "https://twitter.com/epfdesk",
          ],
        })}
      </Script>

      {/* ================== GOOGLE ANALYTICS ================== */}
      <Script id="homepage-meta" strategy="afterInteractive">
        {`
    if (typeof gtag === 'function') {
      gtag('event', 'homepage_view', {
        page_type: 'homepage'
      });
    }
  `}
      </Script>
      {/* ================== FAQ SCHEMA ================== */}
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services does EPFDesk provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk provides end-to-end EPF and ESIC compliance services including registration, monthly filings, payroll structuring, audit handling, inspection defence, and labour law advisory for businesses across India.",
              },
            },
            {
              "@type": "Question",
              name: "Which industries does EPFDesk support?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "EPFDesk supports manufacturing units, MSMEs, IT companies, startups, construction firms, logistics operators, educational institutions, hospitals, and service-sector employers across multiple industries.",
              },
            },
            {
              "@type": "Question",
              name: "Does EPFDesk provide EPF and ESIC compliance across India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk offers EPF and ESIC compliance support across India, covering more than 800 districts and multiple Regional Provident Fund and ESIC offices.",
              },
            },
            {
              "@type": "Question",
              name: "Can EPFDesk handle EPF and ESIC inspections or audits?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk assists employers with EPF and ESIC inspections, audit preparation, document submissions, inspection responses, and compliance rectification.",
              },
            },
            {
              "@type": "Question",
              name: "Is EPFDesk suitable for small businesses and startups?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. EPFDesk works with startups, MSMEs, and growing businesses, providing scalable compliance solutions aligned with labour laws and statutory requirements.",
              },
            },
          ],
        })}
      </Script>
      <Script id="conversion-tracking-global" strategy="afterInteractive">
        {`
    // Ensure DOM is ready
    document.addEventListener('DOMContentLoaded', function () {

      // Phone click tracking
      document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.addEventListener('click', () => {
          if (typeof gtag === 'function') {
            gtag('event', 'phone_click', {
              event_category: 'conversion',
              event_label: el.getAttribute('href'),
              value: 5
            });
          }
        });
      });

      // WhatsApp click tracking
      document
        .querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]')
        .forEach(el => {
          el.addEventListener('click', () => {
            if (typeof gtag === 'function') {
              gtag('event', 'whatsapp_click', {
                event_category: 'conversion',
                event_label: window.location.pathname,
                value: 5
              });
            }
          });
        });

      // Form submission tracking
      document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', () => {
          if (typeof gtag === 'function') {
            gtag('event', 'form_submission', {
              event_category: 'lead',
              event_label: window.location.pathname,
              value: 10
            });
          }
        });
      });

      // CTA click tracking
      document.querySelectorAll('button, a[class*="cta"]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (typeof gtag === 'function') {
            gtag('event', 'cta_click', {
              event_category: 'engagement',
              event_label: btn.textContent.trim()
            });
          }
        });
      });

      // Scroll depth tracking (75%)
      let scrollTracked = false;
      window.addEventListener('scroll', () => {
        if (!scrollTracked && (window.scrollY / document.body.scrollHeight) > 0.75) {
          scrollTracked = true;
          if (typeof gtag === 'function') {
            gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: '75%'
            });
          }
        }
      });

    });
  `}
      </Script>

      {/* ================== UI ================== */}
      <Toaster position="top-center" />

      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsLanding} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ServiceCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <StackedCards />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CustomerCarousel slides={slidesLandingPage} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LimitedCapacitySection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <MazeEscapeSection />
      </FadeInWhenVisible>
    </>
  );
}
