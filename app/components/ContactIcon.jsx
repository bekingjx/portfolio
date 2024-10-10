'use client';

import React from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';

const ContactIcon = () => {
  return (
    <a
      href="mailto:lorenzo.cavicchioli27798@gmail.com"
      className="p-2 rounded-full bg-[var(--color-4)] text-[var(--color-1)] hover:bg-[var(--color-5)] transition-all duration-300 hover:scale-110"
      aria-label="Contattami"
    >
      <PaperPlaneTilt size={24} weight="duotone" />
    </a>
  );
};

export default ContactIcon;
