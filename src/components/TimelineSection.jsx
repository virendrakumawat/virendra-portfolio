import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tata Consultancy Services',
    duration: 'Apr 2023 – Present',
    description: [
      'Built Angular PWA with NgRx and optimized lazy loading.',
      'Implemented secure session handling and CI/CD pipeline.',
      'Led frontend for task management module.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Recursive Global Infotech',
    duration: 'Aug 2022 – Mar 2023',
    description: [
      'Refactored legacy React app with modern UI practices.',
      'Integrated third-party APIs and improved routing performance.',
      'Introduced reusable UI components across modules.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Web Info Software',
    duration: 'Sep 2021 – Jul 2022',
    description: [
      'Worked on dashboards using Angular + Firebase.',
      'Added analytics, filtering, and real-time task updates.',
      'Collaborated with backend team on NodeJS APIs.'
    ]
  }
];

const TimelineSection = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-16 bg-[#f9f9f9]">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>

      <div className="grid gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-white/40 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <FaBuilding className="text-gray-700 mr-3 text-lg" />
              <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
            </div>
            <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
            <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

 export default TimelineSection;
