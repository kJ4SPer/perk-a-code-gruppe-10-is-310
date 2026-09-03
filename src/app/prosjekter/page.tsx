import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  status: "Aktivt prosjekt" | "Pågående" | "Utforsket / Prototype" | "Fullført";
  statusColor: string;
  description: string;
  highlights: string[];
  techBadges: string[];
  links?: { label: string; url: string; isExternal?: boolean }[];
}

const projects: Project[] = [
  {
    id: "kristiansand-kommune-drommeplan",
    title: "Kristiansand Kommune: Drømmeplan & 200 år med Protokoller",
    category: "Praksisprosjekt // Offentlig sektor",
    status: "Aktivt prosjekt",
    statusColor: "text-[#00f0ff] border-[#00f0ff]/40 bg-[#0c1b2c]",
    description:
      "Vårt sentrale praksisprosjekt hvor vi bistår med digitalisering av 200 år med historiske oppmålingsprotokoller, samt utvikling av en datadrevet og maskinlesbar «drømmeplan» helt fra tidlig planfase. Formålet er mer effektiv samhandling mellom kommune og plankonsulenter med standarder som PLAN 5.0.",
    highlights: [
      "Strukturering og tilgjengeliggjøring av historiske arkivdata for moderne GIS-verktøy.",
      "Utarbeidelse av maskinlesbare kravsett og planmodeller i tråd med PLAN 5.0-standarden.",
      "Brobygging mellom juridiske reguleringsbestemmelser og geometriske kartdata.",
    ],
    techBadges: [
      "PLAN 5.0",
      "GIS & Kart",
      "Digitalisering",
      "Maskinlesbare data",
      "Samhandling",
      "Datatransformasjon",
    ],
    links: [
      {
        label: "Kristiansand kommune",
        url: "https://www.kristiansand.kommune.no/",
        isExternal: true,
      },
      {
        label: "Plan og bygg",
        url: "https://www.kristiansand.kommune.no/navigasjon/bolig-kart-og-eiendom/plan-og-bygg/",
        isExternal: true,
      },
    ],
  },
  {
    id: "ai-prompt-engineering-lab",
    title: "AI & Prompt Engineering Analytics Lab",
    category: "Forsknings- & Utviklingsrigg",
    status: "Pågående",
    statusColor: "text-[#00ff9d] border-[#00ff9d]/40 bg-[#0b2219]",
    description:
      "Et metodisk testmiljø for å utforske grensene for generativ AI, avansert Prompt Engineering og automatisk kvalitetssikring. Vi kobler LLM-agenter med deterministiske valideringsregler for å produsere pålitelig, strukturert output for forretningskritiske systemer.",
    highlights: [
      "Systematisk evaluering av prompt-arkitekturer mot strenge schema-krav.",
      "Reduksjon av hallusinasjoner ved hjelp av analytisk blikk og domenespesifikk forankring.",
      "Utforsking av automatiserte arbeidsflyter for kode- og databehandling.",
    ],
    techBadges: [
      "Prompt Engineering",
      "LLM Agents",
      "Strukturert JSON",
      "Evaluering",
      "Python",
      "AI-sikkerhet",
    ],
  },
  {
    id: "perk-a-code-web-platform",
    title: "Perk-a-Code Core Web & Portfolio System",
    category: "Fullstack Web & Frontend",
    status: "Fullført",
    statusColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40",
    description:
      "Vår egen digitale identitetsplattform bygget fra bunnen med moderne web-standarder. Fokus på lynrask respons, minimalistisk mørk hacker-estetikk, universell tilgjengelighet og modulær komponentarkitektur.",
    highlights: [
      "Bygget på Next.js 16 (App Router) og React 19 med Turbopack.",
      "Moderne Tailwind CSS v4 styling med dynamiske hover-glows og cyber-elementer.",
      "Ekstremt tilpassingsvennlig kodebase for fremtidige bacheloreksperimenter.",
    ],
    techBadges: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Turbopack",
      "Responsive UI",
    ],
  },
  {
    id: "cloud-systems-architecture",
    title: "Cloud & Datadrevet Systemarkitektur",
    category: "Backend & Infrastruktur",
    status: "Utforsket / Prototype",
    statusColor: "text-amber-400 border-amber-500/40 bg-amber-950/40",
    description:
      "Konseptuelle og praktiske moduler for skalerbare baksystemer, relasjonelle databaser og mikrotjenester forberedt for krevende bachelor-oppgaver.",
    highlights: [
      "Design av normaliserte databasemodeller og effektive spørringer.",
      "Klargjøring for containerisert deployment via Docker og CI/CD pipelines.",
      "Sikkerhetsforankret API-design med fokus på dataintegritet.",
    ],
    techBadges: [
      "PostgreSQL",
      "Docker",
      "RESTful API",
      "Systemdesign",
      "Skyarkitektur",
    ],
  },
];

const SLASH = "//";

export default function ProsjekterPage() {
  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-1/4 h-80 w-80 bg-[#00f0ff]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 h-80 w-80 bg-[#00ff9d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]"></span>
            <span>{SLASH} Portefølje & Leveranser</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Våre Prosjekter
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Her er et utvalg av våre pågående og gjennomførte prosjekter ved UiA
            og i praksis hos eksterne samarbeidspartnere. Vi fokuserer på
            konkret nytteverdi, moderne arkitektur og ren kode.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#1a2538] bg-[#090e18]/90 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#00f0ff]/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
            >
              <div className="space-y-5">
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-400">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-mono text-[11px] font-semibold border ${project.statusColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#141e2f]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Nøkkelpunkter:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00ff9d] font-mono">&gt;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom area: Tech badges & Links */}
              <div className="mt-6 pt-5 border-t border-[#141e2f] space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded bg-[#0c1422] px-2.5 py-1 font-mono text-[11px] text-[#00ff9d] border border-[#162338]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00f0ff] hover:text-white transition-colors"
                      >
                        <span>{link.label}</span>
                        {link.isExternal && (
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
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation box */}
        <div className="rounded-xl border border-[#1a2538] bg-[#0c1424]/60 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Har du et prosjekt som passer for oss?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Vi former gjerne bachelorprosjektet vårt rundt deres bedrifts
              behov for innovative IT-løsninger våren 2027.
            </p>
          </div>
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-md bg-[#00ff9d] px-6 py-3 font-mono text-sm font-bold text-[#070b12] hover:bg-[#34ffa8] hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all shrink-0"
          >
            <span>Ta kontakt</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

