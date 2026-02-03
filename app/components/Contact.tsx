"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27732933543"; // international format, no "+"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name and message");
      return;
    }

    try {
      const lines = [
        "Hi OJS Studios,",
        "",
        `Name: ${formData.name.trim()}`,
        formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
        "",
        "Message:",
        formData.message.trim(),
      ].filter(Boolean) as string[];

      const text = encodeURIComponent(lines.join("\n"));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      // Open WhatsApp (mobile app or web)
      window.open(url, "_blank", "noopener,noreferrer");

      setStatus("success");
      setErrorMessage("");
      setFormData({ name: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch {
      setStatus("error");
      setErrorMessage("Could not open WhatsApp. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-[#00b4d8]">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white h-32 resize-none"
        ></textarea>
        
        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 p-3 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-sm sm:text-base"
          >
            <CheckCircle size={18} className="flex-shrink-0" />
            <span>WhatsApp opened! Send your message to complete.</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm sm:text-base"
          >
            <XCircle size={18} className="flex-shrink-0" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          Send on WhatsApp
        </button>
      </form>
    </section>
  );
}
