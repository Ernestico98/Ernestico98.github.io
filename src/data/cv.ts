// Single source of truth for every piece of content on the site.
// Edit this file (not the components) to update the CV.

export const profile = {
  name: 'Ernesto David Peña Herrera',
  shortName: 'Ernesto D. Peña',
  role: 'Software & AI Engineer',
  location: 'Barcelona, Spain',
  summary:
    'Software Engineer with 5+ years of experience building production ML systems, high-throughput data pipelines, and algorithmic solutions. Specialized in document AI, backend development, and cloud infrastructure (AWS). International competitive programming medalist (IOI, ICPC World Finals) with strong theoretical foundations in algorithms and computer science.',
  email: 'ernestodavidph@gmail.com',
  phone: '+34 624 192 233',
  github: 'https://github.com/ernestico98',
  linkedin: 'https://www.linkedin.com/in/ernestodavidph',
}

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software & AI Engineer',
    company: 'Invofox (YC S22)',
    companyUrl: 'https://www.invofox.com',
    location: 'Madrid, Spain · Hybrid',
    period: '01/2023 — Present',
    bullets: [
      'Contributed to building a production pipeline handling 550K+ documents/day at 100 docs/sec throughput with 15s median end-to-end latency.',
      'Built and maintained scalable APIs and services supporting the document processing platform.',
      'Designed a graph-theoretic solver with A* search augmented by ML-based semantic heuristics, reducing search space by 70% and pipeline runtime by 60%.',
      'Contributed to the design and implementation of a microservices architecture enabling high-volume document processing.',
      'Integrated commercial OCR engines and LLMs with custom post-processing, and built a benchmarking framework comparing OCR, algorithmic, LLM and hybrid approaches on throughput, latency and accuracy.',
      'Enhanced platform reliability through provider failover strategies, recovery procedures and observability monitoring.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Docet TI',
    location: 'Barcelona, Spain · Remote',
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
    period: '06/2020 — 12/2021',
    bullets: [
      'Designed algorithmic procedures to accelerate automatic data annotation (YC selection, $12.5M Series A).',
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
    title: 'ICPC Caribbean Finals',
    detail: 'Silver Medal',
    year: '2017 · 2018',
  },
  {
    title: 'Caribbean Informatics Olympiad (CIIC)',
    detail: 'Gold & Silver Medal',
    year: '2015 · 2016',
  },
  {
    title: 'Problem-setter & Judge',
    detail: 'Caribbean ICPC regional contests',
    year: 'since 2019',
  },
]

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C++', 'TypeScript', 'JavaScript'] },
  {
    group: 'Frameworks & Tools',
    items: ['Flask', 'Django', 'Node.js', 'Laravel', 'REST APIs', 'Docker', 'Git', 'MongoDB'],
  },
  {
    group: 'Cloud (AWS)',
    items: ['S3', 'Lambda', 'SNS', 'SQS', 'SES', 'CloudWatch', 'OpenSearch', 'CDK'],
  },
  {
    group: 'Technical areas',
    items: [
      'Algorithms & Data Structures',
      'Machine Learning',
      'LLMs / GenAI',
      'OCR',
      'Computer Vision',
      'NLP',
      'Computational Geometry',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  url?: string
}

// Curated by hand — add or remove entries freely.
export const projects: Project[] = [
  {
    name: 'PASCAL-like Compiler',
    description:
      'Full compiler for a PASCAL-like language written from scratch in C++: lexer, recursive-descent parser, semantic analysis and code generation.',
    tags: ['C++', 'Compilers', 'Parsing'],
    url: 'https://github.com/Ernestico98/PASCAL-like-compiler',
  },
  {
    name: 'ML Bot Bootcamp',
    description:
      'Machine learning bot built for the Research Methodologies & Capstone Project bootcamp at Harbour.Space University.',
    tags: ['Python', 'Machine Learning'],
    url: 'https://github.com/Ernestico98/ml_bot_bootcamp',
  },
  {
    name: 'Data Storages App',
    description:
      'Application exploring different storage engines and query patterns, built for the Data Storages course.',
    tags: ['Python', 'Databases'],
    url: 'https://github.com/Ernestico98/data-storages-app',
  },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const
