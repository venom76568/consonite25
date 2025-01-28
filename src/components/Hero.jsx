import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState } from "react";
import poster from "../assets/56.jpg";
import Button from "./Button";
import he from "../assets/hero-2.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById("Register");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const nextVdRef = useRef(null);
  const mainVideoRef = useRef(null);

  const handleCanPlay = () => {
    setVideoReady(true);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current?.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-0 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-0 opacity-0 transition-all duration-500 ease-in hover:scale-0 hover:opacity-100">
              <video
                src={he}
                loop
                muted
                playsInline
                poster={poster}
                id="current-video"
                className="size-64 origin-center scale-0 object-cover object-center"
                onCanPlay={handleCanPlay}
              />
            </div>
          </div>

          <video
            ref={nextVdRef}
            src={he}
            loop
            muted
            playsInline
            poster={poster}
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onCanPlay={handleCanPlay}
          />
          
          {/* Main background video with poster */}
          <div className="absolute left-0 top-0 size-full">
            <img 
              src={poster} 
              alt="Concert poster" 
              className={`absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-500 ${
                videoReady ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <video
              ref={mainVideoRef}
              src={he}
              autoPlay
              loop
              muted
              playsInline
              poster={poster}
              className={`absolute left-0 top-0 size-full object-cover object-center transition-opacity duration-500 ${
                videoReady ? 'opacity-100' : 'opacity-0'
              }`}
              onCanPlay={handleCanPlay}
            />
          </div>
        </div>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-[#dc143c]">
              co<b>n</b>so
              <span className="text-white">
                <b>n</b>ITE
              </span>
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Get ready for an unforgettable night of live music and energy –
              <br />
              grab your tickets now!
            </p>
            <Button
              title="Register"
              onClick={scrollToFooter}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;