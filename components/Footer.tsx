import React from 'react';
import { Link } from 'react-router-dom';

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text text-brand-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold">Dantoni Wellness</h2>
            <p className="mt-2 text-sm opacity-90">Heal. Release. Thrive.</p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:opacity-100 opacity-90 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-100 opacity-90 transition-opacity">About</Link></li>
              <li><Link to="/services" className="hover:opacity-100 opacity-90 transition-opacity">Services</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 opacity-90 transition-opacity">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-100 opacity-90 transition-opacity"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-100 opacity-90 transition-opacity"><InstagramIcon /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>cheryl@dantoniwellness.com</li>
              <li>732-487-5163</li>
              <li>Monmouth & Middlesex, NJ</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-background/20 pt-8 text-center text-sm">
          <p className="opacity-80">Disclaimer: This site is for educational purposes only and is not a substitute for medical care.</p>
          <p className="mt-2 opacity-80">&copy; {new Date().getFullYear()} DANTONI WELLNESS LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
