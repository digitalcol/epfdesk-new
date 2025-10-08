"use client";
import React from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export default function HC_CrisisStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 p-8 rounded-2xl shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <HiOutlineExclamationTriangle className="text-red-500 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">
              The ₹47,000 Mistake That Shuts You Down
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A Goa restaurant was sealed for 72 hours due to an expired license—
            ₹47,000 in penalties and ₹3L in lost revenue. One small error can
            trigger cascading audits across your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
