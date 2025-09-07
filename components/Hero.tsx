import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-center text-white -mt-24 pt-24"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1473187983305-f615314a4869?q=80&w=1920&auto=format&fit=crop)` }}
      ></div>
      <div className="absolute inset-0 bg-dw-blue opacity-60"></div>
      
      <div className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-down">
          ✨ The Next Chapter Starts With You ✨
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          I help women (and men, with a focus on moms 40+) release stress, heal emotional blocks, and reclaim their energy with my proven Health, Mind & Body Method.
        </p>
        <a 
          href="mailto:Cheryl@DantoniWellness.com"
          className="inline-block bg-dw-gold text-dw-dark font-sans font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-xl transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          ➡️ Book Your Break Free Call Today
        </a>
      </div>
    </section>
  );
};

export default Hero;
