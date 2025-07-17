import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur bg-black/30 shadow-md transition-all duration-300 text-white font-bold`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-2">
          <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="32" fill="#FFD700" />
  <path d="M32 12c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 20c7.732 0 14 6.268 14 14v2a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2v-2c0-7.732 6.268-14 14-14z" fill="#fff" fillOpacity="0.7"/>
</svg>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 rounded text-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Phone number on desktop */}
        <div className="hidden md:block">
          <span className="flex items-center font-semibold text-yellow-400"><img src="/11539812.png" alt="Phone" className="h-5 w-5 mr-2 inline" />+91 8619960378</span>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center px-2 py-1 border border-gray-700 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 px-4 pb-4 pt-2 border-t border-gray-800 animate-fadeInDown">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded text-white hover:bg-blue-600 hover:text-white transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <span className="font-semibold text-yellow-400 pt-2">+91 8619960378</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
