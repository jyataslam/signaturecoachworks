import React from "react";
import { Link } from "gatsby";
import { LogoImage } from "@/data";

const Footer = () => {
  const { footer } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <Link to="/">
                <img src={footer} alt="signature coachworks logo" />
              </Link>
              <p>
                Premier Coach & RV Sales and Repair Shop located in Beaumont,
                CA. Coach sales, body work, and professional RV renovations -
                all in one convenient location.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                101 CALIFORNIA AVE.
                <br />
                BEAUMONT, CA 92223
              </p>
              <p className="footer__links-larger">
                P:{" "}
                <a href="tel:+19518458056" className="color_aaa">
                  (951)845-8056
                </a>
              </p>
              <p className="footer__links-larger">
                E:{" "}
                <a href="mailto:info@signaturecoachworks.com">
                  info@signaturecoachworks.com
                </a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/signaturecoachworks/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.yelp.com/biz/signature-coachworks-beaumont"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-yelp"></i>Yelp
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()}{" "}
              <a href="https://www.signaturecoachworks.com" rel="noreferrer">
                Signature Coachworks
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
