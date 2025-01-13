"use client";
import ProjectPage from "@/app/components/ProjectIntro";
import "@/app/globals.css";
import { motion } from "framer-motion";

export default function Research() {
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
      <div className="">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ProjectPage
            title={
              <>
                Undergraduate Research
                <br />@ Interactive Data Lab
              </>
            }
            description="Currently developing Erie2, a versatile data sonification toolkit designed for diverse interactive environments. This project seeks to broaden support for interactive features and a variety of audio platforms, empowering researchers, artists, and technologists to make data sonification more accessible, expressive, and impactful. Incoming January 2025."
            images={["/idl.png", "/images/veym2.png"]}
            technologies={[
              "TypeScript/JavaScript",
              "Data Visualization",
              "Research",
            ]}
            projectUrl="https://arxiv.org/abs/2402.00156"
          />
        </motion.div>
      </div>

      {/* Content Sections */}
      {/* <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="text-black max-w-4xl mx-auto px-4 space-y-16 pb-20"
      > */}
      {/* Background Section */}
      {/* <motion.section variants={itemAnimation} className="space-y-4">
          <h2 className="text-3xl font-bold">Background</h2>
          <div className="prose prose-lg">
            <p>
              I am on boarding this team in January 2025, more updates to come!
            </p>
          </div>
        </motion.section>
      </motion.div> */}
    </div>
  );
}
