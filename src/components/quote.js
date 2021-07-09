import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@/css/quote.css";
import { Link } from "gatsby";

const Quote = () => {
  return (
    <div className="quote_section">
      <Container style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col
            lg={12}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h6>Get a free quote from us!</h6>
            <a href="tel:+19518458056">(951)845-8056</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;
