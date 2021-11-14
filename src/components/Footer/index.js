import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

function Footer() {
  return (
    <div>
      <Container>
        <Row xs={2} md={4}>
          <Col>
            <h5>Ecommerce</h5>
            <p style={{ color: "gray" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </Col>
          <Col>
            <h5>Quick Links</h5>
            <ul className={style.footerList}>
              <li>About</li>
              <li>Offers</li>
              <li>Get Coupon</li>
              <li>Contact US</li>
            </ul>
          </Col>
          <Col>
            <h5>New Products</h5>
            <ul className={style.footerList}>
              <li>Woman Cloth</li>
              <li>Accessories</li>
              <li>Jeans</li>
              <li>Shoes</li>
            </ul>
          </Col>
          <Col>
            <h5>Support</h5>
            <ul className={style.footerList}>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Payment Issue</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
