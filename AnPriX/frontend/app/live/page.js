
"use client";
import Sidebar from "@/components/Sidebar";

export default function Live() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">📡 Live Stream</h1>
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
          <iframe
            src="https://player.twitch.tv/?channel=riotgames&parent=localhost"
            allowFullScreen
            width="100%"
            height="100%"
          />
        </div>
        <p className="text-zinc-400 mt-4">Tip: replace <code>channel=riotgames</code> with your Twitch channel name.</p>
      </section>
    </main>
  );
}
