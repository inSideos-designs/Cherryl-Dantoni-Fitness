
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-dw-blue font-semibold mb-4">
          Ready to Break Free and Thrive?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Your next chapter is waiting. Let’s map out your path to healing, confidence, and balance.
        </p>
        <a 
          href="mailto:Cheryl@DantoniWellness.com"
          className="inline-block bg-dw-blue text-white font-sans font-bold py-4 px-8 rounded-full hover:bg-dw-gold transition-colors duration-300 shadow-xl transform hover:scale-105"
        >
          ➡️ Book Your Free Break Free Call
        </a>
      </div>
    </section>
  );
};

export default CTA;
