import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundImage from "gatsby-background-image";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderTwoData } from "@/data";
import "@/css/hero.css";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };

  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "coaches-hero-dark-2-min.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const shopImage = data.shopImage.childImageSharp.fluid;
  const { subTitle, subTitleTwo, titleTwo, title, button } = SliderTwoData[0];
  return (
    // <section className="main-slider main-slider__two">
    //   <Swiper {...mainSlideOptions}>
    //     {SliderTwoData.map(({ image, subTitle, title, button }, index) => (
    //       <SwiperSlide key={index}>
    //         <div
    //           className="image-layer"
    //           style={{ backgroundImage: `url(${image})` }}
    //         ></div>
    <BackgroundImage fluid={shopImage} className="hero">
      <Container>
        <Row>
          <Col lg={12} className="text-left slider-two__col">
            <h3 className="slider-two__title">{title}</h3>
            <h3 className="slider-two__title">{titleTwo}</h3>
            <p className="slider-two__subtitle slider-two__subtitle__first">
              {subTitle}
            </p>
            <p className="slider-two__subtitle">{subTitleTwo}</p>
            <Link
              to={button.url}
              className={`common_btn red_bg slider-two__btn`}
            >
              <span>{button.label}</span>
            </Link>
            <Link
              to="/contact"
              className={`common_btn red_bg slider-two__btn-right`}
            >
              <span>GET A QUOTE</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
    // </SwiperSlide>
    //     ))}
    //     <div className="swiper-button-prev" id="main-slider-prev">
    //       <i className="fa fa-angle-left"></i>
    //     </div>
    //     <div className="swiper-button-next" id="main-slider-next">
    //       <i className="fa fa-angle-right"></i>
    //     </div>
    //   </Swiper>
    // </section>
  );
};

export default SliderTwo;
