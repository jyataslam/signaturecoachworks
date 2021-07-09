import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundImage from "gatsby-background-image";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
import "@/css/hero.css";

const SliderOne = () => {
  const { subTitle, title, button, logo } = SliderOneData[0];
  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "hero-interior-min.jpg" }) {
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

  return (
    // <section className="hero">
    //   <Container>
    //     <Row>
    //       <Col lg={12} className="text-center">
    //         <p className="hero-subtext">{subTitle}</p>
    //         <img src={logo} alt={title} className="hero-logo" />
    //         <Link to={button.url} className={`common_btn red_bg`}>
    //           <span>{button.label}</span>
    //         </Link>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>
    <BackgroundImage fluid={shopImage} className="hero">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <p className="hero-subtext">{subTitle}</p>
            <img src={logo} alt={title} className="hero-logo" />
            <Link to={button.url} className={`common_btn red_bg`}>
              <span>{button.label}</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default SliderOne;
