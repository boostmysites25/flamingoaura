import { NavLink, useLocation } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";
// import logo from "../../../assets/images/Logo/logo.png";
function LandingHeader({
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
  scrollToSection,
}) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  function toggleNavClass() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    loadScript("js/mobilenav.js");
  });

  return (
    <>
      <header
        className={
          "header-style1 site-header  mobile-sider-drawer-menu " +
          (isActive ? "active" : "")
        }
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <div className="logo-header">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="header-logo-main"
                  style={{ height: "5rem", width: "3.9rem" }}
                />
              </div>
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                className="navbar-toggler collapsed"
                onClick={toggleNavClass}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>

              {/* MAIN NAVIGATION */}
              <div className="header-nav navbar-collapse collapse d-flex justify-content-end collapse ">
                <ul className=" nav navbar-nav ">
                  <li
                    className={location.pathname === "/" ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      scrollToSection(homeRef); // Call the scroll function
                    }}
                  >
                    <NavLink>Home</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/services" ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      scrollToSection(servicesRef); // Call the scroll function
                    }}
                  >
                    <NavLink>Services</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/about-us" ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      scrollToSection(aboutRef); // Call the scroll function
                    }}
                  >
                    <NavLink>About us</NavLink>
                  </li>

                  <li
                    className={
                      location.pathname === "//contact-us" ? "active" : ""
                    }
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      scrollToSection(contactRef); // Call the scroll function
                    }}
                  >
                    <NavLink>Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingHeader;
