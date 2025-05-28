export type Work = {
  company: string
  position: string
  type: string
  deliverable: string[]
  fromDate: string
  toDate: string
}

export const worksData: Work[] = [
  {
    company: 'SaralGroups™',
    position: 'Full-Stack Developer Apprentice',
    type: 'Full-time',
    deliverable: [
      'Contributing to the development of scalable web applications and internal tools in a collaborative team environment.',
      'Implementing features, debugging issues, and deploying apps using modern frameworks and workflows.',
      'Working with CMS platforms, REST APIs, and best practices in full-stack development.',
    ],
    fromDate: '2025-04',
    toDate: 'Present',
  },
  {
    company: 'SaralGroups™',
    position: 'Software Developer Intern',
    type: 'Internship',
    deliverable: [
      'Worked on both internal and client-facing full-stack web projects using React.js, Next.js, and Strapi.',
      'Built frontend components and backend logic while integrating CMS systems.',
      'Collaborated in an agile team to test, deploy, and optimize applications.',
    ],
    fromDate: '2025-01',
    toDate: '2025-03',
  },
  {
    company: 'Saral Startup School',
    position: 'Web Developer & Project Lead',
    type: 'Part-time',
    deliverable: [
      'Led the end-to-end development of “Saral Events”, a full-stack event management platform.',
      'Designed backend architecture, integrated APIs, and implemented CMS and frontend UI components.',
      'Ensured performance optimization, scalability, and a seamless user experience.',
    ],
    fromDate: '2024-09',
    toDate: '2025-02',
  },
]
