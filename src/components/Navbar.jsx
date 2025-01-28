import React from 'react';
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button2 from "./Button2";

const navItems = ["Home", "CONSONITE", "Artist", "Contact Us"];

// Array of music tracks
const musicTracks = [
  "/audio/loop.mp3",
  "/audio/loop1.mp3",
  "/audio/loop2.mp3",
  "/audio/loop3.mp3"
];

const NavBar = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById('Register');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTrack] = useState(() => 
    musicTracks[Math.floor(Math.random() * musicTracks.length)]
  );

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.pause();
      } else {
        audioElementRef.current.play().catch((error) => {
          console.warn("Audio playback failed:", error);
        });
      }
    }
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    setIsMenuOpen(false);
  };

  // Update volume based on scroll position
  useEffect(() => {
    if (audioElementRef.current) {
      const footerSection = document.getElementById('Register');
      if (!footerSection) return;

      const footerPosition = footerSection.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      
      const distanceToFooter = footerPosition - (scrollPosition + windowHeight);
      const maxDistance = footerPosition - windowHeight;
      
      // Calculate volume (0.7 at top, 0.1 at footer)
      const volume = Math.max(
        0.1,
        0.7 - (0.5 * (1 - (distanceToFooter / maxDistance)))
      );
      
      audioElementRef.current.volume = volume;
    }
  }, [currentScrollY]);

  // Initialize audio playback
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = 0.60;
      
      const playAudio = async () => {
        try {
          await audioElementRef.current.play();
        } catch (error) {
          console.warn("Initial autoplay failed, waiting for user interaction:", error);
          
          const handleInteraction = async () => {
            try {
              await audioElementRef.current.play();
              ['click', 'touchstart', 'scroll'].forEach(event => {
                document.removeEventListener(event, handleInteraction);
              });
            } catch (error) {
              console.warn("Audio playback failed after interaction:", error);
            }
          };

          ['click', 'touchstart', 'scroll'].forEach(event => {
            document.addEventListener(event, handleInteraction, { once: true });
          });
        }
      };

      playAudio();

      return () => {
        ['click', 'touchstart', 'scroll'].forEach(event => {
          document.removeEventListener(event, () => {});
        });
      };
    }
  }, []);
  
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Audio playback failed:", error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const AudioControls = () => (
    <button
      onClick={toggleAudioIndicator}
      className="flex items-center space-x-0.5"
      aria-label={isAudioPlaying ? "Pause Audio" : "Play Audio"}
    >
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={clsx("indicator-line", {
            active: isIndicatorActive,
          })}
          style={{
            animationDelay: `${bar * 0.1}s`,
          }}
        />
      ))}
    </button>
  );

  return (
    <div
      ref={navContainerRef}
      className="fixed rounded-2xl inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <audio
        ref={audioElementRef}
        className="hidden"
        src={currentTrack}
        loop
        playsInline
        preload="auto"
        muted={false}
      />
      
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Button2 
              onClick={scrollToFooter}
              id="rt"
              title="a"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="md:hidden flex items-center ml-auto">
              <button 
                onClick={toggleMenu} 
                className="text-2xl text-white"
                aria-label="Toggle Menu"
              >
                &#x22EE;
              </button>
            </div>

            <div
              className={clsx(
                "md:hidden absolute top-16 left-0 w-full bg-black text-white p-4 font-zentry transition-all duration-300",
                {
                  "block": isMenuOpen,
                  "hidden": !isMenuOpen,
                }
              )}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="py-2 flex items-center justify-between">
                <span className="text-white" onClick={toggleAudioIndicator}>Audio Controls</span>
                <AudioControls />
              </div>
            </div>

            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn font-zentry"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="ml-10 sm:flex hidden">
              <AudioControls />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;