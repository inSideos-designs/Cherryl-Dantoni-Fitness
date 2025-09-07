
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import CTAButton from '../components/CTAButton';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Ready to Begin Your Next Chapter?</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your next chapter is waiting. Let's map out your path to healing, confidence, and balance. Find the best starting point for you below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-brand-tan/20 rounded-lg p-8 text-center flex flex-col items-center justify-between">
            <div>
                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-3">Book Your Free Call</h2>
                <p className="text-gray-700 mb-6">This is the best starting point to find clarity and discover which path is right for you. Let's talk about your goals and how I can help.</p>
            </div>
            <CTAButton text="Book a Break Free Call" toExternal />
          </div>
          <div className="bg-brand-blue/10 rounded-lg p-8 text-center flex flex-col items-center justify-between">
            <div>
                <h2 className="text-2xl font-serif font-bold text-brand-blue mb-3">TRNSFRM Gym Reiki Session</h2>
                <p className="text-gray-700 mb-6">For members of Project TRNSFRM Gym in Old Bridge, NJ. Book your complimentary reset or a private session to support your fitness journey.</p>
            </div>
            <CTAButton text="Book a Gym Reiki Session" toExternal variant="secondary" />
          </div>
        </div>

        <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-blue mb-8">Get In Touch Directly</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                <div className="flex items-center gap-3 text-lg">
                    <MailIcon />
                    <a href="mailto:Cheryl@DantoniWellness.com" className="hover:text-brand-tan transition-colors">Cheryl@DantoniWellness.com</a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                    <PhoneIcon />
                    <a href="tel:7324875163" className="hover:text-brand-tan transition-colors">(732) 487-5163</a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                    <LocationMarkerIcon />
                    <span>Monmouth County, NJ + Virtual</span>
                </div>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
