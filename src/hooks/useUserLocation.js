// "use client";
// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// export default function useUserLocation() {
//   const [location, setLocation] = useState({
//     country: Cookies.get("userCountry") || null,
//     city: Cookies.get("userCity") || null,
//     lat: Cookies.get("userLat") || null,
//     lng: Cookies.get("userLng") || null,
//   });

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         async (pos) => {
//           const lat = pos.coords.latitude;
//           const lng = pos.coords.longitude;

//           // Save lat/lng in cookies
//           Cookies.set("userLat", lat, { expires: 7 });
//           Cookies.set("userLng", lng, { expires: 7 });

//           // 🔎 Reverse geocode
//           try {
//             const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_KEY; // store in .env.local
//             const res = await fetch(
//               `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
//             );
//             const data = await res.json();

//             if (data.results && data.results.length > 0) {
//               const { city, town, village, country } = data.results[0].components;

//               const detectedCity = city || town || village || "Unknown City";
//               const detectedCountry = country || "Unknown Country";

//               Cookies.set("userCity", detectedCity, { expires: 7 });
//               Cookies.set("userCountry", detectedCountry, { expires: 7 });

//               setLocation({
//                 country: detectedCountry,
//                 city: detectedCity,
//                 lat,
//                 lng,
//               });
//             }
//           } catch (err) {
//             console.error("Reverse geocode failed:", err);
//           }
//         },
//         (err) => {
//           console.warn("Geolocation error:", err.message);
//         }
//       );
//     }
//   }, []);

//   return location;
// }

"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useUserLocation() {
  const [location, setLocation] = useState({
    country: Cookies.get("userCountry") || null,
    city: Cookies.get("userCity") || null,
  });

  useEffect(() => {
    // Refresh from cookies when client hydrates
    setLocation({
      country: Cookies.get("userCountry") || null,
      city: Cookies.get("userCity") || null,
    });
  }, []);

  return location;
}
