"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      name: "React / Next.js",
      desc: "I build scalable, high-performance web applications using modern React and Next.js architecture.",
    },
    {
      name: "AI Integrations",
      desc: "I integrate AI capabilities into real-world products to automate workflows and enhance user experience.",
    },
    {
      name: "OpenAI APIs",
      desc: "Experienced in building LLM-powered applications using OpenAI APIs for intelligent automation.",
    },
    {
      name: "Automation Systems",
      desc: "I design systems that automate business processes and reduce manual effort significantly.",
    },
    {
      name: "Frontend Engineering",
      desc: "I create clean, responsive, and maintainable interfaces focused on usability and performance.",
    },
    {
      name: "UI/UX Design",
      desc: "I design intuitive, visually engaging interfaces that improve user interaction and retention.",
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-20 bg-black text-white relative overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* 🧠 LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About Me
          </h2>

          <p className="mt-6 text-white/70 leading-relaxed">
            I’m an AI-focused developer with a background in Information Technology
            and Innovation Design from Conestoga College (Advanced Diploma - ITID).
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Since graduating, I’ve been freelancing — helping individuals and
            businesses build AI-powered systems, modern web applications, and
            automation-driven solutions that improve efficiency and user experience.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            My work combines intelligent systems with clean, scalable interfaces —
            focusing on real-world usability, performance, and long-term maintainability.
          </p>

          {/* 🔥 SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <div key={i} className="relative group">

                {/* BUTTON */}
                <div
                  className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-white/70 
                  hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-white 
                  hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] 
                  transition duration-300 cursor-default"
                >
                  {skill.name}
                </div>

                {/* TOOLTIP */}
                <div
                  className="absolute bottom-[120%] left-1/2 -translate-x-1/2 
                  w-[240px] text-xs text-white/80 bg-black/80 backdrop-blur-md 
                  border border-white/10 rounded-lg px-3 py-2 opacity-0 
                  group-hover:opacity-100 group-hover:translate-y-[-5px] 
                  transition duration-300 pointer-events-none shadow-lg"
                >
                  {skill.desc}
                </div>

              </div>
            ))}
          </div>
        </motion.div>

        {/* ⚡ RIGHT SIDE (LIVE SYSTEM FEEL) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-[300px] md:w-[380px] h-[320px] md:h-[400px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 relative overflow-hidden">

            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-2xl" />

            <div className="relative z-10 space-y-6">

              {/* fake header */}
              <div className="space-y-2">
                <motion.div
                  className="h-3 w-2/3 bg-white/20 rounded"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="h-3 w-1/2 bg-white/10 rounded"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                />
              </div>

              {/* animated bars */}
              <div className="space-y-3">
                {[70, 90, 50].map((width, i) => (
                  <motion.div
                    key={i}
                    className="h-2 rounded bg-gradient-to-r from-purple-500 to-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>

              {/* grid blocks */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-10 bg-white/10 rounded"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}