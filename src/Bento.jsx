import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Bento = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleExpand = (blockId) => {
    setExpandedBlock(expandedBlock === blockId ? null : blockId);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update the body class to reflect the current theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gradient-to-r", "from-[#6a4c9c]", "to-[#3e2a47]", "text-gray-50");
      document.body.classList.remove("bg-white", "text-zinc-900");
    } else {
      document.body.classList.add("bg-white", "text-zinc-900");
      document.body.classList.remove("bg-gradient-to-r", "from-[#6a4c9c]", "to-[#3e2a47]", "text-gray-50");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-r from-[#6a4c9c] to-[#3e2a47] text-gray-50' : 'bg-white text-zinc-900'}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#6a4c9c] to-[#3e2a47] border-b border-zinc-700">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <a href="#" className="text-2xl font-semibold text-gray-50">
            MyPortfolio
          </a>
          <ul className="hidden md:flex space-x-6 text-gray-50">
            <li>
              <a href="#about" className="hover:text-rose-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-rose-300 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-rose-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-gray-50 hover:text-rose-300 focus:outline-none"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu");
              mobileMenu?.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-zinc-800 border-t border-zinc-700">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-50">
            <li>
              <a href="#about" className="hover:text-rose-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-rose-300 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-rose-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Light/Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 bg-rose-600 text-white p-3 rounded-full shadow-lg"
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>

      {/* Content Grid */}
      <div className="grid grid-cols-12 grid-rows-12 h-screen gap-4 pt-24 px-4">
        {/* Blocks */}
        <Block
          className="bg-gradient-to-r from-[#e1b7a4] to-[#d6b7d6] p-4 col-span-4 row-span-7"
          title="Tools"
          details="Details about tools and technologies I use."
          isExpanded={expandedBlock === "tools"}
          onClick={() => toggleExpand("tools")}
        />
        <Block
          className="bg-gradient-to-r from-[#f7c6c7] to-[#e1b7a4] p-4 col-span-3 row-span-3"
          title="Education"
          details="Details about my education and qualifications."
          isExpanded={expandedBlock === "education"}
          onClick={() => toggleExpand("education")}
        />
        <Block
          className="bg-gradient-to-r from-[#d6b7d6] to-[#f7c6c7] p-4 col-span-5 row-span-6"
          title="Projects"
          details="Details about my projects and achievements."
          isExpanded={expandedBlock === "projects"}
          onClick={() => toggleExpand("projects")}
        />
        <Block
          className="bg-gradient-to-r from-[#f2d3e2] to-[#e1b7a4] p-4 col-span-3 row-span-4"
          title="Profile"
          details="Details about my professional profile."
          isExpanded={expandedBlock === "profile"}
          onClick={() => toggleExpand("profile")}
        />
        <Block
          className="bg-gradient-to-r from-[#e1b7a4] to-[#f2d3e2] p-4 col-span-5 row-span-5"
          title="Experience"
          details="Details about my work experience."
          isExpanded={expandedBlock === "experience"}
          onClick={() => toggleExpand("experience")}
        />
        <Block
          className="bg-gradient-to-r from-[#f7c6c7] to-[#d6b7d6] p-4 col-span-3 row-span-4"
          title="Contact"
          details="Details about how to contact me."
          isExpanded={expandedBlock === "contact"}
          onClick={() => toggleExpand("contact")}
        />
        <Block
          className="bg-gradient-to-r from-[#e1b7a4] to-[#f2d3e2] p-4 col-span-4 row-span-4"
          title="About"
          details="Details about me and my background."
          isExpanded={expandedBlock === "about"}
          onClick={() => toggleExpand("about")}
        />
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800 p-4 text-center">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Block = ({ className, title, details, isExpanded, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={twMerge(
        "rounded-lg border border-zinc-700 bg-zinc-800 p-6 cursor-pointer transition-all duration-300",
        isExpanded ? "col-span-12 row-span-12 z-10" : "",
        className
      )}
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      {isExpanded && <p className="mt-4">{details}</p>}
    </motion.div>
  );
};




{/*  <div className="bg-blue-300 p-4 col-span-12"></div>
                <div className="bg-green-300 p-4 col-span-4" ></div>
                <div className="bg-yellow-300 p-4 col-span-3"></div>
                <div className="bg-slate-300 p-4 col-span-5"></div>
                <div className="bg-red-300 p-4 col-span-4"></div>
                <div className="bg-red-900 p-4 col-span-3"></div>
                <div className="bg-red-300 p-4 col-span-4"></div>
                <div className="bg-pink-600 p-4 col-span-3"></div>
                <div className="bg-blue-500 p-4 col-span-4"></div>
                <div className="bg-violet-700 p-4 col-span-5"></div>
                <div className="bg-slate-600 p-4 col-span-12"></div> */}