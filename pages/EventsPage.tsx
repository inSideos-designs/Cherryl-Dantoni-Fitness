import React from 'react';
import Button from '../components/ui/Button';

interface EventCardProps {
    title: string;
    description: string;
    imageUrl: string;
    status?: 'Upcoming' | 'Coming Soon';
}

const EventCard: React.FC<EventCardProps> = ({ title, description, imageUrl, status = 'Upcoming' }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-6 flex flex-col flex-grow">
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 self-start ${status === 'Upcoming' ? 'bg-brand-secondary text-brand-text' : 'bg-gray-200 text-gray-600'}`}>
                {status}
            </span>
            <h3 className="text-2xl font-serif font-semibold text-brand-text">{title}</h3>
            <p className="mt-2 text-brand-text/80 flex-grow">{description}</p>
            <div className="mt-6">
                <Button to="/contact">RSVP Now</Button>
            </div>
        </div>
    </div>
);


const EventsPage: React.FC = () => {
    const events: EventCardProps[] = [
        {
            title: 'Coffee & Clarity',
            description: 'Join us for an informal morning meetup to connect with like-minded individuals, share your goals, and find clarity for the week ahead.',
            imageUrl: 'https://picsum.photos/600/400?image=30',
        },
        {
            title: 'Good Vibes & Growth Hour',
            description: 'An online session dedicated to raising your vibration through guided meditation, journaling, and group energy work.',
            imageUrl: 'https://picsum.photos/600/400?image=17',
        },
        {
            title: 'Break Free & Rebalance Workshop',
            description: 'A deep-dive workshop focused on understanding your emotional triggers and learning practical tools to find balance in your daily life.',
            imageUrl: 'https://picsum.photos/600/400?image=21',
        },
        {
            title: 'Emotional Eating Workshop',
            description: 'Learn to distinguish emotional hunger from physical hunger and develop healthier coping mechanisms. (Workshop at TRNSFRM)',
            imageUrl: 'https://picsum.photos/600/400?image=119',
            status: 'Coming Soon'
        }
    ];
    
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">Events & Workshops</h1>
                    <p className="mt-4 text-lg text-brand-text/80">Connect, learn, and grow with our community. Join us for our upcoming events designed to inspire and empower you.</p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map(event => <EventCard key={event.title} {...event} />)}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;