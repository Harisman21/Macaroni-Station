"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  desc: string;
}

export default function Card({ img, title, desc }: CardProps) {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-orange-300/50 hover:scale-105 transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={img}
        alt={title}
        width={400}
        height={300}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-orange-600">{title}</h3>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
