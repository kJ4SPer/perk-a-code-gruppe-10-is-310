import Image from "next/image";
import Link from "next/link";

const SLASH = "//";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1a2333] bg-[#05080e] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Intro */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded border border-[#1a2333] bg-[#0c1322] p-1 shadow-[0_0_15px_rgba(0,255,157,0.1)] group-hover:border-[#00ff9d]/50 transition-all">
                  <Image
                    src="/logo.png"
                    alt="Perk-a-Code Logo"
                    width={130}
                    height={70}
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-mono text-base font-bold text-white tracking-wider group-hover:text-[#00ff9d] transition-colors">
                    PERK-A-CODE
                  </h3>
                  <p className="font-mono text-xs text-[#00f0ff]">
                    Bachelorgruppe 10 {SLASH} IS-310
                  </p>
                </div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              IT-studenter på 5. semester ved Universitetet i Agder (UiA). Vi
              kombinerer dyp teknisk arkitektur, analytisk systemforståelse og
              moderne AI & prompt engineering for å levere fremtidsrettede
              digitale løsninger.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#00ff9d] animate-pulse"></span>
              <span>LOKASJON: KRISTIANSAND {SLASH} UiA CAMPUS</span>
            </div>
          </div>

          {/* Hurtiglenker */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-[#00ff9d] uppercase tracking-widest">
              {SLASH} Navigasjon
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&gt;</span> Hjem
                </Link>
              </li>
              <li>
                <Link
                  href="/prosjekter"
                  className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&gt;</span> Prosjekter
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss"
                  className="hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&gt;</span> Om oss & Perks
                </Link>
              </li>
            </ul>
          </div>

          {/* Direktekontakt */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-[#00f0ff] uppercase tracking-widest">
              {SLASH} Direktekontakt
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="block text-xs font-mono text-slate-500">E-post:</span>
                <a
                  href="mailto:kj4sper@gmail.com"
                  className="font-mono text-slate-300 hover:text-[#00ff9d] transition-colors"
                >
                  kj4sper@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-500">Telefon:</span>
                <a
                  href="tel:94185687"
                  className="font-mono text-slate-300 hover:text-[#00ff9d] transition-colors"
                >
                  +47 941 85 687
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 rounded border border-[#1a2333] bg-[#090e18] px-2.5 py-1 text-[11px] font-mono text-[#00ff9d]">
                  Tilgjengelig for Bachelor Vår 2027
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#121927] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Perk-a-Code. Gruppe 10 - IS-310 UiA. Alle rettigheter reservert.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <span>SYS_VER: 2026.09</span>
            <span>|</span>
            <span className="text-[#00ff9d]">SECURE_TERMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

