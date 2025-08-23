import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Thankyou from "../app/Thankyou";
const LandingPage = lazy(() => import("../app/landingPage/LandingPage"));
const ContactUsPage = lazy(() =>
  import("../app/components/contactus/contact-us")
);
const Home1Page = lazy(() => import("../app/components/home/index"));
const AboutUsPage = lazy(() => import("../app/components/company/about-us"));
const ServicesPage = lazy(() =>
  import("../app/components/IT solutions/services/services")
);

function AppRoutes({ setLoading }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1Page />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/contact-us"
          element={<ContactUsPage setLoading={setLoading} />}
        />
        <Route
          path="/web-development"
          element={<LandingPage page={"web-development"} />}
        />
        <Route
          path="/app-development"
          element={<LandingPage page={"app-development"} />}
        />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
