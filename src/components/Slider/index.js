import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import style from "./style.module.css";

function Slider() {
  return (
    <Container>
      <Row
        className='row d-flex align-items-center justify-content-between'
        style={{ alignItems: "Center" }}>
        <Col xs={5} md={6}>
          <img
            className='d-block w-100'
            src='https://preview.colorlib.com/theme/estore/assets/img/hero/xhero_man.png.pagespeed.ic.cN86RxAvqq.webp'
            alt='First slide'
          />
        </Col>
        <Col xs={7} md={6} className={style.slideColLeft}>
          <h4>Winter Collection</h4>
          <p>Best Cloth Collection By 2021</p>
          <button>Shop Now</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Slider;
