import React from 'react';
import Card from './Card3d';
import AnimatedTitle from "./AnimatedTitle";
import img from '../assets/image.png';

const Example = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById('Register');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="artist"
      className="flex flex-col items-center justify-center gap-20 bg-black py-top-20 py-bottom-10"
    >
      <div>
        <AnimatedTitle
          title="<b>A</b><b>r</b><b>t</b><b>i</b><b>s</b><b>t</b>"
          containerClass="mt-5 !text-white text-center z-30 bottom-20"
        />
      </div>
      
      {/* Desktop Card - Hidden on mobile */}
      <div className="hidden sm:block relative" onClick={scrollToFooter}>
        <Card
          style={{
            backgroundColor: '#fff',
            width: '450px',
            height: '300px',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
          }}
        >
          <img
            src={img}
            alt="Neeraj Shridhar"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <h2 className="text-white text-2xl font-bold text-center mb-1">
              Neeraj Shridhar
            </h2>
            <p className="text-white/80 text-sm text-center">
              Bombay Vikings
            </p>
          </div>
        </Card>
      </div>

      {/* Mobile Card - Shown only on mobile */}
      <div className="block sm:hidden w-full max-w-[320px]">
        <div
          className="relative"
          onClick={scrollToFooter}
        >
          <div
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: '350px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              cursor: 'pointer',
            }}
          >
            <img
              src={img}
              alt="Neeraj Shridhar"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
            >
              <h2 className="text-white text-xl font-bold text-center mb-1">
                Neeraj Shridhar
              </h2>
              <p className="text-white/80 text-sm text-center">
                Bombay Vikings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;