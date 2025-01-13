import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
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

          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="space-y-4">
              <p className="text-lg  text-white">
                I&apos;m a Computer Science undergraduate at the University of
                Washington, passionate about creating technology that makes a
                meaningful impact. There are so many problems in this world big
                and small, and I would love to be apart of creating the
                solution.
              </p>
              <p className="text-lg  text-white">
                Currently making features for the{" "}
                <a
                  href="https://itapps.veym.net/"
                  className="text-blue-300 hover:underline"
                >
                  Vietnamese Eucharistic Youth Movement
                </a>
                , developing{" "}
                <a
                  href="https://prayerbox.com"
                  className="text-blue-300 hover:underline"
                >
                  PrayerBox
                </a>
                , and researching at the{" "}
                <a
                  href="https://idl.uw.edu/"
                  className="text-blue-300 hover:underline"
                >
                  Interactive Data Lab
                </a>
                .
              </p>
              <p className="text-lg text-white">
                When I&apos;m not coding, you can find me cooking and eating,
                playing jazz piano and guitar, and posting on Bereal!
              </p>
              <blockquote className="text-lg italic text-white border-l-4 border-blue-300 pl-4">
                “You must understand that there is more than one path to the top
                of the mountain.” — Miyamoto Musashi
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
