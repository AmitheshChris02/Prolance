import { grid } from "../assets";
import { roadmap } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="domains" customPaddings="py-10 lg:py-16 xl:py-20 pb-4 lg:pb-4 xl:pb-4">
    <div className="container md:pb-10">
      <Heading tag={<span className="text-white">Explore Our Domains</span>} title="Project Domains We Consult" />

      <div className="relative grid gap-6 md:grid-cols-4 md:gap-4 md:pb-10">
        {roadmap.map((item) => {
          return (
            <div
              className="md:flex p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient transition-colors duration-300"
              key={item.id}
            >
              <div className="relative p-4 bg-n-8 rounded-[2.4375rem] overflow-hidden">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full pointer-events-none select-none"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                    loading="lazy"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-8">
                    <Tagline>{item.date}</Tagline>
                  </div>

                  <div className="mb-10 -my-10 -mx-4">
                    <img
                      className={`w-full ${item.status !== "done" && "animate-pulse"
                        } pointer-events-none select-none`}
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
