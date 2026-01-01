"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "DJ Pulse",
    text: "The best sound engineer I’ve worked with — top quality mixes every time!",
  },
  {
    name: "Lerato M.",
    text: "Professional and reliable. The live sound was flawless at our event!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-[#0e1424] px-4 sm:px-6 text-center">
      <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 text-[#9d4edd]">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a2038] p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <p className="text-sm sm:text-base text-gray-300 italic mb-4">"{t.text}"</p>
            <h3 className="text-[#00b4d8] font-semibold text-sm sm:text-base">— {t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
