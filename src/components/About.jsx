import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiFirebase, SiPostman } from 'react-icons/si'


const skills = [
  { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
  { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        About Me
      </motion.h2>

      {/* About Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-700 max-w-3xl leading-relaxed"
      >
        I'm a passionate <span className="font-semibold text-black">Frontend Developer</span> with 4+ years of experience building web applications using Angular and React.js. I love creating clean, responsive, and high-performance user interfaces that solve real-world problems. I enjoy working with modern technologies and continuously learning to improve as a developer.
      </motion.p>

      {/* Skills Grid */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12"
      >
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-800">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
