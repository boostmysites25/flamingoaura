import { NavLink } from "react-router-dom";
import iconone from "../../../../assets/images/png/teamexpert.png";
import icontwo from "../../../../assets/images/png/digitaltransformatin.png";
import iconthree from "../../../../assets/images/png/equality.png";
function SectionServices1() {
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-our-services-outer sx-bg-light"
        // style={{ background: "red" }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Who We Are?</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Your Partner in Innovation and Digital Transformation
              </h2>
            </div>
            <p>
              At Flamingo, we are more than just a software company; we are your
              partners in innovation and digital transformation. Established
              with the vision of empowering businesses through technology, we
              pride ourselves on delivering cutting-edge solutions that meet the
              unique challenges faced by organizations across various
              industries. we firmly believe that long-term client partnerships
              are nurtured through solutions that go beyond typical
              transactional relationships. The services we provide are designed
              with foresight to grow and evolve alongside your business,
              ensuring a solid foundation for sustained success. We uphold
              unparalleled standards of quality, security, and integrity, driven
              by our unwavering commitment to excellence. We service businesses
              of all sizes, from enthusiastic startups seeking to disrupt
              conventional industries to established firms aiming to strengthen
              their innovative technological capabilities.
            </p>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {/* Block one */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={iconone} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">
                          A Passionate Team of Experts
                        </h4>
                        <p>
                          Our team is comprised of highly skilled developers,
                          designers, and strategists who are passionate about
                          technology and committed to excellence. With diverse
                          backgrounds and expertise, we work collaboratively to
                          bring your ideas to life, ensuring that every solution
                          we create is tailored to your specific needs. We
                          understand that every business is unique, which is why
                          we take the time to listen and comprehend your goals,
                          enabling us to deliver solutions that truly make a
                          difference.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Two */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={icontwo} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">
                          Driving Digital Transformation
                        </h4>
                        <p>
                          In an era where technology is rapidly evolving,
                          businesses must adapt to stay competitive. At
                          Flamingo, we specialize in harnessing the power of
                          innovation to drive digital transformation. Our
                          approach focuses on integrating advanced technologies
                          into your operations, empowering you to enhance
                          productivity, streamline processes, and achieve
                          sustainable growth. We believe that technology should
                          not only solve problems but also create new
                          opportunities.
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle active"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Block Three */}
                <div
                  className="col-lg-6 col-md-6 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-service-bx-1">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-service-bx-icon scale-in-center">
                        <span className="sx-text-primary">
                          <img src={iconthree} alt="logo" width={110} />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="sx-tilte">Our Commitment to Quality</h4>
                        <p>
                          Quality is at the heart of everything we do. We adhere
                          to rigorous standards and best practices, ensuring
                          that our solutions are not only functional but also
                          scalable and secure. Our commitment to excellence is
                          reflected in our processes, from the initial concept
                          to the final delivery, ensuring that we exceed your
                          expectations at every stage. Our solutions
                        </p>
                        <div className="sx-center-btn">
                          <NavLink
                            to="/about-us"
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </NavLink>
                        </div>
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

export default SectionServices1;
