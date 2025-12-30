"use client";

import { useState } from "react";
import Script from "next/script";

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-16 rounded-2xl">
      <h2 className="text-3xl md:text-[2.6rem] tracking-[-.024em] font-bold mb-12 text-center text-[#001f1f]">
        {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white shadow-md border-[#e0e0e0]"
                  : "bg-[color-mix(in_srgb,#001f1f_4%,transparent)] hover:bg-[#f3f4f6] border-transparent"
              }`}
            >
              {/* Question button */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center px-6 py-5 text-left text-[1rem] font-semibold transition-all duration-300 focus:outline-none ${
                  isOpen ? "text-[#001f1f]" : "text-[#6a7878] hover:text-[#001f1f]"
                }`}
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="text-[1rem] font-medium tracking-[-.024em]">{faq.question}</span>

                {/* ---- Custom Plus-to-Minus Icon (pure CSS) ---- */}
                <span
                  className={`relative w-6 h-6 flex items-center justify-center transform transition-all duration-300 ${
                    isOpen ? "rotate-180 text-[#008272]" : "rotate-0 text-[#001f1f99]"
                  }`}
                >
                  {/* horizontal bar (always visible) */}
                  <span
                    className={`absolute block w-3 h-0.5 bg-current transition-colors duration-300`}
                    aria-hidden="true"
                  />
                  {/* vertical bar (scales to 0 when open) */}
                  <span
                    className={`absolute block h-3 w-0.5 bg-current transform transition-transform duration-300 origin-center ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                    aria-hidden="true"
                  />
                </span>
                {/* ---------------------------------------------- */}
              </button>

              {/* Answer */}
              <div
                id={`faq-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[500px] pb-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-[#334155] text-base leading-[1.4]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
