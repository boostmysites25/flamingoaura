import ItodoImage from "../../../elements/itodo-img";
import imageone from "../../../../assets/images/sectionaboutcompany.webp";
function SectionAboutCompany1() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
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
                        <img src={imageone} alt="aboutcompanyimage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Welcome to Flamingo</h2>
                    <p>
                      At Flamingo, we are dedicated to revolutionizing
                      technology through innovative and intelligent digital
                      solutions. Founded by a team of passionate professionals,
                      we recognized the immense potential of AI, web
                      development, and mobile applications to drive business
                      success. Over the years, we have grown from a startup to a
                      trusted industry leader, continuously adapting to
                      technological advancements. Today, we specialize in
                      AI-driven solutions, web and mobile development, and
                      custom software services, empowering businesses with
                      cutting-edge innovations.
                    </p>
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

export default SectionAboutCompany1;
