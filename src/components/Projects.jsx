// src/pages/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    image: '/assets/Projects/tasktracker.jpg',
    title: "Task Tracker App",
    description:
      "Built a production-grade Angular app to manage tasks across categories: Upcoming, In-Progress, Completed, and Deleted. Integrated NgRx for auth state, session handling, and added PWA support. Users can filter, edit, restore or permanently delete tasks. Modern UI with Tailwind CSS and Material UI.",
    tech: ["Angular", "NgRx", "Tailwind", "Material UI", "PWA"],
  },
  {
    title: "IT HelpBot",
    description:
      "Created an AI-driven IT HelpBot integrated with Microsoft Teams. Built a dynamic front-end in Angular and connected to Azure Bot Service using Node.js. Improved employee support efficiency by 40% with automated ticket resolutions.",
    tech: ["Angular", "NodeJS", "Azure Bot", "Microsoft Teams"],
    image: '/assets/Projects/IT-Hepbot.jpg',
   
  },
  {
    title: "Riforma - eLearning Platform",
    description:
      "Built a full-featured eLearning portal where students can buy, manage and attend classes. Developed dashboards, chat integration, course subscription module, and teacher-student interactions using Angular + Laravel.",
    tech: ["Angular", "Laravel", "Tailwind", "GitHub"],
    image: '/assets/Projects/riforma.PNG',
    
  },
  {
    title: "SAS AM WiFi Purchase System",
    description:
      "Developed a responsive web module for Scandinavian Airlines allowing in-flight WiFi purchase. Integrated with satellite APIs and payment modules. Worked closely with backend teams in Java & DevOps to ensure seamless user experience across devices.",
    tech: ["Angular", "Java", "Bootstrap", "Azure CI/CD"],
    image: '/assets/Projects/sas-wifi.PNG',
    
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col md:flex-row gap-6 items-start bg-[#f9f9f9] shadow hover:shadow-md transition rounded-xl overflow-hidden p-5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[300px] h-[180px] object-cover rounded-lg shadow"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

