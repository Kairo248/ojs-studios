import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-[#0b0f19] text-white px-4 sm:px-6 flex items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-gradient-to-r from-[#00b4d8] to-[#9d4edd] hover:opacity-90 transition"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

