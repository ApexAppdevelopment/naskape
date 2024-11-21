import React from 'react';
import { Coffee, Leaf, Users } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: 'Artisanal Roasting',
    description: 'We roast our beans in small batches to ensure the perfect flavor profile for each blend.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'We work directly with local farmers to promote sustainable and ethical coffee production.'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Every cup of Nas Kape supports local communities and helps preserve Philippine coffee heritage.'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The Nas Kape Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#8B4513]" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}