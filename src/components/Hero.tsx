import React from 'react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white z-10">
        <img 
          src="https://scontent.fmnl24-1.fna.fbcdn.net/v/t39.30808-6/231041958_113891490944704_7334650568579847126_n.png?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_4dLQkItiJcQ7kNvgE9_CD_&_nc_zt=23&_nc_ht=scontent.fmnl24-1.fna&_nc_gid=AvPcq_Bn4b6fj3Y_0CIeLe5&oh=00_AYArwwOW6RZ3fFg9czKxV1EIzWdfGh-TXyzf4kGEfu0DuQ&oe=67451556" 
          alt="Nas Kape Logo" 
          className="w-32 h-32 mx-auto mb-8 rounded-full"
        />
        <h1 className="text-5xl font-bold mb-4">Nas Kape</h1>
        <p className="text-xl max-w-2xl mx-auto">Experience the rich heritage of Philippine coffee</p>
      </div>
    </header>
  );
}