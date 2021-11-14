import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Copyright() {
  return (
    <div style={{ backgroundColor: "#f5f4f0" }}>
      <Container style={{ padding: 15 }}>
        <Row xs={1} md={2}>
          <Col>Copyright ©2021 All rights reserved | mubeya.com</Col>
          <Col>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Copyright;
