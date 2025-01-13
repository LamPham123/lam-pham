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
    title: "Delete User",
    description:
      "Users and Admins are able to navigate to account settings and delete profiles (soft delete)",
    details: [
      "**Backend Implementation**:",
      "Revised the purge DELETE endpoint in the profile controller to soft delete users, implementing and utilizing the stored procedure [dbo].[DeleteUserSoft].",
      "**Frontend Workflow**:",
      "Created a button on the Account Settings page that triggers a modal with warnings and confirmations to delete the profile. This calls the updated endpoint, displays a toast notification, signs out the user, and navigates them back to the homepage.",
      "**Monitoring and Logging**:",
      "Implemented Discord webhooks to log deleted user details, including admin information if applicable. Logs are displayed in the #bot-spam channel for visibility and accountability.",
      "**Results and Key Learnings**:",
      "First main experience with developing a full-stack feature end-to-end!",
      "~300 number of users have been deleted and logged via Discord webhooks since launch",
      "75% of deletions were initiated by users to remove inactive or problematic accounts, while 25% were performed by admins.",
      "95% reduction in support tickets related to account deletion requests.",
      "**Testing Evidence**:",
    ],
    photos: [
      "deleteModal.png",
      "adminDelete.png",
      "deleteUser.png",
      // Add more photo URLs as needed
    ],
  },
  {
    title: "Frequently Asked Questions and Submit Feedback",
    description:
      "A platform designed to help users easily navigate and utilize our services and get additional support",
    details: [
      "**Overview**:",
      "When I joined the team, I noticed that many people from my home church were reaching out with similar questions, such as: 'I accidentally created two accounts,' 'I forgot my login details,' or 'I can't access my account.' To address these common issues, I pitched an FAQ page to help users navigate our services more easily and access the support they need.",
      "**Specific Contributions**:",
      "Designed and implemented a new FAQ table in the database to improve content organization and retrieval efficiency.",
      "Utilized Chakra UI to map and display FAQs dynamically on the web page, enhancing the user interface and experience.",
      "Developed and integrated a feedback submission modal and corresponding API endpoint, enabling users to provide feedback directly within the application.",
      "Implemented a Discord webhook to log submitted feedback details, including user information and feedback content, if applicable. Logs are displayed in the #bot-spam channel for improved visibility and accountability",
      "**Results and Key Learnings**:",
      "Simple, user-friendly solutions can have a big impact! Effective cross team communication and automated notifications contribute to increased support efficiency. ",
      "90% increase in use of existing features such as delete and merge account without having to submit a support ticket since launch.",
      "75% decrease in repeat user questions, showing the effectiveness of the FAQ section in resolving common issues.",
      "95% of support tickets receive a response within 3 days of submission.",
      "**Testing Evidence**:",
      "https://members.veym.net/faq",
    ],
    photos: [
      "faqPage.png",
      "submitFeedback.png",
      "feedbackDiscord.png",
      // Add more photo URLs as needed
    ],
  },
  {
    title: "Cache System",
    description:
      "Developed a caching system by scripting automated cache population and created new routes and schemas for JSON responses",
    details: [
      "**Overview**:",
      "The YouTube API updated its terms of service, bottlenecking the number of allowed API calls. Our website was previously making an API request for each video in a playlist of 40+ videos. To optimize performance, I implemented a caching system that stores the playlist data in a CMS and only queries the API once a day, significantly reducing redundant calls.",
      "**Strategy**:",
      "Utilized Directus CMS to store YouTube playlist JSON responses, including video metadata (e.g., titles, descriptions, thumbnails).",
      "Wrote a script to populate the CMS with fresh playlist data from the YouTube API once a day.",
      "Configured the frontend/website to query the CMS first for cached data before calling the YouTube API.",
      "Wrote a script to populate the CMS with fresh playlist data from the YouTube API once a day.",
      "Adjusted pagination logic on the frontend to efficiently render all 40+ videos from the CMS.",
      "**Results and Key Learnings**:",
      "First time implementing a cache! I now understand how caching can significantly improve performance by reducing redundant API calls and minimizing server load.",
      "Fixed critical bug on our website that was causing downtime.",
      "**Testing Evidence**:",
      "https://veym.net/eucharistic-revival/wonders-of-the-mass",
      "https://veym.net/eucharistic-revival/wonders-of-the-real-presence",
      "https://veym.net/news",
    ],
    photos: [
      // "url_to_photo_5.jpg",
      // "url_to_photo_6.jpg",
      // Add more photo URLs as needed
    ],
  },
  {
    title: "Identify SMS Response Phone Numbers",
    description:
      "Implemented a system to link mass text responses to registered user data, enabling seamless identification and display of information in the #vdh-notifications Discord channel",
    details: [
      "**Overview**:",
      "Every four years we have a National Conference (Về Đất Hứa) in which we have a system to send mass texts. If someone responds to the number, it fires a webhook and we can see the message and phone number in Discord, in the #vdh-notifications channel. The goal is to query the registration data to match the name of the person to the phone number.",
      "**Strategy**:",
      "Create processPhoneNumbers function that makes all the phone numbers into the same format ( ex. 10 digit 1234567890) so they can be easily filtered and queried. Originally they were inputted in different ways in the database (ex. 1234567890, 123-456-7890, (123) 456-7890).",
      "Create findNameByPhone function that passes in processed phone number from above and finds name associated with it from CMS.",
      "Add that result to discord webhook.",
      "**Results and Key Learnings**:",
      "Processing different inputs and regulating them to a standard format is a great way to clean up data.",
      "Researched and implemented an efficient algorithm to query the database and return the name associated with a phone number.",
      "**Testing Evidence (before and after)**:",
    ],

    photos: [
      "beforeVDH.png",
      "afterVDH.png",
      // Add more photo URLs as needed
    ],
  },
  {
    title: "Code Maitaninace and Misc Features",
    description: "A collection of smaller PRs!",
    details: [
      "Enhanced the admin console to display the user's login method when looking up their profile.",
      "Created a misc tab on the admin console with a button that will clear the cache of the MembershipSystem API. Allows developers to see changes without having to wait for the cache to expire.",
      // "**IN PROGRESS:**",
      // "CICD for SQL - As an engineer I want to update the DB using CICD, this way we can have all the SQL stuff under change control.",
    ],
    photos: [
      // "pr1.png",
      "pr2.png",
      "pr3.png",
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

export default function VEYM() {
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
            title="VEYM IT Team"
            description="The purpose of the VEYM IT Team is to support the mission of VEYM through the use of technology. We are a small team of IT professionals who are passionate about applying technology to serve the youth."
            images={["/veym.png", "/images/veym2.png"]}
            technologies={[
              "C# (.NET Core)",
              "React",
              "Next.js",
              "TypeScript",
              "Azure",
              "ChakraUI",
              "Directus",
            ]}
            projectUrl="https://itapps.veym.net/"
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
              I&apos;ve been involved with the Vietnamese Eucharistic Youth
              Movement (VEYM) since childhood, and now as a youth leader, I now
              use my skills as a software developer to give back to my
              community. This project blends my passion for technology with my
              dedication to helping others. It&apos;s been an incredibly
              rewarding experience, providing both professional growth and
              personal fulfillment as I work on impactful projects that make a
              difference for the movement and its members. We are a small but
              mighty team of 15 currently serving 5000+ members across the
              United States.
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
