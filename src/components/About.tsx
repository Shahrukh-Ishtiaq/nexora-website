"use client";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of professional development experience",
  "Expertise in modern web technologies and frameworks",
  "Proven track record of successful project deliveries",
  "Specialized in AI integration and automation",
  "End-to-end solutions from design to deployment",
  "Passionate about clean code and user experience",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-[#06080f] text-white overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              🧍 About{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Nexora Studio
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We’re a passionate creative agency based in{" "}
              <span className="text-cyan-400 font-semibold">
                Karachi, Pakistan
              </span>
              , founded by{" "}
              <span className="text-blue-400 font-semibold">
                Shahrukh Ishtiaq
              </span>
              . We blend design, development, and AI innovation to build
              meaningful digital products.
            </p>

            <p className="text-gray-400 leading-relaxed">
              At Nexora, our focus is on helping startups and brands create
              fast, beautiful, and intelligent websites that actually perform.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border-l-4 border-cyan-400 p-5 rounded-r-lg">
              <p className="font-semibold text-cyan-300 italic">Our Mission:</p>
              <p className="mt-2 text-gray-300">
                “To empower small businesses and entrepreneurs through
                innovative, AI-driven digital solutions.”
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gradient-to-b from-gray-900/80 to-gray-800/80 border border-gray-700 rounded-2xl p-8 shadow-[0_0_25px_rgba(56,189,248,0.1)] hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Why Choose Us
            </h3>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group transition-transform duration-300 hover:translate-x-1"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 italic">
                “Building digital solutions that make a difference — one project
                at a time.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
