import { companyLogos } from "../constants";
import { srmRmp, easwari } from "../assets";
import Section from "./Section";

const CompanyLogos = ({ className }) => {
  return (
    <Section className={className} crosses customPaddings="py-10 lg:py-12 xl:py-12" noVerticalLines>
      <h5 className="tagline mb-6 text-center text-white">
        Our Leading Clients
      </h5>
      <div className="relative flex overflow-hidden mask-linear-gradient">
        <ul className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the logos to create a seamless loop */}
          {[...companyLogos, ...companyLogos].map((logo, i) => {
            const isLarge = logo === srmRmp || logo === easwari;
            return (
              <li
                key={i}
                className={`flex items-center justify-center flex-shrink-0 ${isLarge ? "w-[18rem]" : "w-[10rem]"
                  } h-[8.5rem] mx-4 md:mx-8`}
              >
                <img
                  src={logo}
                  width={isLarge ? 240 : 134}
                  height={isLarge ? 80 : 28}
                  alt={`Logo-${i}`}
                  className={isLarge ? "h-32 w-auto object-contain" : ""}
                  loading="lazy"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default CompanyLogos;
