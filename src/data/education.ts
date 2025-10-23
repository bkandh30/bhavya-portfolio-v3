import type { Education } from './types';

export const education: Education[] = [
	{
		id: 'asu-masters',
		degree: 'Masters of Computer Science',
		institution: 'Arizona State University',
		location: 'Tempe, Arizona',
		dateRange: '2023 — 2025',
		coursework: [
			'Digital Video Processing',
			'Foundations of Algorithm',
			'Distributed Software Development',
			'Software Security','Information Assurance and Security',
			'Cloud Computing',
			'Software Verification, Validation and Testing',
			'Data Mining',
			'Data Processing at Scale',
			'Applied Cryptography',
		],
	},
	{
		id: 'amity-bachelors',
		degree: 'Bachelor of Technology in Computer Science',
		institution: 'Amity University',
		location: 'Noida, India',
		dateRange: '2017 — 2021',
		coursework: [
			'Data Structures and Algorithms',
			'Database Management Systems',
			'Object Oriented Programming',
			'Theory of Computation',
			'Operating System',
			'Computer Networks',
			'Distributed Systems',
			'Computer Architecture',
			'Compiler Construction',
		],
	},
];