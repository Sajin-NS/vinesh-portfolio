import type { Metadata } from "next";
import { Barlow, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll";
import Preloader from "./components/preloader";
import BackToTop from "./components/back-to-top";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinesh — Creative Marketing & Brand Design",
  description:
    "Multi-disciplinary creative leader specializing in brand identity, campaign design, social content systems, and AI-powered creative direction.",
  authors: [{ name: "Vinesh" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-full">
        <Preloader />
        <SmoothScroll />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

