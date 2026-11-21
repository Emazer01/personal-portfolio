import { EducationItem } from '../types/portfolio';

export const educationData: EducationItem[] = [
  {
    id: 'unhan-ri-bsc',
    institution: 'Universitas Pertahanan Republik Indonesia (Unhan RI)',
    shortInstitution: 'Unhan RI',
    degree: 'Bachelor of Computer Science (S.Kom.)',
    fieldOfStudy: 'Informatics — Faculty of Defense Science and Technology (FSTP)',
    location: 'Bogor, Indonesia',
    period: '2020 – 2024',
    description:
      'Completed undergraduate Computer Science education under full cadet formation within the Cohort 1 Undergraduate Cadet Corps Regiment (Resimen Korps Kadet Mahasiswa), combining defense leadership discipline with informatics engineering.',
    coursework: [
      'Software Engineering & Web Architecture',
      'Database Management Systems (PostgreSQL)',
      'Computer Networks & IT Infrastructure',
      'Artificial Intelligence & Computer Vision',
      'Algorithms, Data Structures & System Design',
      'Information & Application Security'
    ],
    achievements: [
      'Cadet Officer Formation — Sersan Mayor Satu Kadet (Cohort 1, Resimen Korps Kadet Mahasiswa).',
      'Undergraduate Thesis (July 2024): "Development of a Responsive Web-Based Guard Duty Reporting System for the Cadet Corps Regiment" (Jaga Resimen).'
    ]
  },
  {
    id: 'sman-taruna-nala',
    institution: 'SMAN Taruna Nala Jawa Timur',
    shortInstitution: 'SMAN Taruna Nala',
    degree: 'High School Diploma — Mathematics & Natural Sciences (MIPA)',
    fieldOfStudy: 'STEM & Leadership Boarding Curriculum',
    location: 'Malang, East Java, Indonesia',
    period: '2017 – 2020',
    description:
      'Completed leadership-oriented boarding secondary education integrating national academic science standards with character development, physical readiness, and disciplined campus life.',
    coursework: [
      'Mathematics & Physics',
      'Leadership & Organizational Discipline',
      'Foundational Computing & STEM'
    ],
    achievements: [
      'Prepared academic and leadership foundation for admission to Universitas Pertahanan Republik Indonesia.'
    ]
  }
];
