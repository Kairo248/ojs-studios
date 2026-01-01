"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl mb-8 sm:mb-12 md:mb-16 text-[#00b4d8] text-center"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Sound Engineer at work"
              width={600}
              height={400}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I'm a passionate sound engineer with years of experience mixing and
            mastering for artists, events, and podcasts. I provide high-quality
            audio experiences through professional gear and precise attention to
            detail.
          </p>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Whether you need crystal-clear sound for a live show or polished
            tracks for your album, I've got you covered with state-of-the-art
            equipment and expert knowledge.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="text-center p-4 bg-gradient-to-r from-[#00b4d8]/20 to-[#9d4edd]/20 rounded-lg">
              <div className="text-2xl font-bold text-[#00b4d8]">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-[#9d4edd]/20 to-[#ff6f00]/20 rounded-lg">
              <div className="text-2xl font-bold text-[#9d4edd]">100+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
