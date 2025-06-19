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
      className="flex items-center text-left gap-1 w-full hover:opacity-80 transition-all duration-300 group"
    >
      {label !== 'Gaige McMichael' && (
        <Image
          src={src}
          alt={label}
          width={size}
          height={size}
          className={"cursor-pointer group-hover:opacity-80"}
        />
      )}
      <span className="relative group-hover:opacity-80 w-full">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white-primary transition-all duration-300 group-hover:w-full"></span>
      </span>
    </button>
    
  );
};

export default ScrollLinkButton;
