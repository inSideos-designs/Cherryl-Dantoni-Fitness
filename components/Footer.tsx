
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';
import { MailIcon, PhoneIcon, LocationMarkerIcon, AtSymbolIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src="/Logo.jpg" alt="Dantoni Wellness Logo" className="h-12 w-auto mb-4 mx-auto md:mx-0" />
            <p className="text-brand-sand">Your journey to heal, release, and thrive starts here.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to={Page.Home} className="hover:text-brand-yellow transition-colors">Home</NavLink></li>
              <li><NavLink to={Page.Services} className="hover:text-brand-yellow transition-colors">Services</NavLink></li>
              <li><NavLink to={Page.About} className="hover:text-brand-yellow transition-colors">About</NavLink></li>
              <li><NavLink to={Page.Contact} className="hover:text-brand-yellow transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-yellow">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3"><LocationMarkerIcon /><p>Monmouth County, NJ + Virtual</p></li>
              <li className="flex items-center justify-center md:justify-start gap-3"><MailIcon /><a href="mailto:Cheryl@DantoniWellness.com" className="hover:text-brand-yellow transition-colors">Cheryl@DantoniWellness.com</a></li>
              <li className="flex items-center justify-center md:justify-start gap-3"><PhoneIcon /><a href="tel:7324875163" className="hover:text-brand-yellow transition-colors">(732) 487-5163</a></li>
              <li className="flex items-center justify-center md:justify-start gap-3"><AtSymbolIcon /><p>@dantoniwellness</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-sand/30 pt-6 text-center text-brand-sand text-sm">
          <p>&copy; {new Date().getFullYear()} Dantoni Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
