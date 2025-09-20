import ItodoImage from "../../elements/itodo-img";
import { Link } from "react-router-dom";
import {
  appPortfolio,
  publicUrlFor,
  webPortfolio,
} from "../../../globals/constants";

function Portfolio({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");
  let portfolio = page === "web-development" ? webPortfolio : appPortfolio;
  return (
    <>
      <div
        className="section-full p-t110 p-b80"
        style={{
          backgroundImage: `url(${publicUrlFor(
            "images/services/bg-img.webp"
          )})`,
        }}
      >
        <div className="container">
          {/*Large Title*/}
          <div className="large-title-block sx-all-white">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* TITLE START */}
                <div className="section-head left">
                  <div className="sx-head-s-title">Portfolio</div>
                  <div className="sx-head-l-title">
                    <h2 className="sx-title" style={{ color: "#fff" }}>
                      {isWebDevelopment
                        ? "Showcasing My Work"
                        : "Apps That Make a Difference"}
                    </h2>
                  </div>
                </div>
                {/* TITLE END */}
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="portfolio_grid">
              {portfolio.map(({ title, img, link, projectId }) => (
                <div key={title} className="item">
                  <div className="sx-service-bx-2">
                    <div className="sx-icon-box-wraper">
                      <div className="sx-img-bx">
                        <span className="sx-img-bx-media">
                          <ItodoImage src={img} alt="image" />
                        </span>
                        <div className="p-2">
                          <p className="sx-why-ch-category">{title}</p>
                          <div className="d-flex gap-2">
                            <Link
                              to={`/portfolio/${projectId}`}
                              className="site-button sx-btn-secondary text-black icon sx-btn-md mt-2"
                            >
                              View Details
                            </Link>
                            {link && (
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="site-button sx-btn-primary text-white icon sx-btn-md mt-2"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
