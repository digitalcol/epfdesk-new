import Navbar from "@/components/Navbar";
import "./globals.css";
import FadeInWhenVisible from "@/components/fadeInWhenVisible";
import Footer from "@/components/Footer";
import HeroObserver from "@/components/heroObserver";

export const metadata = {
  title: "EPFdesk",
  description: "EPF Compliance & Payroll Services in India",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EPFdesk",
    "url": "https://www.epfdesk.com",
    "logo": "https://www.epfdesk.com/images/EPFdesk.svg",
    "sameAs": [
      "https://www.instagram.com/epfdesk/",
      "https://x.com/epfdesk"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <FadeInWhenVisible>
          <Footer />
        </FadeInWhenVisible>
        <HeroObserver />
      </body>
    </html>
  );
}
