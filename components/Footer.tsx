"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-20 px-6 md:px-20 relative overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] bottom-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 blur-[120px] top-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
        
        {/* 🔥 BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            NAVREEN
          </h3>

          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Building AI-powered systems and modern web applications that
            automate workflows and scale businesses.
          </p>

          <p className="mt-3 text-sm text-white/50">
            Open to Full-Time Opportunities & Collaborations
          </p>
        </div>

        {/* 💼 QUICK LINKS */}
        <div>
          <h4 className="text-white font-medium mb-3">Explore</h4>

          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="text-white font-medium mb-3">Connect</h4>

          <a
            href="mailto:aulakhznavreen@gmail.com"
            className="flex items-center gap-2 text-sm hover:text-white transition"
          >
            <FaEnvelope /> aulakhznavreen@gmail.com
          </a>

          <div className="flex gap-4 mt-6">

            <a
              href="https://github.com/aulakhznavreen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Navreen. All rights reserved.
      </div>
    </footer>
  );
}