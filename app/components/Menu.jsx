'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../hooks/useTheme';
import Logo from './Logo';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`relative z-50 transition-all duration-300 ${
        isOpen ? 'h-auto' : 'h-12'
      }`}
    >
      <div
        className={`flex items-center space-x-4 px-4 py-2 rounded-full ${
          theme === 'dark' ? 'bg-[#141414]' : 'bg-white'
        } shadow-lg`}
      >
        <Logo
          className={`h-8 w-auto ${
            theme === 'dark' ? 'text-white' : 'text-[#141414]'
          }`}
        />
        <button
          onClick={toggleMenu}
          className="z-10 space-y-1.5 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 ${
              theme === 'dark' ? 'bg-white' : 'bg-[#141414]'
            } transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 ${
              theme === 'dark' ? 'bg-white' : 'bg-[#141414]'
            } transition-all duration-300 ${isOpen ? '-rotate-45' : ''}`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute bottom-20 left-0 right-0 mt-2 bg-white dark:bg-[#141414] p-4 rounded-lg shadow-lg">
          <Link
            href="#chi-sono"
            className="block py-2 text-lg font-bold hover:text-[var(--color-4)]"
          >
            Chi sono
          </Link>
          <Link
            href="#design"
            className="block py-2 text-lg font-bold hover:text-[var(--color-4)]"
          >
            Design
          </Link>
          <Link
            href="#dev"
            className="block py-2 text-lg font-bold hover:text-[var(--color-4)]"
          >
            Dev
          </Link>
          <Link
            href="#progetti"
            className="block py-2 text-lg font-bold hover:text-[var(--color-4)]"
          >
            Progetti
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Menu;
