import React from 'react';
import Button from '../components/ui/Button';

const MailIcon = () => (
    <svg className="w-6 h-6 mr-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const PhoneIcon = () => (
    <svg className="w-6 h-6 mr-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);
const MapPinIcon = () => (
    <svg className="w-6 h-6 mr-3 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Let's Connect</h1>
            <p className="mt-4 text-lg text-brand-text/80">Ready to take the next step? Reach out to book a session or ask any questions. I look forward to hearing from you.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-brand-background p-8 rounded-lg">
                <h2 className="text-2xl font-serif font-semibold text-brand-text mb-6">Send a Message</h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-text">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-text">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-brand-text">Message</label>
                        <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary" required></textarea>
                    </div>
                    <div>
                        <Button type="submit" variant="primary">Send Message</Button>
                    </div>
                </form>
            </div>
            <div className="space-y-8">
                <h2 className="text-2xl font-serif font-semibold text-brand-text">Direct Info</h2>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <MailIcon />
                        <a href="mailto:cheryl@dantoniwellness.com" className="text-brand-text/90 hover:text-brand-primary transition">cheryl@dantoniwellness.com</a>
                    </div>
                    <div className="flex items-center">
                        <PhoneIcon />
                         <a href="tel:732-487-5163" className="text-brand-text/90 hover:text-brand-primary transition">732-487-5163</a>
                    </div>
                    <div className="flex items-center">
                        <MapPinIcon />
                        <span className="text-brand-text/90">Monmouth & Middlesex County, NJ + Virtual</span>
                    </div>
                </div>
                 <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-serif font-semibold text-brand-text">Book Your Free Clarity Call</h3>
                    <p className="mt-2 text-brand-text/80">A complimentary call is the perfect way to see if we're a good fit. Let's explore your goals and how I can help you achieve them.</p>
                    <div className="mt-4">
                        <Button to="#">Book Call Now</Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;