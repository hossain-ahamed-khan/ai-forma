"use client";

import { useState } from "react";
import Image from "next/image";
import { Smartphone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#ai-analysis", label: "AI Analysis" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="w-full border-b border-slate-100 relative">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="shrink-0">
          <Image
            src="/ai-forma-logo.png"
            alt="AiFORMA"
            width={160}
            height={42}
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-app"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            Get app
          </a>
        </div>

        <Link
          href="/waitlist"
          className="hidden md:inline-block bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
        >
          Join Waitlist
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 -mr-2 text-slate-700 hover:text-slate-900 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-sm overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-app"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 py-2.5 px-2 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            Get app
          </a>

          <Link
            href="/waitlist"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors text-center"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}