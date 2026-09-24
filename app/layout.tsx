import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOS-X | Professionele Dakreiniging & Dakcoating, Oost-Vlaanderen",
  description:
    "MOS-X verzorgt dakontmossing, dakcoating en gevelreiniging in Oost-Vlaanderen. Gratis dakdiagnose inclusief drone-inspectie. Eerlijk advies van Yannick.",
  keywords: [
    "dakontmossing",
    "dakcoating",
    "gevelreiniging",
    "dakreiniging",
    "drone inspectie dak",
    "gratis dakdiagnose",
    "Oost-Vlaanderen",
    "MOS-X",
  ],
  openGraph: {
    title: "MOS-X | Dakreiniging & Dakcoating",
    description: "Gratis dakdiagnose inclusief drone-inspectie. Eerlijk advies van Yannick.",
    type: "website",
    locale: "nl_BE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
