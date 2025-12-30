"use client";

import React from "react";

export default function EcosystemQuote() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        {/* Quote */}
        <blockquote className="text-[#001f1f] text-[1.625rem] md:text-[2rem] font-medium leading-snug mb-8">
          <span className="text-[#9ca3af] text-4xl align-top mr-1">“</span>
          We [make] one change in{" "}
          <span className="font-semibold">Humaans</span>, and it instantly rolls
          over into the other platforms like Lattice.{" "}
          <span className=" bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-custom font-semibold">
            The integration of Humaans has been really successful
          </span>{" "}
          for us and well received.
          <span className="text-[#9ca3af] text-4xl align-bottom ml-1">”</span>
        </blockquote>

        {/* Author */}
        <div className="mt-8 flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/66f46fd6af2bb4e6261a6ecf_photo-carolina-bardon.webp"
              alt="Carolina Bardon Hagstedt"
              className="object-cover w-full h-full"
            />
            <img
              src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/66f4706af86753b382952781_icon-normative.svg"
              alt="Normative.io"
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full p-[2px] shadow-sm"
            />
          </div>

          <div className="text-left">
            <div className="font-semibold text-[#001f1f] text-base">
              Carolina Bardon Hagstedt
            </div>
            <div className="text-sm text-[#6a7878]">
              VP, People and Talent @ Normative.io
            </div>
          </div>
        </div>
      </div>

      {/* Custom gradient animation */}
      <style jsx global>{`
        :root {
          --step-1: #00a3a3;
          --step-2: #33b88c;
          --step-3: #a9eba9;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-custom {
          background-image: linear-gradient(
            100deg,
            var(--step-1),
            var(--step-2),
            var(--step-3),
            var(--step-2),
            var(--step-1)
          );
          background-size: 200% 200%;
          animation: gradientShift 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
