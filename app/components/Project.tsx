import React from "react";
import { workLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  key: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  technologies = [],
  link,
  imageUrl,
}) => (
  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
    <div className="w-full h-56 relative rounded-lg mb-4 overflow-hidden">
      <Image
        src={imageUrl}
        alt={`${name} project thumbnail`}
        fill
        style={{ objectFit: "cover" }}
        className="transition-all duration-300 transform scale-70"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">
      {link?.startsWith("/") ? (
        <Link href={link} className="text-blue-600 hover:text-blue-800">
          {name}
        </Link>
      ) : (
        <a
          href={link}
          className="text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      )}
    </h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-black text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workLinks.map((item) => (
            <Project
              key={item.hash}
              name={item.name}
              description={item.description}
              technologies={item.technologies || []}
              link={item.link || undefined}
              imageUrl={item.imageUrl || "/api/placeholder/400/320"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
