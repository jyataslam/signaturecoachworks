import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import "@/css/service.css";

const ServiceTwo = () => {
  const { sectionContent, posts, services } = ServicePostTwoData;
  const { title, subTitle, text, secondaryText } = sectionContent;

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
    <section className="service_section commonSection">
      <BackgroundImage
        fluid={serviceBgImage}
        className="service-section__bg-image"
      />
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 className="sub_title red_color">{subTitle}</h4>
            <h2 className="sec_title white">{title}</h2>
            <p className="sec_desc color_ededed">{text}</p>
          </Col>
        </Row>
        <Row className="service_row">
          {services.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <div>
                <h3 className="icon_box_1 service_item_new">{item.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <p className="sec_desc color_ededed secondary_text_desc">
              {secondaryText}
            </p>
          </Col>
        </Row>
        {/* <Row className="custom_column">
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};

export default ServiceTwo;
