const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    designation: "CEO of TechNext Solutions",
    review:
      "Flamingo revolutionized our approach to data analytics. Their AI-driven solutions have significantly enhanced our operational efficiency and provided us with invaluable insights. Their team is highly professional, responsive, and dedicated to innovation.",
  },
  {
    id: 2,
    name: "Mark Davis",
    designation: "COO of E-Commerce Hub",
    review:
      "Partnering with Flamingo for custom web and mobile app development was a game-changer. Their creativity, technical expertise, and commitment to delivering high-quality solutions on time were exceptional. The app has boosted our customer engagement remarkably.",
  },
  {
    id: 3,
    name: "David Thompson",
    designation: "HR Director at HealthCare Innovators",
    review:
      "Working with Flamingo on immersive VR solutions has transformed our training programs. Their realistic VR simulations have helped us deliver more engaging and effective learning experiences, improving employee skill development.",
  },
];

function SectionTestimonials3() {
  return (
    <>
      <div className="section-full p-t30 p-b80 sx-bg-white sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            {/*testimonial section */}
            <div className="sx-testimonial-bx-2  m-b30">
              {/* TITLE START */}
              <div className="section-head center">
                <div className="sx-head-s-title">Our Testimonials</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title">What Clients Say?</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="owl-carousel testimonial-section-3 owl-btn-vertical-center">
                {/*One block*/}
                {testimonials.map((item) => (
                  <div key={item.id} className="item">
                    <div className="testimonial-3  hover-animation-1 sx-bg-light">
                      <div className="testimonial-detail">
                        <div className="testimonial-user-info">
                          <span className="testimonial-position">
                            {item.designation}
                          </span>
                          <h4 className="testimonial-name">{item.name}</h4>
                        </div>
                      </div>
                      <div className="testimonial-text">
                        <p>{item.review}</p>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-quote sx-text-primary">
                          <i className="flaticon-quote" />
                        </div>
                        <ul className="sx-rating-st1">
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                        </ul>
                        <span className="sx-review-count">(5 Reviews)</span>
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

export default SectionTestimonials3;
