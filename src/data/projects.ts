import type { Project } from "@/data/types"

export const projects: Project[] = [
	{
		id: 'hashly',
		title: 'Hash.ly - URL Shortener',
		description: 'A modern, privacy-conscious URL shortener built with Next.js and TypeScript, designed for performance and simplicity.',
		featured: true,
		technologies: ['Next.js', 'TypeScript', 'Turso', 'Upstash Redis', 'Drizzle', 'Vercel'],
		links: {
			demo: 'https://hash-ly.vercel.app/',
			github: 'https://github.com/bkandh30/hash.ly',
		},
	},
	{
		id: 'metered-api',
		title: 'Metered API Server (Rust)',
		description: "A production-ready API server built in Rust, designed to handle usage tracking, quotas, and rate limiting with reliability at scale.",
		technologies: ['Rust', 'Warp', 'SQLx', 'Docker', 'PostgreSQL', 'Github Actions'],
		links: {
			github: 'https://github.com/bkandh30/metered-finance-api',
		},
	},
	{
		id: 'goflix',
		title: 'GoFlix - RESTful Movie Management API',
		description: 'A backend service written in Go for managing movie data, built with performance, security and observability in mind.',
		featured: true,
		technologies: ['Go', 'PostgreSQL', 'JWT', 'Docker', 'Logging', 'Metrics'],
		links: {
			github: 'https://github.com/bkandh30/GoFlix',
		},
	},
	{
		id: 'text-summarization',
		title: 'Async Text Summarization Microservice',
		description: 'A lightweight Python microservice that summarizes text asynchronously using NLP pipelines and task queues.',
		technologies: ['Python', 'FastAPI', 'Celery', 'Docker', 'AsyncIO', 'NLTK'],
		links: {
			github: 'https://github.com/bkandh30/fastAPI-summary',
		},
	},
	{
		id: 'aws-cloud-resume',
		title: 'AWS Cloud Resume Challenge',
		description: 'An end-to-end serverless project combining infrastructure as code, continuous deployment, and a data-driven visitor counter.',
		featured: true,
		technologies: ['AWS', 'Lambda', 'DynamoDB', 'S3', 'CloudFront', 'CI/CD'],
		links: {
			github: 'https://github.com/bkandh30/AWS-Cloud-Resume-Challenge',
		},
	},
];
