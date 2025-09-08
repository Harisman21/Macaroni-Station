"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Info, Phone, List, ShoppingBag } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-orange-500 to-red-600 text-white shadow-lg transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-2xl font-bold border-b border-white/20">
          Macaroni Station
        </div>

        <nav className="p-6 space-y-4 text-lg">
          <Link href="/" className="flex items-center gap-3 hover:text-yellow-300 transition">
            <Home size={20} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-3 hover:text-yellow-300 transition">
            <Info size={20} /> About
          </Link>
          <Link href="/service" className="flex items-center gap-3 hover:text-yellow-300 transition">
            <ShoppingBag size={20} /> Service
          </Link>
          <Link href="/menu" className="flex items-center gap-3 hover:text-yellow-300 transition">
            <List size={20} /> Menu
          </Link>
          <Link href="/contact" className="flex items-center gap-3 hover:text-yellow-300 transition">
            <Phone size={20} /> Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
