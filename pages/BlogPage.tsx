import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRightIcon = () => (
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);

interface BlogPost {
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
}

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, imageUrl, category }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div className="overflow-hidden">
             <img src={imageUrl} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"/>
        </div>
        <div className="p-6">
            <p className="text-brand-primary font-semibold text-sm">{category}</p>
            <h3 className="mt-1 text-xl font-serif font-semibold text-brand-text">{title}</h3>
            <p className="mt-2 text-brand-text/80 line-clamp-3">{excerpt}</p>
            <Link to="#" className="mt-4 inline-flex items-center font-semibold text-brand-primary">
                Read More <ArrowRightIcon />
            </Link>
        </div>
    </div>
);


const BlogPage: React.FC = () => {
    const posts: BlogPost[] = [
        {
            title: "5 Simple Ways to Manage Stress-Induced Eating",
            excerpt: "Stress eating can feel uncontrollable, but it doesn't have to be. Discover five practical and gentle strategies to regain control and nourish your body with intention.",
            imageUrl: "https://picsum.photos/600/400?image=431",
            category: "Emotional Eating"
        },
        {
            title: "What to Expect From Your First Reiki Session",
            excerpt: "Curious about Reiki but not sure where to start? This guide demystifies the experience, from what to wear to what you might feel during and after your session.",
            imageUrl: "https://picsum.photos/600/400?image=355",
            category: "Reiki Healing"
        },
        {
            title: "The Power of a Morning Ritual for a Calmer Day",
            excerpt: "How you start your morning can set the tone for your entire day. Learn how to craft a simple yet powerful morning ritual that promotes mindfulness and reduces anxiety.",
            imageUrl: "https://picsum.photos/600/400?image=326",
            category: "Self-Care"
        },
         {
            title: "Building Resilience: A Guide for Modern Moms",
            excerpt: "Motherhood is a journey of immense joy and significant challenges. This post explores how to build emotional resilience to navigate the ups and downs with grace.",
            imageUrl: "https://picsum.photos/600/400?image=1060",
            category: "Mindset"
        },
        {
            title: "Sound Therapy: Healing Frequencies for Mind and Body",
            excerpt: "Explore the ancient practice of sound healing and how different frequencies can help release tension, balance your energy centers, and promote deep relaxation.",
            imageUrl: "https://picsum.photos/600/400?image=1074",
            category: "Energy Work"
        },
        {
            title: "Why 'Just Do It' Isn't Always the Answer",
            excerpt: "We often hear that motivation is key, but what happens when you just don't feel it? Learn about the importance of self-compassion and small steps in achieving your goals.",
            imageUrl: "https://picsum.photos/600/400?image=1080",
            category: "Coaching"
        }
    ];

    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text">From the Blog</h1>
                    <p className="mt-4 text-lg text-brand-text/80">Educational articles and insights to support you on your wellness journey. Find tips on emotional eating, Reiki, self-care, and more.</p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => <BlogPostCard key={post.title} {...post} />)}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;