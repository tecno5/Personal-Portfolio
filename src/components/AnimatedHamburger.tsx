"use client";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AnimatedHamburger({ isOpen, onClick }: AnimatedHamburgerProps) {
  return (
    <button
      className="p-2 relative w-10 h-10 group"
      onClick={onClick}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-200 ease-in-out"
           style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
        <div className={`w-6 h-0.5 bg-current transition-all duration-200 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-[0.3rem]' : ''
        }`} />
        <div className={`w-6 h-0.5 bg-current my-1.5 transition-opacity duration-200 ${
          isOpen ? 'opacity-0' : ''
        }`} />
        <div className={`w-6 h-0.5 bg-current transition-all duration-200 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-[0.3rem]' : ''
        }`} />
      </div>
    </button>
  );
} 