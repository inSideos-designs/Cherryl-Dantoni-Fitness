
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';
import CTAButton from './CTAButton';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Home', path: Page.Home },
  { name: 'Services', path: Page.Services },
  { name: 'About', path: Page.About },
  { name: 'Contact', path: Page.Contact },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#F5CF40',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
  };

  return (
    <header className="bg-brand-blue/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to={Page.Home}>
          <img src="/Logo.jpg" alt="Dantoni Wellness Logo" className="h-14 w-auto" />
        </NavLink>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-white hover:text-brand-yellow transition-colors duration-300 text-lg"
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
            <CTAButton toExternal text="Book a Call" size="sm" />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-blue pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-yellow transition-colors duration-300 text-lg"
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {link.name}
              </NavLink>
            ))}
            <CTAButton toExternal text="Book a Call" size="sm" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
