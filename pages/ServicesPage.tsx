
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { SERVICES_DATA } from '../constants';
import type { Service, ServiceCategory } from '../types';
import CTAButton from '../components/CTAButton';

const ServiceCard: React.FC<{service: Service}> = ({ service }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-yellow">
        <h4 className="text-xl font-bold text-brand-blue mb-2">{service.title}</h4>
        <p className="text-gray-600">{service.description}</p>
        {service.subServices && (
            <ul className="mt-4 space-y-3 pl-4 list-disc list-inside text-gray-600">
                {service.subServices.map((sub, index) => (
                    <li key={index}><strong>{sub.title}:</strong> {sub.description}</li>
                ))}
            </ul>
        )}
    </div>
);

const ServiceCategorySection: React.FC<{category: ServiceCategory}> = ({ category }) => (
    <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`md:order-${category.step % 2 === 0 ? 2 : 1}`}>
                <div className="mb-4">
                    <span className="text-brand-tan font-bold">Step {category.step}</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue">{category.name}</h2>
                </div>
                <p className="text-xl italic text-gray-600 mb-6">{category.title}</p>
                <div className="bg-brand-yellow/20 border-l-4 border-brand-yellow p-4 rounded-r-lg mb-6">
                    <p><strong className="text-brand-blue">✨ Best fit for you if:</strong> {category.bestFit}</p>
                </div>
                <div className="space-y-4">
                    {category.services.map((service, index) => <ServiceCard key={index} service={service} />)}
                </div>
            </div>
            <div className={`md:order-${category.step % 2 === 0 ? 1 : 2}`}>
                <img src={category.image} alt={category.name} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
        </div>
    </section>
);

const TrnsfrmSection: React.FC = () => (
    <section className="bg-brand-blue text-white rounded-lg p-10 mt-10">
        <h3 className="text-3xl font-serif font-bold text-center text-brand-yellow mb-6">Partnership: Project TRNSFRM Gym</h3>
        <p className="text-center max-w-3xl mx-auto mb-8 text-brand-sand">
            I offer private Reiki sessions in a dedicated wellness space at Project TRNSFRM Gym. These sessions are designed to complement your fitness journey — supporting stress relief, recovery, and emotional balance.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-brand-blue/50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Free 30-min Reiki Reset</h4>
                <p>Exclusive for new gym members.</p>
            </div>
            <div className="bg-brand-blue/50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Private Reiki Sessions</h4>
                <p>30-min or 60-min sessions available.</p>
            </div>
            <div className="bg-brand-blue/50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Discounted Packages</h4>
                <p>Special rates for TRNSFRM members.</p>
            </div>
        </div>
        <div className="text-center mt-8">
            <CTAButton text="Book a TRNSFRM Gym Session" toExternal />
        </div>
    </section>
);

const ServicesPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-blue mb-4">Services & Programs</h1>
        <p className="text-lg text-gray-600">
          Your journey isn't random. It follows a proven 3-step system designed to calm your mind, restore your energy, and help you create lasting change. No matter which path you choose, you'll move through the Heal → Release → Thrive system toward transformation.
        </p>
      </div>

      {SERVICES_DATA.map(category => <ServiceCategorySection key={category.step} category={category} />)}
      
      <TrnsfrmSection />

    </PageWrapper>
  );
};

export default ServicesPage;
