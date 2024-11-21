import React from 'react';
import { ProductCard } from './ProductCard';

const products = [
  { name: 'Barako Blend', description: 'Strong and full-bodied', price: '₱120', image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=500' },
  { name: 'Benguet Arabica', description: 'Smooth with hints of chocolate', price: '₱140', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=500' },
  { name: 'Sagada Mountain Tea', description: 'Unique and aromatic', price: '₱130', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=500' },
  { name: 'Kalinga Robusta', description: 'Bold with earthy notes', price: '₱110', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=500' },
  { name: 'Bukidnon Blend', description: 'Balanced and fruity', price: '₱135', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=500' },
  { name: 'Sulu Royal Coffee', description: 'Rare and exquisite', price: '₱150', image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&q=80&w=500' }
];

export default function Products() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Signature Blends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}