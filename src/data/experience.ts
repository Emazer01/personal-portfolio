import { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'tni-au-unit-commander',
    position: 'Unit Commander, Intelligence Detachment',
    rank: 'Commissioned Officer (Perwira TNI AU)',
    unit: 'Intelligence Detachment',
    organization: 'Indonesian Air Force - TNI Angkatan Udara',
    employmentType: 'Full-time',
    period: 'June 2026 – Present',
    location: 'Biak Numfor, Papua, Indonesia',
    locationType: 'On-site',
    description:
      'Leading unit personnel and operations while applying formal Computer Science, IT infrastructure, network engineering, and applied AI expertise to strengthen operational readiness, analytical workflows, and reliable digital support systems.',
    responsibilities: [
      'Directing unit leadership, personnel readiness, administration, and disciplined execution of institutional responsibilities.',
      'Overseeing local IT infrastructure reliability, secure network connectivity, and technical systems readiness.',
      'Supporting technology modernization initiatives through structured software tools and data-driven reporting workflows.'
    ],
    technologies: [
      'Leadership & Command',
      'IT Infrastructure',
      'Network Engineering',
      'System Reliability',
      'Applied AI'
    ],
    achievements: [
      'Combining commissioned officer leadership with hands-on software engineering and infrastructure capabilities at unit level.'
    ]
  },
  {
    id: 'tni-au-officer-foundation',
    position: 'Commissioned Air Force Officer',
    rank: 'Commissioned Officer (Perwira TNI AU)',
    unit: 'TNI Angkatan Udara Officer Service',
    organization: 'Indonesian Air Force - TNI Angkatan Udara',
    employmentType: 'Full-time',
    period: '2024 – June 2026',
    location: 'Indonesia',
    locationType: 'On-site',
    description:
      'Completed officer transition and service assignments following graduation from Universitas Pertahanan Republik Indonesia (Unhan RI), integrating military leadership formation with technical engineering specialization.',
    responsibilities: [
      'Executed assigned military officer duties upholding integrity, accountability, and organizational discipline.',
      'Applied Computer Science and network engineering fundamentals in technical system development and testing.'
    ],
    technologies: [
      'Officer Leadership',
      'Systems Engineering',
      'Networking Fundamentals',
      'Information Security'
    ],
    achievements: [
      'Transitioned from Universitas Pertahanan Republik Indonesia cadet formation into active commissioned service.'
    ]
  },
  {
    id: 'fullstack-ai-engineering',
    position: 'Full-Stack Developer & AI Systems Engineer',
    unit: 'Independent & Academic Engineering Portfolio',
    organization: 'Applied Software & Computer Vision Systems',
    employmentType: 'Technical Engineering Track',
    period: '2022 – Present',
    location: 'Indonesia',
    description:
      'Architected and engineered multi-service web platforms and self-hosted AI microservices integrating React/TypeScript frontends, Node.js/Express REST APIs, PostgreSQL databases, and Python/YOLO computer vision pipelines.',
    responsibilities: [
      'Developed full-stack platforms featuring role-based access control (JWT RBAC), structured reporting, and analytical visualization.',
      'Engineered Python/FastAPI computer vision pipelines using YOLO, OpenCV, PyTorch, and MediaPipe for automated assessment and detection.',
      'Configured local area network (LAN) multi-device hosting, RTSP video stream ingestion, and Dockerized backend deployments.'
    ],
    technologies: [
      'ReactJS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'YOLO / OpenCV',
      'Docker'
    ],
    achievements: [
      'Built and documented production-oriented architectures including SITRAK-AI, SIKAPTA AI, Tani-Cek AI, Jaga Resimen, and Tunkin Web.',
      'Authored and maintained 25 public repositories across frontend, backend API, security, and computer vision domains.'
    ]
  }
];
