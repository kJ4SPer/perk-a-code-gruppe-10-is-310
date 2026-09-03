import Link from "next/link";

const SLASH = "//";

export default function ProsjekterPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl bg-gradient-to-b from-[#00f0ff]/10 via-[#00ff9d]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header section */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]"></span>
            <span>{SLASH} Portefølje & Leveranser</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Prosjekter
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Oversikt over våre tekniske prosjekter, prototyper og leveranser.
          </p>
        </div>

        {/* Sleek Placeholder Card */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1a2538] bg-[#090e18]/90 p-8 sm:p-14 backdrop-blur-md text-center shadow-[0_0_35px_rgba(0,240,255,0.08)]">
          {/* Subtle glowing corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl mx-auto space-y-6">
            {/* Status badge with pulsing dot */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0c1626]/80 px-4 py-1.5 text-xs font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]"></span>
              </span>
              <span>UNDER UTVIKLING // LEGGES TIL FORTLØPENDE</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Prosjekter legges til fortløpende
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Vi er for tiden i full sving med studiet og praksisarbeid.
                Konkrete prosjekter, kodebaser og tekniske løsninger vil bli
                publisert her etter hvert som de ferdigstilles og klargjøres.
              </p>
            </div>

            {/* Terminal info block */}
            <div className="rounded-lg border border-[#162338] bg-[#050810]/80 p-4 font-mono text-xs text-slate-400 text-left space-y-1.5">
              <div className="flex items-center gap-2 text-slate-500">
                <span className="text-[#00ff9d]">$</span>
                <span>status --check projects_repository</span>
              </div>
              <p className="text-[#00f0ff]">
                &gt; Ingen offentlige prosjekter indeksert enda. Oppdateres fortløpende.
              </p>
            </div>

            {/* CTA back to Home / Contact */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 rounded-md bg-[#00ff9d] px-6 py-3 font-mono text-sm font-bold text-[#070b12] transition-all duration-300 hover:bg-[#2effb1] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] active:scale-95"
              >
                <span>Ta kontakt for samarbeid</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 rounded-md border border-[#1d2a3f] bg-[#0d1624] px-6 py-3 font-mono text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-[#00f0ff]/50 hover:text-white"
              >
                <span>Les mer om teamet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
