import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinesh Studio — Creative Marketing & Brand Design",
  description: "Building brands from idea to impact. Shape brand identities, campaign visuals, social systems, pitch decks, and AI-powered creative direction for hospitality, lifestyle, and digital-first businesses.",
  authors: [{ name: "Vinesh Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {children}
      </body>
    </html>
  );
}

