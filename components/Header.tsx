import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavLinks = ({ className }: { className?: string }) => (
  <>
    <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Home</NavLink>
    <NavLink to="/about" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>About</NavLink>
    <NavLink to="/services" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Services</NavLink>
    <NavLink to="/programs" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Programs</NavLink>
    <NavLink to="/reiki-healing" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Reiki</NavLink>
    <NavLink to="/events" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Events</NavLink>
    <NavLink to="/blog" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Blog</NavLink>
    <NavLink to="/contact" className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-brand-primary font-semibold' : 'hover:text-brand-primary'}`}>Contact</NavLink>
  </>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Logo.jpg"
            alt="Dantoni Wellness logo"
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-2 font-medium text-brand-text">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-background pb-4">
          <nav className="flex flex-col items-center space-y-2 font-medium text-brand-text">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
