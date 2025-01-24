"use client";

import { useState } from 'react';
import EmailForm from './EmailForm';

interface MenuLink {
  title: string;
  number: string;
  href: string;
  sublinks?: { title: string; href: string; }[];
}

const menuLinks: MenuLink[] = [
  { title: 'Home', number: '01', href: '/' },
  { title: 'About Me', number: '02', href: '/about' },
  { title: 'Projects', number: '03', href: '#', sublinks: [
    { title: 'Aston Martin F1', href: '/projects/amf1' },
    { title: 'MavGrades', href: '/projects/mavgrades' },
    { title: 'HackUTA', href: '/projects/hackuta' }
  ]},
];

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-700 ${
          isOpen ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#0a0a0a] z-50 transform transition-all duration-700 ease-out h-[90vh] md:h-[60vh] rounded-b-[1.5rem] md:rounded-b-[2.5rem] shadow-2xl ${
          isOpen ? 'translate-y-0 opacity-100 delay-300' : '-translate-y-full opacity-80'
        }`}
      >
        <div className="h-full px-4 md:px-6 py-4 relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xl font-medium text-white">Yash Rao</span>
          </div>

          <nav className="flex flex-col gap-6">
            {menuLinks.map((link) => (
              <div key={link.number}>
                <button
                  onClick={() => {
                    if (link.sublinks) {
                      setActiveSubmenu(activeSubmenu === link.title ? null : link.title);
                    } else {
                      window.location.href = link.href;
                    }
                  }}
                  className="w-full group flex items-center justify-between text-white hover:text-gray-300 transition-all duration-300"
                >
                  <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium">{link.title}</span>
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    {link.sublinks && (
                      <svg 
                        className={`w-4 h-4 transition-transform ${activeSubmenu === link.title ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      ({link.number})
                    </span>
                  </span>
                </button>
                {link.sublinks && (
                  <div className={`absolute left-0 md:left-full top-0 w-full md:w-[300px] px-4 md:pl-12 h-full transition-all duration-300 bg-[#0a0a0a] md:bg-transparent ${
                    activeSubmenu === link.title 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8 pointer-events-none'
                  }`}>
                    <div className="h-full flex items-center">
                      <div>
                        <h3 className="text-sm text-gray-500 mb-6">Featured Projects</h3>
                        <div className="space-y-6">
                          {link.sublinks.map((sublink) => (
                            <a
                              key={sublink.href}
                              href={sublink.href}
                              className="block text-2xl text-gray-400 hover:text-white transition-colors"
                            >
                              {sublink.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="absolute bottom-8 left-0 w-full px-6">
            <div className="mb-6">
              <h3 className="text-gray-500 mb-3 text-sm">Follow me.</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="https://www.instagram.com/yash.r.rao/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/yash-r-rao/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/tecno5"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-500 mb-3 text-sm">Stay connected w/ me.</h3>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={onClose}
        className={`fixed top-4 right-6 z-[60] p-2 transition-all duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </>
  );
} 