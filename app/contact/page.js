'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-purple-50 px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-purple-700 mb-6 text-center"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-center text-gray-600 mb-10"
        >
          Have questions, feedback, or just want to say hello? We&apos;d love to hear from you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! (This is UI only)');
          }}
        >
          <div>
            <label className="block text-sm font-semibold text-purple-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-600 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Contact Information</h2>

          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-600" />
              contact@cliplinks.io
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-600" />
            +91 98760 01234
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-600" />
              14th Floor, SkyTower, Bengaluru, India
            </li>
            {/* <li className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-purple-600" />
              <a href="https://twitter.com/cliplinks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @cliplinks
              </a>
            </li> */}
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-purple-600" />
              <a href="https://www.linkedin.com/in/abhay-rajput-247a81298/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/company/cliplinks
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github className="w-5 h-5 text-purple-600" />
              <a href="https://github.com/cliplinks" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/cliplinks
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
