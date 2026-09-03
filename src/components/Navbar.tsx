"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Hjem", href: "/" },
  { label: "Prosjekter", href: "/prosjekter" },
  { label: "Om oss", href: "/om-oss" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1a2333] bg-[#070b12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-28 sm:h-32">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-0.5 sm:gap-1 transition-opacity hover:opacity-95"
        >
          <Image
            src="/logo.png"
            alt="Perk-a-Code Logo"
            width={240}
            height={296}
            className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(0,240,255,0.35)] group-hover:scale-105 group-hover:drop-shadow-[0_0_26px_rgba(0,255,157,0.75)]"
            priority
          />
          <div className="hidden sm:flex flex-col justify-center -ml-1 sm:-ml-1.5">
            <span className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
              PERK-A-CODE
            </span>
            <span className="font-mono text-xs sm:text-sm tracking-widest text-[#00ff9d]">
              GRUPPE 10 // UiA IS-310
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-mono text-sm tracking-wide rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-[#00ff9d] bg-[#0c1928] border border-[#00ff9d]/40 shadow-[0_0_12px_rgba(0,255,157,0.2)]"
                    : "text-slate-400 hover:text-white hover:bg-[#0f172a] hover:border hover:border-[#1e293b]"
                }`}
              >
                {isActive && (
                  <span className="inline-block mr-1.5 text-[#00ff9d] animate-pulse">
                    &gt;
                  </span>
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#00f0ff] hover:bg-[#0e1626] border border-[#1a2333] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Åpne hovedmeny"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1a2333] bg-[#070b12]/98 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md font-mono text-sm tracking-wider ${
                  isActive
                    ? "text-[#00ff9d] bg-[#0c1928] border border-[#00ff9d]/30"
                    : "text-slate-300 hover:text-white hover:bg-[#0e1626]"
                }`}
              >
                <span className="text-[#00f0ff] mr-2">&gt;</span>
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#1a2333] flex items-center justify-between text-xs font-mono text-slate-400 px-3">
            <span>STATUS: SØKER BACHELOR 2027</span>
            <span className="text-[#00ff9d]">● ONLINE</span>
          </div>
        </div>
      )}
    </header>
  );
}

