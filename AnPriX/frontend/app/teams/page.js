
"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/api/teams").then(r=>r.json()).then(setTeams);
  },[]);

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">👥 Teams</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map(team => (
            <div key={team.id} className="rounded-2xl p-6 bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition">
              <h2 className="text-2xl font-semibold">{team.name}</h2>
              <p className="text-zinc-400 mt-1">Country: {team.country}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
