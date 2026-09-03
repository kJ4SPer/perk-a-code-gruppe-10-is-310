"use client";

import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  successMessage?: string;
  variant?: "button" | "icon";
  className?: string;
}

export default function CopyButton({
  textToCopy,
  label = "Kopier",
  successMessage = "Kopiert!",
  variant = "button",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`group relative inline-flex items-center justify-center p-1 rounded text-slate-400 hover:text-[#00ff9d] hover:bg-[#0f1726] transition-all cursor-pointer ${className}`}
        title={copied ? "Kopiert!" : `Kopier ${textToCopy}`}
        aria-label={copied ? "Kopiert!" : `Kopier ${textToCopy}`}
      >
        {copied ? (
          <span className="flex items-center gap-1 font-mono text-[11px] text-[#00ff9d] animate-in fade-in duration-200">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px]">Kopiert</span>
          </span>
        ) : (
          <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg border border-[#1b283d] bg-[#0a1220] px-3.5 py-3.5 font-mono text-xs sm:text-sm font-semibold text-slate-300 hover:border-[#00ff9d]/50 hover:bg-[#0e192c] hover:text-white transition-all active:scale-95 cursor-pointer ${className}`}
      title={copied ? "Kopiert!" : `Kopier ${textToCopy}`}
    >
      {copied ? (
        <>
          <svg className="h-4 w-4 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-[#00ff9d] font-bold">{successMessage}</span>
        </>
      ) : (
        <>
          <svg className="h-4 w-4 text-slate-400 group-hover:text-[#00ff9d] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

