"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Fitness Planner",
    type: "chat",
    link: "#",
    details: [
      "Generates personalized meal plans",
      "LLM-based workout recommendations",
      "Reduces planning time by ~70%",
      "Built with React + OpenAI API",
    ],
  },
  {
    title: "Intelligent Employee Performance Analytics System",
    type: "dashboard",
    link: "https://ai-employee-dashboard-ebip0upby-aulakhznavreen-9635s-projects.vercel.app",
    details: [
      "Tracks employee productivity & performance metrics",
      "Real-time KPI monitoring with interactive charts",
      "AI-powered insights for smarter decision-making",
      "Built with React, Chart.js & analytics pipelines",
    ],
  },
  {
    title: "Portfolio System",
    type: "portfolio",
    link: "/",
    details: [
      "High-converting personal branding",
      "Framer Motion animations",
      "Optimized for recruiter attention",
      "Built with Next.js",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-20 bg-black text-white relative overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Systems and interfaces built with performance, automation, and user
            experience in mind.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              {/* CARD */}
              <div
                onClick={() => window.open(project.link, "_blank")}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 cursor-pointer"
              >
                {/* PREVIEW */}
                <div className="h-44 rounded-xl bg-black/60 border border-white/10 p-3 overflow-hidden">
                  {project.type === "chat" && <ChatPreview />}
                  {project.type === "dashboard" && <DashboardPreview />}
                  {project.type === "portfolio" && <PortfolioPreview />}
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-lg font-semibold">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-sm text-white/60">
                  {project.type === "chat" &&
                    "AI-powered fitness & diet planning system."}
                  {project.type === "dashboard" &&
                    "Intelligent system for employee performance tracking & analytics."}
                  {project.type === "portfolio" &&
                    "Modern high-converting developer portfolio."}
                </p>

                {/* HOVER DETAILS */}
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                  <ul className="text-xs text-white/70 space-y-1 mt-2">
                    {project.details.map((d, idx) => (
                      <li key={idx}>• {d}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <p className="mt-4 text-sm text-purple-400 group-hover:translate-x-1 transition">
                  View Project →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PREVIEWS ---------- */

function ChatPreview() {
  return (
    <div className="text-xs space-y-2">
      <div className="bg-white/10 px-3 py-2 rounded-lg w-fit">
        Generate meal plan
      </div>
      <div className="bg-purple-500/30 px-3 py-2 rounded-lg w-fit ml-auto">
        Plan ready 🍗
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex gap-2 h-full items-end">
      {[40, 70, 55, 90, 60].map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-purple-500 to-blue-400 rounded"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="text-xs space-y-2">
      <div className="h-3 bg-white/20 w-3/4 rounded" />
      <div className="h-3 bg-white/10 w-1/2 rounded" />
      <div className="h-3 bg-white/10 w-2/3 rounded" />
    </div>
  );
}