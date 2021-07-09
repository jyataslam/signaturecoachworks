import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const PageBanner = ({ title, name, image, bg }) => {
  return (
    <section className="pageBanner">
      <BackgroundImage
        fluid={image}
        alt="our services image"
        className={`single-page__half-header ${bg}`}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                <Link to="/">home</Link> - {name}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
