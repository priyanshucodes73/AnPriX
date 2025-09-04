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

export default function Topbar() {
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
    <header className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-lg border-b border-purple-500 z-50">
      {/* Left: Logo */}
      <h1 className="text-2xl font-bold text-purple-400">AnPriX</h1>

      {/* Middle: Nav */}
      <nav className="flex gap-8">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="flex items-center gap-2 text-gray-300 hover:text-purple-300 transition"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Right: Language + Login */}
      <div className="flex items-center gap-6 text-sm">
        <span className="cursor-pointer hover:text-purple-300">EN</span>
        <span className="cursor-pointer hover:text-purple-300">عربي</span>
        <span className="cursor-pointer hover:text-purple-300">中文</span>
        <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30">
          Login
        </button>
      </div>
    </header>
  );
}
