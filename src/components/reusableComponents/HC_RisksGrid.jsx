// "use client";
// import React from "react";
// import { HiUsers, HiBanknotes, HiShieldCheck } from "react-icons/hi2";

// const risks = [
//   {
//     icon: HiUsers,
//     color: "bg-green-100 text-green-600",
//     title: "High Attrition Nightmare",
//     desc: "80% turnover creates endless EPF/ESIC/UAN churn. We automate joins & exits in minutes.",
//   },
//   {
//     icon: HiBanknotes,
//     color: "bg-yellow-100 text-yellow-600",
//     title: "Overtime & Tips Trap",
//     desc: "Errors in variable pay trigger audits. We ensure flawless statutory contributions every time.",
//   },
//   {
//     icon: HiShieldCheck,
//     color: "bg-red-100 text-red-600",
//     title: "POSH Reputation Bomb",
//     desc: "One incident can destroy trust. We provide policy, training & an independent hotline.",
//   },
// ];

// export default function HC_RisksGrid() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//           Why Small Errors Become Systemic Risks
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {risks.map((r, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
//             >
//               <div
//                 className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 ${r.color}`}
//               >
//                 <r.icon className="text-3xl" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{r.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{r.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HC_RisksGrid() {
  const risks = [
    {
      img: "images/for-business.svg",
      alt: "For Marketers",
      title: "High Attrition Nightmare",
      desc: "80% turnover creates endless EPF/ESIC/UAN churn. We automate joins & exits in minutes.",
    },
    {
      img: "images/for-designers.svg",
      alt: "For Designers",
      title: "Overtime & Tips Trap",
      desc: "Errors in variable pay trigger audits. We ensure flawless statutory contributions every time.",
    },
    {
      img: "images/for-everyone.svg",
      alt: "For Owners",
      title: "POSH Reputation Bomb",
      desc: "One incident can destroy trust. We provide policy, training & an independent hotline.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Why Small Errors Become Systemic Risks
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {risks.map((r, idx) => (
          <li
            key={idx}
            className="flex flex-col items-start sm:items-center lg:items-start space-y-4"
          >
            <img
              src={r.img}
              alt={r.alt}
              className="max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
            />
            <h6 className="text-xl sm:text-lg lg:text-xl font-extrabold text-gray-900">
              {r.title}
            </h6>
            <p className="text-lg sm:text-base leading-relaxed text-gray-500">
              {r.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
