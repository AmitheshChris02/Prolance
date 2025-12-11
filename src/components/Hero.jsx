import Section from "./Section";
import { curve, smallSphere, stars } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[2rem] -mt-[6.5rem] pb-10 lg:pb-12 xl:pb-16"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>

        <div className="absolute top-0 left-0 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="absolute top-0 right-0 w-[60rem] translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[60rem] -translate-x-1/2 translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[60rem] translate-x-1/2 translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="absolute top-1/2 left-0 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="absolute top-1/2 right-0 w-[60rem] translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full animate-pulse pointer-events-none select-none"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] mt-4">
          <div className="flex justify-center mb-0">
            <img
              src={smallSphere}
              className="relative z-1 pointer-events-none select-none"
              width={455}
              height={455}
              alt="Sphere"
            />
          </div>
          <h1 className="h2 mb-6 -mt-24">
            End-to-End Support for {` `}
            <br />
            <span className="inline-block relative">
              <span className="text-n-1">
                <Typewriter
                  options={{
                    strings: [
                      "Final Year Projects",
                      "Conference",
                      "Research Papers",
                      "Journal",
                      "Final Year Projects",
                      "UI/UX Design",
                      ""
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Trusted by 20+ Students & Professionals. Get complete project guidance and support until final review.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="#contact" purple>
              GET YOUR PROJECT
            </Button>

          </div>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* Robot image block removed completely as per design requirements */}




        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
