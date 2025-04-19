import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    category: 'Frameworks / Libraries',
    items: ['Angular', 'React.js', 'Next.js', 'RxJS', 'NgRx', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'npm', 'Azure CI/CD', 'Jira'],
  },
  {
    category: 'Databases',
    items: ['Firebase', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Other Skills',
    items: ['REST APIs', 'Responsive Design', 'Agile', 'PWA', 'Micro Frontends', 'Framer Motion'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-center text-gray-800"
        >
          <span className="">My Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-black hover:text-white transition duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
