"use client";

import React from "react";

// export default function ComplianceTable({data}) {
//   return (
//     <div className="w-full overflow-x-auto max-w-6xl mx-auto">
//         <h1 className="text-center mb-8 text-5xl font-extrabold">Compliance Check: At What Employee Count Do You Fall Under Which Law?</h1>
//       <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base">
//         <thead>
//           <tr className="bg-gray-100 text-gray-700">
//             <th className="border border-gray-200 px-4 py-3 text-left">
//               Employee Threshold
//             </th>
//             <th className="border border-gray-200 px-4 py-3 text-left">
//               Mandatory Law That Kicks In
//             </th>
//             <th className="border border-gray-200 px-4 py-3 text-left">
//               What It Means For You
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr
//               key={i}
//               className="hover:bg-[#ffbaba] even:bg-gray-50 transition-colors"
//             >
//               <td className="border border-gray-200 px-4 py-3 font-medium">
//                 {row.threshold}
//               </td>
//               <td className="border border-gray-200 px-4 py-3">
//                 {row.law}
//               </td>
//               <td className="border border-gray-200 px-4 py-3">
//                 {row.meaning}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
export default function ComplianceTable({ data }) {
  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-center mb-8 text-5xl font-extrabold">
        Compliance Check: At What Employee Count Do You Fall Under Which Law?
      </h1>
      <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              Employee Threshold
            </th>
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              Mandatory Law That Kicks In
            </th>
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              What It Means For You
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-[#ffbaba] border-t-2 border-b-2 border-black even:bg-gray-50 transition-colors"
            >
              <td className="border-t border-b border-gray-200 px-4 py-3 font-medium">
                {row.threshold}
              </td>
              <td className="border-t border-b border-gray-200 px-4 py-3">
                {row.law}
              </td>
              <td className="border-t border-b  border-gray-200 px-4 py-3">
                {row.meaning}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



