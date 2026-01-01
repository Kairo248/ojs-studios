"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/podcast", label: "Podcast Setup" },
    { href: "/live-show", label: "Live Shows" },
    { href: "/studio-session", label: "Studio Sessions" },
    //{ href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f19]/90 backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3 sm:p-4">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative">
            {/* Custom Logo Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Image
                src="/logo.jpg"
                alt="OJStudios Studio Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#00b4d8] group-hover:text-[#9d4edd] transition-colors duration-300">
                OJSStudios
            </span>
            <span className="text-[10px] sm:text-xs text-gray-400 -mt-1">Audio Studio</span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {links.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#9d4edd] transition text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#9d4edd] transition text-sm lg:text-base"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-center bg-[#0b0f19] md:hidden pb-4 space-y-3 pt-2">
          {links.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#9d4edd] transition py-2 px-4 text-sm"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#9d4edd] transition py-2 px-4 text-sm"
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      )}
    </nav>
  );
}
