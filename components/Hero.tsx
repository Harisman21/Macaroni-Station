"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 px-6 text-center overflow-hidden">
      {/* Background efek dekorasi */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://source.unsplash.com/1600x900/?snack,macaroni,spicy')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Selamat Datang di{" "}
          <span className="text-yellow-300">Macaroni Station</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Camilan pedas, gurih, dan bikin nagih. Cocok buat semua suasana! 🌶️
        </p>
        <a
          href="/service"
          className="px-8 py-4 bg-yellow-300 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition"
        >
          Pesan Sekarang
        </a>
      </motion.div>
    </section>
  );
}
