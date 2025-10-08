// "use client";
// import React, { useState } from "react";

// const faqs = [
//   {
//     q: "We have 200+ employees across 5 cities. Too complex?",
//     a: "Our biggest client has 2,000 employees across 15 cities, including 5-star chains.",
//   },
//   {
//     q: "We get raided tomorrow?",
//     a: "We'll be there in 2 hours with documents. Our emergency response has saved 47 hospitality businesses.",
//   },
//   {
//     q: "What about Goa or Kerala state rules?",
//     a: "We operate in all 29 states. Kerala’s Shops Act? We wrote the guide.",
//   },
//   {
//     q: "How fast can you start?",
//     a: "48 hours to full compliance. We've done it 500+ times.",
//   },
//   {
//     q: "High staff attrition is our biggest pain.",
//     a: "We automate EPF/ESIC creation, linking, and exits so turnover doesn’t break compliance.",
//   },
// ];

// export default function HC_FAQ() {
//   const [open, setOpen] = useState(0);
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">FAQs</h2>
//         <div className="space-y-4">
//           {faqs.map((f, i) => (
//             <div key={i} className="border rounded-xl bg-white">
//               <button
//                 className="w-full text-left px-5 py-4 font-semibold flex items-center justify-between"
//                 onClick={() => setOpen(open === i ? null : i)}
//               >
//                 <span>{f.q}</span>
//                 <span className="text-2xl leading-none">{open === i ? "−" : "+"}</span>
//               </button>
//               {open === i && <div className="px-5 pb-5 text-gray-600">{f.a}</div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "We have 200+ employees across 5 cities. Too complex?",
    a: "Our biggest client has 2,000 employees across 15 cities, including 5-star chains.",
  },
  {
    q: "We get raided tomorrow?",
    a: "We'll be there in 2 hours with documents. Our emergency response has saved 47 hospitality businesses.",
  },
  {
    q: "What about Goa or Kerala state rules?",
    a: "We operate in all 29 states. Kerala’s Shops Act? We wrote the guide.",
  },
  {
    q: "How fast can you start?",
    a: "48 hours to full compliance. We've done it 500+ times.",
  },
  {
    q: "High staff attrition is our biggest pain.",
    a: "We automate EPF/ESIC creation, linking, and exits so turnover doesn’t break compliance.",
  },
];

export default function HC_FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 shadow-sm ${
                  isOpen ? "border-green-400 shadow-md" : "border-gray-200 hover:shadow"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-gray-800 focus:outline-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  {isOpen ? (
                    <FiMinus className="text-green-500 text-2xl" />
                  ) : (
                    <FiPlus className="text-gray-400 text-2xl" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
