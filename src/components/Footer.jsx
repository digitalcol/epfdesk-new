"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

import Image from "next/image";
import {
  FiUsers,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiBriefcase,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const footerCities = {
  pfConsultants: [
    { city: "Bangalore", slug: "pf-consultants-in-bangalore" },
    { city: "Mumbai", slug: "pf-consultants-in-mumbai" },
    { city: "Delhi", slug: "pf-consultants-in-delhi" },
    { city: "Chennai", slug: "pf-consultants-in-chennai" },
    { city: "Hyderabad", slug: "pf-consultants-in-hyderabad" },
    { city: "Pune", slug: "pf-consultants-in-pune" },
    { city: "Kolkata", slug: "pf-consultants-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-consultants-in-ahmedabad" },
    { city: "Surat", slug: "pf-consultants-in-surat" },
    { city: "Gurgaon", slug: "pf-consultants-in-gurgaon" },
    { city: "Noida", slug: "pf-consultants-in-noida" },
    { city: "Jaipur", slug: "pf-consultants-in-jaipur" },
    { city: "Lucknow", slug: "pf-consultants-in-lucknow" },
    { city: "Indore", slug: "pf-consultants-in-indore" },
    { city: "Coimbatore", slug: "pf-consultants-in-coimbatore" },
    { city: "Vadodara", slug: "pf-consultants-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-consultants-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-consultants-in-nagpur" },
    { city: "Bhopal", slug: "pf-consultants-in-bhopal" },
    { city: "Kanpur", slug: "pf-consultants-in-kanpur" },
  ],

  epfRegistration: [
    { city: "Bangalore", slug: "epf-registration-bangalore" },
    { city: "Mumbai", slug: "epf-registration-mumbai" },
    { city: "Delhi", slug: "epf-registration-delhi" },
    { city: "Chennai", slug: "epf-registration-chennai" },
    { city: "Hyderabad", slug: "epf-registration-hyderabad" },
    { city: "Pune", slug: "epf-registration-pune" },
    { city: "Kolkata", slug: "epf-registration-kolkata" },
    { city: "Ahmedabad", slug: "epf-registration-ahmedabad" },
    { city: "Surat", slug: "epf-registration-surat" },
    { city: "Gurgaon", slug: "epf-registration-gurgaon" },
    { city: "Noida", slug: "epf-registration-noida" },
    { city: "Jaipur", slug: "epf-registration-jaipur" },
    { city: "Lucknow", slug: "epf-registration-lucknow" },
    { city: "Indore", slug: "epf-registration-indore" },
    { city: "Coimbatore", slug: "epf-registration-coimbatore" },
    { city: "Vadodara", slug: "epf-registration-vadodara" },
    { city: "Visakhapatnam", slug: "epf-registration-visakhapatnam" },
    { city: "Nagpur", slug: "epf-registration-nagpur" },
    { city: "Bhopal", slug: "epf-registration-bhopal" },
    { city: "Kanpur", slug: "epf-registration-kanpur" },
  ],

  monthlyFiling: [
    { city: "Bangalore", slug: "pf-monthly-filing-in-bangalore" },
    { city: "Mumbai", slug: "pf-monthly-filing-in-mumbai" },
    { city: "Delhi", slug: "pf-monthly-filing-in-delhi" },
    { city: "Chennai", slug: "pf-monthly-filing-in-chennai" },
    { city: "Hyderabad", slug: "pf-monthly-filing-in-hyderabad" },
    { city: "Pune", slug: "pf-monthly-filing-in-pune" },
    { city: "Kolkata", slug: "pf-monthly-filing-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-monthly-filing-in-ahmedabad" },
    { city: "Surat", slug: "pf-monthly-filing-in-surat" },
    { city: "Gurgaon", slug: "pf-monthly-filing-in-gurgaon" },
    { city: "Noida", slug: "pf-monthly-filing-in-noida" },
    { city: "Jaipur", slug: "pf-monthly-filing-in-jaipur" },
    { city: "Lucknow", slug: "pf-monthly-filing-in-lucknow" },
    { city: "Indore", slug: "pf-monthly-filing-in-indore" },
    { city: "Coimbatore", slug: "pf-monthly-filing-in-coimbatore" },
    { city: "Vadodara", slug: "pf-monthly-filing-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-monthly-filing-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-monthly-filing-in-nagpur" },
    { city: "Bhopal", slug: "pf-monthly-filing-in-bhopal" },
    { city: "Kanpur", slug: "pf-monthly-filing-in-kanpur" },
  ],

  pfCompliance: [
    { city: "Bangalore", slug: "pf-compliance-in-bangalore" },
    { city: "Mumbai", slug: "pf-compliance-in-mumbai" },
    { city: "Delhi", slug: "pf-compliance-in-delhi" },
    { city: "Chennai", slug: "pf-compliance-in-chennai" },
    { city: "Hyderabad", slug: "pf-compliance-in-hyderabad" },
    { city: "Pune", slug: "pf-compliance-in-pune" },
    { city: "Kolkata", slug: "pf-compliance-in-kolkata" },
    { city: "Ahmedabad", slug: "pf-compliance-in-ahmedabad" },
    { city: "Surat", slug: "pf-compliance-in-surat" },
    { city: "Gurgaon", slug: "pf-compliance-in-gurgaon" },
    { city: "Noida", slug: "pf-compliance-in-noida" },
    { city: "Jaipur", slug: "pf-compliance-in-jaipur" },
    { city: "Lucknow", slug: "pf-compliance-in-lucknow" },
    { city: "Indore", slug: "pf-compliance-in-indore" },
    { city: "Coimbatore", slug: "pf-compliance-in-coimbatore" },
    { city: "Vadodara", slug: "pf-compliance-in-vadodara" },
    { city: "Visakhapatnam", slug: "pf-compliance-in-visakhapatnam" },
    { city: "Nagpur", slug: "pf-compliance-in-nagpur" },
    { city: "Bhopal", slug: "pf-compliance-in-bhopal" },
    { city: "Kanpur", slug: "pf-compliance-in-kanpur" },
  ],
};
export const esicCities = {
  consultants: [
    { city: "Bangalore", slug: "esic-consultants-bangalore" },
    { city: "Mumbai", slug: "esic-consultants-mumbai" },
    { city: "Delhi", slug: "esic-consultants-delhi" },
    { city: "Chennai", slug: "esic-consultants-chennai" },
    { city: "Hyderabad", slug: "esic-consultants-hyderabad" },
    { city: "Pune", slug: "esic-consultants-pune" },
    { city: "Kolkata", slug: "esic-consultants-kolkata" },
    { city: "Ahmedabad", slug: "esic-consultants-ahmedabad" },
    { city: "Surat", slug: "esic-consultants-surat" },
    { city: "Gurgaon", slug: "esic-consultants-gurgaon" },
    { city: "Noida", slug: "esic-consultants-noida" },
    { city: "Jaipur", slug: "esic-consultants-jaipur" },
    { city: "Lucknow", slug: "esic-consultants-lucknow" },
    { city: "Indore", slug: "esic-consultants-indore" },
    { city: "Coimbatore", slug: "esic-consultants-coimbatore" },
    { city: "Vadodara", slug: "esic-consultants-vadodara" },
    { city: "Visakhapatnam", slug: "esic-consultants-visakhapatnam" },
    { city: "Nagpur", slug: "esic-consultants-nagpur" },
    { city: "Bhopal", slug: "esic-consultants-bhopal" },
    { city: "Kanpur", slug: "esic-consultants-kanpur" },
  ],

  registration: [
    { city: "Bangalore", slug: "esic-registration-bangalore" },
    { city: "Mumbai", slug: "esic-registration-mumbai" },
    { city: "Delhi", slug: "esic-registration-delhi" },
    { city: "Chennai", slug: "esic-registration-chennai" },
    { city: "Hyderabad", slug: "esic-registration-hyderabad" },
    { city: "Pune", slug: "esic-registration-pune" },
    { city: "Kolkata", slug: "esic-registration-kolkata" },
    { city: "Ahmedabad", slug: "esic-registration-ahmedabad" },
    { city: "Surat", slug: "esic-registration-surat" },
    { city: "Gurgaon", slug: "esic-registration-gurgaon" },
    { city: "Noida", slug: "esic-registration-noida" },
    { city: "Jaipur", slug: "esic-registration-jaipur" },
    { city: "Lucknow", slug: "esic-registration-lucknow" },
    { city: "Indore", slug: "esic-registration-indore" },
    { city: "Coimbatore", slug: "esic-registration-coimbatore" },
    { city: "Vadodara", slug: "esic-registration-vadodara" },
    { city: "Visakhapatnam", slug: "esic-registration-visakhapatnam" },
    { city: "Nagpur", slug: "esic-registration-nagpur" },
    { city: "Bhopal", slug: "esic-registration-bhopal" },
    { city: "Kanpur", slug: "esic-registration-kanpur" },
  ],

  monthlyFiling: [
    { city: "Bangalore", slug: "esic-monthly-filing-bangalore" },
    { city: "Mumbai", slug: "esic-monthly-filing-mumbai" },
    { city: "Delhi", slug: "esic-monthly-filing-delhi" },
    { city: "Chennai", slug: "esic-monthly-filing-chennai" },
    { city: "Hyderabad", slug: "esic-monthly-filing-hyderabad" },
    { city: "Pune", slug: "esic-monthly-filing-pune" },
    { city: "Kolkata", slug: "esic-monthly-filing-kolkata" },
    { city: "Ahmedabad", slug: "esic-monthly-filing-ahmedabad" },
    { city: "Surat", slug: "esic-monthly-filing-surat" },
    { city: "Gurgaon", slug: "esic-monthly-filing-gurgaon" },
    { city: "Noida", slug: "esic-monthly-filing-noida" },
    { city: "Jaipur", slug: "esic-monthly-filing-jaipur" },
    { city: "Lucknow", slug: "esic-monthly-filing-lucknow" },
    { city: "Indore", slug: "esic-monthly-filing-indore" },
    { city: "Coimbatore", slug: "esic-monthly-filing-coimbatore" },
    { city: "Vadodara", slug: "esic-monthly-filing-vadodara" },
    { city: "Visakhapatnam", slug: "esic-monthly-filing-visakhapatnam" },
    { city: "Nagpur", slug: "esic-monthly-filing-nagpur" },
    { city: "Bhopal", slug: "esic-monthly-filing-bhopal" },
    { city: "Kanpur", slug: "esic-monthly-filing-kanpur" },
  ],

  compliance: [
    { city: "Bangalore", slug: "esic-compliance-bangalore" },
    { city: "Mumbai", slug: "esic-compliance-mumbai" },
    { city: "Delhi", slug: "esic-compliance-delhi" },
    { city: "Chennai", slug: "esic-compliance-chennai" },
    { city: "Hyderabad", slug: "esic-compliance-hyderabad" },
    { city: "Pune", slug: "esic-compliance-pune" },
    { city: "Kolkata", slug: "esic-compliance-kolkata" },
    { city: "Ahmedabad", slug: "esic-compliance-ahmedabad" },
    { city: "Surat", slug: "esic-compliance-surat" },
    { city: "Gurgaon", slug: "esic-compliance-gurgaon" },
    { city: "Noida", slug: "esic-compliance-noida" },
    { city: "Jaipur", slug: "esic-compliance-jaipur" },
    { city: "Lucknow", slug: "esic-compliance-lucknow" },
    { city: "Indore", slug: "esic-compliance-indore" },
    { city: "Coimbatore", slug: "esic-compliance-coimbatore" },
    { city: "Vadodara", slug: "esic-compliance-vadodara" },
    { city: "Visakhapatnam", slug: "esic-compliance-visakhapatnam" },
    { city: "Nagpur", slug: "esic-compliance-nagpur" },
    { city: "Bhopal", slug: "esic-compliance-bhopal" },
    { city: "Kanpur", slug: "esic-compliance-kanpur" },
  ],
};

const footerLinks = [
  { label: "EPFdesk", url: "/epfdesk" },
  { label: "EPFO", url: "/epfManagement" },
  { label: "ESIC", url: "/esic" },
  { label: "About Us", url: "/aboutUs" },
];

const industryLinks = [
  {
    label: "Automotive & Auto Ancillary",
    url: "/automotive-and-auto-ancillary",
  },
  {
    label: "Construction Sector Compliance",
    url: "/construction-sector-compliance",
  },
  {
    label: "eCommerce, Gig Economy & Cloud Kitchens",
    url: "/eCommerce-gigEconomy-cloudKitchens-compliance",
  },
  {
    label: "Education & Charitable Trust Compliance",
    url: "/education-and-charitable-trust-compliance",
  },
  {
    label: "Financial Services & Banking Sector Compliance",
    url: "/financial-services-and-banking-sector-compliance",
  },
  { label: "Food & Beverage Compliance", url: "/food-and-bevarage-compliance" },
  {
    label: "Healthcare & Pharma Statutory Compliance",
    url: "/healthcare-and-pharma-statutory-compliance",
  },
  {
    label: "Hospitality & F&B Compliance",
    url: "/hospitality-and-fb-compliance",
  },
  { label: "IT / ITES / GIC Compliance", url: "/it-ites-gic-compliance" },
  {
    label: "Logistics, Warehousing & Road Transport Compliance",
    url: "/logistics-warehousing-roadTransport-compliance",
  },
  {
    label: "Manufacturing & Factory Compliance",
    url: "/manufacturing-and-factory-compliance",
  },
  {
    label: "MSME Manufacturing & Trading Sector Compliance",
    url: "/msme-manufacturing-trading-sector-compliance",
  },
  { label: "Retail Sector Compliance", url: "/retail-sector-compliance" },
  { label: "SME / MSME Compliance", url: "/sme-msme-compliance" },
  {
    label: "Startup Labour & HR Compliance",
    url: "/startup-labour-and-hr-compliance",
  },
  {
    label: "Textile & Garments Compliance",
    url: "/textile-and-garments-compliance",
  },
];

export default function Footer() {
  return (
    <>
      <footer
        className="bg-white text-[#111827] border-t border-gray-200"
        id="footer-section"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* LEFT SECTION */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3">
              <div className="flex flex-col gap-6">
                <img
                  src="/images/EPFdesk (1).svg"
                  alt="EPFdesk Logo"
                  width={150}
                  height={100}
                />

                <div className="flex flex-row gap-4">
                  {[
                    {
                      label: "YOUTUBE",
                      icon: FaYoutube,
                      url: "https://www.youtube.com/@EPFDesk",
                    },
                    {
                      label: "X",
                      icon: FaXTwitter,
                      url: "https://twitter.com/epfdesk",
                    },
                    {
                      label: "LINKEDIN",
                      icon: FaLinkedin,
                      url: "https://linkedin.com/company/epfdesk",
                    },
                    {
                      label: "INSTAGRAM",
                      icon: FaInstagram,
                      url: "https://www.instagram.com/epfdesk/",
                    },
                  ].map(({ label, icon: Icon, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 text-sm hover:bg-gray-50"
                    >
                      <Icon size={25}/>
                      {/* <span>{label}</span> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SECTION (5 COLUMNS NOW) */}
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
                {/* 1 — PF Consultants */}
                {/* <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    PF Consultants
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.pfConsultants.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* 2 — EPF Registration */}
                {/* <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    EPF Registration
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.epfRegistration.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* 3 — Monthly Filing */}
                {/* <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    Monthly Filing
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.monthlyFiling.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* 4 — PF Compliance */}
                {/* <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    PF Compliance
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerCities.pfCompliance.map(({ city, slug }) => (
                      <li key={slug}>
                        <Link
                          href={`/epf/${city.toLowerCase()}/${slug}`}
                          className="hover:underline hover:text-[#066]"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* 5 — Links (RESTORED) */}
                <div>
                  <h4 className="text-sm font-semibold mb-4 uppercase">
                    Links
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {footerLinks.map(({ label, url }) => (
                      <li key={url}>
                        <Link
                          href={url}
                          className="hover:underline hover:text-[#066]"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-300 my-6" />
        <div className="flex justify-center items-center">
          <img
            src="/images/EPFdesk (1).svg"
            alt="EPFdesk Logo"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <hr className="text-gray-300 my-6" />

        <div className="">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
            {[
              { title: "PF Consultants", list: footerCities.pfConsultants },
              // { title: "EPF Registration", list: footerCities.epfRegistration },
              // { title: "PF Monthly Filing", list: footerCities.monthlyFiling },
              { title: "PF Compliance", list: footerCities.pfCompliance },
            ].map(({ title, list }) => (
              <div key={title} className="leading-relaxed">
                {/* Title */}
                <div className="text-sm font-bold text-gray-800 tracking-wide uppercase mb-3">
                  {title}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-1 text-[12px] text-gray-600">
                  {list.map(({ city, slug }, i) => (
                    <span key={slug} className="flex items-center">
                      <Link
                        href={`/epf/${city.toLowerCase()}/${slug}`}
                        className="hover:text-[#066] hover:underline"
                      >
                        {`${title} in ${city}`}
                      </Link>

                      {i !== list.length - 1 && (
                        <span className="px-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
          {[
            { title: "ESIC Consultants", list: esicCities.consultants },
            // { title: "ESIC Registration", list: esicCities.registration },
            // { title: "ESIC Monthly Filing", list: esicCities.monthlyFiling },
            // { title: "ESIC Compliance", list: esicCities.compliance },
          ].map(({ title, list }) => (
            <div key={title}>
              <div className="text-sm font-semibold text-gray-900 uppercase mb-2">
                {title}
              </div>

              <div className="flex flex-wrap gap-2 text-[12px] text-gray-700">
                {list.map(({ city, slug }, i) => (
                  <span key={slug} className="flex items-center">
                    {/* ✔ CORRECT ROUTE FOR ESIC */}
                    <a
                      href={`/esicCompliance/${city.toLowerCase()}/${slug}`}
                      className="hover:text-[#066] hover:underline"
                    >
                      {`${title} in ${city}`}
                    </a>

                    {i !== list.length - 1 && (
                      <span className="px-2 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
          {[
            {
              title: "Industry Compliance",
              list: [
                {
                  label: "Automotive & Auto Ancillary",
                  slug: "automotive-and-auto-ancillary",
                },
                {
                  label: "Construction Sector Compliance",
                  slug: "construction-sector-compliance",
                },
                {
                  label: "eCommerce, Gig Economy & Cloud Kitchens",
                  slug: "eCommerce-gigEconomy-cloudKitchens-compliance",
                },
                {
                  label: "Education & Charitable Trust Compliance",
                  slug: "education-and-charitable-trust-compliance",
                },
                {
                  label: "Financial Services & Banking Sector Compliance",
                  slug: "financial-services-and-banking-sector-compliance",
                },
                {
                  label: "Food & Beverage Compliance",
                  slug: "food-and-bevarage-compliance",
                },
                {
                  label: "Healthcare & Pharma Statutory Compliance",
                  slug: "healthcare-and-pharma-statutory-compliance",
                },
                {
                  label: "Hospitality & F&B Compliance",
                  slug: "hospitality-and-fb-compliance",
                },
                {
                  label: "IT / ITES / GIC Compliance",
                  slug: "it-ites-gic-compliance",
                },
                {
                  label: "Logistics, Warehousing & Road Transport Compliance",
                  slug: "logistics-warehousing-roadTransport-compliance",
                },
                {
                  label: "Manufacturing & Factory Compliance",
                  slug: "manufacturing-and-factory-compliance",
                },
                {
                  label: "MSME Manufacturing & Trading Sector Compliance",
                  slug: "msme-manufacturing-trading-sector-compliance",
                },
                {
                  label: "Retail Sector Compliance",
                  slug: "retail-sector-compliance",
                },
                { label: "SME / MSME Compliance", slug: "sme-msme-compliance" },
                {
                  label: "Startup Labour & HR Compliance",
                  slug: "startup-labour-and-hr-compliance",
                },
                {
                  label: "Textile & Garments Compliance",
                  slug: "textile-and-garments-compliance",
                },
              ],
            },
          ].map(({ title, list }) => (
            <div key={title}>
              <div className="text-sm font-semibold text-gray-900 uppercase mb-2">
                {title}
              </div>

              <div className="flex flex-wrap gap-2 text-[12px] text-gray-700">
                {list.map(({ label, slug }, i) => (
                  <span key={slug} className="flex items-center">
                    {/* ✔ CORRECT ROUTE FORMAT */}
                    <a
                      href={`/${slug}`}
                      className="hover:text-[#066] hover:underline"
                    >
                      {label}
                    </a>

                    {i !== list.length - 1 && (
                      <span className="px-2 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
          {[
            {
              title: "District EPF & ESIC Compliance",
              list: [
                {
                  label: "Vadodara EPF & ESIC Compliance",
                  slug: "vadodara-epf-esic-compliance",
                },
                {
                  label: "Surat EPF & ESIC Compliance",
                  slug: "surat-epf-esic-compliance",
                },
                {
                  label: "Bharuch EPF & ESIC Compliance",
                  slug: "bharuch-epf-esic-compliance",
                },
                {
                  label: "Rajkot EPF & ESIC Compliance",
                  slug: "rajkot-epf-esic-compliance",
                },
                {
                  label: "Jamnagar EPF & ESIC Compliance",
                  slug: "jamnagar-epf-esic-compliance",
                },
                {
                  label: "Gandhinagar EPF & ESIC Compliance",
                  slug: "gandhinagar-epf-esic-compliance",
                },
                {
                  label: "Kutch EPF & ESIC Compliance",
                  slug: "kutch-epf-esic-compliance",
                },
                {
                  label: "Surendranagar EPF & ESIC Compliance",
                  slug: "surendranagar-epf-esic-compliance",
                },
                {
                  label: "Ahmedabad EPF & ESIC Compliance",
                  slug: "ahmedabad-epf-esic-compliance",
                },
                {
                  label: "Chennai EPF & ESIC Compliance",
                  slug: "chennai-epf-esic-compliance",
                },
                {
                  label: "Kanchipuram EPF & ESIC Compliance",
                  slug: "kanchipuram-epf-esic-compliance",
                },
                {
                  label: "Tiruvallur EPF & ESIC Compliance",
                  slug: "tiruvallur-epf-esic-compliance",
                },
                {
                  label: "Tiruppur EPF & ESIC Compliance",
                  slug: "tiruppur-epf-esic-compliance",
                },
                {
                  label: "Coimbatore EPF & ESIC Compliance",
                  slug: "coimbatore-epf-esic-compliance",
                },
                {
                  label: "Erode EPF & ESIC Compliance",
                  slug: "erode-epf-esic-compliance",
                },
                {
                  label: "Madurai EPF & ESIC Compliance",
                  slug: "madurai-epf-esic-compliance",
                },
                {
                  label: "Trichy EPF & ESIC Compliance",
                  slug: "trichy-epf-esic-compliance",
                },
                {
                  label: "Salem EPF & ESIC Compliance",
                  slug: "salem-epf-esic-compliance",
                },
                {
                  label: "Thoothukudi EPF & ESIC Compliance",
                  slug: "thoothukudi-epf-esic-compliance",
                },
                {
                  label: "Vellore EPF & ESIC Compliance",
                  slug: "vellore-epf-esic-compliance",
                },
                {
                  label: "Thanjavur EPF & ESIC Compliance",
                  slug: "thanjavur-epf-esic-compliance",
                },
                {
                  label: "Cuddalore EPF & ESIC Compliance",
                  slug: "cuddalore-epf-esic-compliance",
                },
                {
                  label: "Karur EPF & ESIC Compliance",
                  slug: "karur-epf-esic-compliance",
                },
                {
                  label: "Virudhunagar EPF & ESIC Compliance",
                  slug: "virudhunagar-epf-esic-compliance",
                },
                {
                  label: "Guntur EPF & ESIC Compliance",
                  slug: "guntur-epf-esic-compliance",
                },
                {
                  label: "Kurnool EPF & ESIC Compliance",
                  slug: "kurnool-epf-esic-compliance",
                },
                {
                  label: "Kadapa EPF & ESIC Compliance",
                  slug: "kadapa-epf-esic-compliance",
                },
                {
                  label: "Nellore EPF & ESIC Compliance",
                  slug: "nellore-epf-esic-compliance",
                },
                {
                  label: "Prakasam EPF & ESIC Compliance",
                  slug: "prakasam-epf-esic-compliance",
                },
                {
                  label: "Kakinada EPF & ESIC Compliance",
                  slug: "kakinada-epf-esic-compliance",
                },
                {
                  label: "Visakhapatnam EPF & ESIC Compliance",
                  slug: "visakhapatnam-epf-esic-compliance",
                },
                {
                  label: "Krishna EPF & ESIC Compliance",
                  slug: "krishna-epf-esic-compliance",
                },
                {
                  label: "Yadadri-Bhuvanagiri EPF & ESIC Compliance",
                  slug: "yadadri-bhuvanagiri-epf-esic-compliance",
                },
                {
                  label: "Khammam EPF & ESIC Compliance",
                  slug: "khammam-epf-esic-compliance",
                },
                {
                  label: "Tirupati EPF & ESIC Compliance",
                  slug: "tirupati-epf-esic-compliance",
                },
                {
                  label: "Chittoor EPF & ESIC Compliance",
                  slug: "chittoor-epf-esic-compliance",
                },
                {
                  label: "Bengaluru Urban EPF & ESIC Compliance",
                  slug: "bengaluru-urban-epf-esic-compliance",
                },
                {
                  label: "Bengaluru Rural EPF & ESIC Compliance",
                  slug: "bengaluru-rural-epf-esic-compliance",
                },
                {
                  label: "Ramanagara EPF & ESIC Compliance",
                  slug: "ramanagara-epf-esic-compliance",
                },
                {
                  label: "Chikkaballapur EPF & ESIC Compliance",
                  slug: "chikkaballapur-epf-esic-compliance",
                },
                {
                  label: "Kolar EPF & ESIC Compliance",
                  slug: "kolar-epf-esic-compliance",
                },
                {
                  label: "Mandya EPF & ESIC Compliance",
                  slug: "mandya-epf-esic-compliance",
                },
                {
                  label: "Chamarajanagar EPF & ESIC Compliance",
                  slug: "chamarajanagar-epf-esic-compliance",
                },
                {
                  label: "Hassan EPF & ESIC Compliance",
                  slug: "hassan-epf-esic-compliance",
                },
                {
                  label: "Dakshina Kannada EPF & ESIC Compliance",
                  slug: "dakshina-kannada-epf-esic-compliance",
                },
                {
                  label: "Udupi EPF & ESIC Compliance",
                  slug: "udupi-epf-esic-compliance",
                },
                {
                  label: "Uttara Kannada EPF & ESIC Compliance",
                  slug: "uttara-kannada-epf-esic-compliance",
                },
                {
                  label: "Chikkamagaluru EPF & ESIC Compliance",
                  slug: "chikkamagaluru-epf-esic-compliance",
                },
                {
                  label: "Kodagu EPF & ESIC Compliance",
                  slug: "kodagu-epf-esic-compliance",
                },
                {
                  label: "Shivamogga EPF & ESIC Compliance",
                  slug: "shivamogga-epf-esic-compliance",
                },
                {
                  label: "Dharwad EPF & ESIC Compliance",
                  slug: "dharwad-epf-esic-compliance",
                },
                {
                  label: "Hubballi-Dharwad EPF & ESIC Compliance",
                  slug: "hubballi-dharwad-epf-esic-compliance",
                },
                {
                  label: "Belagavi EPF & ESIC Compliance",
                  slug: "belagavi-epf-esic-compliance",
                },
                {
                  label: "Gadag EPF & ESIC Compliance",
                  slug: "gadag-epf-esic-compliance",
                },
                {
                  label: "Haveri EPF & ESIC Compliance",
                  slug: "haveri-epf-esic-compliance",
                },
                {
                  label: "Vijayapura EPF & ESIC Compliance",
                  slug: "vijayapura-epf-esic-compliance",
                },
                {
                  label: "Bagalkot EPF & ESIC Compliance",
                  slug: "bagalkot-epf-esic-compliance",
                },
                {
                  label: "Ballari EPF & ESIC Compliance",
                  slug: "ballari-epf-esic-compliance",
                },
                {
                  label: "Koppal EPF & ESIC Compliance",
                  slug: "koppal-epf-esic-compliance",
                },
                {
                  label: "Raichur EPF & ESIC Compliance",
                  slug: "raichur-epf-esic-compliance",
                },
                {
                  label: "Kalaburagi EPF & ESIC Compliance",
                  slug: "kalaburagi-epf-esic-compliance",
                },
                {
                  label: "Yadgir EPF & ESIC Compliance",
                  slug: "yadgir-epf-esic-compliance",
                },
                {
                  label: "Bidar EPF & ESIC Compliance",
                  slug: "bidar-epf-esic-compliance",
                },
                {
                  label: "Vijayanagara EPF & ESIC Compliance",
                  slug: "vijayanagara-epf-esic-compliance",
                },
                {
                  label: "Chitradurga EPF & ESIC Compliance",
                  slug: "chitradurga-epf-esic-compliance",
                },
                {
                  label: "Davanagere EPF & ESIC Compliance",
                  slug: "davanagere-epf-esic-compliance",
                },
                {
                  label: "Tumakuru EPF & ESIC Compliance",
                  slug: "tumakuru-epf-esic-compliance",
                },
                {
                  label: "Nanded EPF & ESIC Compliance",
                  slug: "nanded-epf-esic-compliance",
                },
                {
                  label: "Jalna EPF & ESIC Compliance",
                  slug: "jalna-epf-esic-compliance",
                },
                {
                  label: "Parbhani EPF & ESIC Compliance",
                  slug: "parbhani-epf-esic-compliance",
                },
                {
                  label: "Hingoli EPF & ESIC Compliance",
                  slug: "hingoli-epf-esic-compliance",
                },
                {
                  label: "Beed EPF & ESIC Compliance",
                  slug: "beed-epf-esic-compliance",
                },
                {
                  label: "Dharashiv (Osmanabad) EPF & ESIC Compliance",
                  slug: "dharashiv-osmanabad-epf-esic-compliance",
                },
                {
                  label: "Solapur EPF & ESIC Compliance",
                  slug: "solapur-epf-esic-compliance",
                },
                {
                  label: "Satara EPF & ESIC Compliance",
                  slug: "satara-epf-esic-compliance",
                },
                {
                  label: "Sangli EPF & ESIC Compliance",
                  slug: "sangli-epf-esic-compliance",
                },
                {
                  label: "Kolhapur EPF & ESIC Compliance",
                  slug: "kolhapur-epf-esic-compliance",
                },
                {
                  label: "Ahmednagar EPF & ESIC Compliance",
                  slug: "ahmednagar-epf-esic-compliance",
                },
                {
                  label: "Jalgaon EPF & ESIC Compliance",
                  slug: "jalgaon-epf-esic-compliance",
                },
                {
                  label: "Dhule EPF & ESIC Compliance",
                  slug: "dhule-epf-esic-compliance",
                },
                {
                  label: "Nandurbar EPF & ESIC Compliance",
                  slug: "nandurbar-epf-esic-compliance",
                },
                {
                  label: "Sindhudurg EPF & ESIC Compliance",
                  slug: "sindhudurg-epf-esic-compliance",
                },
                {
                  label: "Mumbai Suburban EPF & ESIC Compliance",
                  slug: "mumbai-suburban-epf-esic-compliance",
                },
                {
                  label: "Gadchiroli EPF & ESIC Compliance",
                  slug: "gadchiroli-epf-esic-compliance",
                },
                {
                  label: "Chandrapur EPF & ESIC Compliance",
                  slug: "chandrapur-epf-esic-compliance",
                },
                {
                  label: "Bhandara EPF & ESIC Compliance",
                  slug: "bhandara-epf-esic-compliance",
                },
                {
                  label: "Gondia EPF & ESIC Compliance",
                  slug: "gondia-epf-esic-compliance",
                },
                {
                  label: "Washim EPF & ESIC Compliance",
                  slug: "washim-epf-esic-compliance",
                },
                {
                  label: "Latur EPF & ESIC Compliance",
                  slug: "latur-epf-esic-compliance",
                },
                {
                  label: "Yavatmal EPF & ESIC Compliance",
                  slug: "yavatmal-epf-esic-compliance",
                },
                {
                  label: "Aurangabad EPF & ESIC Compliance",
                  slug: "aurangabad-epf-esic-compliance",
                },
                {
                  label: "Noida EPF & ESIC Compliance",
                  slug: "noida-epf-esic-compliance",
                },
                {
                  label: "Ghaziabad EPF & ESIC Compliance",
                  slug: "ghaziabad-epf-esic-compliance",
                },
                {
                  label: "Kanpur EPF & ESIC Compliance",
                  slug: "kanpur-epf-esic-compliance",
                },
                {
                  label: "Lucknow EPF & ESIC Compliance",
                  slug: "lucknow-epf-esic-compliance",
                },
                {
                  label: "Varanasi EPF & ESIC Compliance",
                  slug: "varanasi-epf-esic-compliance",
                },
                {
                  label: "Agra EPF & ESIC Compliance",
                  slug: "agra-epf-esic-compliance",
                },
                {
                  label: "Meerut EPF & ESIC Compliance",
                  slug: "meerut-epf-esic-compliance",
                },
                {
                  label: "Aligarh EPF & ESIC Compliance",
                  slug: "aligarh-epf-esic-compliance",
                },
                {
                  label: "Prayagraj EPF & ESIC Compliance",
                  slug: "prayagraj-epf-esic-compliance",
                },
                {
                  label: "Gorakhpur EPF & ESIC Compliance",
                  slug: "gorakhpur-epf-esic-compliance",
                },
                {
                  label: "Moradabad EPF & ESIC Compliance",
                  slug: "moradabad-epf-esic-compliance",
                },
                {
                  label: "Bareilly EPF & ESIC Compliance",
                  slug: "bareilly-epf-esic-compliance",
                },
                {
                  label: "Azamgarh EPF & ESIC Compliance",
                  slug: "azamgarh-epf-esic-compliance",
                },
                {
                  label: "Saharanpur EPF & ESIC Compliance",
                  slug: "saharanpur-epf-esic-compliance",
                },
                {
                  label: "Mathura EPF & ESIC Compliance",
                  slug: "mathura-epf-esic-compliance",
                },
                {
                  label: "Jhansi EPF & ESIC Compliance",
                  slug: "jhansi-epf-esic-compliance",
                },
                {
                  label: "Muzaffarnagar EPF & ESIC Compliance",
                  slug: "muzaffarnagar-epf-esic-compliance",
                },
                {
                  label: "Firozabad EPF & ESIC Compliance",
                  slug: "firozabad-epf-esic-compliance",
                },
                {
                  label: "Budaun EPF & ESIC Compliance",
                  slug: "budaun-epf-esic-compliance",
                },
                {
                  label: "Bijnor EPF & ESIC Compliance",
                  slug: "bijnor-epf-esic-compliance",
                },
                {
                  label: "Ayodhya EPF & ESIC Compliance",
                  slug: "ayodhya-epf-esic-compliance",
                },
                {
                  label: "Mainpuri EPF & ESIC Compliance",
                  slug: "mainpuri-epf-esic-compliance",
                },
                {
                  label: "Sonbhadra EPF & ESIC Compliance",
                  slug: "sonbhadra-epf-esic-compliance",
                },
                {
                  label: "Mirzapur EPF & ESIC Compliance",
                  slug: "mirzapur-epf-esic-compliance",
                },
                // {
                //   label: "Raebareli EPF & ESIC Compliance",
                //   slug: "raebareli-epf-esic-compliance",
                // },
                {
                  label: "Indore EPF & ESIC Compliance",
                  slug: "indore-epf-esic-compliance",
                },
                {
                  label: "Bhopal EPF & ESIC Compliance",
                  slug: "bhopal-epf-esic-compliance",
                },
                {
                  label: "Jabalpur EPF & ESIC Compliance",
                  slug: "jabalpur-epf-esic-compliance",
                },
                {
                  label: "Gwalior EPF & ESIC Compliance",
                  slug: "gwalior-epf-esic-compliance",
                },
                {
                  label: "Ujjain EPF & ESIC Compliance",
                  slug: "ujjain-epf-esic-compliance",
                },
                {
                  label: "Dhar EPF & ESIC Compliance",
                  slug: "dhar-epf-esic-compliance",
                },
                {
                  label: "Dewas EPF & ESIC Compliance",
                  slug: "dewas-epf-esic-compliance",
                },
                {
                  label: "Ratlam EPF & ESIC Compliance",
                  slug: "ratlam-epf-esic-compliance",
                },
                {
                  label: "Burhanpur EPF & ESIC Compliance",
                  slug: "burhanpur-epf-esic-compliance",
                },
                {
                  label: "UP Thrust Zones EPF & ESIC Compliance",
                  slug: "up-thrust-zones-epf-esic-compliance",
                },
                {
                  label: "Korba EPF & ESIC Compliance",
                  slug: "korba-epf-esic-compliance",
                },
                {
                  label: "Raigarh EPF & ESIC Compliance",
                  slug: "raigarh-epf-esic-compliance",
                },
                {
                  label: "Chhattisgarh Districts EPF & ESIC",
                  slug: "chhattisgarh-emerging-districts-epf-esic-compliance",
                },
                {
                  label: "Chhattisgarh New Districts EPF & ESIC",
                  slug: "chhattisgarh-new-districts-epf-esic-compliance",
                },
                {
                  label: "Jharsuguda EPF & ESIC Compliance",
                  slug: "jharsuguda-epf-esic-compliance",
                },
                {
                  label: "Jajpur (Kalinganagar) EPF & ESIC Compliance",
                  slug: "jajpur-epf-esic-compliance",
                },
                {
                  label: "Keonjhar Mining EPF & ESIC Compliance",
                  slug: "keonjhar-epf-esic-compliance",
                },
                {
                  label: "Bhubaneswar (Khordha) EPF & ESIC Compliance",
                  slug: "khordha-bhubaneswar-epf-esic-compliance",
                },
                {
                  label: "Rourkela (Sundargarh) EPF & ESIC Compliance",
                  slug: "sundargarh-rourkela-epf-esic-compliance",
                },
                {
                  label: "Angul EPF & ESIC Compliance",
                  slug: "angul-epf-esic-compliance",
                },
                {
                  label: "Paradip (Jagatsinghpur) EPF & ESIC Compliance",
                  slug: "jagatsinghpur-paradip-epf-esic-compliance",
                },
                {
                  label: "Balasore EPF & ESIC Compliance",
                  slug: "balasore-epf-esic-compliance",
                },
                {
                  label: "Ganjam (Berhampur & Gopalpur) EPF & ESIC Compliance",
                  slug: "ganjam-berhampur-gopalpur-epf-esic-compliance",
                },
                {
                  label: "Kolkata & Rajarhat EPF & ESIC Compliance",
                  slug: "kolkata-rajarhat-epf-esic-compliance",
                },
                {
                  label: "Howrah EPF & ESIC Compliance",
                  slug: "howrah-epf-esic-compliance",
                },
                {
                  label: "Kharagpur (Paschim Medinipur) EPF & ESIC Compliance",
                  slug: "kharagpur-epf-esic-compliance",
                },
                {
                  label: "Durgapur EPF & ESIC Compliance",
                  slug: "durgapur-asansol-epf-esic-compliance",
                },
                {
                  label: "Haldia EPF & ESIC Compliance",
                  slug: "haldia-epf-esic-compliance",
                },
                {
                  label: "North 24 parganas EPF & ESIC Compliance",
                  slug: "north-24-parganas-epf-esic-compliance",
                },
                {
                  label: "West Bengal EPF & ESIC Compliance",
                  slug: "west-bengal-epf-esic-compliance",
                },
                {
                  label: "Bokaro EPF & ESIC Compliance",
                  slug: "bokaro-epf-esic-compliance",
                },
                {
                  label: "Dhanbad EPF & ESIC Compliance",
                  slug: "dhanbad-epf-esic-compliance",
                },
                {
                  label: "Jamshedpur EPF & ESIC Compliance",
                  slug: "jamshedpur-epf-esic-compliance",
                },
                {
                  label: "Jharkand districts EPF & ESIC Compliance",
                  slug: "jharkhand-balance-districts-epf-esic-compliance",
                },
                {
                  label: "Ranchi EPF & ESIC Compliance",
                  slug: "ranchi-epf-esic-compliance",
                },
                {
                  label: "Patna EPF & ESIC Compliance",
                  slug: "patna-epf-esic-compliance",
                },
                {
                  label: "Begusarai EPF & ESIC Compliance",
                  slug: "begusarai-epf-esic-compliance",
                },
                {
                  label: "Muzaffarpur EPF & ESIC",
                  slug: "muzaffarpur-epf-esic-compliance",
                },
                {
                  label: "Bihar districts EPF & ESIC Compliance",
                  slug: "bihar-balance-districts-epf-esic-compliance",
                },
                {
                  label: "Gurugram EPF & ESIC Compliance",
                  slug: "gurugram-epf-esic-compliance",
                },
                {
                  label: "Faridabad EPF & ESIC Compliance",
                  slug: "faridabad-epf-esic-compliance",
                },
                {
                  label: "Panipat EPF & ESIC Compliance",
                  slug: "panipat-epf-esic-compliance",
                },
                {
                  label: "Jhajjar EPF & ESIC Compliance",
                  slug: "jhajjar-epf-esic-compliance",
                },
                {
                  label: "Haryana districts EPF & ESIC Compliance",
                  slug: "haryana-balance-districts-epf-esic-compliance",
                },
                {
                  label: "Ludiana EPF & ESIC Compliance",
                  slug: "ludhiana-epf-esic-compliance",
                },
                {
                  label: "Jalandhar EPF & ESIC Compliance",
                  slug: "jalandhar-epf-esic-compliance",
                },
                {
                  label: "Mohali EPF & ESIC Compliance",
                  slug: "mohali-epf-esic-compliance",
                },
                {
                  label: "Punjab districts EPF & ESIC Compliance",
                  slug: "punjab-balance-districts-epf-esic-compliance",
                },
                {
                  label: "Guwahati EPF & ESIC Compliance",
                  slug: "guwahati-epf-esic-compliance",
                },
                {
                  label: "Sikkim EPF & ESIC Compliance",
                  slug: "sikkim-epf-esic-compliance",
                },
                {
                  label: "Meghalaya EPF & ESIC Compliance",
                  slug: "meghalaya-epf-esic-compliance",
                },
                {
                  label: "Northeast India EPF & ESIC Compliance",
                  slug: "northeast-india-epf-esic-compliance",
                },
                {
                  label: "Haridwar EPF & ESIC Compliance",
                  slug: "haridwar-epf-esic-compliance",
                },
                {
                  label: "Pantnagar EPF & ESIC Compliance",
                  slug: "pantnagar-epf-esic-compliance",
                },
                {
                  label: "Uttarakand hill districts EPF & ESIC Compliance",
                  slug: "uttarakhand-hill-districts-epf-esic-compliance",
                },
                {
                  label: "Baddi EPF & ESIC Compliance",
                  slug: "baddi-epf-esic-compliance",
                },
                {
                  label: "Paonta Sahib Kala AMB EPF & ESIC Compliance",
                  slug: "paonta-sahib-kala-amb-epf-esic-compliance",
                },
                {
                  label: "Himachal districts EPF & ESIC Compliance",
                  slug: "himachal-final-balance-epf-esic-compliance",
                },
                {
                  label: "Kochi EPF & ESIC Compliance",
                  slug: "kochi-ernakulam-epf-esic-compliance",
                },
                {
                  label: "Thiruvananthapuram EPF & ESIC Compliance",
                  slug: "thiruvananthapuram-epf-esic-compliance",
                },
                {
                  label: "Kerala EPF & ESIC Compliance",
                  slug: "kerala-balance-epf-esic-compliance",
                },
              ],
            },
          ].map(({ title, list }) => (
            <div key={title}>
              <div className="text-sm font-semibold text-gray-900 uppercase mb-2">
                {title}
              </div>

              <div className="flex flex-wrap gap-2 text-[12px] text-gray-700">
                {list.map(({ label, slug }, i) => (
                  <span key={slug} className="flex items-center">
                    <a
                      href={`/${slug}`}
                      className="hover:text-[#066] hover:underline"
                    >
                      {label}
                    </a>
                    {i !== list.length - 1 && (
                      <span className="px-2 text-gray-400">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-gray-200" />
        <div className="text-sm my-5 text-center text-[#6b7280]">
          © 2025 EPFdesk.com | All rights reserved.
        </div>
      </footer>
    </>
  );
}
