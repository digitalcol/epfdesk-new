"use client";

import React from "react";

export default function ({cardsData}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001f1f] mb-14 leading-tight">
          {cardsData?.subTitle}
        </h2>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData?.cards?.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.2rem] shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-start text-left"
            >
              {/* Step number */}
              <div className="flex items-center justify-center w-[91px] h-[100px] rounded-[12px] bg-[#eff5ce] mb-5">
                <span className="text-[#99ad15] text-[4rem] font-bold">
                  {step.number}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-[#001f1f] text-[1.4rem] leading-[1.1] font-semibold mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6a7878] text-base leading-[1.3]">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
