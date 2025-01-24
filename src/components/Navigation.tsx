"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavigationMenu from "./NavigationMenu";
import AnimatedHamburger from "./AnimatedHamburger";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {!isHomePage && (
            <button
              onClick={handleBack}
              className="p-2 -ml-2 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <a 
            href="/"
            className="text-xl font-medium hover:opacity-80 transition-opacity"
          >
            Yash Rao
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <button className="px-6 py-2.5 bg-[#0066FF] text-white text-sm rounded-full font-medium hover:opacity-90 transition-opacity">
            My Resume
          </button>
          <AnimatedHamburger 
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
} 