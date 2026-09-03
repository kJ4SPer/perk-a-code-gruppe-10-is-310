import Image from "next/image";
import Link from "next/link";

const SLASH = "//";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1a2333] bg-[#05080e] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logo.png"
                  alt="Perk-a-Code Logo"
                  width={180}
                  height={220}
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,255,157,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h3 className="font-mono text-lg sm:text-xl font-extrabold text-white tracking-wider group-hover:text-[#00ff9d] transition-colors">
                    PERK-A-CODE
                  </h3>
                  <p className="font-mono text-xs text-[#00f0ff] mt-0.5">
                    Bachelorgruppe 10 {SLASH} IS-310
                  </p>
                </div>
              </div>
            </Link>
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
                  <span className="text-slate-600">&gt;</span> Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt oss */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-[#00f0ff] uppercase tracking-widest">
              {SLASH} Kontakt oss
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="block text-xs font-mono text-slate-500">E-post:</span>
                <a
                  href="mailto:kj4sp@gmail.com"
                  className="font-mono text-slate-300 hover:text-[#00ff9d] transition-colors"
                >
                  kj4sp@gmail.com
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
                  Tilgjengelig for bachelor våren 2027
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

