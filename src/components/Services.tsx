import { Code2, Bot, TrendingUp, Palette, Server, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Responsive, high-performance websites built with modern technologies.",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description:
        "Integrate AI chatbots, automation, and intelligent solutions to boost productivity.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Smart SEO & digital marketing strategies that grow your online reach.",
    },
    {
      icon: Palette,
      title: "Frontend Development",
      description:
        "Pixel-perfect, visually stunning UI built using React and Tailwind CSS.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Fast, scalable APIs and database solutions built for performance.",
    },
    {
      icon: Code2,
      title: "Custom Websites",
      description:
        "Unique, branded web experiences designed to convert visitors into clients.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_80%)]" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Our <span className="text-cyan-400">Expertise</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transforming ideas into reality through innovation, design, and code.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.04]"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
