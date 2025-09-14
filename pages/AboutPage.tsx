import React from 'react';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">
              Meet Cheryl Dantoni
            </h1>
            <h2 className="text-xl md:text-2xl font-serif text-brand-primary">
              Certified Health Coach & Reiki Practitioner
            </h2>
            <div className="prose prose-lg text-brand-text/90 max-w-none">
              <p>
                After years of people-pleasing, stress, and putting myself last, I discovered the power of holistic health and energy healing.
              </p>
              <p>
                Now I guide women (and men ready for change) to reclaim their health, calm their mind, and reconnect with their spirit through my Health, Mind & Body Method™.
              </p>
              <p className="font-semibold text-brand-text">
                My mission is simple: to help you feel good, live boldly, and thrive.
              </p>
            </div>
            <div className="pt-4">
              <Button to="/contact">Work With Me</Button>
            </div>
          </div>
          <div>
            <img
              src="/IMG_5785.jpg"
              alt="Cheryl Dantoni"
              className="rounded-lg shadow-lg object-cover w-full h-full aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
