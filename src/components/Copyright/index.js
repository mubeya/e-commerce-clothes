import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import style from "./style.module.css";

function Copyright() {
  return (
    <div style={{ backgroundColor: "#f5f4f0" }}>
      <Container style={{ padding: 15 }}>
        <Row xs={1} md={2} className='text-center'>
          <div>Copyright ©2021 All rights reserved | mubeya.com</div>
          <div>
            <FontAwesomeIcon className={style.mainSocial} icon={faFacebook} />
            <FontAwesomeIcon className={style.mainSocial} icon={faTwitter} />
            <FontAwesomeIcon className={style.mainSocial} icon={faInstagram} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Copyright;
