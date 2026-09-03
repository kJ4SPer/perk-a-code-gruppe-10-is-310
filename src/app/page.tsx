import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const miniTeam = [
    {
      name: "Kasper",
      perk: "Juggernog",
      colorName: "Rød",
      hex: "#ff0000",
      accentBorder: "border-[#ff0000]/30 hover:border-[#ff0000]",
      hoverShadow: "hover:shadow-[0_0_30px_#ff0000]",
      badgeBg: "bg-red-950/60 text-red-400 border-red-500/40",
      tagline: "Den robuste ryggraden",
      shortDesc: "Tåler støyten, håndterer komplekse strukturer og sikrer stabilitet.",
    },
    {
      name: "Hans Kristian",
      perk: "Quick Revive",
      colorName: "Blå",
      hex: "#00ffff",
      accentBorder: "border-[#00ffff]/30 hover:border-[#00ffff]",
      hoverShadow: "hover:shadow-[0_0_30px_#00ffff]",
      badgeBg: "bg-cyan-950/60 text-cyan-300 border-cyan-400/40",
      tagline: "Support og problemløser",
      shortDesc: "Feilsøker, rydder opp og gjenoppliver koden når uventede bugs inntreffer.",
    },
    {
      name: "Kristian",
      perk: "Speed Cola",
      colorName: "Grønn",
      hex: "#00ff00",
      accentBorder: "border-[#00ff00]/30 hover:border-[#00ff00]",
      hoverShadow: "hover:shadow-[0_0_30px_#00ff00]",
      badgeBg: "bg-emerald-950/60 text-emerald-300 border-emerald-400/40",
      tagline: "Rask og smidig",
      shortDesc: "Optimaliserer prosesser, kutter lastetid og leverer kode i høyt tempo.",
    },
    {
      name: "Mats",
      perk: "Double Tap",
      colorName: "Gul/Oransje",
      hex: "#ffaa00",
      accentBorder: "border-[#ffaa00]/30 hover:border-[#ffaa00]",
      hoverShadow: "hover:shadow-[0_0_30px_#ffaa00]",
      badgeBg: "bg-amber-950/60 text-amber-300 border-amber-400/40",
      tagline: "Høy output",
      shortDesc: "Pumper ut funksjonalitet, dobler effektiviteten og maksimerer verdi.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl bg-gradient-to-b from-[#00f0ff]/10 via-[#00ff9d]/5 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-6">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0c1626]/80 px-4 py-1.5 text-xs font-mono text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#00ff9d] animate-ping"></span>
              <span>{"IS-310 GRUPPE 10 // UNIVERSITETET I AGDER"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Vi er{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#00ff9d] to-white">
                Perk-a-Code
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fire engasjerte IT-studenter på 5. semester ved Universitetet i
              Agder (UiA). Vi bygger solide, fremtidsrettede digitale løsninger
              med aktiv og målrettet bruk av{" "}
              <span className="text-[#00ff9d] font-semibold">
                AI og Prompt Engineering
              </span>{" "}
              – alltid forankret i et skarpt analytisk blikk og solid
              systemarkitektur.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/prosjekter"
                className="inline-flex items-center gap-2 rounded-md bg-[#00ff9d] px-6 py-3 font-mono text-sm font-bold text-[#070b12] transition-all duration-300 hover:bg-[#2effb1] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] active:scale-95"
              >
                <span>Utforsk prosjekter</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 rounded-md border border-[#1e2c44] bg-[#0b1220]/80 px-6 py-3 font-mono text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              >
                <span>Møt teamet</span>
              </Link>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-3 font-mono text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span>{"Hurtigkontakt ↓"}</span>
              </a>
            </div>

            {/* Quick terminal stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#1a2333]/80 font-mono text-xs text-slate-400">
              <div className="p-2.5 rounded bg-[#090e18] border border-[#141d2d]">
                <div className="text-[#00ff9d] font-bold text-sm">4 UTVIKLERE</div>
                <div>Spesialiserte Perks</div>
              </div>
              <div className="p-2.5 rounded bg-[#090e18] border border-[#141d2d]">
                <div className="text-[#00f0ff] font-bold text-sm">5. SEMESTER</div>
                <div>UiA Kristiansand</div>
              </div>
              <div className="p-2.5 rounded bg-[#090e18] border border-[#141d2d]">
                <div className="text-white font-bold text-sm">VÅR 2027</div>
                <div>Bacheloroppgave</div>
              </div>
            </div>
          </div>

          {/* Hero Logo Graphic */}
          <div className="flex-1 flex justify-center items-center w-full max-w-lg">
            <div className="relative group w-full">
              {/* Glowing backdrops */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00f0ff] to-[#00ff9d] opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"></div>

              <div className="relative overflow-hidden rounded-2xl border border-[#1f2e47] bg-[#090e1a]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#1a2638] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="font-mono text-[11px] text-[#00f0ff] tracking-wider">
                    PERK_A_CODE_CORE.ENV
                  </span>
                </div>

                <div className="relative aspect-[16/9] w-full flex items-center justify-center p-4 bg-[#050810]/70 rounded-lg border border-[#141e30]">
                  <Image
                    src="/logo.png"
                    alt="Perk-a-Code Bachelor Group Logo"
                    width={500}
                    height={273}
                    priority
                    className="max-h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(0,255,157,0.3)] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[#00ff9d]">&gt; READY_FOR_DEPLOYMENT</span>
                  <span>IS-310 PRAKSIS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRAKSIS-BOKS */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-xl border-2 border-[#00f0ff]/50 bg-[#09111e]/90 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_35px_rgba(0,240,255,0.12)]">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-[#19263b] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-3 w-3 rounded bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]"></span>
                <h2 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-[#00f0ff]">
                  {"// Pågående Praksisprosjekt: Kristiansand Kommune"}
                </h2>
              </div>
              <span className="font-mono text-xs rounded bg-[#0f1d30] px-3 py-1 text-slate-300 border border-[#1c3352]">
                STATUS: AKTIVT PRAKSISARBEID
              </span>
            </div>

            {/* Exact required text */}
            <div className="my-6 rounded-lg bg-[#060a12]/80 border-l-4 border-[#00ff9d] p-5 sm:p-6">
              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                Digitalisering av 200 år med oppmålingsprotokoller samt å
                utvikle en datadrevet og maskinlesbar «drømmeplan» helt fra
                tidlig planfase, slik at kommune og plankonsulenter kan samhandle
                mer effektivt om kart og bestemmelser ved hjelp av moderne
                standarder som PLAN 5.0
              </p>
            </div>

            {/* Links and tech tags */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-slate-400">Relevante etater:</span>
                <a
                  href="https://www.kristiansand.kommune.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded bg-[#101b2e] px-3 py-1.5 text-[#00ff9d] border border-[#19324f] hover:border-[#00ff9d] hover:shadow-[0_0_12px_rgba(0,255,157,0.3)] transition-all"
                >
                  <span>Kristiansand kommune</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.kristiansand.kommune.no/navigasjon/bolig-kart-og-eiendom/plan-og-bygg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded bg-[#101b2e] px-3 py-1.5 text-[#00f0ff] border border-[#19324f] hover:border-[#00f0ff] hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all"
                >
                  <span>Plan og bygg</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
                <span className="rounded bg-[#0c1322] px-2 py-1 border border-[#1a2333]">
                  #PLAN5.0
                </span>
                <span className="rounded bg-[#0c1322] px-2 py-1 border border-[#1a2333]">
                  #GIS
                </span>
                <span className="rounded bg-[#0c1322] px-2 py-1 border border-[#1a2333]">
                  #Digitalisering
                </span>
                <span className="rounded bg-[#0c1322] px-2 py-1 border border-[#1a2333]">
                  #Samhandling
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BACHELOR-SØK */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff9d] uppercase tracking-wider mb-2">
              <span>{"// Samarbeid Våren 2027"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Bachelor-søk: Klar for krevende oppgaver
            </h2>
            <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
              Våren 2027 skal Perk-a-Code levere vår avsluttende bacheloroppgave.
              Vi ser etter ambisiøse oppdragsgivere – enten i privat næringsliv,
              oppstartsbedrifter eller offentlig sektor – med en reell, kompleks
              problemstilling som krever mer enn en standard hyllevare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#1a2538] bg-[#090e18]/80 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] font-mono font-bold">
                  01
                </div>
                <h3 className="font-mono text-lg font-bold text-white">
                  Hvorfor velge Perk-a-Code?
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ff9d] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">Synergi og faste roller:</strong>{" "}
                    Vi har en etablert dynamikk inspirert av klassiske gaming-perks
                    – fra robust systemarkitektur til lynrask koding og feilsøking.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ff9d] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">Aktiv AI-integrasjon:</strong>{" "}
                    Vi bruker LLM-er og prompt engineering aktivt i analyse,
                    strukturering og prototyping, men kvalitetssikrer alt med et
                    kritisk, analytisk ingeniørblikk.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00ff9d] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">Reell verdiskaping:</strong> Vi
                    leverer ikke bare teoretiske rapporter; vi etterlater oss
                    testet, produksjonsklar kode og ryddig dokumentasjon.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#1a2538] bg-[#090e18]/80 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono font-bold">
                  02
                </div>
                <h3 className="font-mono text-lg font-bold text-white">
                  Hva slags oppdragsgiver søker vi?
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00f0ff] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">
                      Reelle teknologiske utfordringer:
                    </strong>{" "}
                    Enten det dreier seg om maskinlesbare formater, systemintegrasjon,
                    databaser, moderne webapplikasjoner eller AI-verktøy.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00f0ff] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">Tett dialog og sparring:</strong>{" "}
                    En organisasjon som er åpen for smidig samarbeid og gir rom
                    for nyskaping underveis i prosjektet.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#00f0ff] font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-white">Ambisjoner for våren 2027:</strong>{" "}
                    En part som ønsker et dedikert team i ryggen for å realisere et
                    prosjekt med varig verdi.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. TEAM-KORT (FIRE INTERAKTIVE MINIKORT MED HOVER:SHADOW) */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-2">
                <span>{"// Perk-a-Cola Karakterklasser"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Møt Bachelorgruppen
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
                Klikk på kortene under for å lese fullstendige profiler med
                styrker, svakheter, verdier og ambisjoner.
              </p>
            </div>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2 font-mono text-sm text-[#00ff9d] hover:text-[#52ffb6] transition-colors"
            >
              <span>Se detaljerte profiler</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniTeam.map((member) => (
              <Link
                key={member.name}
                href="/om-oss"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-[#0a101b]/90 p-6 transition-all duration-300 ${member.accentBorder} ${member.hoverShadow} active:scale-[0.98]`}
              >
                {/* Visual glow indicator */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-xl pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
                  style={{ backgroundColor: member.hex }}
                ></div>

                <div className="space-y-4">
                  {/* Perk badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block rounded px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider border ${member.badgeBg}`}
                    >
                      {member.perk}
                    </span>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: member.hex,
                        boxShadow: `0 0 8px ${member.hex}`,
                      }}
                    ></span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p
                      className="font-mono text-xs font-medium tracking-wide mt-1"
                      style={{ color: member.hex }}
                    >
                      {member.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {member.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#141e30] flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  <span>Les profil</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. CTA (KONTAKTSEKSJON) */}
        <section id="kontakt" className="scroll-mt-28">
          <div className="relative overflow-hidden rounded-2xl border border-[#00ff9d]/30 bg-gradient-to-b from-[#0b1524] to-[#070b12] p-8 sm:p-12 shadow-[0_0_40px_rgba(0,255,157,0.1)]">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#00ff9d]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded bg-[#00ff9d]/10 border border-[#00ff9d]/40 px-3 py-1 font-mono text-xs text-[#00ff9d]">
                <span>{"// TA KONTAKT FOR SAMARBEID"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Klar for en uforpliktende prat eller en kaffe?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Har din bedrift eller etat en utfordring som egner seg for et
                ambisiøst bachelorprosjekt våren 2027, eller ønsker dere å høre
                mer om hvordan vi jobber med AI, web og datadrevet digitalisering?
                Ta direkte kontakt med oss!
              </p>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="mailto:kj4sper@gmail.com"
                  className="flex items-center justify-center gap-3 rounded-lg border border-[#00ff9d]/50 bg-[#00ff9d] px-6 py-3.5 font-mono text-sm font-bold text-[#070b12] hover:bg-[#38ffad] hover:shadow-[0_0_25px_rgba(0,255,157,0.6)] transition-all"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>kj4sper@gmail.com</span>
                </a>

                <a
                  href="tel:94185687"
                  className="flex items-center justify-center gap-3 rounded-lg border border-[#00f0ff]/50 bg-[#0c1829] px-6 py-3.5 font-mono text-sm font-bold text-[#00f0ff] hover:bg-[#11233d] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>94 18 56 87</span>
                </a>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="text-[#00ff9d]">•</span>
                <span>Rask responstid: Svarer vanligvis innen få timer</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
