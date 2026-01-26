import type { Experience } from '@/data/types';

export const experiences: Experience[] = [
  {
    id: 'asu-engineer',
    company: 'Ira A Fulton School of Engineering',
    role: 'Software Engineer',
    dateRange: '2023 — 2025',
    description:
      'Built automation and validation tooling that scaled distributed systems coursework with consistent feedback loops.',
    highlights: [
      'Designed a grading and validation pipeline for large-scale coursework submissions.',
      'Improved developer workflows with reusable tooling and automated checks.',
      'Collaborated with faculty to translate course requirements into reliable systems.',
    ],
    scope: ['Automation', 'Validation Pipelines', 'Developer Tooling'],
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
      'Built cloud-native data pipelines to improve enterprise security insights at scale.',
    highlights: [
      'Developed resilient ETL workflows for large vulnerability datasets.',
      'Partnered with security teams to improve data quality and observability.',
      'Optimized pipeline performance for reliability in production environments.',
    ],
    scope: ['Cloud Data Pipelines', 'Observability', 'Reliability'],
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
