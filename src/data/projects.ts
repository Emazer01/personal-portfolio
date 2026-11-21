import { GitHubRepo, GitHubUser, ProjectOverride } from '../types/portfolio';

/**
 * Curated manual overrides for key projects inspected directly from Emazer01 public repositories.
 * All descriptions are public-safe, conservative, and grounded in inspected READMEs & package manifests.
 */
export const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  sitrak: {
    repoName: 'sitrak',
    title: 'SITRAK-AI',
    tagline: 'Integrated Target Analysis & Shooting Practice Evaluation Ecosystem',
    description:
      'A multi-service full-stack and computer vision platform integrating a React 19 analytical dashboard, a Node.js/Express + PostgreSQL REST API with role-based JWT access control, and a self-hosted Python/FastAPI inference microservice using YOLO and OpenCV for automated target perspective correction, shot detection, and grouping metrics.',
    architectureSummary:
      'Three-tier decoupled ecosystem: React 19 SPA client -> Node.js/Express RBAC REST API (:1200) + PostgreSQL -> Self-hosted Python/FastAPI CV worker (:8000) running YOLO & OpenCV with optional multimodal vision fallback and multi-device LAN display support.',
    category: 'AI & Computer Vision',
    techStack: [
      'React 19',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'YOLO',
      'OpenCV',
      'Chart.js',
      'JWT RBAC'
    ],
    highlights: [
      'Automated perspective correction and target ring segmentation via OpenCV & YOLO',
      'Three-tier architecture separating UI, relational data API, and self-hosted CV inference',
      'Real-time live scoring board, Chart.js analytics, and multi-device LAN operation'
    ],
    featured: true,
    priority: 100,
    thumbnailVariant: 'sitrak',
    companionRepos: [
      {
        name: 'sitrak-backend',
        role: 'Node.js / Express & PostgreSQL REST API',
        url: 'https://github.com/Emazer01/sitrak-backend',
        language: 'JavaScript'
      },
      {
        name: 'sitrak-detect',
        role: 'FastAPI, YOLO & OpenCV Vision Service',
        url: 'https://github.com/Emazer01/sitrak-detect',
        language: 'Python'
      }
    ],
    publicSafeNote:
      'Public-safe architectural overview derived from public repository documentation.'
  },
  sikapta: {
    repoName: 'sikapta',
    title: 'SIKAPTA AI',
    tagline: 'CPU-Optimized Physical Fitness & Anthropometric Assessment Intelligence',
    description:
      'Real-time AI and Computer Vision assessment platform built with TypeScript, Python, and PostgreSQL to automate evaluation across five standardized physical tests. Combines dual pose-estimation engines (MediaPipe Pose & YOLOv8n-pose) with finite-state machine biomechanical angle validation and RTSP/webcam streaming over LAN.',
    architectureSummary:
      'TypeScript frontend with live telemetry HUD connected to a Python computer vision engine supporting USB webcams, IP cameras (RTSP), and offline video uploads, backed by PBKDF2/JWT RBAC and empirical FPS/latency/F1 benchmarking.',
    category: 'AI & Computer Vision',
    techStack: [
      'TypeScript',
      'Python',
      'YOLOv8 Pose',
      'MediaPipe',
      'OpenCV',
      'PostgreSQL',
      'JWT RBAC',
      'RTSP / LAN'
    ],
    highlights: [
      'Dual pose-estimation architecture optimized to run reliably on CPU-only hardware',
      'Finite-state machine (FSM) joint-angle validation for Push-up, Pull-up, Sit-up, Shuttle Run & 12-min Wave Run',
      'Model benchmarking suite measuring FPS, p50/p95 latency, precision, recall, and F1-score'
    ],
    featured: true,
    priority: 95,
    thumbnailVariant: 'sikapta',
    publicSafeNote: 'Public-safe engineering summary derived from public README.'
  },
  'Tani-Cek': {
    repoName: 'Tani-Cek',
    title: 'Tani-Cek AI',
    tagline: 'Agricultural Crop Pathogen Detection & Early Warning System',
    description:
      'Deep learning computer vision system built with PyTorch and FastAPI to classify 11 crop disease and healthy foliage categories across rice, corn, chili, tomato, and soybean plants using real agricultural field photographs.',
    architectureSummary:
      'End-to-end vision training and inference workflow: dataset preparation & realistic field lighting augmentation -> PyTorch neural network classifier (72.73% validation accuracy on real field photos) -> FastAPI diagnostic web interface.',
    category: 'AI & Computer Vision',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'OpenCV', 'JavaScript', 'HTML/CSS'],
    highlights: [
      'Trained on 275 authentic field images across 11 crop pathogen & healthy classes',
      'Includes lighting jitter and orientation augmentation tailored for outdoor agricultural imagery',
      'FastAPI web diagnostic workflow for rapid sample inference and inspection'
    ],
    featured: true,
    priority: 90,
    thumbnailVariant: 'tanicek'
  },
  jaga_resimen: {
    repoName: 'jaga_resimen',
    title: 'Jaga Resimen',
    tagline: 'Duty Roster Scheduling & Personnel Readiness Management Web System',
    description:
      'Full-stack web application designed for structured duty roster administration, personnel tracking, and operational schedule reporting. Pairs a React 18 interface featuring Chart.js visualizations and Excel/print exports with a containerized Node.js/Express and PostgreSQL API.',
    architectureSummary:
      'React 18 SPA frontend (`jaga_resimen`) integrated via Axios with a Dockerized Express.js & PostgreSQL backend (`jaga_backend`) utilizing JWT authentication and server-side input validation.',
    category: 'Full-Stack Web',
    techStack: ['React 18', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Chart.js', 'Bootstrap', 'JWT'],
    highlights: [
      'Structured roster management with Chart.js summaries and XLSX/print reporting pipelines',
      'Client-side image compression and responsive administrative workflows',
      'Containerized Node.js backend service (`jaga_backend`) with PostgreSQL persistence'
    ],
    featured: true,
    priority: 85,
    thumbnailVariant: 'jaga',
    companionRepos: [
      {
        name: 'jaga_backend',
        role: 'Dockerized Express.js & PostgreSQL API',
        url: 'https://github.com/Emazer01/jaga_backend',
        language: 'JavaScript'
      }
    ],
    publicSafeNote:
      'Public-safe functional overview; internal data and organizational details are excluded.'
  },
  'tunkin-web': {
    repoName: 'tunkin-web',
    title: 'Tunkin Web',
    tagline: 'Performance Allowance & Administrative Evaluation Platform',
    description:
      'Full-stack administrative system engineered to manage performance evaluations, allowance calculations, and structured reporting. Combines a React 18, Material UI, and Chart.js frontend with an Express.js and PostgreSQL REST API.',
    architectureSummary:
      'React 18 + Material UI + Bootstrap client (`tunkin-web`) consuming a PostgreSQL-backed Express.js API (`tunkin-backend`) with JWT auth, spreadsheet export (`sheetjs-style`), and printable report templates.',
    category: 'Full-Stack Web',
    techStack: ['React 18', 'Material UI', 'Node.js', 'Express.js', 'PostgreSQL', 'Chart.js', 'JWT'],
    highlights: [
      'Combines Material UI data views with Chart.js analytics and printable A4 report generation',
      'Automated spreadsheet export capabilities for administrative verification',
      'Backed by PostgreSQL relational storage and JWT-authenticated Express endpoints'
    ],
    featured: true,
    priority: 80,
    thumbnailVariant: 'tunkin',
    companionRepos: [
      {
        name: 'tunkin-backend',
        role: 'Express.js & PostgreSQL REST API',
        url: 'https://github.com/Emazer01/tunkin-backend',
        language: 'JavaScript'
      }
    ],
    publicSafeNote: 'Public-safe technical overview derived from public repository manifests.'
  },
  berita: {
    repoName: 'berita',
    title: 'Digital News & PDF Document Portal',
    tagline: 'Full-Stack Publication & Embedded Document Viewer Platform',
    description:
      'Web portal for browsing structured articles and embedded PDF publications using React 18, React Router, and PDF.js viewer integration, paired with an Express.js and PostgreSQL backend service.',
    category: 'Full-Stack Web',
    techStack: ['React 18', 'PDF.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    highlights: [
      'Integrated @react-pdf-viewer/core for seamless in-browser document reading',
      'Live Vercel deployment configured in repository metadata'
    ],
    featured: false,
    priority: 65,
    thumbnailVariant: 'default',
    companionRepos: [
      {
        name: 'berita_backend',
        role: 'Express.js & PostgreSQL Backend',
        url: 'https://github.com/Emazer01/berita_backend',
        language: 'JavaScript'
      }
    ]
  },
  laundry_bootstrap: {
    repoName: 'laundry_bootstrap',
    title: 'UnBI Laundry Management App',
    tagline: 'Service Operations & Order Tracking Web Application',
    description:
      'Full-stack web application built for service order tracking and administrative workflows using React 18, Material UI, Bootstrap, and an Express.js + PostgreSQL backend.',
    category: 'Full-Stack Web',
    techStack: ['React 18', 'Material UI', 'Bootstrap', 'Express.js', 'PostgreSQL'],
    highlights: [
      'Full-stack client and Express/PostgreSQL service architecture',
      'Responsive UI combining Bootstrap grid layout with Material UI components'
    ],
    featured: false,
    priority: 60,
    thumbnailVariant: 'default',
    companionRepos: [
      {
        name: 'backend_laundry',
        role: 'Express.js & PostgreSQL API',
        url: 'https://github.com/Emazer01/backend_laundry',
        language: 'JavaScript'
      }
    ]
  },
  modul18_gary: {
    repoName: 'modul18_gary',
    title: 'Full-Stack Security Case Study',
    tagline: 'Frontend & Backend Security Hardening Implementation',
    description:
      'Engineering case study demonstrating full-stack security practices including authenticated flows, token handling, and protected API communication.',
    category: 'Backend & Security',
    techStack: ['JavaScript', 'React', 'Node.js', 'Security'],
    highlights: ['Focuses on full-stack authentication and defensive coding patterns'],
    featured: false,
    priority: 55,
    thumbnailVariant: 'default'
  },
  CS_Modul_17: {
    repoName: 'CS_Modul_17',
    title: 'Backend Security Case Study',
    tagline: 'Server-Side Validation, Hashing & API Access Controls',
    description:
      'Backend security engineering exercise implementing server-side request validation, password hashing, and protected endpoint architecture.',
    category: 'Backend & Security',
    techStack: ['JavaScript', 'Node.js', 'Express.js', 'API Security'],
    highlights: ['Implements server-side authentication guards and validation logic'],
    featured: false,
    priority: 52,
    thumbnailVariant: 'default'
  },
  unittesting: {
    repoName: 'unittesting',
    title: 'JavaScript Unit Testing Suite',
    tagline: 'Automated Test Coverage & Assertion Engineering Study',
    description:
      'Focused software engineering repository exploring unit test design, edge-case assertions, and regression safety in JavaScript.',
    category: 'Engineering Case Study',
    techStack: ['JavaScript', 'Unit Testing'],
    highlights: ['Demonstrates structured test-driven validation practices'],
    featured: false,
    priority: 48,
    thumbnailVariant: 'default'
  },
  'sitrak-backend': {
    repoName: 'sitrak-backend',
    title: 'SITRAK-AI Backend API',
    tagline: 'Role-Based JWT REST API & PostgreSQL Service for SITRAK',
    description:
      'Central Node.js and Express.js backend service for SITRAK-AI handling Role-Based JWT authentication, hierarchical training session data, and computer vision score persistence in PostgreSQL.',
    category: 'Backend & Security',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'bcryptjs'],
    highlights: ['Express Validator, JWT RBAC, and relational PostgreSQL persistence'],
    featured: false,
    priority: 45,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'sitrak'
  },
  'sitrak-detect': {
    repoName: 'sitrak-detect',
    title: 'SITRAK-Detect Vision Service',
    tagline: 'Self-Hosted FastAPI, YOLO & OpenCV Ballistic Target Inference',
    description:
      '100% self-hosted Python microservice powered by FastAPI, Ultralytics YOLO, OpenCV, and NumPy for target perspective correction, paster filtering, and shot coordinate detection.',
    category: 'AI & Computer Vision',
    techStack: ['Python', 'FastAPI', 'Ultralytics YOLO', 'OpenCV', 'NumPy'],
    highlights: ['Offline-ready FastAPI inference service with perspective warping'],
    featured: false,
    priority: 44,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'sitrak'
  },
  jaga_backend: {
    repoName: 'jaga_backend',
    title: 'Jaga Resimen Backend API',
    tagline: 'Dockerized Express.js & PostgreSQL Backend',
    description:
      'RESTful backend service for Jaga Resimen containerized with Docker and powered by Express.js, JWT authentication, bcryptjs, and PostgreSQL.',
    category: 'Backend & Security',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'JWT'],
    highlights: ['Includes Dockerfile for reproducible backend container deployment'],
    featured: false,
    priority: 42,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'jaga'
  },
  'tunkin-backend': {
    repoName: 'tunkin-backend',
    title: 'Tunkin Web Backend API',
    tagline: 'Express.js & PostgreSQL API for Tunkin Web',
    description:
      'Backend REST API supporting the Tunkin Web platform with PostgreSQL integration, express-validator guards, and JWT session handling.',
    category: 'Backend & Security',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    highlights: ['Structured relational API with validation middleware'],
    featured: false,
    priority: 40,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'tunkin'
  },
  berita_backend: {
    repoName: 'berita_backend',
    title: 'Berita Portal Backend API',
    tagline: 'Express.js & PostgreSQL Content API',
    description:
      'Server-side REST API for the Berita publication portal supporting authenticated administration and PostgreSQL storage.',
    category: 'Backend & Security',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    highlights: ['RESTful API powering the Berita React portal'],
    featured: false,
    priority: 38,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'default'
  },
  backend_laundry: {
    repoName: 'backend_laundry',
    title: 'UnBI Laundry Backend API',
    tagline: 'Express.js & PostgreSQL Order Service',
    description:
      'Backend API for the UnBI Laundry management application built with Node.js, Express.js, and PostgreSQL.',
    category: 'Backend & Security',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    highlights: ['Supports the UnBI Laundry frontend application'],
    featured: false,
    priority: 36,
    hideFromPrimaryFeed: true,
    thumbnailVariant: 'default'
  }
};

