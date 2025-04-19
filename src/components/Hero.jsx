import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineHand } from 'react-icons/hi';
import { FiDownload, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-start px-8 sm:px-16 pt-32 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* 👋 Hand Emoji */}
      <HiOutlineHand className="text-4xl animate-waving-hand mb-4 text-blue-500" />

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-tight max-w-4xl">
        I'm a <span className="text-blue-600 glow">Frontend Developer</span> creating intuitive, high-impact products with performance, usability, and clean code.
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-gray-600 mt-6 max-w-2xl">
        I build scalable web apps, internal platforms, and fast-moving startup UIs using Angular, React, and modern frontend tech.
      </p>

      {/* Links Section */}
      <div className="flex items-center gap-6 mt-10 text-gray-600 text-sm">
        {/* Resume Download */}
        <a
          href="/assets/resume/Virendra Kumawat Frontend Developer.pdf"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          title="Download Resume"
        >
          <FiDownload className="hover:text-green-600 text-xl transition-all" />
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/virendra-k" target="_blank" rel="noreferrer" title="LinkedIn">
          <FiLinkedin className="hover:text-blue-600 text-xl transition-all" />
        </a>

        <span>|</span>

        {/* Company Logos */}
        <span className="flex items-center gap-4">
          <img src="/assets/Projects/tcslogo.JPG" className="h-8 sm:h-10 object-contain" alt="TCS" />
          <img src="/assets/Projects/rginfotech.jpeg" className="h-8 sm:h-10 object-contain" alt="Recursive" />
          <img src="/assets/Projects/webinfo.png" className="h-5 sm:h-6 object-contain" alt="Web Info" />
        </span>
      </div>
    </motion.section>
  );
};

export default Hero;
