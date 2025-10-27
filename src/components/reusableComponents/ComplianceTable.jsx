"use client";

import React from "react";

// export default function ComplianceTable({ data }) {
//   return (
//     <div className="w-full overflow-x-auto">
//       <h1 className="text-center mb-8 text-5xl font-extrabold">
//         Compliance Check: At What Employee Count Do You Fall Under Which Law?
//       </h1>
//       <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base">
//         <thead>
//           <tr className="bg-gray-100 text-gray-700">
//             <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
//               Employee Threshold
//             </th>
//             <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
//               Mandatory Law That Kicks In
//             </th>
//             <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
//               What It Means For You
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr
//               key={i}
//               className="hover:bg-[#ffbaba] border-t-2 border-b-2 border-black even:bg-gray-50 transition-colors"
//             >
//               <td className="border-t border-b border-gray-200 px-4 py-3 font-medium">
//                 {row.threshold}
//               </td>
//               <td className="border-t border-b border-gray-200 px-4 py-3">
//                 {row.law}
//               </td>
//               <td className="border-t border-b  border-gray-200 px-4 py-3">
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
  // Default rows derived from the attached WF_Homepage_Oct25 PDF copy:

  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-center mb-8 text-5xl font-extrabold">
        The Operating Layer — A Compliance Snapshot
      </h1>

      <table className="min-w-full border-collapse border border-gray-200 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              Compliance Area
            </th>
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              Example Filings / Modules
            </th>
            <th className="border-t-2 border-b-2 border-black px-4 py-3 text-left">
              Workforce: What we do
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
