import {
  ourlandingServices,
} from "../../../globals/constants";
import backgroundimage from "../../../assets/images/whychooseusbackground.webp";

function SectionThree({ page }) {
  let styleForCard = {
    display: "flex",
    flexDirection: "column",
    minHeight: "185px",
    // maxHeight: "250px",
    justifyContent: "space-between",
  };
  const services =
    page === "web-development"
      ? ourlandingServices.webServices
      : ourlandingServices.appServices;
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-contain bg-no-repet"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">What I Bring to the Table</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row justify-content-center g-col-6">
                {/* Block one */}
                {services.map((obj) => (
                  <div
                    key={obj.heading}
                    className="col-lg-6 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-icon-bx-1">
                      <div
                        className="sx-icon-box-wraper mi"
                        style={{ ...styleForCard }}
                      >
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary img-item">
                            <img src={obj.image} alt="icon" width={50} />
                          </span>
                          <h4 className="sx-tilte">{obj.heading}</h4>
                          <p className="">{obj.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
