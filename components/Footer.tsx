import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Cheryl Dantoni Fitness</h3>
            <p className="text-gray-400">Your partner in strength and personal transformation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Programs</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            {/* Social media icons would go here */}
            <p className="text-gray-400">Stay connected on social media for tips and updates.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cheryl Dantoni Fitness. All Rights Reserved.</p>
          <span style={{display:'none'}}>made by insideos-designs</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
