import React from "react";
// import { workLinks } from "@/lib/data";
// import {
//   GlobeAltIcon,
//   LinkIcon,
//   EnvelopeIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/solid";
import Project from "@/app/components/Project"; // Import the Project component

import HeroSection from "@/app/components/HeroSection"; // Import the Hero Section
// import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection /> {/* Hero Section */}
      <Project /> {/* Project Component */}
    </div>
  );
}
