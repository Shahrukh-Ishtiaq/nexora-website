"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mblpqkdb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000); // hide after 4 sec
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#050505] text-white relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_80%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s discuss your ideas or project — we’re just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side — Info */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400 w-6 h-6" />
                <span className="text-gray-300">
                  North Nazimabad, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400 w-6 h-6" />
                <span className="text-gray-300">
                  shahrukhishtiaq29@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400 w-6 h-6" />
                <span className="text-gray-300">+92 318 6427544</span>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-cyan-400 w-6 h-6" />
                <a
                  href="https://wa.me/923186427544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                title="Nexora Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.642550913395!2d67.03251601500247!3d24.938332284022747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9a9a1ec6ef%3A0xd39f9c07e787f3b1!2sNorth%20Nazimabad%2C%20Karachi!5e0!3m2!1sen!2s!4v1668151297315!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side — Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 relative"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Send a Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none"
                required
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-white focus:border-cyan-400 outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>

            {/* ✅ Toast Message */}
            {status === "success" && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-600/90 text-white px-4 py-2 rounded-lg text-sm animate-fade-in shadow-lg">
                <CheckCircle className="w-5 h-5" /> Message sent successfully —
                we’ll contact you soon!
              </div>
            )}
            {status === "error" && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-red-600/90 text-white px-4 py-2 rounded-lg text-sm animate-fade-in shadow-lg">
                <XCircle className="w-5 h-5" /> Something went wrong. Try again!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
