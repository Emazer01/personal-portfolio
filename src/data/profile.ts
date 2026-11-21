import { siteConfig } from '../config/site';
import { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Gary Ferdinand Wahyudi',
  shortName: 'Gary F. Wahyudi',
  monogram: 'GFW',
  roleTitle: 'Software Engineer • Infrastructure & Networking • Applied AI',
  headline: 'Building Ideas Into Digital Solutions.',
  supportingDescription:
    'Computer Science graduate and technology enthusiast focused on software engineering, IT infrastructure, networking, and intelligent digital solutions.',
  location: 'Indonesia',
  almaMater: 'Universitas Pertahanan Republik Indonesia (Unhan RI)',
  degree: 'Bachelor of Computer Science',
  // Initially uses GitHub avatar; to use a custom portrait, place it in public/images/profile.jpg and update avatarUrl
  avatarUrl: 'https://avatars.githubusercontent.com/u/112299023?v=4',
  fallbackAvatarUrl: 'https://avatars.githubusercontent.com/u/112299023?v=4',
  cvPath: siteConfig.cv.path,
  cvFileName: siteConfig.cv.fileName,
  aboutSummary: [
    'I am a Computer Science graduate from Universitas Pertahanan Republik Indonesia (Unhan RI) who works across the intersection of full-stack software engineering, IT infrastructure, network engineering, and applied artificial intelligence.',
    'Rather than treating software, infrastructure, and AI as isolated disciplines, I design integrated systems where modern web interfaces, structured PostgreSQL backends, local network resilience, and computer vision models operate cohesively to solve practical operational challenges.',
    'My approach emphasizes architectural clarity, disciplined execution, and continuous learning—turning ideas into dependable, production-oriented digital platforms.'
  ],
  philosophyQuote:
    'Dependable technology emerges when clean software architecture meets resilient infrastructure and purposeful intelligence.',
  focusAreas: [
    'Software Engineering',
    'Full-Stack Web Development',
    'IT Infrastructure',
    'Network Engineering',
    'Artificial Intelligence',
    'Computer Vision',
    'Technology Innovation'
  ],
  corePillars: [
    {
      id: 'software',
      title: 'Full-Stack Software Engineering',
      subtitle: 'React • Next.js • TypeScript • Node.js • PostgreSQL',
      description:
        'Architecting modular single-page interfaces, role-based REST APIs, and relational schemas tailored for clarity, maintainability, and real-world workflows.',
      tags: ['ReactJS', 'TypeScript', 'Express.js', 'PostgreSQL']
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure & Networking',
      subtitle: 'LAN Topologies • RTSP Streams • Containerization',
      description:
        'Bridging application software with underlying systems—configuring local network services, multi-device RTSP camera feeds, and containerized environments.',
      tags: ['Network Engineering', 'Docker', 'LAN Architecture', 'Linux/Windows']
    },
    {
      id: 'ai',
      title: 'Applied AI & Computer Vision',
      subtitle: 'YOLO • OpenCV • PyTorch • MediaPipe',
      description:
        'Building practical inference pipelines in Python and FastAPI for object detection, pose estimation, and automated visual analysis under real hardware constraints.',
      tags: ['YOLO', 'OpenCV', 'PyTorch', 'FastAPI']
    }
  ],
  workingPrinciples: [
    {
      number: '01',
      title: 'Discipline',
      description:
        'Applying structured engineering standards, clean version control, and methodical execution across every phase of system delivery.'
    },
    {
      number: '02',
      title: 'Responsibility',
      description:
        'Taking ownership of software quality, data integrity, security boundaries, and the real-world reliability of deployed solutions.'
    },
    {
      number: '03',
      title: 'Problem Solving',
      description:
        'Deconstructing complex operational bottlenecks into clear technical architectures that deliver measurable, practical utility.'
    },
    {
      number: '04',
      title: 'Continuous Learning',
      description:
        'Evolving alongside modern web ecosystems, computer vision research, and infrastructure engineering practices through hands-on experimentation.'
    },
    {
      number: '05',
      title: 'Consistent Effort',
      description:
        'Delivering maximum results through steady, deliberate refinement—from backend schema design to the smallest user-interface detail.'
    }
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: siteConfig.github.profileUrl,
      handle: '@Emazer01',
      platform: 'github'
    },
    {
      label: 'LinkedIn',
      href: siteConfig.linkedin.url,
      handle: siteConfig.linkedin.handle,
      platform: 'linkedin'
    }
  ]
};
