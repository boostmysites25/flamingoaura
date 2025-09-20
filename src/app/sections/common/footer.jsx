import { NavLink } from "react-router-dom";
import { companyDetails } from "../../../globals/constants";
function Footer() {
  return (
    <>
      <footer
        className="site-footer footer-dark"
        style={{ background: "gray" }}
      >
        {/* <div className="sx-f-nl-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h2 className="sx-f-title">
                                    You too join my communities.
                                </h2>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="sx-nl-form">
                                    <form>
                                        <div className="sx-nl-form-inner">
                                            <input type="text" className="sx-nl-form-input" placeholder="infomela.Itodo@gmail.com" />
                                            <button className="sx-nl-form-btn"><i className="flaticon-back-left" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* FOOTER BLOCKES START */}
        <div className="footer-top">
          <div className="container">
            <div className="row ">
              {/* ABOUT COMPANY */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix p-b15">
                    {/* <NavLink to="/index" className="sx-text-primary"> */}
                    <img src="/logo.png" alt="#" width={120} height={80} />
                    {/* </NavLink> */}
                  </div>
                  <p>
                    Empowering growth through innovation and commitment. At
                    Flamingo, we deliver solutions that drive success and build
                    lasting partnerships. Your journey, our expertise.
                  </p>
                  <div className="widget_about-call-section">
                    <div className="sx-f-call-icon">
                      <i className="flaticon-telephone" />
                    </div>
                    <div className="sx-f-call-section">
                      <span>Contact us 24/7</span>
                      <a href={`tel:${companyDetails.number}`}>
                        {companyDetails.number}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* EXPLORE LINKS */}
              {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                <div className="widget widget_services">
                  <h4 className="sx-f-title">Explore Links</h4>
                  <ul>
                    <li>
                      <NavLink to="/services">Our Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/team">Meet Our Team</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">Our Portfolio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact-us">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blogs">News</NavLink>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* USEFUL LINK */}
              {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6 col">
                <div className="widget widget_services">
                  <h4 className="sx-f-title">Useful Links</h4>
                  <ul>
                    <li>
                      <NavLink to="/mission">Mission &amp; Vision</NavLink>
                    </li>
                    <li>
                      <NavLink to="/why-choose-us">Why Choose Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio2">Case Studies</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio/detail">Case Studies V2</NavLink>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* SOLUTIONS */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                <div className="widget widget_info">
                  <h4 className="sx-f-title">Solutions</h4>
                  <ul>
                    <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-phone" />
                      </div>
                      <div className="widget-info-detail">
                        <a href={`tel:${companyDetails.number}`}>
                          {companyDetails.number}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-email" />
                      </div>
                      <div className="widget-info-detail">
                        <p>{companyDetails.email}</p>
                      </div>
                    </li>
                    <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-maps-and-flags" />
                      </div>
                      <div className="widget-info-detail">
                        <p>{companyDetails.address}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* CONTACT US */}
              {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget_insta-gallery">
                  <h4 className="sx-f-title">Instagram</h4>
                  <ul>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic1.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic2.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic3.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic4.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic5.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="sx-f-insta">
                        <NavLink to="/gallery">
                          <ItodoImage src="images/f-insta/pic6.jpg" alt="#" />
                          <i className="feather-instagram" />
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="sx-f-bottom-section">
          <div className="sx-f-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="flaticon-facebook" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="flaticon-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="flaticon-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="flaticon-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sx-f-copy">
            © {new Date().getFullYear()} by{" "}
            <NavLink to="/index">Flamingo.</NavLink> All rights reserved.
          </div>
        </div>
        {/* FOOTER COPYRIGHT */}
      </footer>
    </>
  );
}

export default Footer;
