import { useLocation } from "react-router-dom";
import { lazy, useRef } from "react";
import ContactForm from "../app/landingPage/components/ContactForm";
import JoinHappyCustomers from "../app/components/JoinHappyCustomers";
import WhatsAppButton from "../app/elements/WhatsAppButton";
const LandingHeader = lazy(() =>
  import("../app/sections/common/LandingHeader")
);
const Section = lazy(() => import("../app/landingPage/components/Section"));
const SectionTwo = lazy(() =>
  import("../app/landingPage/components/SectionTwo")
);
const SectionThree = lazy(() =>
  import("../app/landingPage/components/SectionThree")
);
const SectionFour = lazy(() =>
  import("../app/landingPage/components/SectionFour")
);
const Portfolio = lazy(() => import("../app/sections/common/Portfolio"));
const WhyChooseUs = lazy(() =>
  import("../app/components/WhyChooseUs/WhyChooseUs")
);
const SectionTestimonials3 = lazy(() =>
  import("../app/sections/common/section-testimonials3")
);

const Footer = lazy(() => import("../app/sections/common/footer"));

function RootLandingLayout({ setLoading }) {
  const { pathname } = useLocation();
  const page = pathname.slice(1, pathname.endsWith("/") ? -1 : undefined);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 28,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="page-wraper">
        {
          <LandingHeader
            homeRef={homeRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
            scrollToSection={scrollToSection}
          />
        }

        <div className="page-content">
          <div ref={homeRef}>
            <Section page={page} />
          </div>
          <div ref={aboutRef}>
            <SectionTwo page={page} scrollToSection={scrollToSection} />
          </div>
          <ContactForm setLoading={setLoading} />
          <div ref={servicesRef}>
            <SectionThree page={page} />
          </div>
          <div ref={portfolioRef}>
            <Portfolio page={page} />
          </div>
          <JoinHappyCustomers />

          <WhyChooseUs page={page} />
          <SectionTestimonials3 />
          <div ref={contactRef}>
            <SectionFour setLoading={setLoading} />
          </div>
        </div>

        <Footer />
        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
        
        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
}

export default RootLandingLayout;
