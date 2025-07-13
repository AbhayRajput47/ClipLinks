"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shorten", label: "Shortner" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-purple-700 text-white px-6 py-3 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          ClipLinks
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center font-medium text-sm">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-purple-300 underline"
                    : "text-white"
                } hover:text-purple-300 transition`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex gap-3">
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-purple-400 font-bold px-4 py-2 rounded-xl">
                Try now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-purple-400 font-bold px-4 py-2 rounded-xl">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-purple-800 px-6 py-4 flex flex-col gap-4 text-white text-sm font-medium shadow-md transition-all">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "text-purple-300 underline" : "text-white"
              } hover:text-purple-300`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link href="/shorten">
              <button
                onClick={() => setOpen(false)}
                className="bg-purple-500 hover:bg-purple-400 font-bold px-4 py-2 rounded-xl w-full"
              >
                Try now
              </button>
            </Link>
            <Link href="/github">
              <button
                onClick={() => setOpen(false)}
                className="bg-purple-500 hover:bg-purple-400 font-bold px-4 py-2 rounded-xl w-full"
              >
                GitHub
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
