import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const AboutTwo = () => {
  const { sectionContent, button } = AboutTwoData;
  const data = useStaticQuery(
    graphql`
      query {
        aboutImg: file(relativePath: { eq: "homepage-about-min.jpeg" }) {
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

  const aboutImage = data.aboutImg.childImageSharp.fluid;

  return (
    <section className="commonSection ab_agency">
      <Container style={{ position: "static" }}>
        <Row>
          <Col lg={6} md={12} sm={12} className="PR_79">
            <h4 className="sub_title">signature coachworks</h4>
            {/* <img
              src={logo}
              alt="signature coachworks logo"
              className="about__header-logo"
            /> */}
            <h2 className="sec_title MB_45">{sectionContent.title}</h2>
            <p className="sec_desc">{sectionContent.text}</p>
            {/* <Link
              className="common_btn red_bg blue_bg on_white_bg"
              to={button.url}
            >
              <span>{button.label}</span>
            </Link> */}
          </Col>
          <Col lg={6} md={12} sm={12} className="about__image-container">
            <BackgroundImage className="about__image" fluid={aboutImage} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
