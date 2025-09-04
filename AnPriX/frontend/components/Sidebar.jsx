
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ href, children }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-4 py-3 rounded-xl transition transform hover:scale-[1.02] ${active ? "bg-blue-600" : "bg-zinc-800 hover:bg-zinc-700"}`}
    >
      {children}
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-zinc-900/90 backdrop-blur border-r border-zinc-800 min-h-screen p-4 space-y-4">
      <div className="text-3xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AnPriX</span>
      </div>
      <nav className="grid gap-2">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/tournaments">Tournaments</NavItem>
        <NavItem href="/teams">Teams</NavItem>
        <NavItem href="/live">Live</NavItem>
      </nav>
    </aside>
  );
}
