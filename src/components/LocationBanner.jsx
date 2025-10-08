// "use client";
// import useUserLocation from "@/hooks/useUserLocation";
// import { useEffect, useState } from "react";

// export default function LocationBanner() {
//   const { country, city, lat, lng } = useUserLocation();
//   const [mounted, setMounted] = useState(false);

//   // Only allow rendering after hydration
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <div className="p-4 bg-green-100 text-center text-gray-800">
//         <p>Detecting your location...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4 bg-green-100 text-center text-gray-800">
//       {country || city || (lat && lng) ? (
//         <p>
//           🌍 You’re visiting from{" "}
//           <strong>{city || "Unknown City"}</strong>,{" "}
//           <strong>{country || "Unknown Country"}</strong>
//           {/* {lat && lng && (
//             <span>
//               {" "}
//               (Lat: {Number(lat).toFixed(2)}, Lng: {Number(lng).toFixed(2)})
//             </span>
//           )} */}
//         </p>
//       ) : (
//         <p>Detecting your location...</p>
//       )}
//     </div>
//   );
// }

"use client";
import useUserLocation from "@/hooks/useUserLocation";
import { useEffect, useState } from "react";

export default function LocationBanner() {
  const [mounted, setMounted] = useState(false);
  const { country, city } = useUserLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-4 bg-green-100 text-center text-gray-800">
        <p>Detecting your location...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-green-100 text-center text-gray-800 text-sm md:text-base">
      {country || city ? (
        <p>
          🌍 You’re visiting from <strong>{city || "Unknown City"}</strong>,{" "}
          <strong>{country || "Unknown Country"}</strong>
        </p>
      ) : (
        <p>Detecting your location...</p>
      )}
    </div>
  );
}
