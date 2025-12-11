import Heading from "./Heading";
import Section from "./Section";
import { curve, finalyear, uiux } from "../assets";
import { Gradient } from "./design/Services";

import Typewriter from "typewriter-effect";

const Services = () => {
  return (
    <Section id="services" crosses customPaddings className="pt-[2rem] lg:pt-[4rem] pb-10 lg:pb-16 xl:pb-20">
      <div className="container">
        <Heading
          title={
            <>
              Project Support made for <br />
              <span className="inline-block relative font-semibold">
                <Typewriter
                  options={{
                    strings: [
                      "Students",
                      "Professionals",
                      "Entrepreneurs",
                      "Enterprises",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                  loading="lazy"
                />
              </span>
            </>
          }
          text={<span className="text-white">Prolance unlocks your potential with expert guidance and support.</span>}
        />
        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] bg-n-6 rounded-3xl overflow-hidden hover:bg-conic-gradient transition-colors duration-300">
              <div className="absolute inset-[1px] bg-n-7 rounded-[1.45rem] overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={uiux}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="UI/UX Design"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">UI/UX Design</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Professional Mobile and Web UI design services to make your project stand out.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[39rem] bg-n-6 rounded-3xl overflow-hidden hover:bg-conic-gradient transition-colors duration-300">
              <div className="absolute inset-[1px] bg-n-7 rounded-[1.45rem] overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={finalyear}
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="Final Year Project"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Final Year Project</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    End-to-end guidance for your capstone project, from topic selection to final execution and report generation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
