"use client";
import ProjectPage from "@/app/components/ProjectIntro";
import "@/app/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  details: string[];
  photos?: string[]; // Optional array of photo URLs or file paths
}

const features: Feature[] = [
  {
    title: "Passwordless Authentication",
    description:
      "Created a passwordless authentication system to allow users to sign in with just their email and a confirmation code.",
    details: [
      "**Overview**:",
      "We wanted to make Auth super simple so we decided on a passwordless authentication system. Users can sign in with just their email and a confirmation code. This was a great way to make the app more user friendly and accessible.",
      "**Strategy**:",
      "Utilized instantDB Magic Code Auth. Users provide their email and the handleSubmit function will fire a db.auth.signInWithMagicCode that will send them a login code so they authenticate with the app.",
      "**Results and Key Learnings**:",
      "First time implementing Auth! InstantDB is a relatively new service so it was interesting to read documentation and adopting this tech early!",
      "~300 number of users have been deleted and logged via Discord webhooks since launch",
      "75% of deletions were initiated by users to remove inactive or problematic accounts, while 25% were performed by admins.",
      "95% reduction in support tickets related to account deletion requests.",
      "**Testing Evidence**:",
      "**Testing Evidence**:",
    ],
    photos: [
      "pb1.png",
      "pb2.png",
      // Add more photo URLs as needed
    ],
  },
  {
    title: "App Components and Pages",
    description:
      "Developed reusable Tailwind/Material-UI components for the app.",
    details: [
      "**Overview**:",
      "Collection of reusable components that can be used throughout the app. This was a great way to speed up development and maintain consistency in the app.",
      "**Specific Contributions**:",
      "Header Bar, Resuable Button, Empty State Screen, Home Page, Prayer Request Card, Group Page, Create Group Page, Join Group Page, Leave Group Modal, Empty State Screen, Prayer Request Form, Prayer Request List",
      "**Testing Evidence**:",
    ],
    photos: [
      "pb6.jpeg",
      "pb3.jpeg",
      "pb5.jpg",
      "pb7.PNG",
      "pb8.PNG",
      "pb9.PNG",
      // Add more photo URLs as needed
    ],
  },
];

const FeatureAccordion = ({
  feature,
  isOpen,
  onToggle,
  index,
}: {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-full"
    >
      <div
        className={`overflow-hidden rounded-lg border ${
          isOpen ? "border-b-0 rounded-b-none" : ""
        } bg-white`}
      >
        <button
          onClick={onToggle}
          className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden rounded-b-lg border border-t-0 bg-gray-50"
          >
            <div className="p-4">
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-start ${
                      detail.startsWith("**")
                        ? "font-bold text-gray-900"
                        : "text-gray-700"
                    }`}
                  >
                    {detail.startsWith("**") ? (
                      detail.replace(/\*\*/g, "")
                    ) : detail.startsWith("http") ? (
                      <a
                        href={detail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {detail}
                      </a>
                    ) : (
                      <>
                        <span className="text-blue-500"></span>
                        {detail}
                      </>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Display photos if available */}
              {feature.photos && feature.photos.length > 0 && (
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {feature.photos.map((photo, idx) => (
                    <div key={idx} className="w-full">
                      <img
                        src={photo}
                        alt={`Feature photo ${idx + 1}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function PrayerBox() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="mb-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ProjectPage
            title="PrayerBox!"
            description=""
            images={["/msj.png", "/images/veym2.png"]}
            technologies={[
              "React Native",
              "JavaScript",
              "instantDB",
              "Firebase",
              "Tailwind CSS",
            ]}
            projectUrl="https://mydevojournal.com/"
          />
        </motion.div>
      </div>

      {/* Content Sections */}
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="text-black max-w-4xl mx-auto px-4 space-y-16 pb-20"
      >
        {/* Background Section */}
        <motion.section variants={itemAnimation} className="space-y-4">
          <h2 className="text-3xl font-bold">Background</h2>
          <div className="prose prose-lg">
            <p>
              After joining some Christian fellowships on campus, I noticed that
              many people including myself were struggling to stay accountable
              in praying for one another. We would share testimonies and prayer
              requests during meetings, but it was difficult to remember to pray
              for each other throughout the week. I wanted to create a platform
              that would make it easier for us to share prayer requests and pray
              for one another. This project was inspired by my desire use my
              skills in software to develop a creative and simple but effective
              solutions. I had a bigger role in the creating the pages and
              components of the app. I worked on this project with one partner,
              and we were able to garner 500+ users, 1000+ posts, and 5000+
              within the first 2 months of launch.
            </p>
          </div>
        </motion.section>

        {/* Features Implemented */}
        <motion.section variants={itemAnimation} className="space-y-6">
          <h2 className="text-3xl font-bold">Features Implemented</h2>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <FeatureAccordion
                key={index}
                feature={feature}
                isOpen={openFeature === index}
                onToggle={() =>
                  setOpenFeature(openFeature === index ? null : index)
                }
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
