import React from "react";
import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Work Experience",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col">
              {/* Job Title & Company */}
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight text-lg">
                  {experience.title} - {experience.company}
                </span>
              </div>

              {/* Duration & Location */}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {experience.duration} | {experience.location}
              </span>

              {/* Description */}
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {experience.description}
              </p>

              {/* Skills */}
              <div className="pt-2 text-sm text-gray-600 dark:text-gray-300">
                <strong>Skills:</strong> {experience.skills.join(", ")}
              </div>

              {/* Badge for Past Experiences */}
              {!experience.isCurrent && (
                <span className="mt-3 inline-block text-xs font-medium text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded">
                  Past Experience
                </span>
              )}

              {/* Badge for Current Experience */}
              {experience.isCurrent && (
                <span className="mt-3 inline-block text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded">
                  Current Experience
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
