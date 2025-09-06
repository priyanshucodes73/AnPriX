"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

// LanguageDropup component for dropup style language selection
function LanguageDropup() {
  const [open, setOpen] = useState(false);
  const dropupRef = useRef(null);
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "ur", label: "Urdu" },
    { code: "ar", label: "Arabic" },
    { code: "zh", label: "Chinese" },
    { code: "ja", label: "Japanese" },
    { code: "ru", label: "Russian" },
    { code: "pt", label: "Portuguese" },
  ];
  const [selected, setSelected] = useState(languages[0]);

  // Close dropup on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropupRef.current && !dropupRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative" ref={dropupRef}>
      <button
        className="flex items-center gap-2 px-3 py-1 rounded bg-black text-white border border-gray-600 hover:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="material-icons text-base">language</span>
        {selected.label}
        <svg
          className={`ml-1 w-3 h-3 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul className="absolute bottom-10 right-0 mb-2 w-40 bg-black text-white rounded shadow-lg border border-gray-700 z-50 animate-fadeInUp">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-800 focus:bg-gray-800 transition ${
                  selected.code === lang.code ? "bg-gray-900" : ""
                }`}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
  { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
  { name: "Discord", href: "https://discord.com", icon: <FaDiscord /> },
  { name: "YouTube", href: "https://youtube.com", icon: <FaYoutube /> },
  { name: "Telegram", href: "https://telegram.org", icon: <FaTelegramPlane /> },
  { name: "Twitter", href: "https://twitter.com", icon: <FaTwitter /> },
];

const footerLinks = [
  ["FAQ", "Press Room", "Club Program"],
  [
    "Rules & Regulations",
    "Cookie Policy",
    "Privacy Policy",
    "Terms & Conditions",
  ],
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-[#111] text-white pt-10 pb-4 px-2 sm:px-4 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-800 pb-8 w-full">
        {/* Left: Customer Service */}
        <div className="flex-1 mb-6 md:mb-0 min-w-[180px]">
          <div className="font-semibold text-gold-400 text-lg mb-2">
            AnPrix Customer Service
          </div>
          <div className="text-gray-300">
            Phone:{" "}
            <span className="text-gold-300 font-bold">+91 7667284121</span>
          </div>
        </div>
        {/* Center: Logo/Text */}
        <div className="flex-1 flex flex-col items-center mb-6 md:mb-0 min-w-[180px]">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
            prefetch={false}
          >
            AnPriX
          </Link>
          <Link href="/" prefetch={false} className="mt-2">
            <img
              src="./cropped_circle_image (1).png"
              alt="AnPriX Logo"
              className="rounded-full w-12 h-12 object-cover border-2 border-purple-400 shadow hover:opacity-80 transition"
              style={{ background: "#222" }}
            />
          </Link>
        </div>
        {/* Right: Columns of Links */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 justify-end min-w-[180px]">
          {footerLinks.map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-gold-400 transition-colors duration-200 font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-xs text-gray-400 w-full">
        {/* Bottom left */}
        <div className="order-2 md:order-1">
          © 2025 AnPrix. All Rights Reserved.
        </div>
        {/* Bottom center: Socials */}
        <div className="flex gap-3 order-1 md:order-2 flex-wrap justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 hover:bg-yellow-500 text-white hover:text-black w-9 h-9 flex items-center justify-center shadow transition-colors duration-200"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Bottom right: Language dropup */}
        <div className="order-3 w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0 relative">
          <LanguageDropup />
        </div>
      </div>
    </footer>
  );
}
