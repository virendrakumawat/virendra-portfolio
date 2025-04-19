import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          <span className="">Get in Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto"
        >
          Whether you want to discuss a project, collaborate, or just say hi —
          feel free to reach out anytime.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 text-left">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-gray-700 text-lg"
          >
            <FiMail className="text-2xl text-black" />
            <span>kumawatviren789@gmail.com</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-gray-700 text-lg"
          >
            <FiPhone className="text-2xl text-black" />
            <span>+91 7742235624</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 text-gray-700 text-lg"
          >
            <FiMapPin className="text-2xl text-black" />
            <span>Pune, India</span>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="/Virendra Kumawat Frontend Developer.pdf"
            download={true}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300  hover-target"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
