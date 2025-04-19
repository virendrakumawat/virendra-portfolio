import React from 'react';
import { FaLinkedin} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Name + Year */}
        <p className="text-sm">
          © {new Date().getFullYear()} Virendra Kumawat. All rights reserved.
        </p>

        {/* Right: Social Icons (optional, show only if needed) */}
        <div className="flex gap-4 mt-3 sm:mt-0">
        
          <a
            href="https://linkedin.com/in/virendra-k"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://linkedin.com/in/virendra-k"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FiMail size={20}/>
          </a>
          
        
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
