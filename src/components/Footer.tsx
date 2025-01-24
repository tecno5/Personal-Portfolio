"use client";

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yash-r-rao/',
      icon: 'linkedin'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/yash.r.rao/',
      icon: 'instagram'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/tecno5',
      icon: 'github'
    }
  ];

  return (
    <footer className="relative mt-20">
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="w-full"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative bg-white border-t border-neutral-100 bg-neutral-50/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg mb-6 text-neutral-800">
              Let's create something amazing together.
            </h2>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
                  aria-label={link.name}
                >
                  <img 
                    src={`/icons/${link.icon}.svg`} 
                    alt={`${link.name} icon`} 
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} Yash Rao. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 