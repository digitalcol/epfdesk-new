/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//       },
//     ],
//   },
//   experimental: {
//     esmExternals: "loose",
//   },

//   async redirects() {
//     return [
//       // Redirect any "www.epfdesk.com" request → non-www (https://epfdesk.com)
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "host",
//             value: "www.epfdesk.com",
//           },
//         ],
//         destination: "https://epfdesk.com/:path*",
//         permanent: true,
//       },

//       // Redirect any HTTP request (non-www) → HTTPS (non-www)
//       {
//         source: "/:path*",
//         has: [
//           {
//             type: "host",
//             value: "epfdesk.com",
//           },
//         ],
//         destination: "https://epfdesk.com/:path*",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
