import "./globals.css";
import { Orbitron } from "next/font/google";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "AnPriX",
  description: "Gaming Tournament Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className + " bg-black text-white"}>
        <Topbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
