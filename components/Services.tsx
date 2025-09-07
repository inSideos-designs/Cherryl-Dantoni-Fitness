import React from 'react';

const ServiceCard: React.FC<{ title: string; subtitle?: string; items: string[] }> = ({ title, subtitle, items }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-dw-tan/50 h-full">
    <h3 className="font-serif text-3xl text-dw-blue font-semibold mb-2">✨ {title}</h3>
    {subtitle && <p className="text-lg italic text-dw-gold mb-6">{subtitle}</p>}
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-dw-gold font-bold mr-3 mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section 
        id="services" 
        className="py-20 md:py-32 bg-cover bg-fixed bg-center" 
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1920&auto=format&fit=crop)` }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <ServiceCard
            title="Reiki Energy Healing"
            subtitle="Feel lighter, calmer, and more aligned with single sessions or packages."
            items={[
              "30-Minute Reiki Reset",
              "60-Minute Full Energy Balance",
              "Monthly Memberships"
            ]}
          />
          <ServiceCard
            title="Coaching Programs"
            items={[
              "Break Free & Thrive: A 90-Day Transformation – For moms ready to rediscover themselves",
              "Pause. Reset. Thrive. (4 Weeks) – For women needing a guided fresh start",
              "The Weekly Reset & Monthly Breakthrough Memberships – Ongoing support to keep momentum"
            ]}
          />
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-dw-tan/50 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl text-dw-blue font-semibold mb-2">
            ✨ In-Person & Virtual Sessions
          </h3>
          <p className="text-lg">
            Whether you’re local to Monmouth & Middlesex County, NJ or prefer virtual coaching from home, support is always within reach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
