import question from "../../../../assets/images/question.webp";
import question1 from "../../../../assets/images/question1.webp";
import SectionTestimonials3 from "../../common/section-testimonials3";
export function SectionWhyChooseUs2Inner() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-media">
            <div className="sx-ab4-img-outer">
              <div className="sx-ab4-media">
                <img src={question} alt="media" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-content">
            <h2 className="sx-title">Purpose and Goals</h2>
            <p>
              Our primary purpose is to empower businesses and individuals with
              cutting-edge technology that drives efficiency and productivity.
              We believe in harnessing the power of AI and machine learning to
              provide data-driven solutions that enhance decision-making and
              streamline operations. Our goal is to consistently deliver
              high-quality products and services that exceed our clients'
              expectations while maintaining a strong commitment to innovation,
              security, and ethical practices.
            </p>
          </div>
        </div>
      </div>
      <div className="row flex-column-reverse flex-lg-row p-t90">
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-content">
            <h2 className="sx-title">Introduction to the Team</h2>
            <p>
              We are proud to have a diverse and talented team of professionals
              who share a common passion for technology and innovation. Our team
              consists of AI researchers, machine learning engineers, software
              developers, UX/UI designers, and project managers, all working
              collaboratively to bring your ideas to life. Each member of our
              team brings a unique set of skills and experiences, combined with
              a dedication to delivering outstanding results. Together, we
              foster a culture of creativity, critical thinking, and continuous
              learning, ensuring that we remain at the forefront of
              technological advancements.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="sx-about-bx4-media">
            <div className="sx-ab4-img-outer">
              <div className="sx-ab4-media">
                <img src={question1} alt="media" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SectionWhyChooseUs2() {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx4-content-wrap p-b70">
              <SectionWhyChooseUs2Inner />
            </div>
            {/*testimonial section */}
            <SectionTestimonials3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs2;
