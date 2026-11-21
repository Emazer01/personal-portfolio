import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    code: '01 / CORE_ENG',
    summary: 'Modular architecture, clean typing, and end-to-end system design.',
    iconKey: 'code',
    accent: 'gold',
    items: [
      { name: 'TypeScript', context: 'Strongly typed full-stack & frontend systems', tier: 'Core Stack' },
      { name: 'JavaScript (ES6+)', context: 'Asynchronous SPAs & Node.js services', tier: 'Core Stack' },
      { name: 'Python', context: 'AI inference, computer vision & FastAPI services', tier: 'Core Stack' },
      { name: 'System Architecture', context: 'Multi-service separation (UI, API, AI worker)', tier: 'Applied' },
      { name: 'Unit Testing', context: 'Automated testing & verification fundamentals', tier: 'Familiar' }
    ]
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend Engineering',
    code: '02 / CLIENT_UI',
    summary: 'Responsive, high-clarity web applications and interactive dashboards.',
    iconKey: 'layout',
    accent: 'blue',
    items: [
      { name: 'ReactJS', context: 'Component architecture, hooks & SPA routing', tier: 'Core Stack' },
      { name: 'Next.js', context: 'Modern React framework & structured routing', tier: 'Applied' },
      { name: 'Tailwind CSS', context: 'Design tokens & responsive layout systems', tier: 'Core Stack' },
      { name: 'Chart.js & Reporting', context: 'Real-time telemetry, Excel & A4 print exports', tier: 'Applied' },
      { name: 'Framer Motion', context: 'Purposeful interface transitions', tier: 'Applied' }
    ]
  },
  {
    id: 'backend-engineering',
    title: 'Backend Engineering',
    code: '03 / API_SERVICES',
    summary: 'Secure RESTful APIs, role-based access control, and service orchestration.',
    iconKey: 'server',
    accent: 'gold',
    items: [
      { name: 'Node.js', context: 'Event-driven backend runtime for web platforms', tier: 'Core Stack' },
      { name: 'Express.js', context: 'RESTful API routing, validation & middleware', tier: 'Core Stack' },
      { name: 'FastAPI', context: 'High-throughput Python AI inference endpoints', tier: 'Applied' },
      { name: 'JWT & RBAC Security', context: 'Role-based auth, bcrypt/PBKDF2 & validation', tier: 'Applied' }
    ]
  },
  {
    id: 'database-data',
    title: 'Database & Data',
    code: '04 / DATA_LAYER',
    summary: 'Relational modeling, persistent state, and analytical reporting pipelines.',
    iconKey: 'database',
    accent: 'blue',
    items: [
      { name: 'PostgreSQL', context: 'Primary relational database across production systems', tier: 'Core Stack' },
      { name: 'Relational Schema Design', context: 'Hierarchical entities, foreign keys & audit logs', tier: 'Applied' },
      { name: 'Excel / PDF Pipelines', context: 'Automated import/export & document rendering', tier: 'Applied' },
      { name: 'Client Storage & Caching', context: 'Resilient API caching & fallback snapshots', tier: 'Applied' }
    ]
  },
  {
    id: 'ai-computer-vision',
    title: 'AI & Computer Vision',
    code: '05 / VISION_AI',
    summary: 'Real-time visual detection, pose estimation, and deep learning workflows.',
    iconKey: 'cpu',
    accent: 'gold',
    items: [
      { name: 'Ultralytics YOLO', context: 'Object & pose detection in real-time pipelines', tier: 'Core Stack' },
      { name: 'OpenCV', context: 'Perspective correction, frame processing & HUDs', tier: 'Core Stack' },
      { name: 'PyTorch', context: 'Deep learning training & field image classification', tier: 'Applied' },
      { name: 'MediaPipe Pose', context: 'CPU-optimized 33-keypoint biomechanical tracking', tier: 'Applied' },
      { name: 'Machine Learning', context: 'Model evaluation, FPS/F1 benchmarking & augmentation', tier: 'Applied' }
    ]
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    code: '06 / INFRA_OPS',
    summary: 'Reliable system environments bridging hardware inputs and software services.',
    iconKey: 'hard-drive',
    accent: 'blue',
    items: [
      { name: 'IT Infrastructure', context: 'End-to-end system provisioning & operational readiness', tier: 'Core Stack' },
      { name: 'Self-Hosted AI Deployment', context: 'CPU-optimized offline/on-premise AI execution', tier: 'Applied' },
      { name: 'Docker Containers', context: 'Containerized backend services & environment parity', tier: 'Applied' },
      { name: 'Hardware Integration', context: 'USB webcams, IP cameras & multi-monitor setups', tier: 'Applied' }
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    code: '07 / NET_ENG',
    summary: 'Connected local network architectures and real-time media transport.',
    iconKey: 'network',
    accent: 'gold',
    items: [
      { name: 'Network Engineering', context: 'LAN topology planning & multi-device connectivity', tier: 'Core Stack' },
      { name: 'RTSP Video Streaming', context: 'IP camera feed ingestion over local networks', tier: 'Applied' },
      { name: 'Multi-Device LAN Hosting', context: 'Field-ready workstation, tablet & display sync', tier: 'Applied' },
      { name: 'TCP/IP & HTTP Diagnostics', context: 'Cross-origin policies, ports & service routing', tier: 'Applied' }
    ]
  },
  {
    id: 'development-tools',
    title: 'Development Tools',
    code: '08 / TOOLCHAIN',
    summary: 'Modern workflows for rapid prototyping, collaboration, and CI/CD.',
    iconKey: 'wrench',
    accent: 'blue',
    items: [
      { name: 'Git & GitHub', context: 'Multi-repo project lifecycle & GitHub Actions CI/CD', tier: 'Core Stack' },
      { name: 'Docker', context: 'Reproducible service packaging', tier: 'Applied' },
      { name: 'Google Colab', context: 'Cloud GPU model experimentation & dataset training', tier: 'Applied' },
      { name: 'Vite & Build Tooling', context: 'Optimized TypeScript bundling & static deployment', tier: 'Core Stack' }
    ]
  }
];
