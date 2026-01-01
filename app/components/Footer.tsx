"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/OJSStudios", 
      label: "Facebook",
      color: "hover:text-blue-500" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/lubabalosibhene/", 
      label: "Instagram",
      color: "hover:text-pink-500" 
    },
    { 
      icon: Mail, 
      href: "mailto:Lsstudios@gmail.com", 
      label: "Email",
      color: "hover:text-[#00b4d8]" 
    },
    { 
      icon: Phone, 
      href: "tel:+27732933543", 
      label: "Phone",
      color: "hover:text-green-500" 
    },
  ];

  return (
    <footer className="bg-[#0b0f19] py-6 sm:py-8 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Social Media Icons */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-gray-800`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <Icon size={20} className="sm:w-6 sm:h-6" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer Text */}
        <motion.p 
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} OJS Studios
        </motion.p>
      </div>
    </footer>
  );
}
