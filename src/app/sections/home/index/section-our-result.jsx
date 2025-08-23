import ItodoImage from "../../../elements/itodo-img";
import ourresult from "../../../../assets/images/ourresult.webp";
function Sectionourresult() {
  return (
    <>
      <div className="section-full  p-t110 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Focus on Results</h2>
                    {/* <span className="sx-title-2">
    Empowering Innovation Through Software Solutions
  </span> */}
                    <p>
                      At Flamingo, our commitment is to drive measurable success
                      for your business. We take a results-driven approach,
                      ensuring that every project is delivered on time, within
                      budget, and aligned with your strategic goals. Our success
                      is defined by the value our solutions bring—enhancing
                      efficiency, optimizing workflows, and fueling business
                      growth.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={ourresult} alt="our solution" />
                      </div>
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

export default Sectionourresult;
