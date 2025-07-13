'use client';

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-[62vh]">
      <main className="bg-purple-100">
        <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-[60vh]">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 items-center justify-center text-center px-6 py-10 lg:text-left lg:items-start">
            <p className={`font-bold text-2xl sm:text-3xl lg:text-4xl ${poppins.className}`}>
              The best URL shortener in the Market
            </p>

            <p className="text-gray-700 max-w-md">
              We are the most straightforward URL shortener in the world. While others track your data or require logins, we keep it clean and privacy-friendly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shorten"
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold shadow-lg px-6 py-2 rounded-2xl text-sm sm:text-base text-center"
              >
                Try Now
              </Link>
              <Link
                href="/github"
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold shadow-lg px-6 py-2 rounded-2xl text-sm sm:text-base text-center"
              >
                GitHub
              </Link>
              {/* <Link
                href="/login"
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold shadow-lg px-6 py-2 rounded-2xl text-sm sm:text-base text-center"
              >
                Login
              </Link> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-auto">
            <Image
              className="mix-blend-darken object-cover"
              alt="An illustration vector"
              src="/vector.jpg"
              fill
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
