import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-brand-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
    </svg>
);

const HomePage: React.FC = () => {
    return (
        <div className="space-y-24 md:space-y-32">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] flex items-center text-white">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img src="https://picsum.photos/1920/1280?image=1011" alt="Woman meditating peacefully outdoors" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Heal. Release. Thrive.</h1>
                    <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">Mind, Body & Spirit Coaching + Reiki Healing for Women Ready for Their Next Chapter</p>
                    <div className="mt-8">
                        <Button to="/contact">Book a Session</Button>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="container mx-auto px-6 text-center">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-brand-text">Emotional Eating Recovery</h3>
                        <p className="mt-2 text-brand-text/80">Break free from stress-driven habits and reconnect with your body’s natural wisdom.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mb-4">
                             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-brand-text">Reiki Healing & Energy Work</h3>
                        <p className="mt-2 text-brand-text/80">Reset your mind and body with Reiki, sound therapy, and Tibetan cranial massage.</p>
                    </div>
                    <div className="flex flex-col items-center">
                         <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197"></path></svg>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-brand-text">Accountability & Memberships</h3>
                        <p className="mt-2 text-brand-text/80">Stay consistent with coaching and support designed for lasting results.</p>
                    </div>
                </div>
            </section>

            {/* Collaboration Highlight */}
            <section className="bg-brand-secondary/30">
                <div className="container mx-auto px-6 py-12 text-center">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-brand-accent">
                        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-text">Now offering Reiki sessions at Project TRNSFRM Gym in Old Bridge, NJ.</h2>
                        <div className="mt-6">
                            <Button to="/services#trnsfrm" variant="secondary">View TRNSFRM Offerings</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-6">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Clients Are Saying</h2>
                 <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-accent">
                        <QuoteIcon />
                        <p className="mt-4 text-brand-text/90 italic">"Working with Cheryl has been life-changing. I feel more connected to myself and have finally broken free from old patterns."</p>
                        <p className="mt-6 font-semibold text-brand-text">- Jessica M.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-accent">
                        <QuoteIcon />
                        <p className="mt-4 text-brand-text/90 italic">"The Reiki sessions are pure magic. I leave feeling lighter, calmer, and more centered every single time. Highly recommend!"</p>
                        <p className="mt-6 font-semibold text-brand-text">- Sarah P.</p>
                    </div>
                 </div>
            </section>

            {/* Lead Magnet */}
            <section className="bg-brand-primary text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Start Your Journey with a Free Energy Reset Ritual</h2>
                    <p className="mt-4 max-w-xl mx-auto">Download your free guide to begin clearing your energy and find your inner calm today.</p>
                    <div className="mt-8">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-brand-primary hover:bg-gray-100 focus:ring-white">
                            Download Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
