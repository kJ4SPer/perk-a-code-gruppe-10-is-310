"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartPlay = () => {
    setVideoError(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err);
        setVideoError(true);
      });
    }
  };

  return (
    <section id="promovideo" className="relative scroll-mt-24">
      {/* Bakgrunnsglød */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-[#00f0ff]/15 via-[#00ff9d]/15 to-[#00f0ff]/10 blur-3xl rounded-full"></div>

      <div className="relative overflow-hidden rounded-2xl border-2 border-[#00f0ff]/40 bg-[#09111e]/90 p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,240,255,0.15)] transition-all duration-300 hover:border-[#00f0ff]/70">
        {/* TOP HUD BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#18273d] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
            </span>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
              <span className="text-[#00f0ff]">REFRESH IT 2026</span> // PROMO &amp; PITCH
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded bg-[#0e1c2e] border border-[#1b3452] px-2.5 py-1 text-[#00ff9d] shadow-[0_0_8px_rgba(0,255,157,0.2)]">
              ⏱ VARIGHET: 1:53 MIN
            </span>
          </div>
        </div>



        {/* VIDEORAMME (16:9 CINEMATIC CONTAINER) */}
        <div className="group relative w-full aspect-video rounded-xl overflow-hidden border border-[#1f3552] bg-[#050912] shadow-2xl flex items-center justify-center">
          {/* Selve videospilleren (HTML5 video som peker mot /promo.mp4) */}
          <video
            ref={videoRef}
            controls={isPlaying}
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying && !videoError ? "opacity-100" : "opacity-0"
            }`}
            onError={() => setVideoError(true)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/promo.mp4" type="video/mp4" />
            Nettleseren din støtter ikke videoavspilling.
          </video>

          {/* PLACEHOLDER & POSTER-OVERLAY (Vises inntil video startes, eller hvis MP4 mangler) */}
          {(!isPlaying || videoError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#070d18] via-[#091322] to-[#040810]">
              {/* Bakgrunnsmønster / Cyber-grid */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

              {/* Diskré sentrert logo-vannmerke */}
              <div className="absolute opacity-10 pointer-events-none scale-125">
                <Image
                  src="/logo.png"
                  alt="Vannmerke"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>

              {/* Sentrert innhold */}
              <div className="relative z-10 flex flex-col items-center max-w-lg">
                {/* Stor spill-knapp med neon-puls */}
                <button
                  type="button"
                  onClick={handleStartPlay}
                  className="relative group/btn mb-6 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-tr from-[#00f0ff]/20 to-[#00ff9d]/30 border-2 border-[#00f0ff] text-[#00ff9d] shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-110 hover:border-[#00ff9d] hover:shadow-[0_0_50px_rgba(0,255,157,0.7)] active:scale-95 cursor-pointer"
                  aria-label="Spill av promovideo"
                >
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#00ff9d] opacity-40 blur-md group-hover/btn:opacity-75 transition-opacity"></span>
                  {/* Play ikon (trekant) */}
                  <svg
                    className="relative ml-1.5 h-10 w-10 sm:h-12 sm:w-12 text-[#00ff9d] fill-current drop-shadow-[0_0_8px_#00ff9d]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1524] px-4 py-1 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] mb-3">
                  <span>KLIKK FOR Å SPILLE AV VIDEO</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Perk-a-Code // Refresh IT 2026
                </h3>

                {videoError && (
                  <div className="mt-2 rounded-lg bg-amber-950/60 border border-amber-500/40 p-3 text-xs sm:text-sm text-amber-200">
                    <p className="font-semibold">Filen er klar til å legges inn!</p>
                    <p className="mt-1 text-slate-300">
                      Plasser MP4-filen i prosjektets <code className="text-[#00ff9d] bg-black/40 px-1 py-0.5 rounded">public/promo.mp4</code> for at videoen skal spilles av automatisk her.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

