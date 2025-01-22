import React from 'react';

const Card = () => {
  return (
    <div className="group perspective-1000 w-full max-w-[288px] sm:w-72">
      <div className="relative aspect-[3/4] w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(10deg)] cursor-pointer">
        {/* Card Content */}
        <div className="absolute inset-0">
          {/* Image Container */}
          <div className="relative h-4/5 w-full overflow-hidden rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600 font-semibold text-base sm:text-lg">Coming Soon</p>
            </div>
          </div>
          
          {/* Bottom Content */}
          <div className="absolute bottom-0 w-full h-1/5 bg-white rounded-b-xl shadow-lg">
            <div className="flex h-full items-center justify-center">
              <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-full font-semibold text-sm sm:text-base
                               transform transition-all duration-300 
                               hover:scale-105 hover:bg-gray-800 
                               active:scale-95">
                Book Now
              </button>
            </div>
          </div>

          {/* 3D Effect Elements */}
          <div className="absolute inset-0 h-full w-full rounded-xl border-2 border-white/10 transition-all duration-500 
                         [transform:translateZ(20px)] group-hover:[transform:translateZ(40px)]" />
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/20 opacity-0 transition-opacity duration-500 
                         group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default Card;