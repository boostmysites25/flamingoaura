import toast from "react-hot-toast";
import { companyDetails } from "../../../globals/constants";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SectionFour({ setLoading }) {
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
      {/* <Banner _data={banner} /> */}

      {/* Contact us START */}
      <div
        id="contact"
        className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer "
      >
        <div className="container">
          {/* GOOGLE MAP & CONTACT FORM */}
          <div className="section-content">
            {/* CONTACT FORM*/}
            <div className="col align-content-center">
              <div className="col-lg-10 col-md-12  m-b30">
                <div className="contact-info">
                  {/* TITLE START */}
                  <div className="section-head left">
                    <div className="sx-head-s-title">Contact Us</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title">
                        Let's Bring Your Ideas to Life
                      </h2>
                    </div>
                  </div>
                  {/* TITLE END */}
                  {/* <div className="row sx-contact-form-icon-bx">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-telephone" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Phone
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            {companyDetails.number}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-email-2" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Mail
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            example@gmail.com
                          </a>
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
                   
                  </div> */}
                </div>
              </div>
              <div className="col-lg-10 col-md-12 m-b30">
                <div className="contact-home1-right">
                  <div className="contact-home-1-form sx-bg-light">
                    <h4 className="sx-title">
                      A brief prompt encouraging users to get in touch.
                    </h4>
                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="cons-contact-form2 form-transparent"
                    >
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="name"
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
                          disabled={isSubmitting}
                          type="submit"
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
      {/* <div className="gmap-outline map-grayscle">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.495304446196!2d-122.43885472228101!3d37.74906395235639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e12a1d66d03%3A0xb8c905ae4e81369b!2sQ-Architecture!5e0!3m2!1sen!2sin!4v1623689156327!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
           
          title="itodomap"
        />
      </div> */}
    </>
  );
}

export default SectionFour;
