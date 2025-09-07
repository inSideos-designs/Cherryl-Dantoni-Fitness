
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import CTAButton from '../components/CTAButton';

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-brand-blue mb-12">My Journey, Your Guide</h1>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <img src="/IMG_5785.jpg" alt="Cheryl Dantoni" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
          <div className="md:col-span-3 space-y-6 text-lg text-gray-700">
            <p className="text-2xl font-serif italic text-brand-tan">"I know firsthand what it feels like to put everyone else first while losing yourself in the process."</p>
            <p>For years, I navigated the challenges of people-pleasing, emotional eating, and various health issues. It felt like I was running on empty, disconnected from my own needs and desires. That struggle became my catalyst for change. I embarked on a journey to break free, not just for myself, but to find a path that could help others too.</p>
            <p>Today, as a Certified Health Coach, Reiki Practitioner, and Empowerment Speaker, I've channeled my experiences into a powerful framework: The Health, Mind & Body Method. My mission is to help women in their 40s and beyond rediscover the confidence, balance, and purpose that's been waiting for them all along.</p>
            <p>This isn't a one-size-fits-all approach. It's a method designed to support your unique journey into your next chapter, guiding you to Heal, Release, and ultimately, Thrive.</p>
          </div>
        </div>

        <div className="mt-24 bg-brand-tan/20 p-10 rounded-lg">
          <h2 className="text-3xl font-serif font-bold text-center text-brand-blue mb-8">Community & Collaboration</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-4">Wellness thrives in community, which is why I collaborate with partners like Project TRNSFRM Gym in Old Bridge, NJ, to make holistic health more accessible.</p>
              <p className="text-gray-700 text-lg">I'm proud to bring Reiki energy healing directly into the heart of fitness, helping members not just train their bodies—but also calm their minds and reset their energy. It's about creating a truly integrated wellness experience.</p>
            </div>
            <div className="text-center">
               <img src="https://picsum.photos/seed/gym/500/300" alt="Project TRNSFRM Gym" className="rounded-lg shadow-md w-full h-auto object-cover mb-4"/>
               <CTAButton toExternal text="Book a TRNSFRM Gym Session" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
