import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import SwiperCore, { Autoplay, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsOneData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/swiper-bundle.min.css";
import "../assets/css/testimonials.css";

SwiperCore.use([Autoplay, Thumbs, Pagination]);

const TestimonialsOneCarousel = ({ regularPadding }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    speed: 1400,
    pagination: {
      el: "#testimonials-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };
  const { sectionContent, posts } = TestimonialsOneData;

  const data = useStaticQuery(
    graphql`
      query {
        serviceBg: file(relativePath: { eq: "working-bg-min.jpg" }) {
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
  const serviceBgImage = data.serviceBg.childImageSharp.fluid;

  return (
    <section
      className={`commonSection testimonial_2 service_section ${regularPadding}`}
    >
      <BackgroundImage
        fluid={serviceBgImage}
        className="service-section__bg-image"
      />
      <Container>
        <Row className="testimoniTab">
          <Col lg={5}>
            <h2 className="sec_title white">{sectionContent.subTitle}</h2>
            <Swiper
              id="testimonial_2_thumb"
              onSwiper={setThumbsSwiper}
              {...testimonialsThumbOptions}
            >
              {posts.map(({ name, designation, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="control_item">
                    <a href={`#tab_${index}`} data-toggle="tab">
                      <span>
                        <img src={image} alt={name} />
                      </span>
                      <div className="author_detail">
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col lg={7}>
            <div
              className="swiper-pagination"
              id="testimonials-carousel-pagination"
            ></div>
            <div className="tab-content">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                {...testimonialsOptions}
              >
                {posts.map(({ content, date }, index) => (
                  <SwiperSlide key={index}>
                    <div className="testi_con">
                      <p>{content}</p>
                      <span>{date}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOneCarousel;
