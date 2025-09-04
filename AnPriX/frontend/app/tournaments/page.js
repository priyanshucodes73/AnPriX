
"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Tournaments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    fetch("http://localhost:4000/api/tournaments")
      .then(r=>r.json())
      .then(setData)
      .catch(()=>setError("Could not reach backend at http://localhost:4000"))
      .finally(()=>setLoading(false));
  },[]);

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">🏆 Tournaments</h1>
        {loading && <p>Loading…</p>}
        {error && <p className="text-red-400">{error}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(t=> (
            <div key={t.id} className="rounded-2xl p-6 bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold">{t.name}</h2>
              <p className="text-zinc-400 mt-1">Game: {t.game}</p>
              <p className="text-zinc-400">Date: {t.date}</p>
              <div className="text-yellow-400 font-medium mt-2">Prize: ${t.prize.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
