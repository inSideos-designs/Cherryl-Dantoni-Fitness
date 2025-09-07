
import React from 'react';
import CTAButton from '../components/CTAButton';
import PageWrapper from '../components/PageWrapper';
import { Page } from '../types';

const HeroSection = () => (
  <div className="relative bg-brand-tan text-white text-center py-20 md:py-32 rounded-lg overflow-hidden">
     <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/homehero/1200/800')` }}
     ></div>
     <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">The Next Chapter Starts With You</h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-brand-offwhite">
        I help women (and men, with a focus on moms 40+) release stress, heal emotional blocks, and reclaim their energy with my proven Health, Mind & Body Method.
      </p>
      <CTAButton toExternal text="Book Your Break Free Call Today" size="lg" />
    </div>
  </div>
);

const MethodSection = () => (
    <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">The Health, Mind & Body Method™</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Your journey isn't random. It follows a proven 3-step system designed to calm your mind, restore your energy, and help you create lasting change.</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl font-serif font-semibold text-brand-blue">
            <div className="p-4 rounded-lg">Heal</div>
            <div className="text-brand-tan text-3xl">→</div>
            <div className="p-4 rounded-lg">Release</div>
            <div className="text-brand-tan text-3xl">→</div>
            <div className="p-4 rounded-lg">Thrive</div>
        </div>
        <div className="mt-12">
            <CTAButton to={Page.Services} text="Explore the Method" variant="secondary" />
        </div>
    </div>
);


const AboutSection = () => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="order-2 md:order-1">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-4">Meet Cheryl Dantoni</h2>
      <h3 className="text-xl font-semibold text-brand-tan mb-6">Your Mind, Body & Spirit Guide</h3>
      <p className="text-gray-600 mb-4">I know firsthand what it feels like to put everyone else first while losing yourself in the process. After years of people-pleasing, emotional eating, and health challenges, I discovered a way to break free.</p>
      <p className="text-gray-600">Now, as a Certified Health Coach, Reiki Practitioner, and Empowerment Speaker, I help women in their 40s and beyond rediscover confidence, balance, and purpose. My mission is simple: to guide you to Heal, Release, and Thrive.</p>
    </div>
    <div className="order-1 md:order-2">
      <img src="/IMG_5785.jpg" alt="Cheryl Dantoni" className="rounded-lg shadow-xl w-full h-auto object-cover" />
    </div>
  </div>
);

const TestimonialSection = () => (
  <div className="bg-brand-sand/50 rounded-lg p-12 text-center">
    <blockquote className="max-w-3xl mx-auto">
      <p className="text-xl md:text-2xl italic text-brand-blue mb-6">"Working with Cheryl helped me stop saying yes to everyone else and finally say yes to myself. I feel lighter, more confident, and more in control of my health."</p>
      <footer className="font-semibold text-gray-600">— Client Testimonial</footer>
    </blockquote>
  </div>
);

const CTASecton = () => (
    <div className="text-center bg-brand-blue text-white rounded-lg p-12">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Break Free and Thrive?</h2>
        <p className="text-lg text-brand-sand mb-8 max-w-2xl mx-auto">Your next chapter is waiting. Let's map out your path to healing, confidence, and balance.</p>
        <CTAButton toExternal text="Book Your Free Break Free Call" />
    </div>
);


const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
      <PageWrapper className="space-y-24 md:space-y-32">
        <MethodSection />
        <AboutSection />
        <TestimonialSection />
        <CTASecton />
      </PageWrapper>
    </>
  );
};

export default HomePage;
