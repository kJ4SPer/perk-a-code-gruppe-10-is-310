import Image from "next/image";
import Link from "next/link";

/**
 * ============================================================================
 * KRITISK DATAMODELL: TEAMMEDLEMMER & PROFILER
 * ============================================================================
 * Rediger objektene i dette arrayet for enkelt å oppdatere profilinformasjon,
 * styrker, svakheter, ambisjoner, verdier og teknologistack for hvert medlem.
 */
export const teamMembers = [
  {
    id: "kasper",
    name: "Kasper",
    perk: "Juggernog",
    accentColor: "#ff0000",
    image: "/team/kasper.png",
    perkImage: "/perks/juggernog.png",
    colorTheme: {
      border: "border-[#ff0000]/40",
      hoverBorder: "hover:border-[#ff0000]",
      glow: "shadow-[0_0_25px_rgba(255,0,0,0.2)] hover:shadow-[0_0_35px_rgba(255,0,0,0.4)]",
      badgeBg: "bg-red-950/60 text-red-400 border-red-500/40",
      accentText: "text-red-400",
      tagBg: "bg-red-950/40 text-red-300 border-red-900/50",
      cardHeaderGlow: "from-red-600/10 via-red-900/5 to-transparent",
    },
    roleDescription:
      "Teamleder og den robuste ryggraden. Tåler støyten, koordinerer teamet, håndterer komplekse strukturer og sørger for stabilitet og fremdrift i prosjektet.",
    bio: "Kasper er bachelorgruppens teamleder, klippe og arkitektoniske anker. Han holder i overordnet koordinering, fremdrift og dialog mot oppdragsgivere, samtidig som han tar ansvar for systemstabilitet, dataintegritet og helhetlig arkitektur.",
    styrker: [
      "Teamledelse, koordinering og prosjektstyring",
      "Robust systemarkitektur og databasemodellering",
      "Kvalitetssikrer at fundamentet tåler videre skalering og press",
    ],
    svakheter: [
      "Kan bli vel opphengt i mikroskopiske detaljer og perfeksjonisme",
      "Vil helst løse hele arkitekturen før første kodelinje skrives",
      "Kaffeinntaket overskrider av og til helsefaglige anbefalinger",
    ],
    ambisjoner: [
      "Bygge et bachelorprosjekt i 2027 som tas i faktisk produksjon av oppdragsgiver",
      "Mestre storskala distribuerte skyløsninger og hendelsesdrevne arkitekturer",
      "Utvikle robuste rammeverk som gjør samhandling mellom AI og mennesker sømløs",
    ],
    verdier: [
      "Stabilitet og forutsigbarhet over raske snarveier",
      "Åpenhet og ærlighet i gruppearbeid",
      "Høy faglig integritet og grundig dokumentasjon",
    ],
    teknologier: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Systemarkitektur",
      "Docker",
      "REST/GraphQL",
    ],
  },
  {
    id: "hans-kristian",
    name: "Hans Kristian",
    perk: "Quick Revive",
    accentColor: "#00ffff",
    image: "/team/hans-kristian.jpg",
    perkImage: "/perks/quick-revive.png",
    colorTheme: {
      border: "border-[#00ffff]/40",
      hoverBorder: "hover:border-[#00ffff]",
      glow: "shadow-[0_0_25px_rgba(0,255,255,0.2)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)]",
      badgeBg: "bg-cyan-950/60 text-cyan-300 border-cyan-400/40",
      accentText: "text-cyan-300",
      tagBg: "bg-cyan-950/40 text-cyan-200 border-cyan-900/50",
      cardHeaderGlow: "from-cyan-600/10 via-cyan-900/5 to-transparent",
    },
    roleDescription:
      "Kvalitets- og feilsøkingsansvarlig. Identifiserer rotårsaker, rydder teknisk gjeld og 'gjenoppliver' koden når uventede bugs oppstår.",
    bio: "Hans Kristian er lagets kvalitetsansvarlige og dedikerte problemløser. Med et skarpt analytisk hode identifiserer han rotårsaken til kryptiske feilmeldinger og bringer krasjede moduler tilbake til stabil drift på rekordtid.",
    styrker: [
      "Kvalitetssikring (QA) og testmetodikk",
      "Eksepsjonell feilsøking og root-cause analyse",
      "Ryddig refaktorisering og teknisk gjeldsbekjempelse",
    ],
    svakheter: [
      "Kan grave seg så dypt ned i et feilsøkingsmønster at klokken glemmes",
      "Nøler med å slette kode han selv har reddet fra døden",
      "Fikser andres bugs før han spiser lunsj",
    ],
    ambisjoner: [
      "Revolusjonere automatisk feildeteksjon og helseovervåking i moderne web-apper",
      "Bli en ledende problemløser i skjæringspunktet mellom AI-feilretting og drift",
      "Sørge for at Perk-a-Code leverer markedets mest feilfrie bacheloroppgave",
    ],
    verdier: [
      "Empati for sluttbrukeren og lagkameratene",
      "Resiliens: Enhver feil er en kilde til dypere forståelse",
      "Ren, selvforklarende og vedlikeholdbar kode",
    ],
    teknologier: [
      "Debugging & Logging",
      "TypeScript",
      "Next.js",
      "Node.js",
      "API Testing",
      "Git & CI/CD",
    ],
  },
  {
    id: "kristian",
    name: "Kristian",
    perk: "Speed Cola",
    accentColor: "#00ff00",
    image: "/team/kristian.png",
    perkImage: "/perks/speed-cola.png",
    colorTheme: {
      border: "border-[#00ff00]/40",
      hoverBorder: "hover:border-[#00ff00]",
      glow: "shadow-[0_0_25px_rgba(0,255,0,0.2)] hover:shadow-[0_0_35px_rgba(0,255,0,0.4)]",
      badgeBg: "bg-emerald-950/60 text-emerald-300 border-emerald-400/40",
      accentText: "text-emerald-300",
      tagBg: "bg-emerald-950/40 text-emerald-200 border-emerald-900/50",
      cardHeaderGlow: "from-emerald-600/10 via-emerald-900/5 to-transparent",
    },
    roleDescription:
      "Frontend- og ytelsesansvarlig. Optimaliserer responstid, kutter lastetid og leverer moderne brukergrensesnitt i høyt tempo.",
    bio: "Kristian har fagansvar for frontend og ytelse, og er fartsfantomet som eliminerer flaskehalser. Han brenner for smidige arbeidsflyter og Core Web Vitals, og sørger for at brukergrensesnittet responderer lynraskt på alle flater.",
    styrker: [
      "Frontend-arkitektur og moderne UI/UX",
      "Optimalisering av kode, ytelse og Core Web Vitals",
      "Smidig og rask prototyping av nye konsepter",
    ],
    svakheter: [
      "Kan bli utålmodig i lange, teoretiske møter uten kode på skjermen",
      "Vil helst levere featuren før designet er 100% spikret",
      "Refusjonerer koden hvis den tar mer enn 50ms å laste",
    ],
    ambisjoner: [
      "Bygge ultra-responsive applikasjoner som setter standard for lastetid",
      "Mestre state-of-the-art frontend-ytelse og sanntids datastrømmer",
      "Automatisere bort enhver repeterende manuell oppgave i utviklerhverdagen",
    ],
    verdier: [
      "Fart og fremdrift uten å kompromittere kjernefunksjonalitet",
      "Brukeropplevelse i verdensklasse gjennom umiddelbar respons",
      "Kontinuerlig læring og eksperimentering i høyt tempo",
    ],
    teknologier: [
      "Tailwind CSS",
      "React 19",
      "Web Performance (LCP/INP)",
      "Next.js App Router",
      "Vite / Turbopack",
      "Smidig metode",
    ],
  },
  {
    id: "mats",
    name: "Mats",
    perk: "Double Tap",
    accentColor: "#ffaa00",
    image: "/team/mats.jpg",
    perkImage: "/perks/double-tap.png",
    colorTheme: {
      border: "border-[#ffaa00]/40",
      hoverBorder: "hover:border-[#ffaa00]",
      glow: "shadow-[0_0_25px_rgba(255,170,0,0.2)] hover:shadow-[0_0_35px_rgba(255,170,0,0.4)]",
      badgeBg: "bg-amber-950/60 text-amber-300 border-amber-400/40",
      accentText: "text-amber-300",
      tagBg: "bg-amber-950/40 text-amber-200 border-amber-900/50",
      cardHeaderGlow: "from-amber-600/10 via-amber-900/5 to-transparent",
    },
    roleDescription:
      "Fullstack- og produksjonsansvarlig. Pumper ut funksjonalitet, utnytter AI-akselerasjon og sørger for maksimal verdi for oppdragsgiver.",
    bio: "Mats representerer ren gjennomføringskraft og dobbel slagkraft som fullstack-ressurs. Med en unik evne til å produsere funksjonalitet i høyt volum og integrere forretningslogikk, sørger han for at kunden får maksimal verdi ut av hvert eneste sprint.",
    styrker: [
      "Fullstack-utvikling og forretningslogikk",
      "Høyt produksjonsvolum og leveringsevne",
      "Prompt Engineering-spesialist som dobler produktiviteten",
    ],
    svakheter: [
      "Kan finne på å kode tre alternative løsninger når én var nok",
      "Glemmer at andre mennesker trenger søvn mellom commits",
      "Taster så hardt på tastaturet at kollegene må bruke støydempende hodetelefoner",
    ],
    ambisjoner: [
      "Lede an innen AI-drevet programvareutvikling med ekstrem effektivitet",
      "Skape forretningskritiske systemer som dramatisk reduserer tidsbruk for kunden",
      "Levere en bacheloroppgave i 2027 som setter ny produksjonsrekord ved UiA",
    ],
    verdier: [
      "Maksimal verdiskaping og synlige resultater",
      "Løsningsorientert og pragmatisk tilnærming",
      "Entusiasme og smittende drivkraft i teamet",
    ],
    teknologier: [
      "Fullstack Utvikling",
      "Prompt Engineering",
      "Next.js / React",
      "Forretningslogikk",
      "Python / AI-verktøy",
      "Agile Sprints",
    ],
  },
];

