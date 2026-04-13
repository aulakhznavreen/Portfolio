"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const phrases = [
    "AI-Powered Systems",
    "Scalable Digital Products",
    "Automation That Works 24/7",
  ];

  const [index, setIndex] = useState(0);

  // fix hydration (particles only client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // navbar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 💫 PARTICLES (CLIENT ONLY) */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: ["0%", "-30%", "0%"],
                x: ["0%", "10%", "0%"],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* 🧠 NA BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[200px] md:text-[400px] font-bold tracking-widest text-white/5 select-none">
          NA
        </div>
      </div>

      {/* ⚡ ENERGY RING */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <div className="absolute w-[300px] md:w-[480px] h-[300px] md:h-[480px] rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute w-[260px] md:w-[420px] h-[260px] md:h-[420px] rounded-full border border-cyan-400/30" />

        <div className="absolute w-[140px] md:w-[220px] h-[140px] md:h-[220px] rounded-full border border-cyan-400/10" />

        {/* rotating dot */}
        <motion.div
          className="absolute w-[260px] md:w-[420px] h-[260px] md:h-[420px]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]" />
        </motion.div>

        {/* second dot */}
        <motion.div
          className="absolute w-[260px] md:w-[420px] h-[260px] md:h-[420px]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa,0_0_20px_#60a5fa]" />
        </motion.div>

      </div>

      {/* 🔝 NAVBAR */}
      <motion.div
        animate={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.1)"
            : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-4">
          {/* ✅ FIXED (single anchor only) */}
          <a href="/" className="font-semibold tracking-wide text-white">
            NAVREEN AULAKH{" "}
            <span className="text-white/40">•</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              AI Frontend Developer
            </span>
          </a>
        </div>
      </motion.div>

      {/* 📞 FLOATING CONTACT */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/16475141494"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-green-500/50 transition"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href="mailto:aulakhznavreen@gmail.com"
          className="p-4 rounded-full bg-white/10 backdrop-blur text-white shadow-lg hover:scale-110 transition"
        >
          <FaEnvelope size={18} />
        </a>
      </div>

      {/* 🧠 MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 pt-32 min-h-screen flex items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>

          {/* 🔁 ROTATING HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-xl">
            I Build{" "}
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
            >
              {phrases[index]}
            </motion.span>
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-lg">
            I design and develop AI-driven systems that automate workflows,
            capture leads, and run businesses 24/7 — turning ideas into scalable
            digital products.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg"
            >
              View Projects
            </a>

            <a
              href="mailto:aulakhznavreen@gmail.com"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-10 text-sm text-white/50">
            AI Developer • Frontend Engineer • System Builder <br />
            <span className="text-white/70">
              Open to Full-Time Opportunities & Collaborations
            </span>
          </p>

        </motion.div>
      </div>
    </section>
  );
}