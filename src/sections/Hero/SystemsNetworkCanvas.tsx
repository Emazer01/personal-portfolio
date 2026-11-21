import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Network } from 'lucide-react';
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

  const nodes = [
    {
      label: 'Full-Stack Web',
      sub: 'React • TS • Node',
      icon: Globe,
      pos: 'top-3 left-3 sm:top-5 sm:left-5',
      color: 'text-[var(--accent-blue)]'
    },
    {
      label: 'Data & API',
      sub: 'Express • PostgreSQL',
      icon: Database,
      pos: 'top-3 right-3 sm:top-5 sm:right-5',
      color: 'text-[var(--accent-gold)]'
    },
    {
      label: 'AI & Vision',
      sub: 'YOLO • OpenCV • PyTorch',
      icon: Cpu,
      pos: 'bottom-3 left-3 sm:bottom-5 sm:left-5',
      color: 'text-emerald-400'
    },
    {
      label: 'Infra & Network',
      sub: 'LAN • RTSP • Docker',
      icon: Network,
      pos: 'bottom-3 right-3 sm:bottom-5 sm:right-5',
      color: 'text-[var(--accent-blue)]'
    }
  ];

  return (
    <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 shadow-editorial sm:p-6">
      {/* Subtle blueprint grid */}
      <div
        className="engineering-grid pointer-events-none absolute inset-0 opacity-45"
        aria-hidden="true"
      />

      {/* Top telemetry header */}
      <div className="relative z-10 mb-4 flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 font-mono text-[11px] text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          SYSTEM_TOPOLOGY // ACTIVE
        </span>
        <span className="text-[var(--accent-gold)]">ID: EMAZER01</span>
      </div>

      {/* Connected Systems Topology + Portrait */}
      <div className="relative z-10 flex h-[320px] items-center justify-center sm:h-[350px]">
        {/* Animated SVG connection lines */}
        <svg
          viewBox="0 0 400 320"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <motion.path
            d="M92 56 L200 160"
            stroke="var(--accent-blue)"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24, opacity: 0.45 }}
            animate={{ strokeDashoffset: 0, opacity: 0.85 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M308 56 L200 160"
            stroke="var(--accent-gold)"
            strokeOpacity="0.5"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24, opacity: 0.45 }}
            animate={{ strokeDashoffset: 0, opacity: 0.9 }}
            transition={{
              duration: 2.4,
              delay: 0.2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.path
            d="M92 264 L200 160"
            stroke="#34D399"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24, opacity: 0.45 }}
            animate={{ strokeDashoffset: 0, opacity: 0.85 }}
            transition={{
              duration: 2.3,
              delay: 0.4,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.path
            d="M308 264 L200 160"
            stroke="var(--accent-blue)"
            strokeOpacity="0.45"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 24, opacity: 0.45 }}
            animate={{ strokeDashoffset: 0, opacity: 0.85 }}
            transition={{
              duration: 2.5,
              delay: 0.6,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <circle
            cx="200"
            cy="160"
            r="84"
            fill="none"
            stroke="var(--accent-gold)"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        </svg>

        {/* Center Portrait */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="relative rounded-2xl border border-[var(--accent-gold)]/50 bg-[var(--bg-primary)] p-1.5 shadow-gold">
            <img
              src={imgSrc}
              onError={() => setImgSrc(profileData.fallbackAvatarUrl)}
              alt={`${profileData.name} portrait`}
              width={128}
              height={128}
              className="h-28 w-28 rounded-xl object-cover sm:h-32 sm:w-32"
            />
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--accent-gold)]">
              B.Comp.Sc // Unhan RI
            </span>
          </div>
        </div>

        {/* Corner System Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className={`absolute z-20 max-w-[148px] rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)]/90 px-2.5 py-2 backdrop-blur-sm ${node.pos}`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`h-3.5 w-3.5 shrink-0 ${node.color}`} aria-hidden="true" />
                <span className="truncate font-editorial text-[11px] font-semibold text-[var(--text-primary)]">
                  {node.label}
                </span>
              </div>
              <div className="mt-0.5 truncate font-mono text-[10px] text-[var(--text-secondary)]">
                {node.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 font-mono text-[10px] text-[var(--text-secondary)]">
        <span>LOC: {profileData.location}</span>
        <span>STACK: REACT • NODE • PYTHON • PGSQL</span>
      </div>
    </div>
  );
};
