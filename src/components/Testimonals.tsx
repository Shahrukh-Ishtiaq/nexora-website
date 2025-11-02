"use client";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager at VisionCorp",
    feedback:
      "Working with Nexora Studio was a fantastic experience. They delivered our website ahead of schedule and exceeded expectations in every way!",
    image: "/1.png",
  },
  {
    name: "Michael Smith",
    role: "Founder of BrightTech",
    feedback:
      "Their attention to detail and design sense is unmatched. The end product was clean, modern, and super fast!",
    image: "/2.png",
  },
  {
    name: "Emily Davis",
    role: "E-Commerce Entrepreneur",
    feedback:
      "I’ve worked with several developers, but Nexora Studio stands out for professionalism and creativity. Highly recommend!",
    image: "/3.png",
  },
  {
    name: "David Wilson",
    role: "CEO at CloudBase",
    feedback:
      "Professional team, great communication, and high-quality output. Nexora Studio truly understands modern business needs.",
    image: "/4.png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-900 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Here’s what some of our clients have shared about their experience
          working with{" "}
          <span className="text-indigo-400 font-semibold">Nexora Studio</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full sm:w-[48%] lg:w-[23%] flex flex-col items-center hover:border-indigo-500 transition-all duration-300"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-indigo-500 mb-4"
              />
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{t.role}</p>
              <p className="text-gray-300 italic leading-relaxed text-sm">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
