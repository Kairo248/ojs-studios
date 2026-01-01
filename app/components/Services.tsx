"use client";
import { motion } from "framer-motion";
import { Mic2, SlidersHorizontal, Speaker, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Mic2 size={40} />,
    title: "Podcast Setup",
    desc: "Professional sound equipment for shows, events, and podcasts.",
    link: "/podcast",
    type: "scroll",
    action: "Get Quote"
  },
  {
    icon: <SlidersHorizontal size={40} />,
    title: "Mixing & Mastering",
    desc: "Studio-quality sound mixing and mastering for music projects.",
    link: "/studio-session",
    type: "page", 
    action: "View Packages"
  },
  {
    icon: <Speaker size={40} />,
    title: "Live Sound Engineering",
    desc: "On-site sound setup and management for live performances.",
    link: "/live-show",
    type: "page",
    action: "View Packages"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#0e1424] px-4 sm:px-6 text-center">
      <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 text-[#9d4edd]">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => {
          const CardContent = (
            <div className="bg-[#1a2038] p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-[#00b4d8]/40 transition-all duration-300 group-hover:bg-[#1e2442] h-full relative overflow-hidden">
              {/* Gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/5 to-[#9d4edd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Click indicator icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-[#00b4d8]" />
              </div>
              
              <div className="relative z-10">
                <div className="text-[#00b4d8] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 text-white group-hover:text-[#00b4d8] transition-colors duration-300">{s.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 sm:mb-6">{s.desc}</p>
                
                {/* Action button that appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {s.action}
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          );

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer"
            >
              {s.type === "page" ? (
                <Link href={s.link} className="block">
                  {CardContent}
                </Link>
              ) : (
                <a href={s.link} className="block">
                  {CardContent}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
