
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-dw-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-3xl md:text-4xl italic leading-relaxed mb-6">
            “Working with Cheryl helped me stop saying yes to everyone else and finally say yes to myself. I feel lighter, more confident, and more in control of my health.”
          </p>
          <p className="font-sans font-bold text-dw-gold uppercase tracking-wider">
            – Client Testimonial
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
