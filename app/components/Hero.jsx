'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { PaintBrush, Code } from '@phosphor-icons/react';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const { theme } = useTheme();
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev + 1) % 10); // Assumiamo che ci siano 10 elementi fluttuanti
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <FloatingElements activeElement={activeElement} />

      <div className="z-10 text-center">
        <div className="w-64 h-96 mx-auto mb-8 relative">
          <img
            src="/path-to-your-image.jpg"
            alt="Lorenzo Cavicchioli"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[var(--color-1)] dark:text-white">
          Lorenzo Cavicchioli
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-12 text-[var(--color-2)] dark:text-[var(--color-4)]">
          Innovativo, Creativo, Appassionato Web Developer
        </h2>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="flex items-center justify-center px-6 py-3 bg-[var(--color-3)] text-white rounded-full hover:bg-[var(--color-4)] transition-colors duration-300">
            <PaintBrush size={24} weight="duotone" className="mr-2" />
            Web Design
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-[var(--color-3)] text-white rounded-full hover:bg-[var(--color-4)] transition-colors duration-300">
            <Code size={24} weight="duotone" className="mr-2" />
            Development
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
