import React from 'react';
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

  const domains = [
    {
      label: 'Software Engineering',
      detail: 'ReactJS • TypeScript • Node.js • PostgreSQL',
      icon: Globe
    },
    {
      label: 'IT Infrastructure & Networking',
      detail: 'Enterprise LAN • RTSP Systems • Docker',
      icon: Network
    },
    {
      label: 'Applied AI & Computer Vision',
      detail: 'YOLO • OpenCV • PyTorch • FastAPI',
      icon: Cpu
    },
    {
      label: 'Data & System Reliability',
      detail: 'RBAC Security • Self-Hosted Architectures',
      icon: Database
    }
  ];

  return (
    <div className="mx-auto w-full max-w-[440px] rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-editorial">
      {/* Formal Profile Identity Header */}
      <div className="flex items-center gap-4 border-b border-[var(--border-subtle)] pb-5">
        <div className="shrink-0 rounded-xl border border-[var(--accent-gold)]/50 bg-[var(--bg-primary)] p-1">
          <img
            src={imgSrc}
            onError={() => setImgSrc(profileData.fallbackAvatarUrl)}
            alt={`${profileData.name} portrait`}
            width={80}
            height={80}
            className="h-20 w-20 rounded-lg object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-[var(--accent-gold)]">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            <span>TNI Angkatan Udara</span>
          </div>
          <h2 className="font-editorial mt-1 text-lg font-bold leading-snug text-[var(--text-primary)]">
            {profileData.name}, S.Kom.
          </h2>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
            Indonesian Air Force Officer
          </p>
          <p className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
            Universitas Pertahanan RI
          </p>
        </div>
      </div>

      {/* Core Technical Capabilities */}
      <div className="mt-5 space-y-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
          Technical Specialization
        </div>
        {domains.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.label}
              className="flex items-start gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5"
            >
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-gold)]"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="font-editorial text-xs font-semibold text-[var(--text-primary)]">
                  {domain.label}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                  {domain.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Metadata */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--border-subtle)] pt-3.5 font-mono text-[11px] text-[var(--text-secondary)]">
        <span>Location: {profileData.location}</span>
        <span className="text-[var(--accent-gold)]">Discipline &bull; Precision</span>
      </div>
    </div>
  );
};
