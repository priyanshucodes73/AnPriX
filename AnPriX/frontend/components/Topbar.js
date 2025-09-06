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
import { useState, useRef, useEffect } from "react";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreBtnRef = useRef(null);
  const morePopupRef = useRef(null);
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
  ];

  // More popup menu items (example, you can adjust as needed)
  const moreMenu = [
    { name: "News", icon: <Home fontSize="small" />, path: "/news" },
    {
      name: "Gallery",
      icon: <EmojiEvents fontSize="small" />,
      path: "/gallery",
    },
    { name: "About", icon: <SportsEsports fontSize="small" />, path: "/about" },
    {
      name: "Partners",
      icon: <Leaderboard fontSize="small" />,
      path: "/partners",
    },
  ];

  // Close popup on outside click
  useEffect(() => {
    if (!moreOpen) return;
    function handleClick(e) {
      if (
        morePopupRef.current &&
        !morePopupRef.current.contains(e.target) &&
        moreBtnRef.current &&
        !moreBtnRef.current.contains(e.target)
      ) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

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

      {/* Nav: Dropdown on mobile (top-left, full width, left-aligned), horizontal on desktop */}
      <nav
        className={`md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-start md:gap-8 md:transition-none
        ${
          menuOpen
            ? "fixed left-0 top-[64px] w-full bg-black/95 flex flex-col items-start px-6 py-6 gap-6 z-40"
            : "hidden"
        } md:flex`}
        style={{ minHeight: menuOpen ? "calc(100vh - 64px)" : undefined }}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition text-lg md:text-sm font-medium w-full md:w-auto"
            style={{ justifyContent: "flex-start" }}
            onClick={() => setMenuOpen(false)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
        {/* More menu button */}
        <div className="relative w-full md:w-auto">
          <button
            ref={moreBtnRef}
            className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition text-lg md:text-sm font-medium w-full md:w-auto px-2 py-1"
            onClick={(e) => {
              e.preventDefault();
              setMoreOpen((v) => !v);
            }}
            aria-haspopup="true"
            aria-expanded={moreOpen}
            type="button"
          >
            <MoreHoriz fontSize="small" />
            <span>More</span>
          </button>
          {/* Popup dropdown */}
          {moreOpen && (
            <div
              ref={morePopupRef}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in"
              style={{ minWidth: "180px" }}
            >
              {moreMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-purple-100 transition w-full"
                  onClick={() => setMoreOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Right: Login only (language selection removed) */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <button
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </div>

      {/* Mobile login button */}
      <div className="md:hidden flex items-center ml-2">
        <button
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
      </div>
    </header>
  );
}
