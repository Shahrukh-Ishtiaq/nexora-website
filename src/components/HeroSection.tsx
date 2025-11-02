"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home">
      <div className="relative w-full h-screen overflow-hidden font-sans text-white">
        {/* 🎥 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        {/* 🌑 Dark Overlay for Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[-1]" />

        {/* 🔵 Glow Layer (Soft Blue Light Effect) */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500 blur-3xl opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0" />

        {/* 🌟 Main Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* ✨ Animated Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/50 bg-blue-500/10 backdrop-blur-md"
            animate={{
              boxShadow: [
                "0 0 10px #3b82f6",
                "0 0 25px #3b82f6",
                "0 0 10px #3b82f6",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
            <span className="text-sm font-medium">
              Professional Web Solutions
            </span>
          </motion.div>

          {/* 🏷️ Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4 ">
            Welcome to <span className="text-cyan-400">Nexora Studio</span>
          </h1>

          {/* 💬 Subtitle */}
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-gray-200">
            Building Future-Ready Websites with{" "}
            <span className="text-pink-400 font-semibold">
              AI-Powered Creativity
            </span>{" "}
            & <span className="text-purple-400 font-semibold">Smart Code</span>.
          </p>

          {/* 🔘 Buttons */}
          <div className="md:flex md:space-x-4">
            {/* Get Started Button */}
            <Link href="#contact">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 rounded-full text-white text-lg font-medium shadow-lg hover:shadow-xl transition duration-300 flex items-center group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            {/* View Services Button */}
            <Link href="#services">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 rounded-full text-white text-lg font-medium shadow-lg hover:shadow-xl transition duration-300 ">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
