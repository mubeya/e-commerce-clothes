import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import { useProduct } from "../../context/ProductContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCubes,
  faUnlockAlt,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider";
import style from "./style.module.css";

function Home() {
  const { products } = useProduct();

  return (
    <div>
      <NavBar />
      <Slider />
      <Container className='mt-5'>
        <h1 className={style.mainTitle}>Shop by Category</h1>
        <Row xs={1} md={3} className='g-4'>
          <Col className='mt-5'>
            <Card>
              <Link to='/products/Chair'>
                <Card.Img
                  variant='top'
                  src='http://placeimg.com/640/480/chair'
                />
              </Link>
              <Card.Body>
                <Card.Title>Chair</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mt-5'>
            <Card>
              <Link to='/products/Cats'>
                <Card.Img
                  variant='top'
                  src='http://placeimg.com/640/480/cats'
                />
              </Link>
              <Card.Body>
                <Card.Title>Cats</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mt-5'>
            <Card>
              <Link to='/products/Computer'>
                <Card.Img
                  variant='top'
                  src='http://placeimg.com/640/480/computer'
                />
              </Link>
              <Card.Body>
                <Card.Title>Computer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h2 className={style.mainTitleSecond}>Latest Products</h2>
        <Row xs={1} md={3} lg={4} className='g-4'>
          {products.slice(0, 12).map((product) => (
            <Col className='mt-5' key={product.id}>
              <Card>
                {/* Link to products detail page */}
                <Link to={`/${product.id}`}>
                  <Card.Img variant='top' src={product.image} />
                </Link>
                <Card.Body>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={style.productStarHigh}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={style.productStarHigh}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className={style.productStarLow}
                  />
                  <Card.Title className='mt-2'>{product.title}</Card.Title>
                  <Card.Text>{product.price} $</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <div className={style.moreDiv}>
            <a href='/products'>See More Products</a>
          </div>
        </Row>
        <Row xs={1} md={3} className={style.mainAbout}>
          <Col>
            <FontAwesomeIcon icon={faCubes} style={{ fontSize: 30 }} />
            <h3>Free Shipping Method</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faUnlockAlt} style={{ fontSize: 30 }} />
            <h3>Secure Payment System</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faSync} style={{ fontSize: 30 }} />
            <h3>Easy Returns</h3>
            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
