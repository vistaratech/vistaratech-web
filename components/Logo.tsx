import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 44,
  showText = true
}) => {
  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* 3D Hexagonal Vortex Emblem Container */}
      <div 
        className="relative flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Ambient Pulsing Halo */}
        <div 
          className="absolute -inset-1.5 rounded-2xl opacity-60 group-hover:opacity-100 blur-xl transition-all duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.5) 0%, rgba(99, 102, 241, 0.35) 50%, transparent 75%)'
          }}
        />

        {/* Outer Glass Card Accent */}
        <div className="absolute inset-0 rounded-xl bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:border-cyan-400/50 transition-colors duration-500" />

        {/* Official 3D Hexagonal Vortex Mark */}
        <img
          src="/logo-mark.png"
          alt="Vistara Tech Logo Mark"
          className="w-full h-full object-contain relative z-10 p-1 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.45)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
          loading="eager"
        />
      </div>

      {/* Modern High-End Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 leading-none">
            <span className="text-lg md:text-xl font-brand font-bold tracking-wider text-white group-hover:text-cyan-50 transition-colors">
              VISTARA
            </span>
            <span className="text-lg md:text-xl font-brand font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
              TECH
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] animate-pulse" />
          </div>

          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[8px] md:text-[9px] font-mono font-medium tracking-[0.25em] text-gray-400 uppercase group-hover:text-cyan-300/80 transition-colors">
              NEXT DIMENSION
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[8px] md:text-[9px] font-mono tracking-[0.2em] text-cyan-400/80 uppercase">
              STUDIO
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
