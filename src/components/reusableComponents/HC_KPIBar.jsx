// "use client";
// import React from "react";
// import {
//   HiBolt,
//   HiClock,
//   HiGlobeAlt,
//   HiCheckBadge,
//   HiShieldExclamation,
// } from "react-icons/hi2";

// const kpis = [
//   {
//     value: "2 hrs",
//     label: "Emergency Response",
//     icon: HiBolt,
//     color: "bg-red-100 text-red-600",
//   },
//   {
//     value: "48 hrs",
//     label: "Full Compliance Go-Live",
//     icon: HiClock,
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     value: "29",
//     label: "States Covered",
//     icon: HiGlobeAlt,
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     value: "500+",
//     label: "Rollouts Delivered",
//     icon: HiCheckBadge,
//     color: "bg-purple-100 text-purple-600",
//   },
//   {
//     value: "47",
//     label: "Businesses Saved",
//     icon: HiShieldExclamation,
//     color: "bg-yellow-100 text-yellow-600",
//   },
// ];

// export default function HC_KPIBar() {
//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//           Compliance That Scales With You
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
//           {kpis.map((k, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center flex flex-col items-center"
//             >
//               <div
//                 className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${k.color}`}
//               >
//                 <k.icon className="text-2xl" />
//               </div>
//               <div className="text-3xl md:text-4xl font-extrabold text-green-600">
//                 {k.value}
//               </div>
//               <div className="mt-2 text-gray-600 font-medium">{k.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function KPIsGrid() {
  const kpis = [
    {
      img: "images/emergency.png",
      alt: "Brand Presets",
      title: "2 hrs",
      desc: "Emergency Response",
    },
    {
      img: "images/go-live.png",
      alt: "Real-Time Team Collaboration",
      title: "48 hrs",
      desc: "Full Compliance Go-Live",
    },
    {
      img: "images/state.png",
      alt: "Email Templates Gallery",
      title: "29",
      desc: "States Covered",
    },
    {
      img: "images/delivered.png",
      alt: "Custom Fonts Support",
      title: "500+",
      desc: "Rollouts Delivered",
    },
    {
      img: "images/buisness.png",
      alt: "Custom Fonts Support",
      title: "47",
      desc: "Businesses Saved",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f9fce6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Compliance That Scales With You
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-black">
          {kpis.map((k, i) => (
            <li
              key={i}
              className="bg-[rgba(247,249,252,0.9)] rounded-2xl shadow-[0_4px_57px_rgba(58,76,102,0.07),0_-1.5px_4.5px_rgba(191,197,202,0.65)_inset] 
              p-6 flex flex-col items-center text-center 
              transform transition duration-300 hover:scale-105 hover:bg-white"
            >
              <div className="mb-4">
                <img
                  src={k.img}
                  alt={k.alt}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h5 className="text-[2rem] font-semibold text-gray-900 mb-2">
                {k.title}
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">{k.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
