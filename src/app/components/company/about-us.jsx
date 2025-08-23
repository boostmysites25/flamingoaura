import Banner from "../../sections/common/banner";
import SectionAboutCompany1 from "../../sections/home/index/section-about-company1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
// import SectionClients2 from "../../sections/home/index2/section-clients2";
// import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import banner from "../../../assets/images/aboutusbanner.webp";
import Sectionoursolutiion from "../../sections/home/index/section-our-solution";
import SectionTestimonials3 from "../../sections/common/section-testimonials3";
function AboutUsPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Banner _data={{ img: banner, title: "About Us" }} />
      <SectionAboutCompany1 />
      {/* <SectionServices1 /> */}
      <SectionVideo2 />
      <SectionWhyChooseUs4 />
      <Sectionoursolutiion />
      <SectionTestimonials3/>
      {/* <SectionClients2 /> */}
    </>
  );
}

export default AboutUsPage;
