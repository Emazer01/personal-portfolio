import { ExperienceItem } from '../types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: 'tni-au-officer',
    organization: 'Indonesian Air Force (TNI Angkatan Udara)',
    position: 'Commissioned Officer (Perwira TNI AU)',
    employmentType: 'Active Duty Military Officer',
    period: '2024 – Present',
    location: 'Indonesia',
    description:
      'Serving as an Indonesian Air Force Officer applying Computer Science, IT infrastructure, network engineering, and software modernization capabilities in support of organizational effectiveness and technical readiness.',
    responsibilities: [
      'Applying structured leadership, accountability, and operational discipline across assigned institutional duties.',
      'Supporting IT infrastructure readiness, local network architecture, and systems integration initiatives.',
      'Designing and evaluating modern software and computer vision tools tailored for self-hosted, reliable environments.'
    ],
    technologies: [
      'IT Infrastructure',
      'Network Engineering',
      'System Architecture',
      'Full-Stack Systems',
      'Applied AI'
    ],
    achievements: [
      'Bridging formal military officer leadership with modern full-stack software engineering and computer vision development.'
    ]
  },
  {
    id: 'fullstack-ai-engineering',
    organization: 'Applied Software & Computer Vision Systems',
    position: 'Full-Stack Developer & AI Systems Engineer',
    employmentType: 'Technical Engineering Track',
    period: '2022 – Present',
    location: 'Indonesia',
    description:
      'Architected and engineered multi-service web platforms and self-hosted AI microservices integrating React/TypeScript frontends, Node.js/Express REST APIs, PostgreSQL databases, and Python/YOLO computer vision pipelines.',
    responsibilities: [
      'Developed full-stack platforms featuring role-based access control (JWT RBAC), structured reporting, and analytical visualization.',
      'Engineered Python/FastAPI computer vision pipelines using YOLO, OpenCV, PyTorch, and MediaPipe for objective assessment and detection.',
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
