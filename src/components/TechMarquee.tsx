"use client";

import React, { useEffect, useRef } from "react";

interface TechItem {
  name: string;
  svg: React.ReactNode;
}

const techItems: TechItem[] = [
  {
    name: "Next.js",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
        viewBox="0 0 128 128"
        fill="none"
      >
        <circle cx="64" cy="64" r="64" fill="#05080e" stroke="#1e293b" strokeWidth="2" />
        <path
          d="M85.5 94.5L44.8 41.5V86.5H35.5V33.5H45.8L86.5 86.5V33.5H95.8V94.5H85.5Z"
          fill="white"
        />
        <path
          d="M83.5 33.5H92.5V70.5H83.5V33.5Z"
          fill="url(#next_grad)"
        />
        <defs>
          <linearGradient
            id="next_grad"
            x1="88"
            y1="33.5"
            x2="88"
            y2="70.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React 19",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(0,240,255,0.8)]"
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
      >
        <circle cx="0" cy="0" r="2.05" fill="#00f0ff" />
        <g stroke="#00f0ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(49,120,198,0.8)]"
        viewBox="0 0 128 128"
      >
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M70.1 82.2c1.7 2.8 4 5 7 6.6 3 1.6 6.5 2.4 10.5 2.4 3.7 0 6.8-.7 9.4-2.1 2.6-1.4 4.5-3.4 5.9-5.9 1.3-2.5 2-5.4 2-8.6 0-3.3-.8-6.1-2.3-8.5-1.5-2.4-3.7-4.4-6.5-5.9-2.8-1.5-6.2-2.8-10.1-3.9-3.4-1-6.1-2.1-8.1-3.3-2-1.2-3.4-2.6-4.3-4.2-.9-1.6-1.3-3.4-1.3-5.5 0-2.6.7-4.9 2.1-6.9 1.4-2 3.4-3.6 6-4.7s5.6-1.7 9-1.7c3.9 0 7.3.9 10.2 2.7 2.9 1.8 5 4.3 6.3 7.5l-9.8 5.7c-.8-1.7-2-3-3.6-3.9s-3.5-1.3-5.7-1.3c-2.3 0-4.3.5-5.8 1.6-1.5 1.1-2.3 2.6-2.3 4.5 0 1.6.5 3 1.6 4.1 1.1 1.1 2.6 2 4.6 2.8s4.4 1.6 7.3 2.5c4.5 1.4 8.2 3.1 11.1 5 2.9 1.9 5.1 4.3 6.6 7.2s2.2 6.4 2.2 10.5c0 4.3-1.1 8.1-3.3 11.5s-5.2 6-9 7.8-8.2 2.7-13.2 2.7c-5.8 0-10.8-1.4-15-4.2s-7.3-6.8-9.1-12l10.9-5zM22.5 40.5h41v10.5h-15V110H36.7V51h-14.2V40.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        viewBox="0 0 54 33"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,224,82,0.6)]"
        viewBox="0 0 110 110"
      >
        <path
          d="M54.5 3C27 3 28.7 15 28.7 15l.03 12.4H55V31H18S2 29.5 2 57c0 27.5 15 26.5 15 26.5h9V71s-.5-15 15-15h25.4s14.2.2 14.2-14V17s1.7-14-26.1-14zm-14.6 8.2c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"
          fill="#387EB8"
        />
        <path
          d="M55.5 107c27.5 0 25.8-12 25.8-12l-.03-12.4H55V79h37s16 1.5 16-26c0-27.5-15-26.5-15-26.5h-9V39s.5 15-15 15H43.6s-14.2-.2-14.2 14v25s-1.7 14 26.1 14zm14.6-8.2c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
          fill="#FFE052"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(36,150,237,0.8)]"
        viewBox="0 0 24 24"
        fill="#2496ED"
      >
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.955 0H7.26a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.145a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm5.884 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.955 0H7.26a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.145a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.738 11.6c-.347-.23-1.077-.354-2.03-.198-.198-.94-.85-1.688-1.574-2.093l-.36-.197-.247.329a4.836 4.836 0 00-.77 1.542 6.643 6.643 0 00-3.32-.871H.306a.3.3 0 00-.3.304c.007.493.076 2.378.895 4.3 1.002 2.35 2.87 3.655 5.553 3.88 1.25.105 2.593-.05 3.996-.462 1.758-.517 3.322-1.398 4.79-1.921 1.05-.374 2.19-.571 3.4-.571 1.83 0 3.376.502 4.475 1.45.177.153.44.137.599-.036.793-.865 1.052-1.944 1.03-3.14-.022-.988-.344-1.89-.906-2.587" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 rounded-lg transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(51,103,145,0.8)]"
        viewBox="0 0 128 128"
        fill="none"
      >
        <rect width="128" height="128" rx="20" fill="#336791" />
        <path
          d="M86 42c-2.4-2.4-5.6-3.8-9.1-3.8H51.1c-3.5 0-6.7 1.4-9.1 3.8-2.4 2.4-3.8 5.6-3.8 9.1v23.8c0 3.5 1.4 6.7 3.8 9.1 2.4 2.4 5.6 3.8 9.1 3.8h25.8c3.5 0 6.7-1.4 9.1-3.8 2.4-2.4 3.8-5.6 3.8-9.1V51.1c0-3.5-1.4-6.7-3.8-9.1zm-4.2 32.9c0 1.2-.5 2.3-1.3 3.1-.8.8-1.9 1.3-3.1 1.3H50.6c-1.2 0-2.3-.5-3.1-1.3-.8-.8-1.3-1.9-1.3-3.1V51.1c0-1.2.5-2.3 1.3-3.1.8-.8 1.9-1.3 3.1-1.3h26.8c1.2 0 2.3.5 3.1 1.3.8.8 1.3 1.9 1.3 3.1v23.8z"
          fill="#FFFFFF"
        />
        <circle cx="56" cy="58" r="4" fill="#FFFFFF" />
        <circle cx="72" cy="58" r="4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(16,163,127,0.9)]"
        viewBox="0 0 24 24"
        fill="#10A37F"
      >
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.1451-2.3561l2.55-1.472 2.55 1.472v2.9344l-2.55 1.472-2.55-1.472v-2.9344z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(217,119,87,0.9)]"
        viewBox="0 0 24 24"
        fill="#D97757"
      >
        <path d="M17.3 14.5c-.2-.6-.4-1.1-.7-1.6l4.2-2.4c.5-.3.7-.9.4-1.4-.3-.5-.9-.7-1.4-.4l-4.2 2.4c-.4-.4-.9-.8-1.4-1.1L16 5.8c.3-.5.1-1.1-.4-1.4s-1.1-.1-1.4.4l-1.8 4.2c-.6-.1-1.2-.2-1.8-.2-.6 0-1.2.1-1.8.2L7.4 4.8C7.1 4.3 6.5 4.1 6 4.4s-.7.9-.4 1.4l1.8 4.2c-.5.3-1 .7-1.4 1.1L1.8 8.7c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4l4.2 2.4c-.3.5-.5 1-.7 1.6L.4 15.6c-.6.2-.9.8-.7 1.4.2.6.8.9 1.4.7l4.1-1.1c.3.5.7 1 1.1 1.4l-2.4 4.2c-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4l2.4-4.2c.5.3 1 .5 1.6.7l1.1 4.1c.2.6.8.9 1.4.7.6-.2.9-.8.7-1.4l-1.1-4.1c.6-.2 1.1-.4 1.6-.7l2.4 4.2c.3.5.9.7 1.4.4.5-.3.7-.9.4-1.4l-2.4-4.2c.4-.4.8-.9 1.1-1.4l4.1 1.1c.6.2 1.2-.1 1.4-.7.2-.6-.1-1.2-.7-1.4l-3.9-1.1z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(155,114,207,0.9)]"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12Z"
          fill="url(#gemini_grad)"
        />
        <defs>
          <linearGradient
            id="gemini_grad"
            x1="0"
            y1="0"
            x2="24"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#547CE4" />
            <stop offset="1" stopColor="#9B72CF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Git",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(240,80,50,0.8)]"
        viewBox="0 0 24 24"
        fill="#F05032"
      >
        <path d="M21.62 10.985l-8.605-8.605a2.53 2.53 0 00-3.578 0l-1.46 1.46 2.766 2.767a2.997 2.997 0 013.784 3.785l2.67 2.668a2.99 2.99 0 013.423 3.424 2.992 2.992 0 01-4.23-4.23l-2.617-2.617a2.986 2.986 0 01-3.69-.646L7.14 11.933a2.998 2.998 0 01.644 3.688l-2.62 2.62a2.99 2.99 0 01-4.23-4.23 2.99 2.99 0 013.424-3.423L7.025 7.92a2.99 2.99 0 01-.645-3.69L2.38 8.232a2.53 2.53 0 000 3.578l8.605 8.605a2.53 2.53 0 003.578 0l7.057-7.057a2.53 2.53 0 000-3.578z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg
        className="h-9 w-9 sm:h-11 sm:w-11 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(51,153,51,0.8)]"
        viewBox="0 0 256 289"
        fill="none"
      >
        <path d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z" fill="#339933" />
        <path
          d="M128 17.5L240.8 82.6V206.4L128 271.5L15.2 206.4V82.6L128 17.5Z"
          fill="#070b12"
        />
        <path d="M128 50L200 91.5V174.5L128 216L56 174.5V91.5L128 50Z" fill="#339933" />
      </svg>
    ),
  },
];

