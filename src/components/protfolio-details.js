import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";

const ProtfolioDetails = ({ data }) => {
  const featuredImage = getImage(data.featuredImage);
  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12} className="order-2-mobile">
            <div className="portDetailThumb">
              <GatsbyImage image={featuredImage} alt={data.title} />
              {data.images.map((img, index) => {
                let mappedImg = getImage(img);
                return (
                  <GatsbyImage
                    image={mappedImg}
                    alt="coach image"
                    key={index}
                  />
                );
              })}
            </div>
          </Col>
          <Col lg={4} md={5} sm={12} className="mobile-order-1">
            <div className="singlePortfoio_content">
              <h3>{data.title}</h3>
              <h4 className="details__price">Current Price: ${data.price}</h4>
              <p>{data.miles} miles</p>
              {!data.number ? "" : <p>{data.number}</p>}
              <div className="details-divider" />
              {data.commonDetails.map((item, index) => (
                <>
                  <p key={index}>{item}</p>
                  <div className="details-divider" />
                </>
              ))}
            </div>
            <div className="singlePortfoio_content">
              {!data.listDetails ? (
                ""
              ) : (
                <>
                  <h4>The Coach Has The Following:</h4>
                  <ul>
                    {data.listDetails.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="singlePortfoio_content">
              <h4>Interested?</h4>
              <p>
                For additional information or sales please contact us today!
                <div className="details-divider"></div>
                Phone: <a href="tel:+19518458056">(951)845-8056</a>
                <div className="details-divider"></div>
                Email:{" "}
                <a
                  href={`mailto:info@signaturecoachworks.com?subject=${data.title}`}
                >
                  info@signaturecoachworks.com
                </a>
              </p>
            </div>
          </Col>
          <Col
            lg={8}
            md={7}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: "3",
            }}
          >
            <Link className="common_btn red_bg" to="/sales">
              <span>Back To Sales</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProtfolioDetails;
