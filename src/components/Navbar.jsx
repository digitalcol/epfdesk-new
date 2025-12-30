// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { AnimatePresence, motion } from "framer-motion";

// const links = [
//   { href: "/epfdesk", label: "EPFdesk" },
//   { href: "/epfManagement", label: "EPFO" },
//   { href: "/esic", label: "ESIC" },
//   { href: "/posh", label: "POSH" },
//   { href: "/lwf", label: "LWF" },
//   { href: "/pt", label: "PT" },
//   { href: "/aboutUs", label: "About Us" },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // detect dynamic routes
//   const isDynamicEPF =
//     pathname.startsWith("/epf/") && pathname.split("/").length > 2;
//   const isDynamicESIC =
//     pathname.startsWith("/esicCompliance/") && pathname.split("/").length > 2;
//   const isDynamicUnigst =
//     pathname.startsWith("/unigst/") && pathname.split("/").length > 2;

//   // conditional links for desktop
//   let desktopLinks;

//   if (isDynamicEPF) {
//     desktopLinks = [{ href: "/esic", label: "ESIC" }];
//   } else if (isDynamicESIC) {
//     desktopLinks = [{ href: "/epfManagement", label: "EPFO" }];
//   } else if (isDynamicUnigst) {
//     desktopLinks = [
//       { href: "/epfManagement", label: "EPFO" },
//       { href: "/esic", label: "ESIC" },
//     ];
//   } else {
//     desktopLinks = links;
//   }

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       <header
//         className={`fixed z-50 w-full border-b border-gray-300 px-5 backdrop-blur-md transition-all duration-300 ${
//           scrolled ? "bg-white/80 shadow" : "bg-transparent"
//         }`}
//       >
//         <div className="flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <Link href="/" title="Home">
//             <img
//               src="/images/EPFdesk (1).svg"
//               alt="Logo"
//               width={150}
//               height={100}
//               className="cursor-pointer"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-4">
//             {desktopLinks.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 href={href}
//                 className="text-[18px] font-semibold text-gray-800 hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md"
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Nav Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="p-2 border rounded-md hover:bg-gray-100"
//             >
//               {mobileMenuOpen ? (
//                 <XMarkIcon className="h-6 w-6 text-gray-700" />
//               ) : (
//                 <Bars3Icon className="h-6 w-6 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <Dialog
//               open={mobileMenuOpen}
//               onClose={setMobileMenuOpen}
//               className="md:hidden"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <img
//                     src="/images/EPFdesk (1).svg"
//                     alt="Logo"
//                     className="h-8 cursor-pointer"
//                     onClick={() => {
//                       setMobileMenuOpen(false);
//                       window.location.href = "/";
//                     }}
//                   />
//                   <button onClick={() => setMobileMenuOpen(false)}>
//                     <XMarkIcon className="h-6 w-6 text-gray-800" />
//                   </button>
//                 </div>

