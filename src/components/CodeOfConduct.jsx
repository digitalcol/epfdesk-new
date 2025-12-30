"use client";

import React from "react";

export default function CommunityGuidelines({ sections }) {
  return (
    <div className="bg-white">
      {sections.map((section, i) => (
        <section key={i} className="py-20 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
              <h2 className="text-3xl md:text-4xl font-bold text-[#001f1f]">
                {section.title}
              </h2>
              <p className="text-[#374151] text-base leading-[1.3]">
                {section.description}
              </p>
              {section.note && (
                <p className="text-sm text-[#334155] leading-relaxed border-l-4 border-[#008272] pl-3">
                  {section.note}
                </p>
              )}
              {section.link && (
                <a
                  href={section.link.href}
                  className="text-[#008272] font-semibold hover:underline"
                >
                  {section.link.label}
                </a>
              )}
            </div>

            {/* Right column */}
            <div className="lg:col-span-7 space-y-6">
              {section.cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl p-6 transition-all duration-300 hover:shadow-md border-gray-300`}
                >
                  <h3 className="text-[1.4em] font-semibold text-[#001f1f] mb-3">
                    {card.title}
                  </h3>
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-lg mb-4"
                    />
                  )}
                  <div className="text-[#001f1f9c] text-base font-normal leading-[1.4]">
                    {card.content || card.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
