import React from 'react';
import Card from 'react-animated-3d-card';
import AnimatedTitle from "./AnimatedTitle";

const Example = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: '20px',
        
      }}
    >
      <div>
        <AnimatedTitle
          title="<b>A</b><b>r</b><b>t</b><b>i</b><b>s</b><b>t</b>"
          containerClass="mt-5 !text-white text-center z-30 bottom-20"
        />
      </div>
      
      {/* Desktop Card - Hidden on mobile */}
      <div className="hidden sm:block">
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
          onClick={scrollToFooter}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/582/701/non_2x/coming-soon-background-illustration-template-design-free-vector.jpg"
            alt="Revealing Soon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              width: '100%',
              textAlign: 'center',
              color: '#ff5722',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Book Now
          </div>
        </Card>
      </div>

      {/* Mobile Card - Shown only on mobile */}
      <div className="block sm:hidden w-full max-w-[320px]">
        <div
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: '250px',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
          }}
          onClick={scrollToFooter}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/582/701/non_2x/coming-soon-background-illustration-template-design-free-vector.jpg"
            alt="Revealing Soon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              width: '100%',
              textAlign: 'center',
              color: '#ff5722',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;