"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      icon: <Phone size={24} className="text-green-500" />,
      label: "WhatsApp",
      value: "+62 812 3456 7890",
      link: "https://wa.me/6281234567890",
    },
    {
      icon: <Mail size={24} className="text-red-500" />,
      label: "Email",
      value: "macaronistation@gmail.com",
      link: "mailto:macaronistation@gmail.com",
    },
    {
      icon: <MapPin size={24} className="text-blue-500" />,
      label: "Lokasi",
      value: "Pasuruan, Jawa Timur",
      link: "#",
    },
    {
      icon: <Instagram size={24} className="text-pink-500" />,
      label: "Instagram",
      value: "@makaronihuhhahpasuruan",
      link: "https://instagram.com/makaronihuhhahpasuruan",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-xl max-w-3xl w-full"
      >
        <h1 className="text-5xl font-extrabold text-orange-600 mb-10 text-center">
          Hubungi Kami
        </h1>

        <ul className="space-y-6">
          {contacts.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex items-center gap-4 bg-white/70 p-4 rounded-2xl shadow hover:shadow-lg transition"
            >
              {c.icon}
              <div>
                <span className="font-semibold text-orange-600">{c.label}:</span>{" "}
                <a href={c.link} target="_blank" className="hover:underline text-gray-700">
                  {c.value}
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
