import React from "react";
import { Link } from "gatsby";

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-8">
            <h2 className="sec_title white blue">Get a quote from us!</h2>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-4 text-right calltoaction_flexcol">
            <Link to="/contact" className="common_btn blue_bg">
              <span className="btn__black-font">Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
