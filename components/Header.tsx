
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#hero" aria-label="Back to top">
          <Logo className="h-20 w-auto" />
        </a>
        <a 
          href="mailto:Cheryl@DantoniWellness.com"
          className="hidden md:inline-block bg-dw-blue text-white font-sans font-bold py-3 px-6 rounded-full hover:bg-dw-gold transition-colors duration-300 shadow-lg"
        >
          Book Your Break Free Call
        </a>
      </nav>
    </header>
  );
};

export default Header;
