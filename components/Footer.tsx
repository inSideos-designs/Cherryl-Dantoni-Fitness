import React from 'react';
import Logo from './Logo';

const LocationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const SocialIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2}></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={2}></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"></line>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-dw-dark text-dw-off-white/80">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
             <Logo className="h-28 w-auto filter brightness-0 invert" />
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
             <h4 className="font-serif text-xl text-white mb-2">Contact Information</h4>
             <div className="flex items-center space-x-3">
                <LocationIcon className="w-5 h-5 text-dw-tan" />
                <span>Monmouth County, NJ + Virtual</span>
             </div>
             <a href="mailto:Cheryl@DantoniWellness.com" className="flex items-center space-x-3 hover:text-dw-gold transition-colors">
                <MailIcon className="w-5 h-5 text-dw-tan" />
                <span>Cheryl@DantoniWellness.com</span>
             </a>
             <a href="tel:732-487-5163" className="flex items-center space-x-3 hover:text-dw-gold transition-colors">
                <PhoneIcon className="w-5 h-5 text-dw-tan" />
                <span>(732) 487-5163</span>
             </a>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="font-serif text-xl text-white mb-2">Connect With Me</h4>
            <a href="#" className="flex items-center space-x-3 hover:text-dw-gold transition-colors" target="_blank" rel="noopener noreferrer">
              <SocialIcon className="w-5 h-5 text-dw-tan" />
              <span>@dantoniwellness</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dantoni Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
