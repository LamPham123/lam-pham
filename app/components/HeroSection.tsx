import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-5xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="">Lam Pham</span>
            </h1>
            <p className="text-xl text-white mb-8">
              {/* Currently an undergraduate student studying Computer Science at
              the University of Washington, making features for the Vietnamese
              Eucharistic Youth Movement, and developing PrayerBox! Based in
              Seattle WA,  */}
              Based in Seattle WA, I specialize in building amazing full-stack
              applications that solve practical problems with creative
              solutions.
            </p>
            {/* <div className="flex space-x-4 mb-8">
              <a href="#" className="p-2 text-white hover:text-gray-300">
                <GlobeAltIcon className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 text-white hover:text-gray-300">
                <LinkIcon className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 text-white hover:text-gray-300">
                <EnvelopeIcon className="h-6 w-6" />
              </a>
            </div>
            <div className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700 transition-colors cursor-pointer">
              View My Work
            </div> */}
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <Image
                src="/my-notion-face-portrait.png" // Replace with your image path
                alt="Lam Pham"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <ChevronDownIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}
