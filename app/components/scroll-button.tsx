'use client';

import Image from 'next/image';

type ScrollLinkButtonProps = {
  id: string;
  label: string;
  src: string;
  size: number;
  onClick?: () => void;
};

const ScrollLinkButton = ({ id, label, src, size, onClick }: ScrollLinkButtonProps) => {
  const handleClick = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex gap-1 items-center hover:opacity-80 transition-all duration-300 group"
    >
      <Image
        src={src}
        alt={label}
        width={size}
        height={size}
        className={`cursor-pointer group-hover:opacity-80 ${label == 'Gaige McMichael' ? 'hidden' : ''}`}
      />
      <span className="relative group-hover:opacity-80">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white-primary transition-all duration-300 group-hover:w-full"></span>
      </span>
    </button>
  );
};

export default ScrollLinkButton;
