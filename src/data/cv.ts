// Single source of truth for every piece of content on the site.
// Edit this file (not the components) to update the CV.

export const profile = {
  name: 'Ernesto David Peña Herrera',
  shortName: 'Ernesto D. Peña',
  role: 'Software & AI Engineer',
  location: 'Barcelona, Spain',
  summary:
    'Software Engineer with 5+ years of experience building production ML and LLM-based systems, high-throughput data pipelines, and algorithmic solutions. Specialized in document AI, backend development, and cloud infrastructure (AWS). IOI 2016 participant, 2x ICPC World Finalist, and regional medalist, with strong foundations in algorithms and computer science.',
  // Cloudflare Email Routing alias, not the personal inbox: if it ever gets
  // harvested and spammed, it can be deleted and replaced without touching it.
  email: 'hi@ernestodavidph.com',
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
      // Public page: same wording as LinkedIn, which keeps Invofox's internal
      // metrics (550K+/day, 99.99%) and the solver's method out. The PDF CV
      // carries the exact figures.
      'Scaled the document-processing platform and its public APIs to hundreds of thousands of documents per day, driving throughput optimization and the migration to an AWS microservices architecture (Lambda, SQS, SNS).',
      'Led the algorithmic extraction pipeline and co-designed the agentic extraction workflow, orchestrating LLMs across multiple providers (LiteLLM) with tool calling, RAG, and validation layers, with eval-driven iteration.',
      'Designed a graph-search-based extraction solver with learned heuristics, reducing the search space by 70% and extraction runtime by 60%.',
      'Built a benchmarking framework comparing OCR, algorithmic, LLM, and hybrid approaches on accuracy, throughput, and latency, used to select the extraction strategy per client use case.',
      'Key contributor to platform reliability: failover across OCR and LLM providers, recovery procedures, and observability monitoring.',
      "Team's go-to engineer for performance, profiling, and algorithmic design decisions; mentored 2 new engineers.",
    ],
  },
  {
    role: 'Machine Learning Research Intern',
    company: 'Docet TI',
    location: 'Barcelona, Spain · Remote',
    logo: '/logos/docet.svg',
    period: '07/2022 — 05/2023',
    bullets: [
      'Researched the latent spaces of pre-trained GANs (StyleGAN, StyleGAN2, BigGAN), applying spectral decomposition to discover unsupervised semantic directions for controlled image edits (age, pose, lighting).',
      'Applied diffusion models for super-resolution of GAN outputs; extended the work into an M.Sc. capstone project.',
    ],
  },
  {
    role: 'Teaching Assistant & Researcher',
    company: 'Universidad de Oriente',
    location: 'Santiago de Cuba, Cuba',
    logo: '/logos/uo.svg',
    period: '01/2022 — 07/2022',
    bullets: [
      'Taught Design and Analysis of Algorithms (divide and conquer, greedy, complexity) and Discrete Mathematics (number theory, combinatorics, graph theory) to groups of 30–40 undergraduate CS students.',
      'Coached 2 university ICPC teams, one of which advanced to the ICPC Caribbean Finals.',
      'Conducted deep learning NLP research on social media sentiment analysis, using recurrent networks and attention.',
    ],
  },
  {
    role: 'Algorithms Engineer (Contract)',
    company: 'Encord Technologies (YC W21)',
    companyUrl: 'https://encord.com',
    location: 'United Kingdom · Remote',
    logo: '/logos/encord.svg',
    period: '06/2020 — 12/2021',
    bullets: [
      'Worked directly with the CTO in a two-engineer team on computer vision and geometry algorithms for auto-labeling.',
      'Developed object tracking, polygon interpolation and simplification, and annotation ontology translation algorithms.',
      'Built detection models for medical imaging (DICOM) using Python, OpenCV, and fastai.',
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
    detail: 'Contestant — Kazan, Russia',
    year: '2016',
  },
  {
    title: 'ICPC World Finals',
    detail: 'Qualified twice — Beijing 2018, Porto 2019',
    year: '2018 · 2019',
  },
  {
    title: 'ICPC Caribbean Finals',
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
  { name: 'Flask', file: 'flask.svg' },
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
