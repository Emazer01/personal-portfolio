import { ExperienceItem } from '../types/portfolio';

/**
 * Editable professional & engineering experience timeline.
 * Conservative representation based strictly on verifiable public engineering work
 * plus an editable template slot for LinkedIn/CV confirmation.
 */
export const experienceData: ExperienceItem[] = [
  {
    id: 'fullstack-ai-engineering',
    organization: 'Independent & Academic Software Engineering Portfolio',
    position: 'Full-Stack Developer & Applied AI Builder',
    employmentType: 'Project-Based / Engineering Portfolio',
    period: '2022 – Present (Based on Public GitHub Activity)',
    location: 'Indonesia',
    description:
      'Architected, developed, and iterated on full-stack web platforms and computer vision microservices—connecting React/TypeScript frontends, Node.js/Express REST APIs, PostgreSQL databases, and Python AI inference engines.',
    responsibilities: [
      'Engineered multi-tier web systems featuring role-based access control (JWT RBAC), structured data reporting, and analytics visualizations.',
      'Built Python/FastAPI computer vision pipelines integrating YOLO, OpenCV, PyTorch, and MediaPipe for automated visual detection and assessment.',
      'Designed local network (LAN) and multi-device deployment workflows supporting live webcam, RTSP camera streams, and containerized backends.',
      'Implemented application security fundamentals, input validation, and modular separation between client, API, and AI services.'
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
      'Delivered multi-service architectures across SITRAK-AI, SIKAPTA AI, Tani-Cek AI, Jaga Resimen, and Tunkin Web.',
      'Maintained 25 public repositories spanning frontend applications, backend APIs, and AI inference services.'
    ]
  },
  {
    id: 'professional-role-editable-slot',
    organization: 'Organization / Institution Name (Editable Slot)',
    position: 'IT Infrastructure / Network / Software Engineering Role',
    employmentType: 'Confirm Employment Type on LinkedIn',
    period: 'Add Start Date – End Date',
    location: 'Indonesia',
    description:
      'Editable template entry ready for your formal work experience, internship, or organizational role from LinkedIn. Update src/data/experience.ts with exact verified details.',
    responsibilities: [
      'Add verified operational, IT infrastructure, networking, or software development responsibilities.',
      'Document measurable engineering improvements or system administration duties.'
    ],
    technologies: [
      'IT Infrastructure',
      'Networking',
      'Software Engineering'
    ],
    achievements: [
      'Add verified professional accomplishments, awards, or key deliverables here.'
    ],
    isEditableTemplate: true
  }
];
