import { smallSphere } from "../assets";
import { LeftLine, RightLine } from "./design/Pricing";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" customPaddings="pt-8 lg:pt-8 xl:pt-8 pb-10 lg:pb-16 xl:pb-20">
      <div className="container relative z-2">
        <Heading
          tag={<span className="text-white">Choose Your Package</span>}
          title="Affordable Project Support"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>


      </div>
    </Section>
  );
};

export default Pricing;
