"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const items = [
  { 
    title: "Equipment Hire", 
    img: "/images/podcast.jpg",
    link: "#contact",
    type: "internal",
    description: "Professional podcast studio setups and packages"
  },
  { 
    title: "Live Show", 
    img: "/images/live.jpg",
    link: "/live-show",
    type: "internal",
    description: "Live sound engineering and event management"
  },
  { 
    title: "Studio Session", 
    img: "/images/studio.jpg",
    link: "/studio-session",
    type: "internal",
    description: "Professional recording and mixing services"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl text-center text-[#00b4d8] mb-12">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const CardContent = (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative"
            >
              {/* Image with overlay */}
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-[#2a2f3e] to-[#3a3f4e] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  {/* Placeholder content */}
                  <div className="text-center">
                    {item.title === "Equipment Hire" && (
                      <div className="p-4 bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          🎙️
                        </motion.div>
                      </div>
                    )}
                    {item.title === "Live Show" && (
                      <div className="p-4 bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                        🎵
                      </div>
                    )}
                    {item.title === "Studio Session" && (
                      <div className="p-4 bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                        🎧
                      </div>
                    )}
                    <p className="text-gray-400 text-sm">{item.title}</p>
                  </div>
                </div>
                
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-[#00b4d8] rounded-full">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6 bg-[#1a2038] group-hover:bg-[#1e2442] transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
                
                {/* Click indicator */}
                <div className="mt-4 flex items-center text-[#00b4d8] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === "internal" ? "View Packages" : "Get Quote"}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.div>
          );

          // Render different link types
          if (item.type === "internal") {
            return (
              <Link key={i} href={item.link}>
                {CardContent}
              </Link>
            );
          } else {
            return (
              <a key={i} href={item.link}>
                {CardContent}
              </a>
            );
          }
        })}
      </div>
    </section>
  );
}
