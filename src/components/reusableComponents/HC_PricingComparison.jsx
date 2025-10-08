// "use client";
// import React from "react";

// export default function HC_PricingComparison() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//           The Math Is Simple
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* DIY */}
//           <div className="rounded-2xl border bg-white p-8 shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold text-red-600 mb-4">
//               Option A: The DIY Headache
//             </h3>
//             <ul className="space-y-3 text-gray-600">
//               <li>👤 1 HR person: ₹40,000/month</li>
//               <li>⚠️ 1 penalty/year: ₹50,000 avg</li>
//               <li>📣 Guest complaint: Immeasurable</li>
//               <li>💸 Annual cost: ₹5.3L + brand risk</li>
//             </ul>
//           </div>

//           {/* Workforce */}
//           <div className="rounded-2xl border bg-gradient-to-br from-green-50 to-white p-8 shadow-lg hover:shadow-xl transition">
//             <h3 className="text-2xl font-semibold text-green-700 mb-4">
//               Option B: Workforce Limited
//             </h3>
//             <ul className="space-y-3 text-gray-700">
//               <li>✅ All compliance managed: ₹15,000/month</li>
//               <li>✅ Penalties: ₹0</li>
//               <li>✅ 40 hours saved/month</li>
//               <li>✅ Annual cost: ₹1.8L with guarantee</li>
//             </ul>
//           </div>
//         </div>
//         <p className="mt-8 text-center text-xl font-bold text-green-600">
//           🎉 Save ₹3.5L/year + permanently protect your brand
//         </p>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { CheckCircleIcon, ExclamationTriangleIcon, UserIcon, MegaphoneIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

export default function HC_PricingComparison() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          The Math Is Simple
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Compare the hidden costs of managing compliance yourself vs letting Workforce Limited handle everything for you.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* DIY */}
          <div className="rounded-2xl border border-red-100 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-red-50 text-red-600 rounded-full">
              Not Recommended
            </span>
            <h3 className="text-2xl font-semibold text-red-600 mb-6">
              Option A: The DIY Headache
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <UserIcon className="h-6 w-6 text-red-400" />
                1 HR person: ₹40,000/month
              </li>
              <li className="flex items-center gap-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />
                1 penalty/year: ₹50,000 avg
              </li>
              <li className="flex items-center gap-3">
                <MegaphoneIcon className="h-6 w-6 text-red-400" />
                Guest complaint: Immeasurable
              </li>
              <li className="flex items-center gap-3">
                <CurrencyRupeeIcon className="h-6 w-6 text-red-400" />
                Annual cost: ₹5.3L + brand risk
              </li>
            </ul>
          </div>

          {/* Workforce */}
          <div className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1">
            <span className="absolute -top-3 left-6 px-4 py-1 text-sm font-semibold bg-green-600 text-white rounded-full shadow">
              Best Value
            </span>
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Option B: Workforce Limited
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                All compliance managed: ₹15,000/month
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                Penalties: ₹0
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                40 hours saved/month
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                Annual cost: ₹1.8L with guarantee
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Message */}
        <p className="mt-12 text-center text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
          🎉 Save ₹3.5L/year + permanently protect your brand
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
