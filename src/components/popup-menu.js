import React, { useContext, Fragment, useRef } from "react";
import { Link } from "gatsby";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav">
      <div className="popup popup__menu">
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          className="close-popup"
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div className="logo2">
                <Link to="/">
                  <img src={LogoImage.light} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="popup-inner">
                <nav
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            undefined !== links.subItems
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link to={links.url}>{links.name}</Link>
                          {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={e => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach(item => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link to={subLinks.url}>
                                      {subLinks.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null}
                        </li>
                      );
                    })}
                    {/* <Link
                      className="glowing_btn red_bg nav__quote-btn"
                      to="/contact"
                    >
                      <span>Get a quote</span>
                    </Link> */}
                    <li>
                      <Link to="/contact">get a quote</Link>
                    </li>
                  </ul>
                </nav>
                <ul className="footer__contacts">
                  <li>
                    <a href="tel:+19518458056">Phone: (951)845-8056</a>
                  </li>
                  <li>
                    <a href="mailto:info@signaturecoachworks.com">
                      Email: info@signaturecoachworks.com
                    </a>
                  </li>
                  <li>Address: 101 California Ave. Beaumont, CA 92223</li>
                </ul>
                <div className="popUp_social text-center text-md-right">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/signaturecoachworks/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.yelp.com/biz/signature-coachworks-beaumont"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-yelp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left"></div>
            <div className="col-lg-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
