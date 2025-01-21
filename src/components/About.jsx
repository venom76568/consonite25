import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import pic from "../assets/gallery-1.webp";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcom to CONSO 
        </p>

        <AnimatedTitle
          title="<b>Redefining The B</b><b>oundaries</b> <br />Of H<b>o</b>rizon"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">  
          <p>🎶✨ Brace yourselves for an unforgettable night at Consonite, the grand spectacle on the third day of Consortium, brought to you by the Entrepreneurial Cell, VNIT! This is more than just a concert—it's a celebration of energy, music, and unfiltered vibes that will leave you awestruck. With an electrifying lineup and surprises waiting to be unveiled, Consonite promises to be the heartbeat of Consortium. Let the music take over, the beats resonate, and the night come alive like never before. 🌟 Don’t miss out on this epic night of rhythm and thrill—mark your calendars and get ready to vibe with the crowd. The stage is set, the hype is real—are you? 🔥🎤</p>
          
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
         
        </div>
      </div>
    </div>
  );
};

export default About;
