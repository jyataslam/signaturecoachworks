import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "@/css/sales.css";

const AboutTwo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        salesBgImage: file(
          relativePath: { eq: "stormtrooper-exterior-min.jpeg" }
        ) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        innerBgImage: file(relativePath: { eq: "consignment-min.jpeg" }) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const image = getImage(data.salesBgImage);
  const innerBgImage = getImage(data.innerBgImage);

  return (
    <section className="commonSection ab_agency sales_two_section">
      <GatsbyImage
        image={image}
        alt="stormtrooper coach from signature coachworks"
        className="opaque__bg-image"
      />
      <Container style={{ position: "static" }}>
        <Row>
          <Col lg={6} md={12} sm={12} className="PR_79">
            <h4 className="sub_title">SALES</h4>
            <h2 className="sec_title MB_45">We offer consignment sales</h2>
            <p className="sec_desc color_ededed">
              All sales coaches come with a full inspection of the coach from
              our facility. Upgrades and remodels are easily completed onsite.
            </p>
            <Link className="common_btn red_bg blue_bg" to="/sales">
              <span>Search Inventory</span>
            </Link>
          </Col>
          <Col lg={6} md={12} sm={12} className="about__image-container">
            <GatsbyImage
              image={innerBgImage}
              alt="stormtrooper coach from signature coachworks"
              className="about__image"
            />
            {/* <div className="sales__container-inner">
              <h3>
                Upgrades and repairs can be completed in house on all coach
                sales
              </h3>
  </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