//                 <div className="mt-10 flex flex-col gap-4">
//                   {desktopLinks.map(({ href, label }) => (
//                     <Link
//                       key={href}
//                       href={href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="text-[1rem] font-semibold text-gray-700 hover:text-blue-600"
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               </motion.div>
//             </Dialog>
//           )}
//         </AnimatePresence>
//       </header>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "/epfdesk", label: "EPFdesk" },
  { href: "/epfManagement", label: "EPFO" },
  { href: "/esic", label: "ESIC" },
  // { href: "/posh", label: "POSH" },
  // { href: "/lwf", label: "LWF" },
  // { href: "/pt", label: "PT" },
  { href: "/aboutUs", label: "About Us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // detect dynamic routes
  const isDynamicEPF =
    pathname.startsWith("/epf/") && pathname.split("/").length > 2;
  const isDynamicESIC =
    pathname.startsWith("/esicCompliance/") && pathname.split("/").length > 2;
  const isDynamicUnigst =
    pathname.startsWith("/unigst/") && pathname.split("/").length > 2;
  const isDynamicPFEsic =
    pathname === "/pf-esic-consultant-bangalore" ||
    pathname.startsWith("/pf-esic-consultant-bangalore/");
  const isDynamicPFEsicReg =
    pathname === "/pf-esic-registration-bangalore" ||
    pathname.startsWith("/pf-esic-registration-bangalore/");

  // conditional links for desktop
  let desktopLinks;

  if (isDynamicEPF) {
    desktopLinks = [{ href: "/esic", label: "ESIC" }];
  } else if (isDynamicESIC) {
    desktopLinks = [{ href: "/epfManagement", label: "EPFO" }];
  } else if (isDynamicUnigst) {
    desktopLinks = [
      { href: "/epfManagement", label: "EPFO" },
      { href: "/esic", label: "ESIC" },
    ];
  } else if (isDynamicPFEsic) {
    desktopLinks = [
      { href: "/epfManagement", label: "EPFO" },
      { href: "/esic", label: "ESIC" },
    ];
  } else if (isDynamicPFEsicReg) {
    desktopLinks = [
      { href: "/epfManagement", label: "EPFO" },
      { href: "/esic", label: "ESIC" },
    ];
  } else {
    desktopLinks = links;
  }

  // show CTAs only on dynamic routes
  const showCTAs =
    isDynamicEPF ||
    isDynamicESIC ||
    isDynamicUnigst ||
    isDynamicPFEsic ||
    isDynamicPFEsicReg;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={`fixed z-50 w-full border-b border-gray-300 px-5 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" title="Home">
            <img
              src="/images/EPFdesk (1).svg"
              alt="Logo"
              width={150}
              height={100}
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {desktopLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[18px] font-semibold text-gray-800 hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md"
              >
                {label}
              </Link>
            ))}

            {/* Conditional CTA Buttons */}
            {showCTAs && (
              <div className="flex items-center gap-3 ml-4">
                {/* <button
                  onClick={() =>
                    window.open("https://wa.me/919945933333", "_blank")
                  }
                  className="bg-[#003d3d] cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 h-[42px] shadow-sm transition rounded-[13px]"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
                    boxShadow:
                      "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                  }}
                >
                  WhatsApp Us
                </button> */}
                {/* <button
                  onClick={() => {
                    const phone = "919945933333";
                    const text = encodeURIComponent(
                      "Hello EPFDesk,\n\n" +
                        "I’d like to know more about your compliance services.\n\n" +
                        "Company Name:\n" +
                        "No. of Employees:\n" +
                        "My Role:\n" +
                        "Areas of Interest:"
                    );
                    window.open(
                      `https://wa.me/${phone}?text=${text}`,
                      "_blank"
                    );
                  }}
                  className="group relative flex h-[45px] w-full sm:w-[165px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] px-4 text-black shadow-lg transition-all duration-300"
                >
                  <IoLogoWhatsapp className="size-5 sm:size-6 transition-transform sm:group-hover:scale-0" />
                  <span className="sm:inline transition-opacity sm:group-hover:opacity-0">
                    WhatsApp
                  </span>
                  <span className="absolute hidden sm:inline opacity-0 transition-opacity sm:group-hover:opacity-100">
                    +919945933333
                  </span>
                </button> */}
                <button
                  onClick={() => {
                    const phone = "919945933333";
                    const text = encodeURIComponent(
                      "Hello EPFDesk,\n\n" +
                        "I’d like to know more about your compliance services.\n\n" +
                        "Company Name:\n" +
                        "No. of Employees:\n" +
                        "My Role:\n" +
                        "Areas of Interest:"
                    );
                    window.open(
                      `https://wa.me/${phone}?text=${text}`,
                      "_blank"
                    );
                  }}
                  className="relative group bg-[#c4f5db] cursor-pointer text-[16px] flex items-center justify-center gap-2 text-[#066] font-[500] px-6 py-2 rounded-[13px] transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #eafce9, #cdface)",
                    boxShadow:
                      "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
                  }}
                >
                  <IoLogoWhatsapp className="size-5 sm:size-6 transition-transform group-hover:scale-0" />

                  {/* Default text */}
                  <span className="transition-opacity group-hover:opacity-0">
                    WhatsApp
                  </span>

                  {/* Hidden number, shows on hover */}
                  <span className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    +919945933333
                  </span>
                </button>

                <button
                  onClick={() => (window.location.href = "tel:+919945933333")}
                  className="bg-[#003d3d] flex items-center justify-center gap-2 cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 h-[42px] shadow-sm transition rounded-[13px]"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
                    boxShadow:
                      "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                  }}
                ><FaPhone />
                  Call
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:hello@epfdesk.com")
                  }
                  className="bg-[#003d3d] flex items-center justify-center gap-2 cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 h-[42px] shadow-sm transition rounded-[13px]"
                  style={{
                    backgroundImage: "linear-gradient(180deg, #066, #003d3d)",
                    boxShadow:
                      "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                  }}
                >
                  <EnvelopeIcon className="w-[20px] h-[20px]"/>
                  Email
                </button>
              </div>
            )}
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="md:hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <img
                    src="/images/EPFdesk (1).svg"
                    alt="Logo"
                    className="h-8 cursor-pointer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.location.href = "/";
                    }}
                  />
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <XMarkIcon className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  {desktopLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[1rem] font-semibold text-gray-700 hover:text-blue-600"
                    >
                      {label}
                    </Link>
                  ))}

                  {/* CTA buttons in mobile view */}
                  {showCTAs && (
                    <div className="flex flex-col gap-3 mt-6">
                      {/* <button
                        onClick={() =>
                          (window.location.href = "mailto:hello@epfdesk.com")
                        }
                        className="bg-[#003d3d] text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, #066, #003d3d)",
                          boxShadow:
                            "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                        }}
                      >
                        Email Us
                      </button> */}
                      {/* <button
                        onClick={() => {
                          const phone = "919945933333";
                          const text = encodeURIComponent(
                            "Hello EPFDesk,\n\n" +
                              "I’d like to know more about your compliance services.\n\n" +
                              "Company Name:\n" +
                              "No. of Employees:\n" +
                              "My Role:\n" +
                              "Areas of Interest:"
                          );
                          window.open(
                            `https://wa.me/${phone}?text=${text}`,
                            "_blank"
                          );
                        }}
                        className="group relative flex h-[45px] w-full sm:w-[165px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] px-4 text-black shadow-lg transition-all duration-300"
                      >
                        <IoLogoWhatsapp className="size-5 sm:size-6 transition-transform sm:group-hover:scale-0" />
                        <span className="sm:inline transition-opacity sm:group-hover:opacity-0">
                          WhatsApp
                        </span>
                        <span className="absolute hidden sm:inline opacity-0 transition-opacity sm:group-hover:opacity-100">
                          +919945933333
                        </span>
                      </button> */}
                      <button
                        onClick={() => {
                          const phone = "919945933333";
                          const text = encodeURIComponent(
                            "Hello EPFDesk,\n\n" +
                              "I’d like to know more about your compliance services.\n\n" +
                              "Company Name:\n" +
                              "No. of Employees:\n" +
                              "My Role:\n" +
                              "Areas of Interest:"
                          );
                          window.open(
                            `https://wa.me/${phone}?text=${text}`,
                            "_blank"
                          );
                        }}
                        className="relative group bg-[#c4f5db] cursor-pointer text-[16px] flex items-center justify-center gap-2 text-[#066] font-[500] px-6 py-3 rounded-[13px] transition"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, #eafce9, #cdface)",
                          boxShadow:
                            "0 4px 4px #001f1f0f,0 2px 2px #001f1f0f,0 0 1px #001f1f52,inset 0 1px 1px #cdface14",
                        }}
                      >
                        <IoLogoWhatsapp className="size-5 sm:size-6 transition-transform group-hover:scale-0" />

                        {/* Default text */}
                        <span className="transition-opacity group-hover:opacity-0">
                          WhatsApp
                        </span>

                        {/* Hidden number, shows on hover */}
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                          +919945933333
                        </span>
                      </button>

                      <button
                        onClick={() =>
                          (window.location.href = "tel:+919945933333")
                        }
                        className="bg-[#003d3d] flex items-center justify-center gap-2 cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, #066, #003d3d)",
                          boxShadow:
                            "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                        }}
                      >
                        <FaPhone />
                        Call Us
                      </button>

                      <button
                        onClick={() =>
                          window.open("https://wa.me/919945933333", "_blank")
                        }
                        className="bg-[#003d3d] flex items-center justify-center gap-2 cursor-pointer text-[1rem] font-normal text-[#cdface] px-6 py-3 shadow-sm transition rounded-[13px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, #066, #003d3d)",
                          boxShadow:
                            "inset 0 10px 16px -10px #ffffff0f, 0 8px 8px #001f1f0f, 0 4px 4px #001f1f0f, 0 2px 2px #001f1f0f, 0 0 1px #001f1f52, inset 0 -2px 1px #001f1f3d, inset 0 1px 1px #cdface14",
                        }}
                      ><EnvelopeIcon className="w-[20px] h-[20px]"/>
                        WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
