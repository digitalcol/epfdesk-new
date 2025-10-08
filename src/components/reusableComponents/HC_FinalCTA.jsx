"use client";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function HC_FinalCTA() {
  const phone = "919980511980";
  const waText = encodeURIComponent(
    "Hello EPFDesk,\n\nI’d like to know more about your compliance services.\n\nCompany Name:\nNo. of Employees:\nMy Role:\nAreas of interest:"
  );

  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Secure Your Spot: Limited Onboarding
        </h2>
        <p className="mt-4 text-lg text-white/90">
          We partner with a select number of hospitality businesses each month.
          Lock your slot for a seamless transition now.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${phone}?text=${waText}`}
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl shadow-lg hover:bg-gray-100 transition"
          >
            <IoLogoWhatsapp className="text-green-500 text-xl" />
            Get a Free Audit Now
          </a>
          <a
            href="mailto:hello@epfdesk.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 rounded-2xl shadow hover:bg-white/10 transition"
          >
            Start Protection Today
          </a>
        </div>
      </div>
    </section>
  );
}
