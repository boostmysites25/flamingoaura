import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";
// import banner from "../../../assets/images/servicesbanner.jpg";
function Banner({ _data }) {
  return (
    <>
      <div
        className="full-landing-image sx-bnr-inr overlay-wraper  bg-top-center"
        style={{ backgroundImage: `url(${_data.img})` }}
      >
        <div className="overlay-main bg-white opacity-0" />
        <div className="container">
          <div className="sx-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <span className="sx-bnr-sm-title">we are Dedicated</span>
                <h2 className="sx-title">{_data.title}</h2>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="sx-breadcrumb breadcrumb-style-2">
                  <li>
                    <NavLink to="/index">Home</NavLink>
                  </li>
                  <li>{_data.title}</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        <div className="sx-bnr-outline-text">
          <h1> Flamingo</h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