const SLASH = "//";

export default function OmOssPage() {
  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      {/* Background cyber radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-96 w-96 bg-[#00f0ff]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 h-96 w-96 bg-[#00ff9d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff9d] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00ff9d]"></span>
            <span>{SLASH} Om oss</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Om Perk-a-Code
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Vi er fire IT-studenter ved Universitetet i Agder som har slått oss
            sammen for å kombinere våre spesialiserte styrker. Navnet vårt er
            inspirert av Perk-a-Cola fra Call of Duty Zombies, der hver «perk» gir
            en unik superkraft. Hos oss betyr det en etablert dynamikk med
            krystallklare roller: én sikrer arkitekturen og stabiliteten, én
            feilsøker og rydder opp, én optimaliserer ytelsen, og én pumper ut
            funksjonalitet og verdi i høyt tempo.
          </p>
        </div>

        {/* Perk Team Philosophy Banner with all 4 Perk-a-Cola bottles */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1d2a3f] bg-[#0a1220]/80 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                <span>{SLASH} Perk-Synergien: Hvorfor dette fungerer</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Fire spesialiserte perks. Ett samkjørt team.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ingen utvikler kan mestre alt alene. Ved å rendyrke våre roller
                unngår vi overlapping og flaskehalser:{" "}
                <strong className="text-white">Kasper</strong> leder teamet og
                forankrer en robust arkitektur,{" "}
                <strong className="text-white">Hans Kristian</strong>{" "}
                kvalitetssikrer og feilsøker,{" "}
                <strong className="text-white">Kristian</strong> sørger for
                lynraske og intuitive brukergrensesnitt, mens{" "}
                <strong className="text-white">Mats</strong> pumper ut
                funksjonalitet med AI-akselerert gjennomføringskraft.
              </p>
            </div>

            {/* Showcase med de 4 flaskene */}
            <div className="grid grid-cols-4 gap-2 sm:gap-6 items-end justify-center p-3 sm:p-5 rounded-xl border border-[#152336] bg-[#060b14]/70">
              {teamMembers.map((m) => (
                <div key={m.id} className="group flex flex-col items-center gap-2 text-center">
                  <div className="relative h-24 sm:h-32 w-8 sm:w-12 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <Image
                      src={m.perkImage}
                      alt={m.perk}
                      fill
                      className="object-contain"
                      style={{
                        filter: `drop-shadow(0 0 10px ${m.accentColor}77)`,
                      }}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider"
                    style={{ color: m.accentColor }}
                  >
                    {m.perk}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {m.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Detailed Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`relative overflow-hidden rounded-2xl border bg-[#080e18]/95 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 ${member.colorTheme.border} ${member.colorTheme.hoverBorder} ${member.colorTheme.glow}`}
            >
              {/* Subtle top gradient themed to perk color */}
              <div
                className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${member.colorTheme.cardHeaderGlow} pointer-events-none`}
              ></div>

              <div className="relative space-y-6">
                {/* Header: Photo, Name, Perk badge & Role Description */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-[#141f32] pb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-2xl border-2 bg-[#060a12] shadow-xl transition-transform duration-300 hover:scale-105"
                      style={{
                        borderColor: member.accentColor,
                        boxShadow: `0 0 20px ${member.accentColor}40`,
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 112px, 160px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {member.name}
                        </h2>
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: member.accentColor,
                            boxShadow: `0 0 10px ${member.accentColor}`,
                          }}
                        ></span>
                      </div>
                      <p
                        className="font-mono text-sm font-semibold tracking-wide mt-1"
                        style={{ color: member.accentColor }}
                      >
                        Perk: {member.perk}
                      </p>
                    </div>
                  </div>

                  {/* Perk Bottle & Badge */}
                  <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center gap-3 self-end sm:self-auto">
                    <div className="relative h-24 sm:h-32 w-10 sm:w-12 transition-transform duration-300 hover:scale-110">
                      <Image
                        src={member.perkImage}
                        alt={member.perk}
                        fill
                        className="object-contain"
                        style={{
                          filter: `drop-shadow(0 0 14px ${member.accentColor}99)`,
                        }}
                      />
                    </div>
                    <span
                      className={`rounded-md px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border ${member.colorTheme.badgeBg}`}
                    >
                      {member.perk}
                    </span>
                  </div>
                </div>

                {/* Role Description Callout */}
                <div className="rounded-lg bg-[#050912]/80 border-l-2 p-4 sm:p-5" style={{ borderColor: member.accentColor }}>
                  <p className="font-mono text-sm sm:text-base text-slate-200 leading-relaxed">
                    {member.roleDescription}
                  </p>
                </div>

                {/* Styrker & Svakheter (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Styrker */}
                  <div className="space-y-3 rounded-xl bg-[#0a1220]/70 p-5 sm:p-6 border border-[#141f30]">
                    <h4 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-[#00ff9d] flex items-center gap-2">
                      <span className="text-base">✓</span>
                      <span>Styrker</span>
                    </h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-200">
                      {member.styrker.map((styrke, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#00ff9d] font-mono mt-0.5">•</span>
                          <span className="leading-snug">{styrke}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Svakheter */}
                  <div className="space-y-3 rounded-xl bg-[#0a1220]/70 p-5 sm:p-6 border border-[#141f30]">
                    <h4 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <span className="text-base">⚡</span>
                      <span>Svakheter / Humor</span>
                    </h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
                      {member.svakheter.map((svakhet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-slate-500 font-mono mt-0.5">•</span>
                          <span className="leading-snug">{svakhet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact invitation footer banner */}
        <div className="rounded-xl border border-[#00ff9d]/30 bg-gradient-to-r from-[#091524] to-[#070e1a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,255,157,0.1)]">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Klar for et samarbeid med Perk-a-Code?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Vi ønsker å møte bedrifter og organisasjoner som ser verdien av et
              teknologitungt, motivert og smidig bachelor-team til våren 2027.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-[#00ff9d] px-6 py-3 font-mono text-sm font-bold text-[#070b12] hover:bg-[#3bfeb1] hover:shadow-[0_0_20px_rgba(0,255,157,0.5)] transition-all"
            >
              <span>Kontakt oss nå</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

