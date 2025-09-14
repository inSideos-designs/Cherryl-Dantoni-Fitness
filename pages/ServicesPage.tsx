import React from 'react';
import Button from '../components/ui/Button';

const ServiceCard: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
        <h3 className="text-xl font-serif font-semibold text-brand-primary">{title}</h3>
        <div className="mt-4 text-brand-text/80 space-y-2">{children}</div>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 space-y-20">
                <header className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Our Services</h1>
                    <p className="mt-4 text-lg text-brand-text/80">Find the right path for your wellness journey, from deep energy healing to transformative coaching.</p>
                </header>

                {/* Reiki & Energy Healing */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">Reiki & Energy Healing</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard title="15-Min Tibetan Cranial Teaser">Perfect pre/post workout reset to clear your mind and energize your body.</ServiceCard>
                        <ServiceCard title="30-Min Reiki Session">Includes Tibetan cranial + sound therapy for a quick but powerful reset.</ServiceCard>
                        <ServiceCard title="60-Min Reiki Session">A deep reset with Reiki, cranial massage, and sound therapy for ultimate relaxation.</ServiceCard>
                        <ServiceCard title="Reiki Membership">Maintain your balance with a monthly membership for two deeply discounted sessions.</ServiceCard>
                    </div>
                    <div className="text-center mt-10">
                        <Button to="/reiki-healing">Book Your Session</Button>
                    </div>
                </section>

                {/* Health Coaching */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">Health Coaching</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <ServiceCard title="Break Free & Thrive: 90-Day Transformation">A long-term, supportive journey to rediscover yourself and build lasting healthy habits.</ServiceCard>
                        <ServiceCard title="Pause. Reset. Thrive: 4-Week Coaching">A quick-start accountability reset with personalized support to get you back on track.</ServiceCard>
                    </div>
                    <div className="text-center mt-10">
                        <Button to="/programs" variant="secondary">Learn More</Button>
                    </div>
                </section>

                {/* Accountability & Memberships */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-center mb-10">Accountability & Memberships</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                         <ServiceCard title="Weekly Reset Membership">Stay on track with 20-minute virtual check-ins designed for consistent progress and support.</ServiceCard>
                         <ServiceCard title="Monthly Breakthrough Membership">Dive deep with a monthly intensive session complemented by weekly support to achieve your goals.</ServiceCard>
                         <ServiceCard title="Thrive Together Add-On">A special program for moms focused on building tools for raising confident, resilient kids.</ServiceCard>
                    </div>
                    <div className="text-center mt-10">
                        <Button to="/contact">Join Memberships</Button>
                    </div>
                </section>

                {/* Project TRNSFRM Section */}
                <section id="trnsfrm" className="!mt-24 pt-16 pb-16 bg-brand-text rounded-lg text-white">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/800/600?image=2" alt="Interior of Project TRNSFRM Gym" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">Reiki & Coaching at Project TRNSFRM Gym</h2>
                            <p className="text-lg font-semibold text-brand-secondary">Old Bridge, NJ</p>
                            <p className="text-white/80">Exclusively for TRNSFRM members, Cheryl brings Reiki + Mind-Body Coaching directly into the gym. Clear your mind before your workout, manage stress, and improve focus with our tailored sessions.</p>
                            <ul className="list-disc list-inside space-y-2 text-white/80">
                                <li>15-Minute Tibetan Cranial Teaser</li>
                                <li>30-Minute Reiki Reset</li>
                                <li>60-Minute Reiki + Healing Session</li>
                                <li>[Coming Soon] Emotional Eating Workshop</li>
                            </ul>
                            <div className="pt-4">
                                <Button to="/contact" variant="secondary">Book Your TRNSFRM Session</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServicesPage;