"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Speaker, Mic, Volume2, Star, Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const liveShowPackages = [
  {
    id: 1,
    name: "Small Venue Package",
    price: "$599",
    duration: "4-6 hours",
    audience: "Up to 150 people",
    image: "/about.jpg", // placeholder for now
    description: "Perfect for intimate venues, small concerts, and private events",
    features: [
      "Professional PA system setup",
      "2-4 microphones with stands",
      "Basic mixing board operation",
      "Monitor speakers for performers",
      "Cable management and setup",
      "Sound check and testing",
      "On-site technical support",
      "Equipment breakdown and pickup"
    ],
    popular: false,
    venues: ["Cafes", "Small Clubs", "Private Parties", "Corporate Events"]
  },
  {
    id: 2,
    name: "Medium Venue Package", 
    price: "$1,299",
    duration: "6-8 hours",
    audience: "150-500 people",
    image: "/pro-podcast.jpg", // placeholder for now
    description: "Comprehensive sound solution for mid-sized venues and events",
    features: [
      "Advanced PA system with subwoofers",
      "Up to 8 microphones (vocal + instrument)",
      "Professional digital mixing console",
      "Stage monitors and wedges",
      "Wireless microphone systems",
      "DI boxes for instruments",
      "Professional sound engineer on-site",
      "Backup equipment included",
      "Live sound mixing during event",
      "Post-event equipment removal"
    ],
    popular: true,
    venues: ["Concert Halls", "Wedding Venues", "Festival Stages", "Churches"]
  },
  {
    id: 3,
    name: "Large Event Package",
    price: "$2,499",
    duration: "Full day setup",
    audience: "500+ people",
    image: "/enterprise-podcast.jpg", // placeholder for now
    description: "Professional concert-grade sound system for large events",
    features: [
      "Line array speaker system",
      "Multi-zone audio coverage",
      "16+ channel mixing capabilities",
      "Wireless monitoring systems",
      "Multi-stage coordination",
      "Professional lighting integration",
      "Live recording capabilities",
      "Dedicated sound engineer team",
      "Real-time audio monitoring",
      "Emergency backup systems",
      "Complete setup and breakdown",
      "Pre-event venue acoustics consultation"
    ],
    popular: false,
    venues: ["Outdoor Festivals", "Large Concerts", "Convention Centers", "Stadiums"]
  }
];

const additionalServices = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Live Recording",
    description: "Multi-track recording of your live performance",
    price: "From $299"
  },
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: "Live Streaming Audio",
    description: "Professional audio feed for live streaming",
    price: "From $199"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Sound Engineer",
    description: "Dedicated audio engineer for your event",
    price: "From $150/hour"
  }
];

export default function LiveShowPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center min-h-screen flex items-center">
        {/* Background Video - using the same video as podcast for consistency */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/live-show.mp4" type="video/mp4" />
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
              className="p-4 bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] rounded-full shadow-2xl"
            >
              <Speaker className="w-12 h-12 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Live Sound <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#ff6f00]">
              Engineering
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional live sound solutions for concerts, events, and performances. Crystal-clear audio that brings your show to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#packages">
              <button className="bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition flex items-center gap-2">
                View Packages <ArrowRight size={20} />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="border border-[#9d4edd] text-[#9d4edd] px-8 py-4 rounded-lg hover:bg-[#9d4edd] hover:text-white transition">
                Get Custom Quote
              </button>
            </Link>
          </div>
        </motion.div>
        
        {/* Live indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs">Live Audio</span>
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
            Live Sound Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional audio solutions tailored to your venue size and audience. From intimate gatherings to large-scale events.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {liveShowPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-gradient-to-br from-[#1a1f2e] to-[#2a2f3e] rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-[#9d4edd] scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
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
                    {pkg.audience}
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
                    <span className="text-4xl font-bold text-[#9d4edd]">{pkg.price}</span>
                    <span className="text-gray-400">• {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{pkg.audience}</span>
                  </div>
                </div>

                {/* Venue Types */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Perfect for:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.venues.map((venue, i) => (
                      <span key={i} className="px-2 py-1 bg-[#00b4d8]/20 text-[#00b4d8] text-xs rounded-full">
                        {venue}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#9d4edd] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] text-white hover:opacity-90'
                    : 'border border-[#9d4edd] text-[#9d4edd] hover:bg-[#9d4edd] hover:text-white'
                }`}>
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1a1f2e] to-[#2a2f3e]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300">
              Enhance your live show with these professional add-on services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#0b0f19]/50 p-6 rounded-xl border border-[#9d4edd]/20 hover:border-[#9d4edd]/40 transition-all duration-300"
              >
                <div className="text-[#9d4edd] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-[#ff6f00] font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Live Sound Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Reliable Setup</h3>
              <p className="text-gray-300">
                Professional equipment setup and breakdown with guaranteed on-time delivery and pickup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#ff6f00] to-[#00b4d8] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Engineers</h3>
              <p className="text-gray-300">
                Experienced sound engineers who know how to make your event sound amazing from start to finish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Any Venue</h3>
              <p className="text-gray-300">
                From intimate cafes to large outdoor festivals, we have the right equipment for your venue size.
              </p>
            </motion.div>
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
            Ready to Amplify Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your live sound needs and receive a custom quote for your event.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#9d4edd] to-[#ff6f00] text-white px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition">
                Get Your Quote Today
              </button>
            </Link>
            
            <Link href="/">
              <button className="border border-[#9d4edd] text-[#9d4edd] px-8 py-4 rounded-lg hover:bg-[#9d4edd] hover:text-white transition">
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}