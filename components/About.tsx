import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
              alt="Cheryl Dantoni" 
              className="rounded-lg shadow-2xl object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-dw-blue font-semibold mb-4">
              Meet Cheryl Dantoni
            </h2>
            <p className="font-serif text-2xl text-dw-gold mb-6">— The Mind, Body & Spirit Guide</p>
            <div className="space-y-4 text-lg text-dw-dark max-w-2xl mx-auto md:mx-0">
              <p>
                I know firsthand what it feels like to put everyone else first while losing yourself in the process. After years of people-pleasing, emotional eating, and health challenges, I discovered a way to break free.
              </p>
              <p>
                Now, as a Certified Health Coach, Reiki Practitioner, and Empowerment Speaker, I help women in their 40s and beyond rediscover confidence, balance, and purpose. Whether through energy healing, mindful nutrition, or accountability coaching, my mission is simple: to guide you to <span className="font-bold text-dw-blue">Heal.</span> <span className="font-bold text-dw-gold">Release.</span> <span className="font-bold text-dw-tan">Thrive.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
