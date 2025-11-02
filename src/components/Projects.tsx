// src/components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient?: string; // fallback gradient if no image
  image?: string;    // project image path
  link?: string;     // project live link
}

const projects: Project[] = [
  {
    title: "Furniture Marketplace",
    description:
      "A complete furniture selling platform with admin dashboard, category filters, and smooth UI.",
    tags: ["React", "Admin Dashboard", "Marketplace"],
    image: "/project1.png",
    link: "https://e-commerce-sanity-seven.vercel.app/"
  },
  {
    title: "Monument Blog Website",
    description:
      "A responsive, minimal, and conversion-focused Blogging website built with Next.js + Sanity CMS for a historical theme.",
    tags: ["Next.js", "Sanity CMS", "Blogging"],
    image: "/Project2.png",
    link: "https://monument-blog.vercel.app/"
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "A clean weather UI dashboard designed with React + Tailwind CSS, focusing on latest weather updates.",
    tags: ["React", "Tailwind CSS", "Analytics"],
    image: "/Project3.png",
    link: "https://weather-now-ivory.vercel.app/"
  }
];

const ProjectsSection = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000); // spinner visible for 4s
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(263_70%_60%_/_0.08)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            💼 Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Check out some of our latest work at Nexora Studio. Each project
            showcases our dedication to clean design, user experience, and
            performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${project.gradient}`}
                  />
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button with Round Spinner */}
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-gray-300/20 font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all relative"
          >
            {loading ? (
              <svg
                className="w-6 h-6 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "🔗 View More Projects"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
