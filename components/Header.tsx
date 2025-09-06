import React, { useState, useEffect } from 'react';

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 6.75l-1.214 1.214m0 0A8.25 8.25 0 0013.5 3.75h-3a8.25 8.25 0 00-6.286 4.214L3 9.224m16.786 5.562a8.25 8.25 0 01-6.286 4.214h-3a8.25 8.25 0 01-6.286-4.214l-1.214-1.214" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.224l1.214-1.214M18.286 14.786l1.214 1.214" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
    </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <DumbbellIcon />
          <span className="text-2xl font-bold font-serif text-gray-800">Cheryl Dantoni Fitness</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</a>
          <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">Programs</a>
          <a href="#testimonials" className="text-gray-600 hover:text-emerald-600 transition-colors">Success Stories</a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
        </nav>
        <a 
          href="#contact"
          className="hidden md:inline-block bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;