import React from 'react';
import img from '../assets/image.png'; // Ensure this path is correct or update it to the correct path

const Card = () => {
  return (
    <div className="group perspective-1000 w-full max-w-[288px] sm:w-72">
      <div className="relative aspect-[3/4] w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(10deg)] cursor-pointer">
        {/* Card Content */}
        <div className="absolute inset-0">
          {/* Image Container */}
          <div className="relative h-full w-full overflow-hidden rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <img
                          src={img}
                          alt="Neeraj Shridhar"
                          className="w-full h-full object-cover"
                        />
                        
            </div>
            
          </div>
          <div className="absolute bottom-0 w-full h-1/5 rounded-b-xl shadow-lg">
            <div className="flex h-full items-center justify-center">
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                          <h2 className="text-white text-2xl font-bold opacity-100 text-center mb-1">
                            Neeraj Shridhar
                          </h2>
                          <p className="text-white/80 text-sm text-center">
                            Bombay Vikings
                          </p>
                        </div>
            </div>
          </div>
          {/* Bottom Content */}
          {/* <div className="absolute bottom-0 w-full h-1/5 bg-white rounded-b-xl shadow-lg">
            <div className="flex h-full items-center justify-center">
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                          <h2 className="text-white text-2xl font-bold text-center mb-1">
                            Neeraj Shridhar
                          </h2>
                          <p className="text-white/80 text-sm text-center">
                            Bombay Vikings
                          </p>
                        </div>
            </div>
          </div> */}

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