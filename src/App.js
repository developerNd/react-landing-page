import React from 'react';
import { Hero, Clients, ReverseFunnel, Agenda, Bonuses, Pricing, FAQ } from './components';

function App() {
  return (
    <div className="App relative px-[10px] pb-32">
      <Hero />        
      <Clients />
      <ReverseFunnel />
      <Agenda />
      <Bonuses />
      <Pricing />
      <FAQ />
      
      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] py-3 px-3 z-50">
        <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-2">
          {/* Left Side - Price and Deadline */}
          <div className="flex flex-col items-start">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <p className="text-2xl sm:text-4xl font-bold text-green-600">₹99</p>
              <span className="line-through text-red-500 text-lg sm:text-2xl font-semibold">₹999</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Deadline Dec 3, 2025</p>
          </div>
          
          {/* Empty spacer */}
          <div className="hidden md:block flex-1"></div>
          
          {/* Right Side - CTA Button with Bonuses below */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:mr-32">
            <div className="relative">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-lg px-6 sm:px-14 py-2 sm:py-3 rounded-lg relative transition transform hover:scale-105 shadow-lg overflow-hidden">
                <span className="relative z-10">ENROLL NOW</span>
                <span className="absolute inset-0 -skew-x-12 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </button>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 sm:px-3 py-1 rounded-full font-bold animate-pulse z-20">
                10 Seats Left
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-700">+ Unbelievable Bonuses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;