import ItodoImage from "../../../elements/itodo-img";
import solution from "../../../../assets/images/solution.webp";
import { ourServices } from "../../../../globals/constants";
function Sectionoursolutiion() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div className="wow fadeInDown" data-wow-duration="1000ms">
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Offerings</h2>
                    {/* <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span> */}
                    <p className="mb-5">
                      At Flamingo, we offer a comprehensive range of services
                      designed to meet the needs of various industries. Our
                      offerings include:
                    </p>
                    <div className="row g-3">
                      {ourServices.map((item) => (
                        <div className="col-12 col-md-6 col-lg-4 p-2">
                          <div className="service-item p-3 h-100 rounded d-flex flex-column gap-1">
                            <h6 className="fw-semibold">{item.heading}</h6>
                            <p className="">{item.shortDescription}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sectionoursolutiion;
