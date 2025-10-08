import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";
// import logo from "../../../assets/images/Logo/logo.png";
function Header1() {
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
              <Link to="/" className="logo-header">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="header-logo-main"
                  style={{ height: "5rem", width: "3.9rem" }}
                />
              </Link>
              {/* NAV Toggle Button */}
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

              <div className="header-nav navbar-collapse collapse d-flex justify-content-end collapse ">
                <ul className=" nav navbar-nav ">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to="/" onClick={() => setIsActive(false)}>Home</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/services" ? "active" : ""
                    }
                  >
                    <NavLink to="/services" onClick={() => setIsActive(false)}>Services</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/about-us" ? "active" : ""
                    }
                  >
                    <NavLink to="/about-us" onClick={() => setIsActive(false)}>About us</NavLink>
                  </li>

                  <li
                    className={
                      location.pathname === "/contact-us" ? "active" : ""
                    }
                  >
                    <NavLink to="/contact-us" onClick={() => setIsActive(false)}>Contact Us</NavLink>
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

export default Header1;
