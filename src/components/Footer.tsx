"use client";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 py-8 border-t border-gray-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Nexora <span className="text-cyan-400">Studio</span>
          </h2>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle - Links */}
        <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
          {["Home", "Services", "Projects", "About", "Contact"].map((item, i) => (
            <Link
              key={i}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right side - Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          {[
            { icon: Facebook, link: "https://facebook.com" },
            { icon: Instagram, link: "https://instagram.com" },
            { icon: Linkedin, link: "https://linkedin.com/in/shahrukh-ishtiaq-2534a524b" },
            { icon: Github, link: "https://github.com" },
          ].map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
