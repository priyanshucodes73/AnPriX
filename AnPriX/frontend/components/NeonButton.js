"use client";
import { motion } from "framer-motion";

export default function NeonButton({ children }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(168,85,247,0.8)",
      }}
      className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-md"
    >
      {children}
    </motion.button>
  );
}
