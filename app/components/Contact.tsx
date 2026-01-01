"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
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
          disabled={status === "loading"}
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="p-3 rounded bg-[#1a2038] border-none outline-none text-white h-32 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        ></textarea>
        
        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 p-3 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-sm sm:text-base"
          >
            <CheckCircle size={18} className="flex-shrink-0" />
            <span>Message sent successfully! We'll get back to you soon.</span>
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
          disabled={status === "loading"}
          className="bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
      <div className="mt-6 text-gray-400 text-sm sm:text-base">
        or reach me via WhatsApp:{" "}
        <a href="https://wa.me/27732933543" className="text-[#9d4edd] underline hover:text-[#9d4edd]/80">
          Click Here
        </a>
      </div>
    </section>
  );
}
