import type { CVData } from '@/types/cv';

/** Static placeholder until the form store feeds the preview. */
export const SAMPLE_CV_DATA: CVData = {
  fullName: 'Alisher Maxutov',
  title: 'Senior Full Stack Developer',
  email: 'alisher.maxutov@fircaspian.com',
  phone: '+1 555 0100',
  summary:
    'Experienced engineer with 8+ years building scalable web applications and leading cross-functional teams.',
  experience: [
    {
      role: 'Senior Engineer',
      company: 'FirCaspian',
      period: '2020 – Present',
      bullets: [
        'Led a team of 5 developers on the customer portal rewrite',
        'Reduced API latency by 40% through caching and query optimization',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Startup Inc',
      period: '2016 – 2020',
      bullets: [
        'Built React dashboards used by 10k+ daily active users',
        'Introduced CI/CD pipelines cutting release time in half',
      ],
    },
  ],
  skills: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
};
