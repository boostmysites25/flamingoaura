import React from "react";
import "./WhyChooseUs.css";

const webContent = [
  {
    img: require("../../../assets/images/png/Personalized Service.png"),
    title: "Personalized Service",
  },
  {
    img: require("../../../assets/images/png/Transparent Communication.png"),
    title: "Transparent Communication",
  },
  {
    img: require("../../../assets/images/png/Quick Turnaround Times.png"),
    title: "Quick Turnaround Times",
  },
  {
    img: require("../../../assets/images/png/Competitive Pricing.png"),
    title: "Competitive Pricing",
  },
];

const mobileContent = [
  {
    img: require("../../../assets/images/png/Custom Solutions.png"),
    title: "Custom Solutions",
  },
  {
    img: require("../../../assets/images/png/Agile Methodologies.png"),
    title: "Agile Methodologies",
  },
  {
    img: require("../../../assets/images/png/Transparent Communication.png"),
    title: "Transparent Communication",
  },
  {
    img: require("../../../assets/images/png/Rapid Development Cycles.png"),
    title: "Rapid Development Cycles",
  },
  {
    img: require("../../../assets/images/png/Proven Track Record with Satisfied Clients.png"),
    title: "Proven Track Record with Satisfied Clients",
  },
];

const WhyChooseUs = ({ page }) => {
  const content = page === "web-development" ? webContent : mobileContent;
  return (
    <div className="section-full p-t110 p-b80">
      <div className="container">
        <div className="large-title-block sx-all-white">
          <div className="row">
            <div className="">
              <div className="section-head left">
                <div className="sx-head-s-title">Why Choose Me</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title" style={{ color: "#fff" }}>
                    {page === "web-development"
                      ? "Why Clients Love Working With Me"
                      : "Why Clients Choose My App Development Services"}
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-6">
                  <div className=" large-title-info">
                      <p>Nunc tempor ultrices iaculis. Cras suscipit odio ut neque interdum, sed faucibus lorem feugiat.
                          tincidunt tellus quis iaculis interdum. Donec a lobortis arcu. Fusce viverra a dolor quis tincidunt. Pellentesque vitae diam sodales nisl dapibus finibus.
                      </p>
                  </div>
            </div> */}
          </div>
        </div>
        <div className="section-content">
          <div className="wcu_cards">
            {content.map((item, index) => (
              <div className="card_item" key={index}>
                <div className="card_item_inner">
                  <div className="card_item_icon">
                     <img
loading="lazy"                      src={item.img}
                      alt={item.title}
                      width="200"
                      height="200"
                      style={{ width: "4rem" }}
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h6>{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
