export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  isCurrent: boolean; // Added to distinguish past vs. current experiences
}

export const experiences: Experience[] =[
  {
    title: "Full-Stack Developer",
    company: "SaralGroups™ – A Group of Trusted Venture Builders",
    duration: "April 2025 – Present",
    location: "Remote",
    description:
      "Currently working as a full-stack developer apprentice, contributing to the development of scalable web applications and internal tools. Collaborating with cross-functional teams to build features, debug issues, and deploy applications in real-world environments. Gaining hands-on experience with modern frameworks, CMS platforms, and deployment workflows. Actively learning and implementing best practices for full-stack development.",
    skills: [
      "Node.js",
      "React.js",
      "Next.js",
      "Strapi (Headless CMS)",
      "TailwindCSS",
      "REST APIs",
    ],
    isCurrent: true,
  },
  {
    title: "Software Developer Intern",
    company: "SaralGroups™ – A Group of Trusted Venture Builders",
    duration: "Jan 2025 – Mar 2025",
    location: "Remote",
    description:
      "Worked on internal and client-facing projects, focusing on the development, testing, and deployment of full-stack web applications. Contributed to backend logic, frontend UI components, and CMS integration. Collaborated in an agile environment to ship features efficiently while improving development workflows and debugging skills.",
    skills: [
      "Node.js",
      "React.js",
      "Next.js",
      "Strapi",
      "TailwindCSS",
      "Git & GitHub",
    ],
    isCurrent: false,
  },
  {
    title: "Web Developer & Project Lead",
    company: "Saral Startup School",
    duration: "Sep 2024 – Feb 2025",
    location: "Remote",
    description:
      "Led the development of 'Saral Events', a full-stack event management platform. Oversaw backend architecture, CMS integration, and frontend design to ensure seamless organizer and user experiences. Coordinated with team members to plan features, integrate APIs, and optimize for performance and scalability.",
    skills: [
      "Node.js",
      "Next.js",
      "JavaScript",
      "SQL",
      "Drizzle ORM",
      "Strapi",
      "TailwindCSS",
      "Python (Scripting)",
    ],
    isCurrent: false,
  },
];
