import React from 'react';
import {
  Browser,
  Code,
  Palette,
  PenNib,
  Laptop,
  Cube,
  Storefront,
  MagicWand,
  Database,
  LightbulbFilament,
} from '@phosphor-icons/react';

const elements = [
  { Icon: Browser, top: '10%', left: '5%' },
  { Icon: Code, top: '20%', right: '10%' },
  { Icon: Palette, bottom: '15%', left: '15%' },
  { Icon: PenNib, top: '40%', left: '10%' },
  { Icon: Laptop, bottom: '30%', right: '20%' },
  { Icon: Cube, top: '60%', right: '5%' },
  { Icon: Storefront, bottom: '10%', left: '40%' },
  { Icon: MagicWand, top: '5%', right: '30%' },
  { Icon: Database, bottom: '40%', left: '5%' },
  { Icon: LightbulbFilament, top: '30%', left: '30%' },
];

const FloatingElements = ({ activeElement }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((el, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-300 ${
            index === activeElement
              ? 'text-[var(--color-5)]'
              : 'text-[var(--color-2)] dark:text-[var(--color-3)]'
          }`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
          }}
        >
          <el.Icon size={54} weight="duotone" />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
