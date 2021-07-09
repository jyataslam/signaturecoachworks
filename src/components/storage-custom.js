import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { Container, Row, Col } from "react-bootstrap";
import { StoragePageData } from "@/data";
import "@/css/service.css";

const StorageCustom = () => {
  const { title, subTitle, text } = StoragePageData;

  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "shop-inside-min.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        whiteImage: file(relativePath: { eq: "storagepage-inside-min.jpeg" }) {
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

  return (
    <section className="service_section storage_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc color_aaa color_333">{text}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12}>
            <BackgroundImage
              fluid={data.shopImage.childImageSharp.fluid}
              className="storage_image"
            ></BackgroundImage>
          </Col>
          <Col lg={6} sm={12}>
            <BackgroundImage
              fluid={data.whiteImage.childImageSharp.fluid}
              className="storage_image"
            ></BackgroundImage>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StorageCustom;
