// Single source of truth for every piece of content on the site.
// Edit this file (not the components) to update the CV.

export const profile = {
  name: 'Ernesto David Peña Herrera',
  shortName: 'Ernesto D. Peña',
  role: 'Software & AI Engineer',
  location: 'Barcelona, Spain',
  summary:
    'Software Engineer with 5+ years of experience building production ML systems, high-throughput data pipelines, and algorithmic solutions. Specialized in document AI, backend development, and cloud infrastructure (AWS). International competitive programming medalist (IOI, ICPC World Finals) with strong theoretical foundations in algorithms and computer science.',
  github: 'https://github.com/ernestico98',
  linkedin: 'https://www.linkedin.com/in/ernestodavidph',
}

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  location: string
  period: string
  /** Path under public/logos. Falls back to a monogram when absent. */
  logo?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software & AI Engineer',
    company: 'Invofox (YC S22)',
    companyUrl: 'https://www.invofox.com',
    location: 'Madrid, Spain · Hybrid',
    logo: '/logos/invofox.svg',
    period: '01/2023 — Present',
    bullets: [
      'Contributed to building a production pipeline handling 550K+ documents/day.',
      'Built and maintained scalable APIs and services supporting the document processing platform.',
      'Designed a graph-theoretic solver with A* search augmented by ML-based semantic heuristics, reducing search space and pipeline runtime.',
      'Contributed to the design and implementation of a microservices architecture enabling high-volume document processing.',
      'Integrated commercial OCR engines and LLMs with custom post-processing, and built a benchmarking framework comparing OCR, algorithmic, LLM and hybrid approaches on throughput, latency and accuracy.',
      'Enhanced platform reliability through provider failover strategies, recovery procedures and observability monitoring.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Docet TI',
    location: 'Barcelona, Spain · Remote',
    logo: '/logos/docet.svg',
    period: '07/2022 — 05/2023',
    bullets: [
      'Integrated Deep Learning models (GANs, Diffusion Models) for automatic image generation in a content-creation pipeline.',
      "Applied spectral decomposition of a GAN's latent space to uncover semantic directions, enabling controlled manipulations (age, pose, lighting).",
    ],
  },
  {
    role: 'Teaching Assistant & Researcher',
    company: 'Universidad de Oriente',
    location: 'Santiago de Cuba, Cuba',
    logo: '/logos/uo.svg',
    period: '01/2022 — 07/2022',
    bullets: [
      'Lectured Algorithms Design & Analysis (Divide and Conquer, Greedy, Complexity) and Discrete Mathematics (Number Theory, Graph Theory, Combinatorics).',
      'Conducted research in NLP and Sentiment Analysis.',
    ],
  },
  {
    role: 'Algorithms Engineer',
    company: 'Encord Technologies (YC W21)',
    companyUrl: 'https://encord.com',
    location: 'United Kingdom · Remote',
    logo: '/logos/encord.svg',
    period: '06/2020 — 12/2021',
    bullets: [
      'Designed algorithmic procedures to accelerate automatic data annotation.',
      'Optimized ML pipelines across Computer Vision and Computational Geometry projects.',
    ],
  },
]

export type Education = {
  degree: string
  school: string
  location: string
  period: string
  detail: string
}

export const education: Education[] = [
  {
    degree: 'M.Sc. in Computer Science',
    school: 'Harbour Space University',
    location: 'Barcelona, Spain',
    period: '07/2022 — 09/2023',
    detail: 'GPA 3.79/4 — Magna cum laude',
  },
  {
    degree: 'B.Sc. in Computer Science',
    school: 'Universidad de Oriente',
    location: 'Santiago de Cuba, Cuba',
    period: '09/2017 — 12/2021',
    detail: 'GPA 5/5 — Summa cum laude, top of class',
  },
]

export type Award = { title: string; detail: string; year: string }

export const awards: Award[] = [
  {
    title: 'International Olympiad in Informatics (IOI)',
    detail: 'Honorable Mention — Kazan, Russia',
    year: '2016',
  },
  {
    title: 'ICPC World Finals',
    detail: 'Qualified twice — Beijing 2018, Porto 2019',
    year: '2018 · 2019',
  },
  {
    title: 'ICPC Latin America Regional Finals',
    detail: 'Silver Medal in 2017 and 2018',
    year: '2017 · 2018',
  },
  {
    title: 'Ibero-American Informatics Competition (CIIC)',
    detail: 'Gold Medal in 2016 and Silver Medal in 2015',
    year: '2015 · 2016',
  },
  {
    title: 'Problem-setter & Judge',
    detail: 'Caribbean ICPC regional contests',
    year: 'since 2019',
  },
]

/** Shown only after the visitor expands "Show more". */
export const moreAwards: Award[] = [
    {
    title: 'Cuban National Mathematics Olympiad',
    detail: 'Silver Medal — university level',
    year: '2020',
  },
  {
    title: 'Cuban National Olympiad in Informatics (OIC)',
    detail: 'Gold Medal in 2015 and 2016, Silver Medal in 2014 — high school level',
    year: '2014 — 2016',
  },
  {
    title: 'Cuban National Mathematics Olympiad',
    detail: 'Gold Medal in 2011 and 2012 — secondary school level',
    year: '2011 · 2012',
  },
]

/** Logos shown in the scrolling banner above the Stack tags. */
export const stackLogos: { name: string; file: string }[] = [
  { name: 'Python', file: 'python.svg' },
  { name: 'C++', file: 'cplusplus.svg' },
  { name: 'TypeScript', file: 'typescript.svg' },
  { name: 'JavaScript', file: 'javascript.svg' },
  { name: 'React', file: 'react.svg' },
  { name: 'Node.js', file: 'nodedotjs.svg' },
  { name: 'Django', file: 'django.svg' },
  { name: 'Flask', file: 'flask.svg' },
  { name: 'Laravel', file: 'laravel.svg' },
  { name: 'AWS', file: 'aws.svg' },
  { name: 'Docker', file: 'docker.svg' },
  { name: 'MongoDB', file: 'mongodb.svg' },
  { name: 'Git', file: 'git.svg' },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'stack', label: 'Stack' },
] as const
