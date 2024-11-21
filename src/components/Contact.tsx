import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-[#2C1810] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Our Cafe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
              alt="Mt. Makiling View" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p>45C8+PQP, San Antonio<br />Santo Tomas City, Batangas<br />Philippines</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p>Daily: 7:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p>+63 936 610 4039</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p>naskape01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}