// Duplicate 3 times to guarantee continuous loop across wide screens
const allDisplayItems = [...techItems, ...techItems, ...techItems];

export default function TechMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let animId: number;
    let offset = 0;
    let lastTime = performance.now();

    // HASTIGHET I PIKSLER PER SEKUND (uavhengig av 60Hz/144Hz skjerm)
    // 40 px/s = rolig, naturlig og behagelig flyt
    const PIXELS_PER_SECOND = 40;

    const updateMeasurements = () => {
      if (!containerRef.current || !trackRef.current) return null;
      const containerWidth = containerRef.current.clientWidth;
      const totalPerSet = techItems.length; // 13
      let singleSetWidth = 0;

      const firstItem = itemRefs.current[0];
      const secondSetFirstItem = itemRefs.current[totalPerSet];
      if (firstItem && secondSetFirstItem) {
        singleSetWidth = secondSetFirstItem.offsetLeft - firstItem.offsetLeft;
      }
      return { containerWidth, singleSetWidth };
    };

    let measurements = updateMeasurements();

    const handleResize = () => {
      measurements = updateMeasurements();
    };
    window.addEventListener("resize", handleResize);

    const step = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      offset += PIXELS_PER_SECOND * delta;
      const singleWidth = measurements?.singleSetWidth || 0;
      if (singleWidth > 0 && offset >= singleWidth) {
        offset -= singleWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${offset}px, 0, 0)`;
      }

      const containerWidth =
        measurements?.containerWidth || containerRef.current?.clientWidth || 1000;
      const containerCenter = containerWidth / 2;
      const maxDist = containerCenter * 0.95;

      const totalElements = itemRefs.current.length;
      for (let i = 0; i < totalElements; i++) {
        const item = itemRefs.current[i];
        if (!item) continue;

        // Position of this item center relative to container
        const itemLeft = item.offsetLeft - offset;
        const itemCenter = itemLeft + item.offsetWidth / 2;
        const dist = Math.abs(itemCenter - containerCenter);

        // Normalize distance: 0 at exact center, 1 at edge
        const norm = Math.min(1, Math.max(0, dist / maxDist));

        // Cosine curve: 1 at center, 0 at edge
        const curve = Math.cos((norm * Math.PI) / 2);

        // Scale: ~0.75 at edges, up to 1.25 at center
        const scale = (0.75 + curve * 0.5).toFixed(3);

        // Arch curve (lifts item up by up to 12px at center)
        const translateY = (-curve * 12).toFixed(1);

        // Opacity: 0.35 at edges, 1.0 at center
        const opacity = (0.35 + curve * 0.65).toFixed(3);

        item.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        item.style.opacity = opacity;
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-2"
    >
      {/* Section title without pulsing green dot */}
      <div className="mb-6 px-1 font-mono text-[11px] uppercase tracking-widest text-slate-400">
        <span>{"// TEKNOLOGIER & VERKTØY"}</span>
      </div>

      {/* Marquee Wrapper with soft edge gradient fades */}
      <div className="relative flex overflow-hidden py-6">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070b12] to-transparent z-10" />

        {/* Dynamic Curved Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14 will-change-transform"
        >
          {allDisplayItems.map((tech, idx) => (
            <div
              key={`tech-${idx}`}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className="shrink-0 flex flex-col items-center gap-2 will-change-transform select-none"
              style={{ width: "88px" }}
            >
              <div
                className="group flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 cursor-pointer transition-transform duration-200 hover:scale-125"
                title={tech.name}
              >
                {tech.svg}
              </div>
              <span className="font-mono text-[11px] text-slate-400 hover:text-[#00ff9d] transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right gradient fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#070b12] to-transparent z-10" />
      </div>
    </div>
  );
}
