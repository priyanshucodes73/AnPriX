import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// --- Auth routes with secure cookie handling ---
app.post("/api/signup", (req, res) => {
  // Simulate user creation
  const userId = Math.floor(Math.random() * 1000000);
  res.cookie("anprix.sid", String(userId), {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });
  res.json({ ok: true, userId });
});

app.post("/api/login", (req, res) => {
  // Simulate login
  const userId = req.body.userId || Math.floor(Math.random() * 1000000);
  res.cookie("anprix.sid", String(userId), {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });
  res.json({ ok: true, userId });
});

// In-memory mock data
const tournaments = [
  {
    id: 1,
    name: "Valorant Masters",
    game: "VALORANT",
    date: "2025-10-10",
    prize: 100000,
  },
  { id: 2, name: "CS2 Clash", game: "CS2", date: "2025-11-02", prize: 50000 },
  {
    id: 3,
    name: "League Royale",
    game: "League of Legends",
    date: "2025-12-01",
    prize: 75000,
  },
];

const teams = [
  { id: 1, name: "AnPriX Esports", country: "IN" },
  { id: 2, name: "Neon Titans", country: "US" },
  { id: 3, name: "Shadow Wolves", country: "KR" },
];

app.get("/", (req, res) => {
  res.json({ ok: true, message: "AnPriX API is running" });
});

app.get("/api/tournaments", (req, res) => {
  res.json(tournaments);
});

app.get("/api/teams", (req, res) => {
  res.json(teams);
});

app.get("/api/matches/today", (req, res) => {
  res.json([
    {
      id: 101,
      tournamentId: 1,
      team1: "AnPriX Esports",
      team2: "Neon Titans",
      time: "17:00 IST",
      status: "upcoming",
    },
    {
      id: 102,
      tournamentId: 2,
      team1: "Shadow Wolves",
      team2: "AnPriX Esports",
      time: "20:30 IST",
      status: "upcoming",
    },
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ AnPriX backend running on http://localhost:${PORT}`);
});
