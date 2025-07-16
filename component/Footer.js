import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 text-sm relative bottom-0 mx-w-full w-full ">
      <div className="max-w-6xl mx-auto px-4 py-6 md:grid-cols-3 text-gray-700 flex justify-around ">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-purple-700">ClipLinks</h2>
          <p className="mt-1 text-gray-500">
            Trusted URL shortener. Clean, fast, and reliable links.
          </p>
        </div>

        <div className='gap-4'>
        {/* Quick Links */}
        <div>
          <h3 className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Quick Links</h3>
          <ul className="mt-3 space-y-1 flex gap-4 ">
            <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
            <li><a href="/clipLinks" target="_blank" className="hover:text-purple-600">GitHub</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            {/* <a href="https://twitter.com/cliplinks" target="_blank" aria-label="Twitter" className="text-gray-600 hover:text-purple-600">
              <Twitter className="w-4 h-4" />
            </a> */}
            <a href="https://www.linkedin.com/in/abhay-rajput-247a81298/" target="_blank" aria-label="LinkedIn" className="text-gray-600 hover:text-purple-600">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/AbhayRajput47/ClipLinks" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-purple-600">
              <Github className="w-4 h-4" />
            </a>
          </div> 
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} ClipLinks. All rights reserved.
      </div>
    </footer>
  );
}
