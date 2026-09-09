import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'interlock' | 'prism' | 'minimal';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  variant = 'interlock'
}) => {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* SVG Emblem */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow */}
        <div 
          className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0,229,255,0.6) 0%, rgba(59,130,246,0.3) 60%, transparent 80%)'
          }}
        />

        {variant === 'interlock' && (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-[0_2px_12px_rgba(0,229,255,0.4)]"
          >
            <defs>
              <linearGradient id="vt-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="100%" stopColor="#00BBF9" />
              </linearGradient>
              <linearGradient id="vt-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="vt-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
            </defs>

            {/* Left Cyan / Teal Hex Ribbon */}
            <path
              d="M50 15L24 30V62L36 69V37L50 29L64 37V47H76V30L50 15Z"
              fill="url(#vt-teal-grad)"
            />

            {/* Right Blue Interlocking Ribbon (forming checkmark & shield loop) */}
            <path
              d="M50 85L76 70V38L64 31V63L50 71L36 63V53H24V70L50 85Z"
              fill="url(#vt-blue-grad)"
            />

            {/* Dynamic Center Check / Node Accent */}
            <path
              d="M44 52L49 57L62 44"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            />
          </svg>
        )}

        {variant === 'prism' && (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-[0_2px_12px_rgba(0,229,255,0.4)]"
          >
            <defs>
              <linearGradient id="prism-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="prism-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            {/* Left wing of 3D Prism V */}
            <path d="M18 24L50 82L42 82L14 36L18 24Z" fill="url(#prism-left)" />
            <path d="M18 24L38 34L46 72L50 82L18 24Z" fill="#00F5D4" fillOpacity="0.85" />
            
            {/* Right wing of 3D Prism V */}
            <path d="M82 24L50 82L58 82L86 36L82 24Z" fill="url(#prism-right)" />
            <path d="M82 24L62 34L54 72L50 82L82 24Z" fill="#38BDF8" fillOpacity="0.9" />
          </svg>
        )}

        {variant === 'minimal' && (
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-[0_2px_12px_rgba(0,229,255,0.4)]"
          >
            <defs>
              <linearGradient id="min-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="50%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            <path
              d="M20 28L50 78L80 28H66L50 56L34 28H20Z"
              fill="url(#min-grad)"
            />
            <circle cx="50" cy="24" r="4" fill="#00F5D4" />
          </svg>
        )}
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center text-2xl font-display font-extrabold tracking-tight text-white group-hover:text-white transition-colors">
            VISTARA
            <span className="ml-1.5 text-xs uppercase px-1.5 py-0.5 rounded font-mono font-bold tracking-wider bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
              TECH
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-[0.25em] text-gray-400 uppercase mt-0.5 group-hover:text-cyan-400 transition-colors">
            SOFTWARE & INNOVATION
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
