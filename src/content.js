/* ============================================================
   EDIT YOUR SITE CONTENT HERE
   This is the only file you need to touch to update your details.
   Everything below feeds the components automatically.
   ============================================================ */

import {
  SiPython,
  SiApachespark,
  SiPandas,
  SiMysql,
  SiJavascript,
  SiGit,
  SiNumpy,
  SiFlask,
  SiApachehadoop,
  SiGitlab,
  SiLinux,
  SiStripe,
  SiPostman,
  SiWordpress,
  SiScrumalliance,
} from 'react-icons/si';

export const profile = {
  name: 'Arbaaz Ali Jaffer',
  shortName: 'Arbaaz Jaffer',
  role: 'Data Analyst & Software Developer',
  tagline:
    'Recent BSc Computer Science graduate from Royal Holloway, turning data and logic into impactful solutions — from distributed Spark pipelines to full-stack web apps.',
  status: 'Open to new opportunities',
  location: 'London, UK',
  email: 'arbaazjffr@gmail.com',
  resumeUrl: '', // drop your CV PDF into /public and set e.g. '/Arbaaz_CV.pdf'
  socials: {
    linkedin: 'https://www.linkedin.com/in/arbaaz-jaffer/',
    github: 'https://github.com/Arbzzz04',
  },
};

export const about = {
  paragraphs: [
    "I'm a recent BSc Computer Science graduate from Royal Holloway, University of London, with strong technical expertise in Python programming and database management.",
    'My focus is data analytics and distributed computing — I’ve built distributed data pipelines with Apache Spark, alongside full-stack web apps using SQL, JavaScript, and modern frameworks.',
    'I’m driven by turning data and logic into impactful solutions, and I’m actively seeking opportunities in data analytics and software development to keep applying and growing my skills.',
  ],
  facts: [
    { label: 'Degree', value: 'BSc Computer Science' },
    { label: 'University', value: 'Royal Holloway, London' },
    { label: 'Focus', value: 'Data & Distributed Systems' },
    { label: 'Availability', value: 'Open to work' },
  ],
};

// Core stack — official brand logos via react-icons.
// `darkColor` (optional) is used in dark mode for logos whose brand color is
// too dark to read on a dark chip.
export const tools = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Apache Spark', Icon: SiApachespark, color: '#E25A1C' },
  { name: 'Pandas', Icon: SiPandas, color: '#150458', darkColor: '#8b93e0' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1', darkColor: '#5b94c4' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
];

// Competency areas with the real tech behind each (honest — no inflated years).
export const experience = [
  { title: 'Data Analytics', detail: 'Python · Pandas · NumPy · Matplotlib' },
  { title: 'Big Data & Distributed', detail: 'Apache Spark · PySpark · Spark MLlib' },
  { title: 'Databases', detail: 'SQL · MySQL · Spark SQL' },
  { title: 'Full-Stack Web', detail: 'Flask · JavaScript · REST APIs' },
];

// Real projects pulled from your CV. Add a `link` (e.g. a GitHub repo URL) to
// any project and a "view" arrow will appear and make the card clickable.
export const projects = [
  {
    icon: '⚡',
    title: 'Massive-Scale Data Analysis with Apache Spark',
    desc: 'Final-year project: distributed data-processing pipelines on a university cluster. Implemented Word Count, Distributed Grep, Statistical Analysis, and K-Means with performance benchmarking across cluster configurations.',
    tags: ['PySpark', 'Spark SQL', 'Spark MLlib', 'HDFS / YARN'],
    link: '',
  },
  {
    icon: '🍽️',
    title: 'Restaurant Web Application',
    desc: 'Agile (Scrum) team project delivering customer ordering and staff workflows (kitchen → waiter). Built and validated a Stripe payments backend with Postman to ensure reliable end-to-end integration.',
    tags: ['JavaScript', 'Stripe', 'Postman', 'Agile / Scrum'],
    link: '',
  },
  {
    icon: '🎮',
    title: '2D Python Game',
    desc: 'First-year team project: a 2D game built with object-oriented design and vector mathematics for movement and collision handling.',
    tags: ['Python', 'OOP', 'Vector Maths'],
    link: '',
  },
  {
    icon: '🚗',
    title: 'Flask Buggy System',
    desc: 'A functional web server for a buggy-control system, built with Python Flask and a SQL backend with an HTML/CSS interface.',
    tags: ['Flask', 'SQL', 'HTML / CSS'],
    link: '',
  },
];

// Wider toolbox, grouped into categories. `Icon` is optional — items without
// a brand icon simply render as a text pill.
export const toolbox = [
  {
    group: 'Data & Analytics',
    items: [
      { label: 'NumPy', Icon: SiNumpy },
      { label: 'Matplotlib' },
      { label: 'Spark SQL', Icon: SiApachespark },
      { label: 'Spark MLlib', Icon: SiApachespark },
      { label: 'HDFS', Icon: SiApachehadoop },
      { label: 'YARN', Icon: SiApachehadoop },
    ],
  },
  {
    group: 'Web & APIs',
    items: [
      { label: 'Flask', Icon: SiFlask },
      { label: 'REST APIs' },
      { label: 'Stripe', Icon: SiStripe },
      { label: 'WordPress', Icon: SiWordpress },
    ],
  },
  {
    group: 'DevOps & Tools',
    items: [
      { label: 'Git', Icon: SiGit },
      { label: 'GitLab', Icon: SiGitlab },
      { label: 'Linux', Icon: SiLinux },
      { label: 'SSH' },
      { label: 'Postman', Icon: SiPostman },
      { label: 'Agile / Scrum', Icon: SiScrumalliance },
      { label: 'Office 365' },
    ],
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];
