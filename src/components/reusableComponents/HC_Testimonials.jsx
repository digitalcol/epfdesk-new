// "use client";
// import React from "react";

// const testimonials = [
//   {
//     quote:
//       "EPFDesk transformed our compliance from a nightmare to a seamless operation.",
//     name: "Neeta",
//     role: "HR Head, Regional Hotel Chain",
//   },
//   {
//     quote:
//       "As a single-outlet owner, a fine would have been devastating. EPFDesk took away the fear so I can focus on guests.",
//     name: "Rajesh",
//     role: "Owner, Boutique Restaurant, Goa",
//   },
//   {
//     quote:
//       "Knowing our POSH compliance is handled with 100% accuracy and timeliness is invaluable.",
//     name: "Vikram Kumar",
//     role: "Commercial Director, 5-Star Hotel Group",
//   },
// ];

// export default function HC_Testimonials() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
//           Trusted by Hospitality Leaders
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
//             >
//               <p className="text-gray-700 italic flex-grow">“{t.quote}”</p>
//               <div className="mt-6">
//                 <p className="font-semibold text-lg">{t.name}</p>
//                 <p className="text-sm text-gray-500">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "EPFDesk transformed our compliance from a nightmare to a seamless operation.",
    name: "Neeta",
    role: "HR Head, Regional Hotel Chain",
  },
  {
    quote:
      "As a single-outlet owner, a fine would have been devastating. EPFDesk took away the fear so I can focus on guests.",
    name: "Rajesh",
    role: "Owner, Boutique Restaurant, Goa",
  },
  {
    quote:
      "Knowing our POSH compliance is handled with 100% accuracy and timeliness is invaluable.",
    name: "Vikram Kumar",
    role: "Commercial Director, 5-Star Hotel Group",
  },
];

export default function HC_Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-400 bg-clip-text text-transparent">
          Trusted by Hospitality Leaders
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition group"
            >
              {/* decorative quote mark */}
              <div className="absolute -top-6 left-6 text-7xl text-blue-200/40 select-none leading-none">
                “
              </div>
              <p className="text-gray-700 italic text-lg relative z-10">
                {t.quote}
              </p>
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="font-semibold text-xl text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
