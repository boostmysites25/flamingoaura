import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionClients2({ hideTitle }) {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-client-logo-1-outer sx-bg-white">
                <div className="container">
                    {/* TITLE START */}
                    {
                        (hideTitle === undefined ||
                            hideTitle === null ||
                            !hideTitle) &&
                        <div className="section-head center max-900">
                            <div className="sx-head-s-title">Our Clients</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title2">Our 1200 happy users around worldwide Itodo.</h2>
                            </div>
                        </div>
                    }

                    {/* TITLE END */}
                    <div className="section-content">
                        <div className="client-grid m-b30">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo1.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo2.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo3.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo4.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo5.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo6.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo7.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <NavLink to="/contact-us" className="client-logo-pic">
                                        <ItodoImage src="images/client-logo/logo8.png" alt="" />
                                        <div>
                                            <span className="sx-circle-btn"><i className="fa fa-long-arrow-right" /></span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionClients2;