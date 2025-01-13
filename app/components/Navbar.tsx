"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos === 0) {
        setVisible(true);
        return;
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Effect to handle scroll after navigation
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const section = searchParams.get("section");

    if (section && pathname === "/") {
      // Small timeout to ensure the DOM is ready
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Clean up the URL
          window.history.replaceState({}, "", "/");
        }
      }, 100);
    }
  }, [pathname]);

  const handleNavigation = (destination: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (destination.startsWith("#")) {
      // Handle section navigation (for projects)
      const sectionId = destination.slice(1); // Remove the # from the ID

      if (pathname === "/") {
        // If on home page, scroll directly
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on different page, navigate home then scroll
        router.push(`/?section=${sectionId}`);
      }
    } else {
      // Handle page navigation (for About and Contact)
      router.push(destination);
    }
  };

  const handleResumeDownload = () => {
    const resumeUrl = "/LamPham_Resume.pdf"; // Update this to the correct path of your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "LamPham_Resume.pdf"; // Change the file name as desired
    link.click();
  };

  return (
    <nav
      className={`fixed w-2/3 justify-center mt-4 z-50 rounded-3xl border border-gray-400 bg-white/80 backdrop-blur-sm transition-all duration-300 ${
        visible
          ? "top-0 left-1/2 transform -translate-x-1/2"
          : "-top-24 left-1/2 transform -translate-x-1/2"
      }`}
    >
      <div className="max-w-7xl mx-auto p-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="ml-2 text-2xl font-bold text-gray-800">
            Lam Pham
          </Link>
          <div className="space-x-6 p-2">
            <button
              onClick={handleNavigation("#projects")}
              className="text-gray-600 hover:text-gray-900"
            >
              Projects
            </button>
            <button
              onClick={handleNavigation("/about")}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </button>
            <button
              onClick={handleResumeDownload}
              className="text-gray-600 hover:text-gray-900"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
