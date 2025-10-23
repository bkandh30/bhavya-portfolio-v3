import type { Experience } from '@/data/types';

export const experiences: Experience[] = [
  {
    id: 'asu-engineer',
    company: 'Ira A Fulton School of Engineering',
    role: 'Software Engineer',
    dateRange: '2023 — 2025',
    description:
      'At ASU, I built automation tools and validation pipelines to help scale distributed computing coursework for hundreds of students each semester.',
    skills: [
		'Python',
		'C#',
		'Pytest',
		'REST APIs',
		'Distributed Systems'
	],
  },
  {
    id: 'ey-engineer',
    company: 'Ernst & Young (EY)',
    role: 'Associate Software Engineer',
    dateRange: '2021 — 2023',
    description:
      'I worked on cloud-native data engineering pipelines that processed millions of vulnerability records daily to strengthen enterprise security insights.',
    skills: [
		'AWS',
		'Python',
		'PySpark',
		'PostgreSQL',
		'ETL Pipelines',
		'Data Engineering',
    ],
  },
];