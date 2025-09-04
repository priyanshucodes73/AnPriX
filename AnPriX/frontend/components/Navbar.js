"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-lg border-b border-purple-500 z-50">
      <h1 className="text-2xl font-bold text-purple-400">AnPriX</h1>
      <div className="flex gap-6 text-lg">
        <Link href="/" className="hover:text-purple-300 transition">
          Home
        </Link>
        <Link href="/tournaments" className="hover:text-purple-300 transition">
          Tournaments
        </Link>
        <Link href="/teams" className="hover:text-purple-300 transition">
          Teams
        </Link>
        <Link href="/live" className="hover:text-purple-300 transition">
          Live
        </Link>
      </div>
    </nav>
  );
}
