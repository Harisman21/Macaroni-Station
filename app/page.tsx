"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  const features = [
    {
      img: "https://x.ai/api/image/macaroni-spicy", // Hypothetical AI-generated image URL
      title: "Macaroni",
      desc: "Camilan macaroni pedas dan gurih, bikin setiap gigitan nagih.",
    },
    {
      img: "https://x.ai/api/image/basreng-crispy", // Hypothetical AI-generated image URL
      title: "Basreng",
      desc: "Keripik pedas renyah, teman sempurna untuk santai.",
    },
    {
      img: "https://x.ai/api/image/mie-lidi-usus", // Hypothetical AI-generated image URL
      title: "Mie Lidi & Usus",
      desc: "Snack gurih dengan varian rasa, cocok untuk nongkrong.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-20 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Macaroni Station 🌶️
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
            Camilan pedas, gurih, dan bikin nagih! Teman setia buat nongkrong dan santai.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-500 transition-colors"
          >
            Pesan Sekarang
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src="https://x.ai/api/image/hero-macaroni" // Hypothetical AI-generated hero image
            alt="Macaroni Station"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-6 pb-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-xl"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-40 h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-white">{f.title}</h3>
            <p className="mt-2 text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}