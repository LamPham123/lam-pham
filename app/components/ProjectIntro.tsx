import React from "react";
import {
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface ProjectPageProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  projectUrl?: string; // Added optional URL prop
}

export default function ProjectPage({
  title,
  description,
  images,
  technologies,
  projectUrl,
}: ProjectPageProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <h1 className="mt-8 text-4xl font-bold">{title}</h1>
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 hover:text-gray-300 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </a>
          )}
        </div>
        <div className="flex justify-center flex-wrap gap-3 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          {images.length > 0 && (
            <Image
              src={images[0]}
              alt={`${title} screenshot`}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          )}
        </div>
        <p className="text-lg">{description}</p>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center animate-bounce">
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
