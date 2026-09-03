import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perk-a-Code | IT-Bachelorgruppe 10 - IS-310 UiA",
  description:
    "Bachelorgruppen Perk-a-Code ved Universitetet i Agder. 5. semester IT-studenter med fokus på moderne digitale løsninger, AI og prompt engineering. Søker spennende bachelorprosjekt våren 2027.",
  keywords: [
    "Perk-a-Code",
    "UiA",
    "IS-310",
    "Bachelor",
    "IT",
    "Kristiansand",
    "Webutvikling",
    "AI",
    "Prompt Engineering",
    "Fullstack",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#070b12] text-slate-100 font-sans cyber-grid selection:bg-[#00ff9d]/20 selection:text-[#00ff9d]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
