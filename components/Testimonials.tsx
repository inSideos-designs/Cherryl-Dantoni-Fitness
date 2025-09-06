import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
    <img src={image} alt={author} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-emerald-200" />
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <h4 className="font-semibold text-lg text-emerald-700">{author}</h4>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Cheryl's program completely transformed my body and my mindset. I'm stronger and more confident than ever before.",
      author: 'Jessica M.',
      image: 'https://picsum.photos/200/200?image=201'
    },
    {
      quote: "The group classes are amazing! The energy is infectious and I've made incredible progress with the support of the community.",
      author: 'David R.',
      image: 'https://picsum.photos/200/200?image=30'
    },
    {
      quote: "The personalized attention to my goals was a game-changer. I finally broke through my plateau and feel incredible.",
      author: 'Sarah L.',
      image: 'https://picsum.photos/200/200?image=431'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;