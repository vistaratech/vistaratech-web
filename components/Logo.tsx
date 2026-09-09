import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 42,
  showText = true
}) => {
  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Premium Glass Container with Ambient Glow */}
      <div 
        className="relative flex items-center justify-center rounded-xl p-1.5 transition-all duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Pulsing Ambient Halo */}
        <div 
          className="absolute -inset-1 rounded-2xl opacity-50 group-hover:opacity-100 blur-lg transition-all duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.45) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 75%)'
          }}
        />

        {/* Outer Glass Card Accent */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-cyan-400/50 transition-colors duration-500" />

        {/* Vector Emblem */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-500 group-hover:rotate-3"
        >
          <defs>
            {/* Cyan to Electric Blue Gradient */}
            <linearGradient id="v-cyan-grad" x1="8" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#00B4D8" />
              <stop offset="100%" stopColor="#0077B6" />
            </linearGradient>

            {/* Indigo to Purple Gradient */}
            <linearGradient id="v-purple-grad" x1="56" y1="12" x2="32" y2="52" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            {/* Inner Core Gradient */}
            <linearGradient id="v-core-grad" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Drop Shadow Filter */}
            <filter id="v-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00F0FF" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background Dimensional Polygon (Isometric depth plate) */}
          <polygon
            points="32,6 54,18 54,46 32,58 10,46 10,18"
            fill="url(#v-cyan-grad)"
            fillOpacity="0.08"
            stroke="url(#v-cyan-grad)"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="3 3"
          />

          {/* Left Dynamic Wing of 'V' */}
          <path
            d="M 14 18 C 14 16, 17 15, 19 18 L 32 46 C 32 46, 30 49, 27 48 L 14 22 C 13 20, 13 19, 14 18 Z"
            fill="url(#v-cyan-grad)"
            filter="url(#v-shadow)"
          />

          {/* Right Dynamic Wing of 'V' (Interlocking Overlap) */}
          <path
            d="M 50 18 C 50 16, 47 15, 45 18 L 32 46 C 32 46, 34 49, 37 48 L 50 22 C 51 20, 51 19, 50 18 Z"
            fill="url(#v-purple-grad)"
          />

          {/* Central Connecting Diamond / Next Dimension Portal */}
          <polygon
            points="32,24 39,34 32,44 25,34"
            fill="url(#v-core-grad)"
            fillOpacity="0.9"
            className="group-hover:scale-110 transition-transform duration-300 origin-center"
          />

          {/* Glowing Center Core Pulse */}
          <circle cx="32" cy="34" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="34" r="6" stroke="#00F0FF" strokeWidth="1.5" strokeOpacity="0.8" className="animate-pulse" />
        </svg>
      </div>

      {/* Modern High-End Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xl md:text-2xl font-display font-extrabold tracking-[-0.03em] text-white group-hover:text-cyan-50 transition-colors">
              VISTARA
            </span>
            <span className="text-xl md:text-2xl font-display font-bold tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
              TECH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] animate-pulse" />
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] font-mono font-medium tracking-[0.22em] text-gray-400 uppercase group-hover:text-cyan-300/80 transition-colors">
              NEXT DIMENSION
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[9px] font-mono tracking-[0.18em] text-cyan-400/80 uppercase">
              STUDIO
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
