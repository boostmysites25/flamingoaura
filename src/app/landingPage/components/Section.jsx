// import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import bannerone from "../../../assets/images/webdevelopmentbanner.webp";
import bannertwo from "../../../assets/images/webdevelopmentbannertwo.webp";
import appbannerone from "../../../assets/images/appdevelopmentbanner.webp";
import apppbannertwo from "../../../assets/images/appdevelopementtwo.webp";
register();

function Section({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay position-relative"
            style={{
              backgroundImage: `url(${
                isWebDevelopment ? bannertwo : appbannerone
              })`,
              // zIndex: 1,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary position-relative" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are Focused
                </span>
                <h2 className="sx-bnr-1-large-title">
                  {isWebDevelopment
                    ? "Crafting Visually Stunning and User-Friendly Websites"
                    : "Innovative Apps That Elevate Your Business"}
                </h2>
                <div className="sx-bnr-1-info">
                  {isWebDevelopment
                    ? "Transforming your vision into an engaging online presence that captivates and converts"
                    : "Transforming your ideas into high-performance mobile and web applications"}
                </div>
                <div className="sx-bnr-readmore">
                  <a
                    href="#contact"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">Flamingo</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${
                isWebDevelopment ? bannerone : apppbannertwo
              })`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are the finest
                </span>
                <h2 className="sx-bnr-1-large-title">
                  {isWebDevelopment
                    ? "Crafting Visually Stunning and User-Friendly Websites"
                    : "Innovative Apps That Elevate Your Business"}
                </h2>
                <div className="sx-bnr-1-info">
                  {isWebDevelopment
                    ? "Transforming your vision into an engaging online presence that captivates and converts"
                    : "Transforming your ideas into high-performance mobile and web applications"}
                </div>
                <div className="sx-bnr-readmore">
                  <a
                    href="#contact"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </a>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">Flamingo</h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </>
  );
}

export default Section;
