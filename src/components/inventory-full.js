import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const InventoryFull = () => {
  const { sectionContent } = PortfolioHomeData;
  const data = useStaticQuery(
    graphql`
      query {
        fadeBgImg: file(relativePath: { eq: "stormtrooper-bw-min.jpg" }) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        allInventory: allInventoryJson {
          edges {
            node {
              featuredImage {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              slug
              title
            }
          }
        }
      }
    `
  );
  const fadeBgImg = getImage(data.fadeBgImg);
  const inventoryArray = data.allInventory.edges;

  return (
    <section className="commonSection porfolio">
      <GatsbyImage
        image={fadeBgImg}
        alt="background image"
        className="opaque__bg-image"
      />
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {inventoryArray
                .filter((coach, index) => index < 3)
                .map((coach, index) => {
                  console.log("coach", coach);
                  return (
                    <Col lg={6} md={6} sm={12} key={index}>
                      <PortfolioCard data={coach.node} />
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default InventoryFull;
