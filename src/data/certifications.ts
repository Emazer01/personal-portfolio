import { CertificationItem } from '../types/portfolio';

/**
 * Editable Certifications, Training Programs & Achievements data.
 * Keep details conservative and accurate; replace placeholder items with verified credentials.
 */
export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-fullstack-training',
    title: 'Full-Stack Web Development Training Track',
    issuer: 'Issuer / Bootcamp Name (Editable)',
    category: 'Training Program',
    period: 'Add Completion Date',
    summary:
      'Structured engineering track covering ReactJS state management, backend REST APIs, authentication security, bcrypt/JWT hardening, and automated unit testing (evidenced by public module repositories).',
    highlights: [
      'Completed Frontend & Backend Security case studies (modul17 & modul18)',
      'Built persistent React applications and Node.js/Express REST backends',
      'Editable: Add official certificate title and credential URL'
    ],
    isEditablePlaceholder: true
  },
  {
    id: 'cert-network-infra',
    title: 'IT Infrastructure & Network Engineering Certification',
    issuer: 'Certifying Body / Cisco / CompTIA / Institution (Editable)',
    category: 'Certification',
    period: 'Add Issue Date',
    summary:
      'Editable slot for verified networking, systems administration, or IT infrastructure certifications (e.g., CCNA, MikroTik, CompTIA Network+, or institutional training).',
    highlights: [
      'Confirm credential ID, issuing organization, and validity period',
      'Link verified badge or certificate PDF if available'
    ],
    isEditablePlaceholder: true
  },
  {
    id: 'cert-ai-cv',
    title: 'Artificial Intelligence & Computer Vision Coursework',
    issuer: 'Platform / University / Course Provider (Editable)',
    category: 'Course',
    period: 'Add Completion Date',
    summary:
      'Editable slot for machine learning, deep learning, PyTorch, or computer vision specializations supporting projects like SITRAK-AI, SIKAPTA AI, and Tani-Cek AI.',
    highlights: [
      'Applied object detection (YOLO), pose estimation (MediaPipe), and PyTorch image classification',
      'Add formal course certificates or Google Colab/Coursera/Dicoding credentials'
    ],
    isEditablePlaceholder: true
  },
  {
    id: 'achv-academic',
    title: 'Academic & Technical Distinctions',
    issuer: 'Universitas Pertahanan Republik Indonesia / Competitions (Editable)',
    category: 'Academic Achievement',
    period: 'Add Year',
    summary:
      'Expandable record for bachelor degree honors, research publications, hackathon placements, or institutional commendations.',
    highlights: [
      'Bachelor of Computer Science graduate — Universitas Pertahanan Republik Indonesia',
      'Editable: Add awards, thesis distinction, or competitive technology achievements'
    ],
    isEditablePlaceholder: true
  }
];
