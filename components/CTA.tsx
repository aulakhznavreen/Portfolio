"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-20 bg-black text-center text-white relative overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >

        {/* 🔥 HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Let’s Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Something Powerful Together
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          I design AI-powered systems and modern web applications that automate
          workflows, improve user experience, and scale efficiently.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          {/* MAIN CTA */}
          <a
            href="mailto:aulakhznavreen@gmail.com"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg"
          >
            Work With Me
          </a>

          {/* SECONDARY */}
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            View Projects
          </a>

        </div>

        {/* DIRECT CONTACT */}
        <div className="mt-10 flex justify-center gap-6">

          <a
            href="https://wa.me/16475141494"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 hover:shadow-green-500/50 transition"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="mailto:aulakhznavreen@gmail.com"
            className="p-5 rounded-full bg-white/10 backdrop-blur text-white shadow-lg hover:scale-110 transition"
          >
            <FaEnvelope size={20} />
          </a>

        </div>

      </motion.div>
    </section>
  );
}