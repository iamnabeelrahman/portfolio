export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  isCurrent: boolean; // Added to distinguish past vs. current experiences
}

export const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "SaralTech™ - A Group of Trusted Venture Builders",
    duration: "Jan 2025 - Present · 3 mos",
    location: "Remote",
    description:
      "Contributing to the development and optimization of innovative software solutions. Enhancing technical skills by working with modern tools and technologies in a collaborative environment. Participating in real-world projects to deliver scalable and impactful software applications. Gaining hands-on experience in software development, debugging, and deployment. Actively collaborating with the team to solve complex problems and achieve project goals.",
    skills: [
      "Node.js",
      "React.js",
      "Next.js",
      "Content Management Systems (CMS)",
      "TailwindCSS",
      "Strapi",
    ],
    isCurrent: true,
  },
  {
    title: "Web Developer (Project Lead)",
    company: "Saral Startup School",
    duration: "Sep 2024 - Feb 2025 · 6 mos",
    location: "Remote",
    description:
      "Led and actively contributed to the development of the Saral Events platform—an event management solution designed to simplify the experience for organizers and participants. Responsible for backend and full-stack development, feature planning, and ensuring a user-friendly interface tailored for efficiency and scalability.",
    skills: [
      "Node.js",
      "Next.js",
      "JavaScript",
      "SQL",
      "Drizzle",
      "TailwindCSS",
      "Python",
      "Strapi",
    ],
    isCurrent: false,
  },
];
