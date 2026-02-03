"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type ImageItem = { src: string; title: string };
type VideoItem = { src: string; title: string };

const imageItems: ImageItem[] = [
  { src: "/about.jpg", title: "Studio session" },
  { src: "/images/gallery-image.jpeg", title: "Event setup" },
  { src: "/images/gallery-image1.jpeg", title: "Event setup" },
  { src: "/images/gallery-image2.jpeg", title: "Event setup" },
];

export default function Gallery() {
  const [view, setView] = useState<"images" | "videos">("images");

  const items = useMemo(() => {
    const videoItems: VideoItem[] = [
      { src: "/hero-video.mp4", title: "Studio reel" },
      { src: "/images/gallery-video.mp4", title: "Event setup" },
    ];

    return view === "images" ? imageItems : videoItems;
  }, [view]);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-[#0e1424] px-4 sm:px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-3 text-[#9d4edd]">Gallery</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-12">
          A look at our studio vibe, setups, and sessions.
        </p>

        <div className="flex items-center justify-center mb-7 sm:mb-10">
          <div
            role="tablist"
            aria-label="Gallery view"
            className="inline-flex rounded-full bg-[#1a2038] p-1 shadow-lg"
          >
            <button
              type="button"
              role="tab"
              aria-selected={view === "images"}
              onClick={() => setView("images")}
              className={[
                "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition",
                view === "images" ? "bg-[#00b4d8] text-[#0b0f19]" : "text-gray-200 hover:text-white",
              ].join(" ")}
            >
              Images
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === "videos"}
              onClick={() => setView("videos")}
              className={[
                "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition",
                view === "videos" ? "bg-[#00b4d8] text-[#0b0f19]" : "text-gray-200 hover:text-white",
              ].join(" ")}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item) => (
            <motion.figure
              key={item.src}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1a2038] shadow-lg"
            >
              <div className="relative w-full aspect-[4/3]">
                {view === "images" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-95 group-hover:opacity-100 transition"
                  />
                ) : (
                  <video
                    className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition"
                    src={item.src}
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition" />
              </div>

              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
                  <span className="text-xs sm:text-sm font-semibold text-white">{item.title}</span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

