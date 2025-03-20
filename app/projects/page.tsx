import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col">
                {/* Project Title & Year */}
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight text-lg">
                    {project.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                {/* Project Description */}
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
