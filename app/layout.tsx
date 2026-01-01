import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body className="bg-[#0b0f19] text-white font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
