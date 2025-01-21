import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const post = "/img/post.png"; // Image path
  
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Adding scroll animation for the paragraph text
    gsap.from(".scroll-paragraph", {
      scrollTrigger: {
        trigger: ".scroll-paragraph",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
        toggleActions: "play none none none", // Starts the animation on scroll
      },
      opacity: 0,
      y: 50, // Initial position slightly below
      duration: 1.5, // Duration of the animation
      ease: "power4.out", // Easing for smooth animation
    });

    // Adding scroll animation for the image
    gsap.from(".scroll-image", {
      scrollTrigger: {
        trigger: ".scroll-image",
        start: "top 80%", // Starts when image reaches 80% from the top of viewport
        end: "top 30%",   // Ends when image reaches 30% from the top of viewport
        scrub: 0.5,
        toggleActions: "play none none none", // Starts the animation on scroll
      },
      opacity: 0,         // Initially invisible
      y: 50,              // Starts from 50px below
      scale: 0.9,         // Starts with a slightly smaller scale
      duration: 1.5,      // Duration of the animation
      ease: "power4.out", // Easing for smooth animation
    });
  });

  return (
    <div id="about" className="min-h-screen overflow-x-hidden w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[30px]">
          Welcome to CONSO
        </p>

        <AnimatedTitle
          title="<b>Redefining The B</b><b>oundaries</b> <br />Of H<b>o</b>rizon"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          {/* Any additional text content can go here */}
        </div>
      </div>

      {/* New Section with Image on Left and Text on Right */}
      <div className="flex flex-col md:flex-row overflow-x-auto items-center justify-between mt-16 px-4 space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <img
            src={post}
            alt="About Section Image"
            className="w-full max-h-[400px] object-contain rounded-lg scroll-image" // Adjusting image height with max-h-[400px] and object-contain to avoid cropping
          />
        </div>

        {/* Text Container with Right Margin */}
        <div className="md:w-1/2 text-center md:text-left flex justify-center items-center h-full">
          <p className="text-lg md:text-xl font-robert-medium text-black scroll-paragraph mr-6"> {/* Added right margin with mr-6 */}
            🎶✨ Brace yourselves for an unforgettable night at Consonite, the
            grand spectacle on the third day of Consortium, brought to you by
            the Entrepreneurial Cell, VNIT! This is more than just a concert—it's
            a celebration of energy, music, and unfiltered vibes that will leave
            you awestruck. With an electrifying lineup and surprises waiting to
            be unveiled, Consonite promises to be the heartbeat of Consortium. Let
            the music take over, the beats resonate, and the night come alive like
            never before. 🌟 Don’t miss out on this epic night of rhythm and thrill—mark your
            calendars and get ready to vibe with the crowd. The stage is set, the
            hype is real—are you? 🔥🎤!
          </p>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};

export default About;
