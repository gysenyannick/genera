import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "X-GROUP | One Partner. Every Property.",
  description:
    "X-GROUP is uw professionele property care partner in België — reiniging, onderhoud, bescherming en verbetering voor residentieel, commercieel en industrieel vastgoed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#07080d] text-[#e2e4ed]">{children}</body>
    </html>
  );
}
