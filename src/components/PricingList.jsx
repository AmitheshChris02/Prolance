import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap items-stretch">
      {pricing.map((plan, i) => (
        <div
          key={plan.id}
          className="w-[19rem] max-lg:w-full p-px bg-n-6 rounded-[2rem] lg:flex-1 hover:bg-conic-gradient transition-colors duration-300"
        >
          <div className="flex flex-col h-full px-6 bg-n-8 rounded-[1.9375rem] py-8">
            <h4
              className={`h4 mb-4 pt-8 h-[11rem] whitespace-pre-line ${i === 0 ? "text-color-2" : i === 1 ? "text-color-1" : i === 2 ? "text-color-4" : "text-color-3"
                }`}
            >
              {plan.title}
            </h4>
            <p className="body-2 h-[5.5rem] mb-3 text-n-1/50">
              {plan.description}
            </p>

            <div className="flex items-center justify-center h-[5.5rem] mb-6">
              {plan.price && (
                <>
                  <div className="h-3">₹</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {plan.price}
                  </div>
                </>
              )}
            </div>

            <Button
              className="w-full mb-6"
              href={plan.price ? "#contact" : "mailto:contact@prolancelabs.com"}
              white={false}
            >
              {plan.price ? "Get Started" : "Contact Us"}
            </Button>

            <ul className="flex-1">
              {plan.features.map((feature, j) => (
                <li
                  key={`plan-${i}-feature-${j}`}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img
                    src={check}
                    alt="Check"
                    width={24}
                    height={24}
                    className="pointer-events-none select-none"
                    loading="lazy"
                  />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
