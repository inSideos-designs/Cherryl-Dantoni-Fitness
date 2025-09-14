import React from 'react';
import Button from '../components/ui/Button';

const ProgramCard: React.FC<{ title: string; subtitle: string; description: string; ctaText: string; ctaLink: string; imageUrl: string; reverse?: boolean; }> = ({ title, subtitle, description, ctaText, ctaLink, imageUrl, reverse = false }) => (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={` ${reverse ? 'md:col-start-2' : ''}`}>
            <img src={imageUrl} alt={title} className="rounded-lg shadow-xl object-cover w-full h-full aspect-[4/3]" />
        </div>
        <div className={`space-y-4 ${reverse ? 'md:col-start-1' : ''}`}>
            <p className="text-brand-primary font-semibold">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-text">{title}</h2>
            <p className="text-brand-text/80 prose-lg">{description}</p>
            <div className="pt-4">
                <Button to={ctaLink}>{ctaText}</Button>
            </div>
        </div>
    </div>
);

const ProgramsPage: React.FC = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-6 space-y-20">
                <header className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Coaching Programs</h1>
                    <p className="mt-4 text-lg text-brand-text/80">Dedicated programs designed to guide you through transformative change with personalized support and accountability.</p>
                </header>

                <ProgramCard
                    title="Break Free & Thrive"
                    subtitle="90-Day Transformation"
                    description="This is a long-term reset for moms and women ready to rediscover themselves. We'll work together to dismantle limiting beliefs, build sustainable habits, and unlock a life filled with energy, purpose, and joy."
                    ctaText="Book a Clarity Call"
                    ctaLink="/contact"
                    imageUrl="https://picsum.photos/800/600?image=1078"
                />

                <ProgramCard
                    title="Pause. Reset. Thrive."
                    subtitle="4-Week Coaching"
                    description="A quick-start accountability reset for when you feel stuck. This intensive 4-week program provides the personalized support and clear action steps you need to break through a plateau and regain your momentum."
                    ctaText="Start Now"
                    ctaLink="/contact"
                    imageUrl="https://picsum.photos/800/600?image=292"
                    reverse={true}
                />
            </div>
        </div>
    );
};

export default ProgramsPage;