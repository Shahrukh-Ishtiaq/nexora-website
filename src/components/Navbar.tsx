"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
      <nav
        className="flex items-center justify-between p-5 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/company-logo.png"
              alt="Nexora Studio Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-white text-lg font-semibold">
              Nexora Studio
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="p-2.5 text-gray-200 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#contact"
            className="text-sm font-semibold text-white hover:text-indigo-400"
          >
            Contact us →
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/company-logo.png"
              alt="Nexora Studio Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-white text-lg font-semibold">
              Nexora Studio
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="p-2 text-gray-200 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="bg-gray-900/70 flex flex-col items-start space-y-6 p-6 overflow-y-auto h-[calc(100vh-64px)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-semibold text-white hover:text-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
