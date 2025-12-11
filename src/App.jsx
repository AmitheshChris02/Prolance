import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { gradient } from "./assets";
import { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LazyLoadComponent from "./components/LazyLoadComponent";

const Benefits = lazy(() => import("./components/Benefits"));
const Collaboration = lazy(() => import("./components/Collaboration"));
const Contact = lazy(() => import("./components/Contact"));
const Pricing = lazy(() => import("./components/Pricing"));
const Roadmap = lazy(() => import("./components/Roadmap"));
const Services = lazy(() => import("./components/Services"));
const CompanyLogos = lazy(() => import("./components/CompanyLogos"));

const App = () => {
  const { pathname } = useLocation();
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600;

      if (window.scrollY > 600 && !isBottom) {
        setShowGradient(true);
      } else {
        setShowGradient(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <div
          className={`fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${showGradient ? "opacity-70" : "opacity-0"
            }`}
        >
          <img
            src={gradient}
            alt="Gradient"
            className="w-full h-full object-cover"
          />
        </div>
        <Header />
        <Hero />

        <LazyLoadComponent className="min-h-[40rem] scroll-mt-[6rem]" id="services">
          <Services />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[30rem] scroll-mt-[6rem]" id="domains">
          <Roadmap />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[50rem] scroll-mt-[6rem]" id="pricing">
          <Pricing />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[40rem] scroll-mt-[6rem]" id="referrals">
          <Collaboration />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[30rem]">
          <Benefits />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[10rem] relative z-10 block mb-20 -mt-10 pt-12">
          <CompanyLogos className="block" />
        </LazyLoadComponent>

        <LazyLoadComponent className="min-h-[40rem] scroll-mt-[6rem]" id="contact">
          <Contact />
        </LazyLoadComponent>

        <Footer />
      </div>
      <FloatingWhatsApp />
      <ButtonGradient />
    </>
  );
};

export default App;
