import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const audio = new Audio('https://firebasestorage.googleapis.com/v0/b/aanp-academy-85c00.appspot.com/o/Sa%20Tasa%20ng%20Kape.mp3?alt=media&token=b66d3c7b-73a0-4d3d-bdf8-9490e826e125');
    audio.play().catch(error => console.log('Audio autoplay failed:', error));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Hero />
      <About />
      <Products />
      <Features />
      <Contact />
    </div>
  );
}

export default App;