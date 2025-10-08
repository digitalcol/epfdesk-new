// "use client";
// import React from "react";
// import { HiCheckCircle } from "react-icons/hi2";

// const services = [
//   {
//     title: "EPF / ESIC for Dynamic Workforce",
//     desc: "From managers to part-time banquet staff—we handle compliance seamlessly despite high attrition.",
//   },
//   {
//     title: "Licenses That Can Shut You Down",
//     desc: "Shop & Establishment registrations and renewals across all locations.",
//   },
//   {
//     title: "POSH Act",
//     desc: "Policies, training & compliant complaint handling to protect brand trust.",
//   },
//   {
//     title: "Other Statutory Requirements",
//     desc: "Minimum Wages, Gratuity, LWF/PT—all managed in one dashboard.",
//   },
// ];

// export default function HC_ServicesGrid() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
//           Exactly What We Handle
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border shadow-md p-6 hover:shadow-lg transition"
//             >
//               <div className="flex gap-3">
//                 <HiCheckCircle className="text-green-500 w-7 h-7" />
//                 <div>
//                   <h3 className="text-lg font-semibold">{s.title}</h3>
//                   <p className="text-gray-600 mt-2">{s.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r text-[1.2rem] from-green-500 to-blue-500 text-white text-center shadow-lg">
//           One Dashboard · Zero Penalties · Sleep at Night
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { HiCheckCircle } from "react-icons/hi2";

const services = [
  {
    title: "EPF / ESIC for Dynamic Workforce",
    desc: "From managers to part-time banquet staff—we handle compliance seamlessly despite high attrition.",
  },
  {
    title: "Licenses That Can Shut You Down",
    desc: "Shop & Establishment registrations and renewals across all locations.",
  },
  {
    title: "POSH Act",
    desc: "Policies, training & compliant complaint handling to protect brand trust.",
  },
  {
    title: "Other Statutory Requirements",
    desc: "Minimum Wages, Gratuity, LWF/PT—all managed in one dashboard.",
  },
];

export default function HC_ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent tracking-tight">
          Exactly What We Handle
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/70 shadow-sm p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-green-400/60"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative flex gap-4 items-start">
                {/* Icon bubble */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-md">
                  <HiCheckCircle className="text-white w-6 h-6" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 px-8 py-5 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white text-lg font-semibold text-center shadow-xl tracking-wide">
          One Dashboard · Zero Penalties · Sleep at Night
        </div>
      </div>
    </section>
  );
}
