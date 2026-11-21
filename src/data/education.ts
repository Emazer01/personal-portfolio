import { EducationItem } from '../types/portfolio';

/**
 * Editable education timeline.
 * Update the study period, coursework, or additional training items once confirmed.
 */
export const educationData: EducationItem[] = [
  {
    id: 'unhan-ri-bsc',
    institution: 'Universitas Pertahanan Republik Indonesia (Unhan RI)',
    shortInstitution: 'Unhan RI',
    degree: 'Bachelor of Computer Science',
    fieldOfStudy: 'Informatics / Computer Science',
    location: 'Indonesia',
    period: 'Study Period: Editable in src/data/education.ts',
    isPlaceholderPeriod: true,
    description:
      'Completed undergraduate Computer Science education combining foundational computing theory, software engineering, computer networks, and applied intelligent systems within a disciplined academic environment.',
    coursework: [
      'Software Engineering & Web Systems',
      'Database Management Systems (PostgreSQL)',
      'Computer Networks & IT Infrastructure',
      'Artificial Intelligence & Computer Vision',
      'Algorithms, Data Structures & System Design',
      'Application & Backend Security Fundamentals'
    ],
    achievements: [
      'Designed and built multi-service full-stack and computer vision systems demonstrated across public engineering repositories.',
      'Editable slot: Add thesis title, GPA/honors, or academic distinctions here.'
    ]
  },
  {
    id: 'additional-training-slot',
    institution: 'Specialized Technical Training & Bootcamps',
    degree: 'Full-Stack Web Development & Applied AI Track (Editable)',
    fieldOfStudy: 'Software Engineering & Modern Web Architecture',
    location: 'Indonesia',
    period: 'Add Dates / Cohort Details',
    isPlaceholderPeriod: true,
    description:
      'Placeholder entry for intensive coding bootcamps, networking workshops, or technical coursework (evidenced by structured React, REST API, security, and unit-testing module repositories).',
    coursework: [
      'ReactJS Frontend Architecture',
      'Node.js & Express.js Backend Services',
      'Authentication & API Security',
      'Unit Testing & Client State Persistence'
    ],
    achievements: [
      'Update institution name, exact certification period, and formal training outcomes once confirmed.'
    ],
    isEditableTemplate: true
  }
];
