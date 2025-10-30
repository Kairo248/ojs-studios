"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#0b0f19] via-[#1a1f2e] to-[#2a2f3e]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        src="/hero-dummy.mp4"
      ></video>
      
      
      

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Powering Your Sound. <br /> Elevate Every Event.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Professional sound equipment, mixing & mastering for your next project.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn-primary">Hire Equipment</button>
          <button className="bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition flex items-center gap-2">
            Book a Session <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
