import { CertificationItem } from '../types/portfolio';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-unhan-commissioning',
    title: 'Bachelor of Computer Science & Military Cadet Formation',
    issuer: 'Universitas Pertahanan Republik Indonesia (Unhan RI)',
    category: 'Academic Achievement',
    period: '2020 – 2024',
    summary:
      'Completed undergraduate Informatics engineering degree alongside structured defense university cadet leadership formation within the Cadet Corps Regiment.',
    highlights: [
      'Faculty of Defense Science and Technology (FSTP) — Program Studi Informatika',
      'Undergraduate Thesis (2024): Responsive Web Guard Duty Reporting System (Jaga Resimen)'
    ]
  },
  {
    id: 'cert-network-infra',
    title: 'Enterprise Networking & IT Infrastructure Foundations',
    issuer: 'Computer Networking & Infrastructure Track',
    category: 'Training Program',
    period: 'Academic & Applied Practice',
    summary:
      'Foundational and applied training in TCP/IP networking, routing and switching concepts (CCNA curriculum), local area network orchestration, and multi-device service deployment.',
    highlights: [
      'LAN topology planning and multi-client workstation/monitor synchronization',
      'RTSP IP camera stream integration and Dockerized service hosting'
    ]
  },
  {
    id: 'cert-fullstack-security',
    title: 'Full-Stack Web Engineering & Application Security',
    issuer: 'Independent & Structured Engineering Curriculum',
    category: 'Certification',
    period: '2022 – 2024',
    summary:
      'Completed structured full-stack modules covering ReactJS component architecture, Express.js REST APIs, PostgreSQL relational schemas, JWT/bcrypt authentication security, and unit testing.',
    highlights: [
      'Frontend & Backend Security Case Studies (modul17 & modul18)',
      'Production-oriented RBAC & PostgreSQL web platforms'
    ]
  },
  {
    id: 'cert-ai-cv',
    title: 'Applied Computer Vision & Machine Learning Engineering',
    issuer: 'AI & Vision Systems Practice',
    category: 'Technical Achievement',
    period: '2024 – 2026',
    summary:
      'Self-hosted AI engineering covering Ultralytics YOLO object/pose detection, OpenCV perspective correction, MediaPipe landmark analysis, and PyTorch neural network training.',
    highlights: [
      'Designed CPU-optimized and offline-capable computer vision services (SITRAK-Detect & SIKAPTA AI)',
      'Trained PyTorch agricultural disease classification pipeline on real field imagery (Tani-Cek AI)'
    ]
  }
];
