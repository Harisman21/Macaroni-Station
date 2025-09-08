import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Macaroni Station",
  description: "Camilan pedas, gurih, dan bikin nagih!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${poppins.className} bg-gradient-to-b from-orange-50 to-yellow-100`}>
        <Sidebar />
        <main className="md:ml-64 transition-all">{children}</main>
      </body>
    </html>
  );
}
