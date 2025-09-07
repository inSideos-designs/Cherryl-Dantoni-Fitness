
import React from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


const Method: React.FC = () => {
  const pathways = [
    {
      title: "Emotional Eating Recovery",
      description: "Heal your relationship with food, release unhealthy cycles, and build confidence."
    },
    {
      title: "Reiki Healing Sessions",
      description: "Experience deep relaxation, stress relief, and emotional balance with energy work."
    },
    {
      title: "Accountability Coaching",
      description: "Stay consistent with your goals through weekly or monthly check-ins."
    }
  ];

  return (
    <section id="method" className="py-20 md:py-32 bg-dw-off-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-dw-blue font-semibold mb-4">
          The Health, Mind & Body Method
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          My signature framework is built on 3 powerful pathways:
        </p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-dw-gold transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                 <div className="bg-dw-tan text-white rounded-full h-12 w-12 flex items-center justify-center font-serif text-2xl font-bold">{index + 1}</div>
              </div>
              <h3 className="font-serif text-2xl text-dw-blue font-semibold mb-3">{pathway.title}</h3>
              <p>{pathway.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg max-w-3xl mx-auto italic">
          This isn’t a one-size-fits-all approach — it’s a method designed to support your unique journey into your next chapter.
        </p>
      </div>
    </section>
  );
};

export default Method;
