"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 via-yellow-100 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl max-w-3xl text-center"
      >
        <h1 className="text-5xl font-extrabold text-orange-600 mb-6">Tentang Kami</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Macaroni Station hadir untuk menghadirkan camilan renyah, pedas, dan menggugah selera.
          Kami percaya setiap gigitan harus membawa kebahagiaan. Terinspirasi dari jajanan street food,
          kami menyajikan berbagai varian rasa unik untuk menemani waktu santai maupun kumpul bersama teman.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Kami adalah pilihan terbaik untuk kamu pecinta camilan pedas dan gurih yang bikin ketagihan! 🔥
        </p>
      </motion.div>
    </div>
  );
}
