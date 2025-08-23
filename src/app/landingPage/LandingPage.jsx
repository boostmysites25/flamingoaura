import React from "react";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Portfolio from "../sections/common/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import JoinHappyCustomers from "../components/JoinHappyCustomers";

const LandingPage = ({ page }) => {
  return (
    <>
      <Section page={page} />
      <SectionTwo page={page} />
      <SectionThree page={page} />
      <Portfolio page={page} />
      <JoinHappyCustomers />
      <WhyChooseUs page={page} />
    </>
  );
};

export default LandingPage;
