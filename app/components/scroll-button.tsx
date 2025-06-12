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
      className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-white hover:bg-opacity-10 transition-all duration-200 rounded"
    >
      {label !== 'Gaige McMichael' && (
        <Image
          src={src}
          alt={label}
          width={size}
          height={size}
          className="pointer-events-none"
        />
      )}
      <span className="w-full">{label}</span>
    </button>
  );
};

export default ScrollLinkButton;
