"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingCart, Gift } from "lucide-react";

export default function ServicePage() {
  const services = [
    {
      icon: <Utensils size={40} className="text-orange-400" />,
      title: "Varian Rasa Spesial",
      desc: "Dari pedas menggigit hingga gurih creamy – selalu ada rasa favoritmu!",
    },
    {
      icon: <ShoppingCart size={40} className="text-yellow-400" />,
      title: "Pesan Online",
      desc: "Nikmati kemudahan order lewat WhatsApp & marketplace favoritmu.",
    },
    {
      icon: <Gift size={40} className="text-pink-400" />,
      title: "Paket Eksklusif",
      desc: "Cocok untuk hampers, acara, atau hadiah untuk orang tersayang.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-red-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center text-orange-600 mb-12"
        >
          Layanan Kami
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center hover:scale-105 transition-transform"
            >
              <div className="flex justify-center">{s.icon}</div>
              <h2 className="mt-4 text-2xl font-bold text-orange-500">{s.title}</h2>
              <p className="mt-3 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
