'use client';

import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunDim, MoonStars, Palette } from '@phosphor-icons/react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-full bg-[var(--color-2)] text-white hover:bg-[var(--color-3)] transition-all duration-300 hover:scale-110"
      aria-label="Cambia tema"
    >
      {theme === 'light' && <SunDim size={24} weight="duotone" />}
      {theme === 'dark' && <MoonStars size={24} weight="duotone" />}
      {theme === 'system' && <Palette size={24} weight="duotone" />}
    </button>
  );
};

export default ThemeToggle;
