"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Mic, Headphones, Settings, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Full Day Podcast Setup",
    price: "R4,500",
    duration: "Full day",
    image: "/pro-podcast.jpg",
    description: "Complete professional podcast setup for a full day of recording",
    features: [
      "Full day studio access",
      "Multi-microphone setup (up to 4 hosts)",
      "Professional mixing board configuration",
      "Advanced audio processing and EQ",
      "Lighting setup consultation",
      "Video recording capability",
      "Advanced editing software training",
      "Noise reduction and acoustic treatment",
      "Live streaming configuration",
      "Professional sound engineer on-site"
    ],
    popular: true
  },
  {
    id: 2,
    name: "Premium Enterprise Package",
    price: "Request Quote",
    duration: "Custom",
    image: "/enterprise-podcast.jpg",
    description: "Tailored premium solution designed specifically for your podcast needs",
    features: [
      "Custom studio design and setup",
      "Professional broadcast-grade equipment",
      "Multi-camera video production setup",
      "Live streaming to multiple platforms",
      "Custom intro/outro production",
      "Brand identity integration",
      "Comprehensive team training",
      "Extended technical support",
      "Ongoing equipment maintenance",
      "Dedicated project manager"
    ],
    popular: false,
    customQuote: true
  }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center min-h-screen flex items-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/podcast.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-4 bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] rounded-full shadow-2xl"
            >
              <Mic className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Podcast Setup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#9d4edd]">
              Packages
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional podcast studio setup tailored to your needs. From beginner-friendly setups to enterprise-level production studios.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#packages">
              <button className="bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition flex items-center gap-2">
                View Packages <ArrowRight size={20} />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="border border-[#00b4d8] text-[#00b4d8] px-8 py-4 rounded-lg hover:bg-[#00b4d8] hover:text-white transition">
                Get Custom Quote
              </button>
            </Link>
          </div>
        </motion.div>
        
        {/* Video indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs">Live Background</span>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Perfect Setup
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional podcast setups designed for every level, from startup podcasters to enterprise productions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-[#00b4d8] scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={pkg.popular}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/60 to-transparent"></div>
                
                {/* Package tier indicator overlay */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    pkg.id === 1 ? 'bg-gradient-to-r from-[#00b4d8] to-[#0077b6]' :
                    pkg.id === 2 ? 'bg-gradient-to-r from-[#9d4edd] to-[#7209b7]' :
                    'bg-gradient-to-r from-[#ff6f00] to-[#e85d00]'
                  }`}>
                    {pkg.id === 1 ? 'BASIC' : pkg.id === 2 ? 'PRO' : 'ENTERPRISE'}
                  </div>
                </div>
              </div>

              {/* Package Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  {pkg.customQuote ? (
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-[#9d4edd]">{pkg.price}</span>
                      <span className="text-sm text-gray-400 mt-1">{pkg.duration}</span>
                    </div>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-[#00b4d8]">{pkg.price}</span>
                      <span className="text-gray-400">• {pkg.duration}</span>
                    </>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00b4d8] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {pkg.customQuote ? (
                  <Link href="/#contact">
                    <button className="w-full py-4 rounded-lg font-semibold transition-all duration-300 border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-white">
                      Request Tailored Quote
                    </button>
                  </Link>
                ) : (
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white hover:opacity-90'
                      : 'border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8] hover:text-white'
                  }`}>
                    Get Started
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Podcast Setup Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1a1f2e] to-[#2a2f3e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Podcast Setup?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Equipment</h3>
              <p className="text-gray-300">
                Industry-standard microphones, audio interfaces, and recording equipment for crystal-clear sound quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Training</h3>
              <p className="text-gray-300">
                Comprehensive training on equipment usage, recording techniques, and basic editing to get you started.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
              <p className="text-gray-300">
                Continuous technical support and maintenance to ensure your podcast setup runs smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-[#0b0f19]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Podcast?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your podcast setup needs and receive a custom quote tailored to your requirements.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition">
                Get Your Custom Quote
              </button>
            </Link>
            
            <Link href="/">
              <button className="border border-[#00b4d8] text-[#00b4d8] px-8 py-4 rounded-lg hover:bg-[#00b4d8] hover:text-white transition">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}