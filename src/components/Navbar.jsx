import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { BackgroundLines } from "@/components/ui/background-lines";


import Button2 from "./Button2";

const navItems = ["Home", "CONSONITE", "Artist", "Contact Us"];

const NavBar = () => {
  const scrollToFooter = () => {
    const footerSection = document.getElementById('Register');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isAudioPlaying, setIsAudioPlaying] = useState(true); // Set to true for autoplay
  const [isIndicatorActive, setIsIndicatorActive] = useState(true); // Active on autoplay
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage mobile menu state

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = 0.60; // Set volume %
    }
  }, []);

  useEffect(() => {
    const audio = audioElementRef.current;

    if (isAudioPlaying) {
      audio.play().catch((error) => {
        console.warn("Audio autoplay failed: ", error);
      });
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

  return (

    <div
      ref={navContainerRef}
      className="fixed rounded-2xl inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7" >
            <Button2 
              onClick={scrollToFooter}
              id="rt"
              title="a"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center ml-auto">
              <button onClick={toggleMenu} className="text-2xl text-white">
                &#x22EE; {/* This is a '⋮' character representing the three dots */}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
              className={clsx("md:hidden absolute top-16 left-0 w-full bg-black text-white p-4 font-zentry transition-all duration-300", {
                "block": isMenuOpen,
                "hidden": !isMenuOpen,
              })}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)} // Close the menu after click
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Menu Items */}
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

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 sm:flex hidden"
            >
              <audio
                autoPlay
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
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
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
