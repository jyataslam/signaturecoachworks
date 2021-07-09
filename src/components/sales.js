import React from "react";
import "@/css/sales.css";
import { Container, Row, Col } from "react-bootstrap";
import { SalesData } from "@/data";

const Sales = () => {
  const { title, text } = SalesData;
  return (
    <section className="sales_section commonSection">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="sec_title white">{title}</h2>
            <p className="sec_desc color_aaa">{text}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sales;
