"use client";

import { motion } from "framer-motion";

const menuSections = [
  {
    title: "MAKARONI PIPA",
    prices: [
      ["REGULER", "6K"],
      ["BESAR", "10K"],
      ["JUMBO", "20K"],
      ["BOX KECIL", "13K"],
      ["BOX BESAR", "23K"],
      ["TOPLES", "16K"],
    ],
    img: "https://source.unsplash.com/400x400/?snack", // placeholder
  },
  {
    title: "MAKARONI SPIRAL",
    prices: [
      ["REGULER", "6K"],
      ["BESAR", "10K"],
      ["JUMBO", "20K"],
      ["BOX KECIL", "13K"],
      ["BOX BESAR", "23K"],
      ["TOPLES", "16K"],
    ],
    img: "https://source.unsplash.com/400x400/?chips",
  },
  {
    title: "USUS",
    prices: [
      ["REGULER", "8K"],
      ["BESAR", "15K"],
      ["JUMBO", "25K"],
      ["BOX KECIL", "17K"],
      ["BOX BESAR", "27K"],
      ["TOPLES", "20K"],
    ],
    img: "https://source.unsplash.com/400x400/?snack,crisp",
  },
  {
    title: "BASRENG",
    prices: [
      ["REGULER", "8K"],
      ["BESAR", "15K"],
      ["JUMBO", "25K"],
      ["BOX KECIL", "17K"],
      ["BOX BESAR", "27K"],
      ["TOPLES", "20K"],
    ],
    img: "https://source.unsplash.com/400x400/?fried,snack",
  },
  {
    title: "MIE LIDI",
    prices: [
      ["REGULER", "6K"],
      ["BESAR", "10K"],
      ["JUMBO", "20K"],
      ["BOX KECIL", "13K"],
      ["BOX BESAR", "23K"],
      ["TOPLES", "16K"],
    ],
    img: "https://source.unsplash.com/400x400/?stick,food",
  },
  {
    title: "MIE KERITING",
    prices: [
      ["REGULER", "6K"],
      ["BESAR", "10K"],
      ["JUMBO", "20K"],
      ["BOX KECIL", "13K"],
      ["BOX BESAR", "23K"],
      ["TOPLES", "16K"],
    ],
    img: "https://source.unsplash.com/400x400/?noodle,crispy",
  },
];

const variantsList = [
  "ASIN",
  "PEDAS ASIN",
  "PEDAS MANIS",
  "PEDAS SUPER",
  "BBQ",
  "BALADO",
  "KEJU",
  "SAPI PANGGANG",
  "JAGUNG MANIS",
  "JAGUNG BAKAR",
];

export default function MenuPosterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl"
      >
        {/* Poster Container */}
        <div className="bg-red-600 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top white header bar */}
          <div className="h-4 bg-white/40 rounded-t-2xl" />

          <div className="px-6 py-8 lg:px-12 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column (3 boxes) */}
            <div className="space-y-6">
              {/* Title */}
              <div className="flex items-center gap-4">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-widest">
                  MACARONI STATION
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {menuSections.slice(0, 3).map((s, i) => (
                  <section
                    key={s.title}
                    className="bg-white/95 rounded-xl p-4 lg:p-6 grid grid-cols-2 gap-4 items-center"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm lg:text-base font-bold text-red-600">{s.title}</h3>

                      <div className="grid grid-cols-2 gap-1 text-xs lg:text-sm">
                        {s.prices.map(([label, price]) => (
                          <div key={label} className="flex justify-between">
                            <span className="text-gray-700">{label}</span>
                            <span className="font-semibold text-gray-900">{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-28 lg:h-36 rounded-lg overflow-hidden bg-gray-100">
                      {/* image placeholder */}
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Right Column (3 boxes) */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {menuSections.slice(3, 6).map((s) => (
                  <section
                    key={s.title}
                    className="bg-white/95 rounded-xl p-4 lg:p-6 grid grid-cols-2 gap-4 items-center"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm lg:text-base font-bold text-red-600">{s.title}</h3>

                      <div className="grid grid-cols-2 gap-1 text-xs lg:text-sm">
                        {s.prices.map(([label, price]) => (
                          <div key={label} className="flex justify-between">
                            <span className="text-gray-700">{label}</span>
                            <span className="font-semibold text-gray-900">{price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-28 lg:h-36 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-white/30" />

          {/* Bottom Info: variants & level & contact */}
          <div className="px-6 py-6 lg:px-12 lg:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Variants */}
              <div className="bg-yellow-400 rounded-xl p-4">
                <h4 className="text-lg font-bold text-red-700 mb-3">VARIAN RASA</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-red-800">
                  {variantsList.map((v) => (
                    <li key={v} className="flex items-center gap-2">• <span>{v}</span></li>
                  ))}
                </ul>
              </div>

              {/* Level Pedas */}
              <div className="bg-white/95 rounded-xl p-4 flex flex-col items-center justify-center">
                <h4 className="text-lg font-bold text-red-600">LEVEL PEDAS</h4>
                <p className="text-sm text-gray-700 mt-2">LEVEL 1 - 10</p>

                <div className="w-full mt-4">
                  <div className="h-3 rounded-full bg-red-100 overflow-hidden">
                    <div className="h-full bg-red-600 w-60"></div>
                  </div>
                </div>
              </div>

              {/* Contact bar */}
              <div className="bg-black/90 rounded-xl p-4 text-white flex flex-col justify-between">
                <div>
                  <p className="text-sm opacity-80">📍 Perum. Dewe Residence, Dsn Pilangsari, Kec. Beji, Kab. Pasuruan</p>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <a className="flex items-center justify-between bg-white/10 p-3 rounded-md" href="https://wa.me/6289524640022" target="_blank" rel="noreferrer">
                    <span>📞 0895-2464-0022</span>
                    <span className="font-semibold">WhatsApp</span>
                  </a>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="bg-white/10 px-3 py-2 rounded">IG</span>
                    <span className="bg-white/10 px-3 py-2 rounded">Shopee</span>
                    <span className="bg-white/10 px-3 py-2 rounded">Tokopedia</span>
                  </div>

                  <div className="mt-2 text-center text-sm bg-white/10 py-2 rounded">@MACARONI.STATION</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer small */}
          <div className="bg-yellow-300 text-red-800 text-center py-3">
            <span className="font-bold">© 2025 Macaroni Station</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
