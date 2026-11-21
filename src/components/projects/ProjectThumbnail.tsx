import React from 'react';
import { ThumbnailVariant } from '../../types/portfolio';

interface ProjectThumbnailProps {
  variant: ThumbnailVariant;
  title: string;
  customUrl?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  variant,
  title,
  customUrl
}) => {
  if (customUrl) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-navy-950">
        <img
          src={customUrl}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-navy-950 p-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(154,169,188,0.22) 1px, transparent 0)',
          backgroundSize: '18px 18px'
        }}
        aria-hidden="true"
      />

      {variant === 'sitrak' && (
        <svg
          viewBox="0 0 360 190"
          className="relative z-10 h-full w-full"
          aria-hidden="true"
        >
          {/* Target rings + CV detection overlay */}
          <circle cx="105" cy="95" r="64" stroke="#9AA9BC" strokeOpacity="0.22" strokeWidth="1.2" fill="none" />
          <circle cx="105" cy="95" r="46" stroke="#9AA9BC" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
          <circle cx="105" cy="95" r="28" stroke="#D6B56D" strokeOpacity="0.55" strokeWidth="1.4" fill="none" />
          <circle cx="105" cy="95" r="10" fill="#D6B56D" fillOpacity="0.22" stroke="#D6B56D" strokeWidth="1.4" />
          <line x1="105" y1="20" x2="105" y2="170" stroke="#38BDF8" strokeOpacity="0.2" strokeDasharray="3 3" />
          <line x1="30" y1="95" x2="180" y2="95" stroke="#38BDF8" strokeOpacity="0.2" strokeDasharray="3 3" />
          {/* Detected points */}
          <circle cx="98" cy="88" r="3.5" fill="#38BDF8" />
          <circle cx="112" cy="92" r="3.5" fill="#38BDF8" />
          <circle cx="104" cy="102" r="3.5" fill="#D6B56D" />
          {/* Service topology nodes */}
          <rect x="206" y="28" width="128" height="32" rx="6" fill="#111C2D" stroke="#38BDF8" strokeOpacity="0.45" />
          <text x="220" y="48" fill="#F5F7FA" fontSize="10" fontFamily="JetBrains Mono, monospace">React 19 SPA :3000</text>
          <rect x="206" y="79" width="128" height="32" rx="6" fill="#111C2D" stroke="#D6B56D" strokeOpacity="0.55" />
          <text x="220" y="99" fill="#F5F7FA" fontSize="10" fontFamily="JetBrains Mono, monospace">Express + PG :1200</text>
          <rect x="206" y="130" width="128" height="32" rx="6" fill="#111C2D" stroke="#34D399" strokeOpacity="0.5" />
          <text x="220" y="150" fill="#F5F7FA" fontSize="10" fontFamily="JetBrains Mono, monospace">YOLO + OpenCV :8000</text>
          <path d="M170 95 L206 95" stroke="#D6B56D" strokeOpacity="0.6" strokeWidth="1.2" />
          <path d="M270 60 L270 79 M270 111 L270 130" stroke="#9AA9BC" strokeOpacity="0.45" strokeWidth="1.2" />
        </svg>
      )}

      {variant === 'sikapta' && (
        <svg
          viewBox="0 0 360 190"
          className="relative z-10 h-full w-full"
          aria-hidden="true"
        >
          {/* Pose landmark skeleton + FSM angle arc */}
          <rect x="22" y="24" width="150" height="142" rx="8" fill="#111C2D" stroke="#38BDF8" strokeOpacity="0.35" />
          <circle cx="96" cy="54" r="10" stroke="#D6B56D" strokeWidth="1.6" fill="none" />
          <line x1="96" y1="64" x2="96" y2="108" stroke="#F5F7FA" strokeWidth="2" />
          <line x1="96" y1="76" x2="64" y2="94" stroke="#38BDF8" strokeWidth="2" />
          <line x1="64" y1="94" x2="54" y2="74" stroke="#38BDF8" strokeWidth="2" />
          <line x1="96" y1="76" x2="128" y2="94" stroke="#38BDF8" strokeWidth="2" />
          <line x1="128" y1="94" x2="138" y2="74" stroke="#38BDF8" strokeWidth="2" />
          <line x1="96" y1="108" x2="78" y2="148" stroke="#F5F7FA" strokeWidth="2" />
          <line x1="96" y1="108" x2="114" y2="148" stroke="#F5F7FA" strokeWidth="2" />
          <circle cx="64" cy="94" r="3.5" fill="#D6B56D" />
          <circle cx="128" cy="94" r="3.5" fill="#D6B56D" />
          <circle cx="96" cy="76" r="3.5" fill="#D6B56D" />
          {/* Telemetry panel */}
          <rect x="192" y="24" width="146" height="142" rx="8" fill="#111C2D" stroke="#9AA9BC" strokeOpacity="0.25" />
          <text x="206" y="48" fill="#D6B56D" fontSize="10" fontFamily="JetBrains Mono, monospace">POSE_FSM // CPU-OPT</text>
          <text x="206" y="72" fill="#9AA9BC" fontSize="9.5" fontFamily="JetBrains Mono, monospace">MODEL: YOLO / MediaPipe</text>
          <text x="206" y="92" fill="#9AA9BC" fontSize="9.5" fontFamily="JetBrains Mono, monospace">INPUT: Webcam / RTSP</text>
          <rect x="206" y="108" width="118" height="8" rx="4" fill="#0B1220" />
          <rect x="206" y="108" width="88" height="8" rx="4" fill="#38BDF8" fillOpacity="0.8" />
          <text x="206" y="138" fill="#34D399" fontSize="9.5" fontFamily="JetBrains Mono, monospace">JOINT_ANGLE: VALIDATED</text>
          <text x="206" y="154" fill="#9AA9BC" fontSize="9" fontFamily="JetBrains Mono, monospace">AUTH: PBKDF2 + JWT</text>
        </svg>
      )}

      {variant === 'tanicek' && (
        <svg
          viewBox="0 0 360 190"
          className="relative z-10 h-full w-full"
          aria-hidden="true"
        >
          {/* Bounding box & neural vision classification */}
          <rect x="26" y="24" width="146" height="142" rx="8" fill="#111C2D" stroke="#34D399" strokeOpacity="0.4" />
          <path
            d="M66 132 C66 86, 98 54, 134 52 C132 92, 108 128, 66 132 Z"
            fill="#34D399"
            fillOpacity="0.18"
            stroke="#34D399"
            strokeWidth="1.6"
          />
          <path d="M66 132 Q98 94 128 58" stroke="#34D399" strokeOpacity="0.7" strokeWidth="1.2" fill="none" />
          <rect x="58" y="44" width="86" height="96" stroke="#D6B56D" strokeDasharray="4 3" strokeWidth="1.2" fill="none" />
          <rect x="58" y="34" width="66" height="14" rx="2" fill="#D6B56D" />
          <text x="63" y="44" fill="#0B1220" fontSize="8.5" fontWeight="700" fontFamily="JetBrains Mono, monospace">PYTORCH CV</text>
          <rect x="192" y="24" width="144" height="142" rx="8" fill="#111C2D" stroke="#9AA9BC" strokeOpacity="0.25" />
          <text x="206" y="48" fill="#34D399" fontSize="10" fontFamily="JetBrains Mono, monospace">CROP_DIAGNOSTICS</text>
          <text x="206" y="72" fill="#F5F7FA" fontSize="9.5" fontFamily="JetBrains Mono, monospace">11 Pathogen Classes</text>
          <text x="206" y="92" fill="#9AA9BC" fontSize="9" fontFamily="JetBrains Mono, monospace">Paddy • Corn • Chili</text>
          <text x="206" y="108" fill="#9AA9BC" fontSize="9" fontFamily="JetBrains Mono, monospace">Tomato • Soybean</text>
          <rect x="206" y="124" width="116" height="24" rx="5" fill="#0B1220" stroke="#34D399" strokeOpacity="0.4" />
          <text x="216" y="140" fill="#34D399" fontSize="9.5" fontFamily="JetBrains Mono, monospace">Real Field Dataset</text>
        </svg>
      )}

      {(variant === 'jaga' || variant === 'tunkin' || variant === 'default') && (
        <svg
          viewBox="0 0 360 190"
          className="relative z-10 h-full w-full"
          aria-hidden="true"
        >
          {/* Structured Full-Stack Architecture Card */}
          <rect x="22" y="26" width="316" height="138" rx="8" fill="#111C2D" stroke="#9AA9BC" strokeOpacity="0.25" />
          <line x1="22" y1="54" x2="338" y2="54" stroke="#9AA9BC" strokeOpacity="0.2" />
          <circle cx="40" cy="40" r="4" fill="#D6B56D" />
          <circle cx="54" cy="40" r="4" fill="#38BDF8" />
          <circle cx="68" cy="40" r="4" fill="#9AA9BC" fillOpacity="0.5" />
          <text x="86" y="43" fill="#9AA9BC" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            {variant === 'jaga'
              ? 'ROSTER_ENGINE // DOCKERIZED API'
              : variant === 'tunkin'
                ? 'EVAL_PLATFORM // MUI + POSTGRESQL'
                : 'FULLSTACK_MODULE // CLIENT + API'}
          </text>
          <rect x="38" y="70" width="90" height="76" rx="6" fill="#0B1220" stroke="#38BDF8" strokeOpacity="0.35" />
          <text x="50" y="94" fill="#38BDF8" fontSize="9.5" fontFamily="JetBrains Mono, monospace">REACT SPA</text>
          <text x="50" y="112" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Chart.js UI</text>
          <text x="50" y="128" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Export / Print</text>

          <rect x="148" y="70" width="84" height="76" rx="6" fill="#0B1220" stroke="#D6B56D" strokeOpacity="0.4" />
          <text x="158" y="94" fill="#D6B56D" fontSize="9.5" fontFamily="JetBrains Mono, monospace">EXPRESS</text>
          <text x="158" y="112" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">JWT Auth</text>
          <text x="158" y="128" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">REST API</text>

          <rect x="252" y="70" width="70" height="76" rx="6" fill="#0B1220" stroke="#34D399" strokeOpacity="0.4" />
          <text x="261" y="94" fill="#34D399" fontSize="9.5" fontFamily="JetBrains Mono, monospace">PGSQL</text>
          <text x="261" y="112" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Schema</text>
          <text x="261" y="128" fill="#9AA9BC" fontSize="8.5" fontFamily="JetBrains Mono, monospace">Records</text>

          <line x1="128" y1="108" x2="148" y2="108" stroke="#9AA9BC" strokeOpacity="0.5" strokeWidth="1.4" />
          <line x1="232" y1="108" x2="252" y2="108" stroke="#9AA9BC" strokeOpacity="0.5" strokeWidth="1.4" />
        </svg>
      )}
    </div>
  );
};
