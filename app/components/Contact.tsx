"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl mb-8 text-[#00b4d8]">Get in Touch</h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white h-32"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="mt-6 text-gray-400">
        or reach me via WhatsApp:{" "}
        <a href="https://wa.me/27732933543" className="text-[#9d4edd] underline">
          Click Here
        </a>
      </div>
    </section>
  );
}
