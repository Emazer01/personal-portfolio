import { siteConfig } from '../config/site';
import { ProfileData } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Gary Ferdinand Wahyudi',
  shortName: 'Gary F. Wahyudi',
  monogram: 'GFW',
  roleTitle: 'Indonesian Air Force Officer • Software & Infrastructure Engineer',
  headline: 'Building Ideas Into Digital Solutions.',
  supportingDescription:
    'Indonesian Air Force Officer and Computer Science graduate from Universitas Pertahanan Republik Indonesia (Unhan RI), specializing in software engineering, IT infrastructure, network engineering, and applied artificial intelligence.',
  location: 'Indonesia',
  almaMater: 'Universitas Pertahanan Republik Indonesia (Unhan RI)',
  degree: 'Bachelor of Computer Science (S.Kom.)',
  avatarUrl: 'https://avatars.githubusercontent.com/u/112299023?v=4',
  fallbackAvatarUrl: 'https://avatars.githubusercontent.com/u/112299023?v=4',
  cvPath: siteConfig.cv.path,
  cvFileName: siteConfig.cv.fileName,
  aboutSummary: [
    'I am a commissioned officer in the Indonesian Air Force (TNI Angkatan Udara) and a Computer Science graduate from Universitas Pertahanan Republik Indonesia (Unhan RI), Faculty of Defense Science and Technology.',
    'Trained within a military cadet environment alongside rigorous informatics engineering studies, I apply technical expertise across full-stack software development, IT infrastructure, network engineering, and applied artificial intelligence to support institutional modernization and operational reliability.',
    'My work focuses on translating complex administrative and technical workflows into dependable, self-hosted digital systems—combining clean architecture, disciplined execution, and resilient engineering standards.'
  ],
  philosophyQuote:
    'Dependable technology emerges when disciplined leadership meets sound software architecture, resilient networks, and purposeful intelligence.',
  focusAreas: [
    'Software Engineering',
    'Full-Stack Web Development',
    'IT Infrastructure',
    'Network Engineering',
    'Artificial Intelligence',
    'Computer Vision',
    'Digital Modernization'
  ],
  corePillars: [
    {
      id: 'software',
      title: 'Full-Stack Software Engineering',
      subtitle: 'React • TypeScript • Node.js • PostgreSQL',
      description:
        'Architecting structured single-page web platforms, role-based REST APIs, and relational schemas engineered for institutional clarity, accountability, and maintainability.',
      tags: ['ReactJS', 'TypeScript', 'Express.js', 'PostgreSQL']
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure & Networking',
      subtitle: 'Enterprise Networks • LAN Topology • Containerization',
      description:
        'Designing and maintaining resilient local network services, hardware-software integration, RTSP camera infrastructure, and self-hosted server deployments.',
      tags: ['Network Engineering', 'Docker', 'LAN Architecture', 'Systems Ops']
    },
    {
      id: 'ai',
      title: 'Applied AI & Computer Vision',
      subtitle: 'YOLO • OpenCV • PyTorch • FastAPI',
      description:
        'Developing self-hosted computer vision services in Python for automated inspection, pose assessment, and objective telemetry without reliance on external cloud dependencies.',
      tags: ['YOLO', 'OpenCV', 'PyTorch', 'FastAPI']
    }
  ],
  workingPrinciples: [
    {
      number: '01',
      title: 'Discipline',
      description:
        'Upholding military precision, structured engineering standards, and methodical execution in every technical undertaking.'
    },
    {
      number: '02',
      title: 'Responsibility',
      description:
        'Maintaining full accountability for system integrity, information security boundaries, and dependable operational outcomes.'
    },
    {
      number: '03',
      title: 'Problem Solving',
      description:
        'Transforming real-world administrative and field challenges into structured, measurable digital capabilities.'
    },
    {
      number: '04',
      title: 'Continuous Learning',
      description:
        'Advancing technical mastery across software systems, enterprise networking, and computer vision innovation.'
    },
    {
      number: '05',
      title: 'Consistent Effort',
      description:
        'Delivering dependable results through steady, rigorous refinement from system architecture to final deployment.'
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
