import React from 'react';
import Button from '../components/ui/Button';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-brand-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
);


const ReikiHealingPage: React.FC = () => {
    const benefits = [
        "Profound Stress Relief",
        "Enhanced Mental Clarity",
        "Improved Energy Levels",
        "Emotional Balance & Stability",
        "Supports Natural Healing",
        "Better Sleep Quality"
    ];

    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 space-y-20">
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Discover Reiki & Energy Healing</h1>
                        <div className="mt-6 prose prose-lg text-brand-text/80 max-w-none">
                            <p>Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It's administered by "laying on hands" and is based on the idea that an unseen "life force energy" flows through us and is what causes us to be alive.</p>
                            <p>If one's "life force energy" is low, then we are more likely to get sick or feel stress, and if it is high, we are more capable of being happy and healthy. Our sessions often incorporate sound therapy and Tibetan cranial massage to deepen the healing experience.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/800/600?image=219" alt="Calm healing session with crystals and candles" className="rounded-lg shadow-xl"/>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-text mb-10">Benefits of Healing Sessions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                <CheckIcon />
                                <span className="text-brand-text/90">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-brand-background rounded-lg p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <QuoteIcon />
                        <blockquote className="mt-4 text-2xl font-serif italic text-brand-text">
                            "My first Reiki session with Cheryl was incredible. I walked in feeling heavy and stressed, and left feeling light, peaceful, and completely renewed. It was exactly the reset I needed."
                        </blockquote>
                        <cite className="mt-6 block font-semibold text-brand-text not-italic">- Emily R.</cite>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-text">Ready to Experience the Calm?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">Schedule your session today and take the first step towards a more balanced and centered you.</p>
                    <div className="mt-8">
                        <Button to="/contact">Schedule a Reiki Session</Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ReikiHealingPage;