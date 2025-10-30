"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Headphones, Mic, Music, Star, Clock, Users, Zap, Settings, Play, Disc } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const studioPackages = [
  {
    id: 1,
    name: "Basic Recording Package",
    price: "$299",
    duration: "4 hours",
    tracks: "Up to 8 tracks",
    image: "/basic-podcast.jpg",
    description: "Perfect for solo artists, demos, and basic recordings",
    features: [
      "4-hour studio time",
      "Professional microphone setup",
      "Up to 8 simultaneous tracks",
      "Basic mixing and EQ",
      "Audio editing and cleanup",
      "Digital delivery (WAV/MP3)",
      "One revision included",
      "Professional studio environment"
    ],
    popular: false,
    idealFor: ["Solo Artists", "Demos", "Voice Overs", "Simple Recordings"]
  },
  {
    id: 2,
    name: "Professional Production",
    price: "$799",
    duration: "8 hours",
    tracks: "Up to 24 tracks", 
    image: "/pro-podcast.jpg",
    description: "Complete production package for serious music projects",
    features: [
      "8-hour studio session",
      "Multi-microphone setup",
      "Up to 24 simultaneous tracks",
      "Advanced mixing and mastering",
      "Auto-tuning and vocal processing",
      "Instrument recording (guitar, bass, keys)",
      "Sound design and effects",
      "Multiple format delivery",
      "Three revision rounds",
      "CD/Digital master preparation",
      "Basic artwork consultation"
    ],
    popular: true,
    idealFor: ["Bands", "EP Recording", "Commercial Projects", "Music Videos"]
  },
  {
    id: 3,
    name: "Album Production Package",
    price: "$1,999",
    duration: "3 days",
    tracks: "Unlimited tracks",
    image: "/enterprise-podcast.jpg",
    description: "Complete album production with professional mixing and mastering",
    features: [
      "3 full days of studio time",
      "Unlimited track recording",
      "Professional session musicians available",
      "Advanced mixing and mastering suite",
      "Vocal coaching and direction",
      "Instrument rental included",
      "Live room and isolation booths",
      "Digital and analog processing",
      "Unlimited revisions",
      "Album artwork design",
      "Distribution consultation",
      "Marketing strategy session",
      "Master delivery in all formats"
    ],
    popular: false,
    idealFor: ["Full Albums", "Professional Artists", "Record Labels", "Commercial Releases"]
  }
];

const studioServices = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Vocal Recording",
    description: "Professional vocal tracking with top-tier microphones",
    price: "From $99/hour"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Instrument Recording",
    description: "Multi-instrument recording with professional setup",
    price: "From $129/hour"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Mixing & Mastering",
    description: "Professional mixing and mastering services",
    price: "From $199/song"
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Audio Restoration",
    description: "Restore and enhance old or damaged recordings",
    price: "From $149/hour"
  }
];

const studioFeatures = [
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "State-of-the-Art Equipment",
    description: "Professional grade microphones, preamps, and monitoring systems for pristine audio quality."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Acoustically Treated Rooms",
    description: "Purpose-built recording spaces with proper acoustic treatment for optimal sound capture."
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: "Digital & Analog Processing",
    description: "Best of both worlds with vintage analog warmth and modern digital precision."
  }
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center min-h-screen flex items-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-dummy.mp4" type="video/mp4" />
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
              className="p-4 bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] rounded-full shadow-2xl"
            >
              <Headphones className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Studio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f00] to-[#00b4d8]">
              Sessions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional recording, mixing, and mastering services. From demos to full album production in our state-of-the-art studio.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#packages">
              <button className="bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition flex items-center gap-2">
                View Packages <ArrowRight size={20} />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="border border-[#ff6f00] text-[#ff6f00] px-8 py-4 rounded-lg hover:bg-[#ff6f00] hover:text-white transition">
                Book Session
              </button>
            </Link>
          </div>
        </motion.div>
        
        {/* Studio indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-xs">Recording Studio</span>
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
            Studio Recording Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional recording packages designed for every project size, from solo demos to full album production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {studioPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-[#ff6f00] scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
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
                    pkg.id === 2 ? 'bg-gradient-to-r from-[#ff6f00] to-[#e85d00]' :
                    'bg-gradient-to-r from-[#9d4edd] to-[#7209b7]'
                  }`}>
                    {pkg.tracks}
                  </div>
                </div>
              </div>

              {/* Package Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#ff6f00]">{pkg.price}</span>
                    <span className="text-gray-400">• {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Music className="w-4 h-4" />
                    <span>{pkg.tracks}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Ideal for:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.idealFor.map((use, i) => (
                      <span key={i} className="px-2 py-1 bg-[#ff6f00]/20 text-[#ff6f00] text-xs rounded-full">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 max-h-56 overflow-y-auto">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#ff6f00] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] text-white hover:opacity-90'
                    : 'border border-[#ff6f00] text-[#ff6f00] hover:bg-[#ff6f00] hover:text-white'
                }`}>
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Studio Services Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1a1f2e] to-[#2a2f3e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Studio Services
            </h2>
            <p className="text-xl text-gray-300">
              Professional à la carte services to complement your recording session
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0b0f19]/50 p-6 rounded-xl border border-[#ff6f00]/20 hover:border-[#ff6f00]/40 transition-all duration-300 text-center"
              >
                <div className="text-[#ff6f00] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-[#00b4d8] font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Studio?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {studioFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : index === 1 ? 0 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#1a1f2e] to-[#2a2f3e]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Record Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your studio session today and bring your music to life with our professional recording services.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition">
                Book Your Session Now
              </button>
            </Link>
            
            <Link href="/">
              <button className="border border-[#ff6f00] text-[#ff6f00] px-8 py-4 rounded-lg hover:bg-[#ff6f00] hover:text-white transition">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}