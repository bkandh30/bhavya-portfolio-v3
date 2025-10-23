import type { SkillCategory } from '@/data/types';

export const skillCategories: SkillCategory[] = [
	{
		category: 'Languages',
		skills: ['Rust', 'JavaScript', 'TypeScript', 'Golang', 'Python', 'SQL'],
	},
	{
		category: 'Frameworks & Libraries',
		skills: [
			'HTML',
			'CSS',
			'React.js',
			'Next.js',
			'TailwindCSS',
			'Node.js',
			'Express.js',
			'FastAPI',
			'Warp',
		],
	},
	{
		category: 'Cloud & DevOps',
		skills: [
			'AWS',
			'Docker',
			'Kubernetes',
			'Git/GitHub',
			'Linux',
			'GitHub Actions',
			'Prometheus',
			'Grafana',
		],
	},
	{
		category: 'Databases & Tools',
		skills: [
			'PostgreSQL',
			'MySQL',
			'BoltDB',
			'Redis',
			'Power BI',
			'Tableau',
			'AWS QuickSight',
		],
	},
	{
		category: 'Skills',
		skills: [
			'Agile',
			'Version Control',
			'Microservices',
			'Distributed Systems',
			'Scalability',
			'Fault Tolerance',
			'Observability',
		],
	},
];