/**
 * Verified snapshot of public GitHub profile & repositories from https://api.github.com/users/Emazer01
 * Used as an offline/rate-limit graceful fallback when GitHub API cannot be reached.
 */
export const FALLBACK_GITHUB_USER: GitHubUser = {
  login: 'Emazer01',
  id: 112299023,
  avatar_url: 'https://avatars.githubusercontent.com/u/112299023?v=4',
  html_url: 'https://github.com/Emazer01',
  name: 'Gary Ferdinand Wahyudi',
  company: null,
  blog: '',
  location: 'Indonesia',
  bio: null,
  public_repos: 25,
  followers: 1,
  following: 1,
  created_at: '2022-08-28T04:16:28Z',
  updated_at: '2026-11-20T09:13:59Z'
};

export const FALLBACK_GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'sitrak',
    full_name: 'Emazer01/sitrak',
    description: null,
    html_url: 'https://github.com/Emazer01/sitrak',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2026-11-10T10:59:45Z',
    created_at: '2026-10-06T03:35:06Z',
    pushed_at: '2026-11-20T09:22:15Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'sitrak-detect',
    full_name: 'Emazer01/sitrak-detect',
    description: null,
    html_url: 'https://github.com/Emazer01/sitrak-detect',
    homepage: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2026-11-10T11:01:58Z',
    created_at: '2026-10-08T04:32:12Z',
    pushed_at: '2026-11-10T11:01:54Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'sitrak-backend',
    full_name: 'Emazer01/sitrak-backend',
    description: 'Backend for Sitrak-AI',
    html_url: 'https://github.com/Emazer01/sitrak-backend',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2026-11-10T11:01:02Z',
    created_at: '2026-10-06T12:37:22Z',
    pushed_at: '2026-11-10T11:00:58Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'sikapta',
    full_name: 'Emazer01/sikapta',
    description: null,
    html_url: 'https://github.com/Emazer01/sikapta',
    homepage: null,
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2026-11-08T14:49:48Z',
    created_at: '2026-11-06T02:20:54Z',
    pushed_at: '2026-11-08T14:49:44Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'Tani-Cek',
    full_name: 'Emazer01/Tani-Cek',
    description: 'Cek Penyakit Tanaman dengan AI Computer Vision',
    html_url: 'https://github.com/Emazer01/Tani-Cek',
    homepage: null,
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2026-09-29T16:01:01Z',
    created_at: '2026-09-29T13:51:39Z',
    pushed_at: '2026-09-29T15:55:22Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'jaga_backend',
    full_name: 'Emazer01/jaga_backend',
    description: 'Backend App for jaga_resimen',
    html_url: 'https://github.com/Emazer01/jaga_backend',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2024-07-20T00:10:41Z',
    created_at: '2023-12-19T08:52:56Z',
    pushed_at: '2024-07-20T00:10:38Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'jaga_resimen',
    full_name: 'Emazer01/jaga_resimen',
    description: null,
    html_url: 'https://github.com/Emazer01/jaga_resimen',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2024-07-20T00:09:57Z',
    created_at: '2023-12-19T08:54:15Z',
    pushed_at: '2024-07-20T00:09:54Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'tunkin-backend',
    full_name: 'Emazer01/tunkin-backend',
    description: null,
    html_url: 'https://github.com/Emazer01/tunkin-backend',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 1,
    topics: [],
    updated_at: '2023-09-18T01:34:42Z',
    created_at: '2023-09-18T01:34:26Z',
    pushed_at: '2023-11-14T10:41:41Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'tunkin-web',
    full_name: 'Emazer01/tunkin-web',
    description: null,
    html_url: 'https://github.com/Emazer01/tunkin-web',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 1,
    topics: [],
    updated_at: '2023-09-12T05:06:13Z',
    created_at: '2023-09-12T05:06:05Z',
    pushed_at: '2023-11-14T16:34:37Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'berita',
    full_name: 'Emazer01/berita',
    description: null,
    html_url: 'https://github.com/Emazer01/berita',
    homepage: 'https://berita-jet.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2023-05-14T10:28:50Z',
    created_at: '2023-02-28T15:04:04Z',
    pushed_at: '2023-06-20T01:40:59Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'berita_backend',
    full_name: 'Emazer01/berita_backend',
    description: null,
    html_url: 'https://github.com/Emazer01/berita_backend',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2023-02-28T15:27:29Z',
    created_at: '2023-02-28T15:27:17Z',
    pushed_at: '2023-06-19T22:55:37Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'pers',
    full_name: 'Emazer01/pers',
    description: null,
    html_url: 'https://github.com/Emazer01/pers',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-12-27T05:45:40Z',
    created_at: '2022-12-27T05:45:31Z',
    pushed_at: '2022-12-27T05:45:36Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'laundry_bootstrap',
    full_name: 'Emazer01/laundry_bootstrap',
    description: 'Frontend Application for UnBI Laundry',
    html_url: 'https://github.com/Emazer01/laundry_bootstrap',
    homepage: 'https://laundry-bootstrap.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 1,
    topics: [],
    updated_at: '2022-12-15T14:36:31Z',
    created_at: '2022-12-15T14:34:13Z',
    pushed_at: '2023-09-11T07:07:05Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'backend_laundry',
    full_name: 'Emazer01/backend_laundry',
    description: 'Backend Application for UnBI Laundry',
    html_url: 'https://github.com/Emazer01/backend_laundry',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 1,
    topics: [],
    updated_at: '2022-12-15T06:06:16Z',
    created_at: '2022-12-15T06:06:05Z',
    pushed_at: '2023-09-11T07:10:04Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'modul18_gary',
    full_name: 'Emazer01/modul18_gary',
    description: 'Case Study Frontend & Backend Security',
    html_url: 'https://github.com/Emazer01/modul18_gary',
    homepage: 'https://modul18-gary.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-12-03T08:28:12Z',
    created_at: '2022-11-21T16:23:04Z',
    pushed_at: '2022-12-03T08:49:25Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'CS_Modul_17',
    full_name: 'Emazer01/CS_Modul_17',
    description: 'Case Study Backend Security',
    html_url: 'https://github.com/Emazer01/CS_Modul_17',
    homepage: 'https://cs-modul-17.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 1,
    topics: [],
    updated_at: '2022-12-03T05:41:52Z',
    created_at: '2022-11-20T16:07:10Z',
    pushed_at: '2022-12-03T07:14:19Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'unittesting',
    full_name: 'Emazer01/unittesting',
    description: 'Case Study Unit Testing',
    html_url: 'https://github.com/Emazer01/unittesting',
    homepage: '',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-11-29T05:59:55Z',
    created_at: '2022-11-28T13:16:35Z',
    pushed_at: '2022-11-28T13:16:40Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'starter-rest-api',
    full_name: 'Emazer01/starter-rest-api',
    description: 'Cyclic REST API using dynamo single table storage',
    html_url: 'https://github.com/Emazer01/starter-rest-api',
    homepage: '',
    language: null,
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-11-25T17:05:14Z',
    created_at: '2022-12-09T06:11:57Z',
    pushed_at: '2022-10-10T01:28:21Z',
    fork: true,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'modul16_localstorage_gary',
    full_name: 'Emazer01/modul16_localstorage_gary',
    description: null,
    html_url: 'https://github.com/Emazer01/modul16_localstorage_gary',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-11-12T06:41:47Z',
    created_at: '2022-11-12T06:41:33Z',
    pushed_at: '2022-11-12T06:41:42Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'modul15_gary_ferdinand_wahyudi',
    full_name: 'Emazer01/modul15_gary_ferdinand_wahyudi',
    description: 'Case Study Pertemuan 7 Sesi 2',
    html_url: 'https://github.com/Emazer01/modul15_gary_ferdinand_wahyudi',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-11-07T05:36:43Z',
    created_at: '2022-11-07T05:36:33Z',
    pushed_at: '2022-11-07T12:13:28Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'modul14_gary_ferdinand_wahyudi',
    full_name: 'Emazer01/modul14_gary_ferdinand_wahyudi',
    description: 'Case Study Pertemuan 7 Sesi 1',
    html_url: 'https://github.com/Emazer01/modul14_gary_ferdinand_wahyudi',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-11-05T15:55:45Z',
    created_at: '2022-11-05T15:55:35Z',
    pushed_at: '2022-11-05T15:55:40Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'modul13_gary_ferdinand_wahyudi',
    full_name: 'Emazer01/modul13_gary_ferdinand_wahyudi',
    description: 'Belajar React JS',
    html_url: 'https://github.com/Emazer01/modul13_gary_ferdinand_wahyudi',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-10-30T01:44:37Z',
    created_at: '2022-10-30T01:44:30Z',
    pushed_at: '2022-10-30T06:40:33Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'Gary-Webdev_Aplikasi_Backend_II',
    full_name: 'Emazer01/Gary-Webdev_Aplikasi_Backend_II',
    description: null,
    html_url: 'https://github.com/Emazer01/Gary-Webdev_Aplikasi_Backend_II',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-10-05T02:40:41Z',
    created_at: '2022-10-01T16:02:45Z',
    pushed_at: '2022-10-05T02:49:29Z',
    fork: false,
    archived: false,
    default_branch: 'main'
  },
  {
    name: 'git-exercise',
    full_name: 'Emazer01/git-exercise',
    description: null,
    html_url: 'https://github.com/Emazer01/git-exercise',
    homepage: null,
    language: null,
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-09-24T03:45:18Z',
    created_at: '2022-09-24T03:45:18Z',
    pushed_at: '2022-09-24T04:20:26Z',
    fork: false,
    archived: false,
    default_branch: 'master'
  },
  {
    name: 'fork-exercise',
    full_name: 'Emazer01/fork-exercise',
    description: null,
    html_url: 'https://github.com/Emazer01/fork-exercise',
    homepage: null,
    language: null,
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: '2022-09-19T05:44:14Z',
    created_at: '2022-09-24T04:28:24Z',
    pushed_at: '2022-09-24T04:45:49Z',
    fork: true,
    archived: false,
    default_branch: 'master'
  }
];
