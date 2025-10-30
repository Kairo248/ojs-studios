import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sound Engineer | Equipment Hire & Mixing",
  description: "Professional sound services: equipment hire, mixing, and mastering for shows, podcasts, and music projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white font-sans">{children}</body>
    </html>
  );
}
