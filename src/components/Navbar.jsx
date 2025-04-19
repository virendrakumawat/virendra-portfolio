import React from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
  const navItems = [
    { name: 'Work', to: 'projects' },
    { name: 'About me', to: 'about' },
    { name: 'Resume', to: '/Virendra Kumawat Frontend Developer.pdf', external: true },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[70%] lg:w-[30%] max-w-5xl">
      <div className="flex items-center justify-between px-2 py-2 md:py-1.5 lg:py-1 rounded-full backdrop-blur-md bg-white/60 shadow-lg border border-black/10">
        
        {/* Logo / Name */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/assets/profile1.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-black"
          />
          <span className="font-medium text-gray-800 text-sm md:text-base ">
            Virendra Kumawat
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-3  md:gap-6 lg:gap-6 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.external ? (
                <a
                  href={item.to}
                  target="_blank"
                  download={item.name == 'Resume' ? true : false}
                  rel="noopener noreferrer"
                  className="nav-link text-sm md:text-base "
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="nav-link text-sm md:text-base"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
