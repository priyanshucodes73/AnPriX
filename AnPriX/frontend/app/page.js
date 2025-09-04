"use client";
import NeonButton from "../components/NeonButton";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        src="./Gaming_Tournament_Website_Video.mp4" // Put your video in frontend/public/video.mp4
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-extrabold text-purple-400 drop-shadow-lg">
          Welcome to AnPriX
        </h1>
        <p className="mt-4 text-xl text-gray-200 max-w-2xl">
          The ultimate esports tournament hub  Watch live, track matches, and
          follow your favorite teams.
        </p>
        <div className="mt-8 flex gap-6">
          <NeonButton>Explore Tournaments</NeonButton>
          <NeonButton>Watch Live</NeonButton>
        </div>
      </div>
    </main>
  );
}
