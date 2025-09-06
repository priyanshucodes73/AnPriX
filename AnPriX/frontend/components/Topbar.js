"use client";
import {
  Home,
  EmojiEvents,
  SportsEsports,
  Leaderboard,
  Event,
  Celebration,
  MoreHoriz,
} from "@mui/icons-material";

import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { name: "Home", icon: <Home fontSize="small" />, path: "/" },
    {
      name: "Competitions",
      icon: <EmojiEvents fontSize="small" />,
      path: "/tournaments",
    },
    {
      name: "Fantasy",
      icon: <SportsEsports fontSize="small" />,
      path: "/fantasy",
    },
    {
      name: "Ranking",
      icon: <Leaderboard fontSize="small" />,
      path: "/ranking",
    },
    { name: "Schedule", icon: <Event fontSize="small" />, path: "/schedule" },
    {
      name: "Festival",
      icon: <Celebration fontSize="small" />,
      path: "/festival",
    },
    { name: "More", icon: <MoreHoriz fontSize="small" />, path: "/more" },
  ];

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-black/80 backdrop-blur-lg border-b border-purple-500 z-50">
      {/* Left: Logo (clickable) */}
      <div className="flex items-center gap-2 md:gap-3">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
          prefetch={false}
        >
          AnPriX
        </Link>
        <Link href="/" prefetch={false}>
          <img
            src="./cropped_circle_image (1).png"
            alt="AnPriX Logo"
            className="rounded-full w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] aspect-square object-cover border-2 border-purple-400 shadow hover:opacity-80 transition"
            style={{ background: "#222" }}
          />
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden ml-2 text-purple-400 focus:outline-none z-50"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Open navigation menu"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Middle: Nav */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-300 z-40 md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-start md:gap-8 md:transition-none
      ${menuOpen ? "block" : "hidden"} md:flex`}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition text-lg md:text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Right: Login only (language selection removed) */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30">
          Login
        </button>
      </div>

      {/* Mobile login button */}
      <div className="md:hidden flex items-center ml-2">
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30">
          Login
        </button>
      </div>
    </header>
  );
}
