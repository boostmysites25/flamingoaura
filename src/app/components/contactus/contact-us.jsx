import Banner from "../../sections/common/banner";
import banner from "../../../assets/images/contuctbanner.webp";
import { companyDetails } from "../../../globals/constants";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function ContactUsPage({ setLoading }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setLoading(true);
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      name: companyDetails.name,
      to: companyDetails.email,
      subject: "You have a new message - Flamingo",
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          navigate("/thank-you");
          reset();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <Banner _data={{ img: banner, title: "Contact Us" }} />

      {/* Contact us START */}
      <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
        <div className="container">
          {/* GOOGLE MAP & CONTACT FORM */}
          <div className="section-content">
            {/* CONTACT FORM*/}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12  m-b30">
                <div className="contact-info">
                  {/* TITLE START */}
                  <div className="section-head left">
                    <div className="sx-head-s-title">Contact Us</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title">Connect with us</h2>
                      <p>
                        Ready to elevate your business with innovative software
                        solutions? At Flamingo, we are committed to transforming
                        your vision into reality. Whether you need AI
                        development, custom software, or immersive VR/AR
                        experiences, our team is here to help. Contact us today
                        to schedule a consultation and let’s explore how we can
                        assist you in achieving your goals!
                      </p>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="row sx-contact-form-icon-bx">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-telephone" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <p href="#" className="sx-icon-bx-title-info">
                            Contact Phone
                          </p>
                          <Link
                            to={`tel:${companyDetails.number}`}
                            href="#"
                            className="sx-icon-bx-title"
                          >
                            {companyDetails.number}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-email-2" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <p className="sx-icon-bx-title-info">Contact Mail</p>
                          <Link
                            to={`mailto:${companyDetails.email}`}
                            href="#"
                            className="sx-icon-bx-title"
                          >
                            {companyDetails.email}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-map-location" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Location
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            {companyDetails.address}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 m-b30">
                <div className="contact-home1-right">
                  <div className="contact-home-1-form sx-bg-light">
                    <h4 className="sx-title">Get In Touch</h4>
                    <form
                      className="cons-contact-form2 form-transparent"
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="username"
                          id="name"
                          placeholder="Your Name"
                          {...register("name", {
                            required: "Full name is required",
                            validate: (val) => {
                              if (val.trim() !== "") {
                                return true;
                              } else {
                                return "Full name is required";
                              }
                            },
                          })}
                        />
                        <span className="spin" />
                        <small className="text-danger">
                          {errors.name?.message}
                        </small>
                      </div>
                      <div className="input input-animate">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "Entered email is invalid",
                            },
                          })}
                        />
                        <span className="spin" />
                        <small className="text-danger">
                          {errors.email?.message}
                        </small>
                      </div>
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="phone"
                          id="Phone"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[6-9]\d{9}$/i,
                              message: "Entered phone number is invalid",
                            },
                          })}
                        />
                        <span className="spin" />
                        <small className="text-danger">
                          {errors.phone?.message}
                        </small>
                      </div>
                      <div className="input textarea input-animate">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          {...register("message", {
                            required: "Message is required",
                            validate: (val) => {
                              if (val.trim() !== "") {
                                return true;
                              } else {
                                return "Message is required";
                              }
                            },
                          })}
                        />
                        <span className="spin" />
                        <small className="text-danger">
                          {errors.message?.message}
                        </small>
                      </div>
                      <div className="sx-btn-center text-center p-t10">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="site-button sx-btn-primary icon sx-btn-lg"
                        >
                          <i className="fa  fa-long-arrow-right" />
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us END */}
      <div className="gmap-outline map-grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.6668040301267!2d83.414380!3d18.099210!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcc9b3b93953d%3A0xf27c4f9b64d498c3!2sPlot%2026%2C%20Siva%20Sai%20Nagar%2C%20Vizianagaram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1699986958445!5m2!1sen!2sin&q=18.099210,83.414380"
          style={{ border: 0 }}
          allowFullScreen
          title="location-map"
        />
      </div>
    </>
  );
}

export default ContactUsPage;
