import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Network, Shield } from 'lucide-react';
import { profileData } from '../../data/profile';

interface SystemsNetworkCanvasProps {
  avatarUrl: string;
}

export const SystemsNetworkCanvas: React.FC<SystemsNetworkCanvasProps> = ({
  avatarUrl
}) => {
  const [imgSrc, setImgSrc] = React.useState(avatarUrl);

  React.useEffect(() => {
    setImgSrc(avatarUrl);
  }, [avatarUrl]);

  const modules = [
    {
      label: 'Software & C4ISR Apps',
      sub: 'React • TS • Node',
      icon: Globe,
      pos: 'top-3 left-3 sm:top-4 sm:left-4',
      accent: 'text-[var(--accent-blue)]'
    },
    {
      label: 'Secure Data & APIs',
      sub: 'PostgreSQL • JWT RBAC',
      icon: Database,
      pos: 'top-3 right-3 sm:top-4 sm:right-4',
      accent: 'text-[var(--accent-gold)]'
    },
    {
      label: 'Vision AI & Recon',
      sub: 'YOLO • OpenCV • PyTorch',
      icon: Cpu,
      pos: 'bottom-3 left-3 sm:bottom-4 sm:left-4',
      accent: 'text-emerald-400'
    },
    {
      label: 'Airbase IT & Networks',
      sub: 'LAN • Routing • RTSP',
      icon: Network,
      pos: 'bottom-3 right-3 sm:bottom-4 sm:right-4',
      accent: 'text-[var(--accent-blue)]'
    }
  ];

  return (
    <div className="hud-corner-card relative mx-auto w-full max-w-[470px] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 shadow-editorial sm:p-6">
      {/* Subtle tactical airspace chart grid */}
      <div
        className="airforce-grid pointer-events-none absolute inset-0 opacity-45"
        aria-hidden="true"
      />

      {/* Avionics Header Bar */}
      <div className="relative z-10 mb-4 flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 font-mono text-[11px] text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-2 text-[var(--text-primary)]">
          {/* Miniature Air Force Wings SVG */}
          <svg
            viewBox="0 0 36 16"
            className="h-3.5 w-7 text-[var(--accent-gold)]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M1 4L13 7.5L11.5 10L3 8L1 4ZM3.5 9.5L12.5 11L11.5 13L5 12L3.5 9.5Z" />
            <path d="M35 4L23 7.5L24.5 10L33 8L35 4ZM32.5 9.5L23.5 11L24.5 13L31 12L32.5 9.5Z" />
            <polygon points="18,2 20,7 25,7 21,10 22.5,15 18,12 13.5,15 15,10 11,7 16,7" fill="#38BDF8" />
          </svg>
          <span className="font-semibold tracking-wider">TNI ANGKATAN UDARA</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-[var(--accent-blue)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)]" aria-hidden="true" />
          C4ISR // SYSTEMS
        </span>
      </div>

      {/* Avionics Radar Display + Framed Officer Portrait */}
      <div className="relative z-10 flex h-[340px] items-center justify-center sm:h-[365px]">
        <svg
          viewBox="0 0 400 340"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* Concentric Radar Range Rings */}
          <circle
            cx="200"
            cy="170"
            r="142"
            fill="none"
            stroke="var(--accent-blue)"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <circle
            cx="200"
            cy="170"
            r="105"
            fill="none"
            stroke="var(--accent-blue)"
            strokeOpacity="0.24"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="170"
            r="76"
            fill="none"
            stroke="var(--accent-gold)"
            strokeOpacity="0.32"
            strokeWidth="1.2"
          />

          {/* HUD Pitch Ladder & Azimuth Crosshairs */}
          <line x1="40" y1="170" x2="360" y2="170" stroke="var(--accent-blue)" strokeOpacity="0.16" strokeWidth="1" />
          <line x1="200" y1="22" x2="200" y2="318" stroke="var(--accent-blue)" strokeOpacity="0.16" strokeWidth="1" />

          {/* Compass Degree Ticks */}
          <text x="191" y="20" fill="var(--accent-gold)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            000°
          </text>
          <text x="352" y="173" fill="var(--accent-blue)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            090°
          </text>
          <text x="191" y="330" fill="var(--accent-blue)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            180°
          </text>
          <text x="26" y="173" fill="var(--accent-blue)" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            270°
          </text>

          {/* Animated Radar Sweep Sector */}
          <motion.g
            style={{ originX: '200px', originY: '170px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M200 170 L200 28 A142 142 0 0 1 300 70 Z"
              fill="url(#radarSweepGrad)"
              opacity="0.32"
            />
            <line
              x1="200"
              y1="170"
              x2="200"
              y2="28"
              stroke="var(--accent-blue)"
              strokeOpacity="0.65"
              strokeWidth="1.2"
            />
          </motion.g>

          {/* Data-link paths to the 4 capability nodes */}
          <motion.path
            d="M95 58 L200 170"
            stroke="var(--accent-blue)"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M305 58 L200 170"
            stroke="var(--accent-gold)"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M95 282 L200 170"
            stroke="#34D399"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M305 282 L200 170"
            stroke="var(--accent-blue)"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
          />

          <defs>
            <linearGradient id="radarSweepGrad" x1="200" y1="28" x2="300" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Framed Portrait */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative rounded-2xl border border-[var(--accent-gold)]/65 bg-[var(--bg-primary)] p-1.5 shadow-gold">
            <img
              src={imgSrc}
              onError={() => setImgSrc(profileData.fallbackAvatarUrl)}
              alt={`${profileData.name} portrait`}
              width={120}
              height={120}
              className="h-28 w-28 rounded-xl object-cover sm:h-30 sm:w-30"
            />
            <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full border border-[var(--accent-gold)]/50 bg-[var(--bg-surface)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent-gold)] shadow-sm">
              <Shield className="h-2.5 w-2.5" aria-hidden="true" />
              TNI AU &bull; S.Kom.
            </span>
          </div>
        </div>

        {/* 4 Corner Avionics & Engineering Modules */}
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.label}
              className={`absolute z-20 max-w-[162px] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 px-2.5 py-2 backdrop-blur-sm ${mod.pos}`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`h-3.5 w-3.5 shrink-0 ${mod.accent}`} aria-hidden="true" />
                <span className="truncate font-editorial text-[11px] font-semibold text-[var(--text-primary)]">
                  {mod.label}
                </span>
              </div>
              <div className="mt-0.5 truncate font-mono text-[10px] text-[var(--text-secondary)]">
                {mod.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Avionics Telemetry Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 font-mono text-[10px] text-[var(--text-secondary)]">
        <span>ALMA MATER: UNHAN RI</span>
        <span className="text-[var(--accent-gold)]">DISCIPLINE &bull; PRECISION &bull; READINESS</span>
      </div>
    </div>
  );
};
