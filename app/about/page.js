"use client"
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-purple-50 text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-purple-700 mb-6"
        >
          About <span className="text-purple-500">ClipLinks</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl leading-relaxed text-gray-700 mb-8"
        >
          <strong>ClipLinks</strong> is a modern, minimal, and ad-free URL shortener built to help you share cleaner, smarter links. Whether you’re a content creator, marketer, or student — ClipLinks keeps your URLs short, elegant, and trackable.
        </motion.p>

        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              🚀 Why ClipLinks?
            </h2>
            <ul className="space-y-3 text-lg list-disc list-inside">
              <li>Blazing-fast and reliable performance</li>
              <li>Trackable, unique, and secure links</li>
              <li>Modern, clutter-free interface</li>
              <li>No ads, no distractions — ever</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              🛠️ Built With
            </h2>
            <ul className="space-y-3 text-lg list-disc list-inside">
              <li>Next.js + App Router</li>
              <li>Tailwind CSS for clean UI</li>
              <li>MongoDB for URL storage</li>
              {/* <li>Razorpay (if used) for payment integration</li> */}
            </ul>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 bg-purple-100 border border-purple-300 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🙋‍♂️ Got Feedback?</h3>
          <p className="text-lg">
            We&apos;d love to hear from you! Whether it&apos;s a bug, suggestion, or just a thumbs up —
            <a href="/contact" className="text-purple-600 font-medium underline ml-1">reach out here.</a>
          </p>
        </motion.div> 
      </div>
    </main>
  );
}



 