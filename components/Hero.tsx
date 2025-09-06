import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img src="https://picsum.photos/1600/1200?image=274" alt="Person running outdoors" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 text-center p-6">
        <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4 drop-shadow-lg">
          Unleash Your Strongest Self
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Personalized training programs designed to help you crush your goals and transform your life. Welcome to Cheryl Dantoni Fitness.
        </p>
        <a 
          href="#services"
          className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-transform hover:scale-105 shadow-lg"
        >
          Explore Our Programs
        </a>
      </div>
    </section>
  );
};

export default Hero;