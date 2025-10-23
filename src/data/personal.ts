import type { PersonalInfo } from '@/data/types';

export const personalInfo: PersonalInfo = {
  name: 'Bhavya Kandhari',
  title: 'Software Engineer',
  bio: 'I build reliable, accessible, and scalable systems that power seamless digital experiences.',
  avatar: {
    webp: '/headshot-small.webp',
    png: '/headshot-small.png',
    alt: 'Bhavya Kandhari profile photo',
  },
  resumeUrl: '/resume.pdf',
  location: 'Phoenix, Arizona, US',
  social: [
    {
      platform: 'github',
      url: 'https://github.com/bkandh30',
      label: 'GitHub',
      icon: 'github',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/kandharibhavya/',
      label: 'LinkedIn',
      icon: 'linkedin',
    },
    {
      platform: 'email',
      url: 'mailto:bhavya.kandhari.eng@gmail.com',
      label: 'Email',
      icon: 'mail',
    },
  ],
};