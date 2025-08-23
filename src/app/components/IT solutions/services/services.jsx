import Banner from "../../../sections/common/banner";
import SectionWhyChooseUs1 from "../../../sections/home/index/section-why-choose-us1";
import SectionAboutCompany1 from "../../../sections/home/index/section-about-company1";
import SectionVideo2 from "../../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
import banner from "../../../../assets/images/servicesbanner.webp";

function ServicesPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Banner _data={{ img: banner, title: "Services" }} />
      <SectionWhyChooseUs1 />
      <SectionAboutCompany1 />
      <SectionVideo2 />
      <SectionWhyChooseUs4 />
      {/* <SectionClients2 /> */}
    </>
  );
}

export default ServicesPage;
