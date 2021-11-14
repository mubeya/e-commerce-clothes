import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useProduct } from "../../context/ProductContext";
import style from "./style.module.css";

function Cards({ activeFilter }) {
  const { products } = useProduct();

  return (
    <Container className='mt-3'>
      <Row xs={1} md={3} lg={4} className='g-4'>
        {activeFilter === "All"
          ? products.map((product) => (
              <Col className='mt-5' key={product.id}>
                <Card>
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
            ))
          : products
              .filter((product) => product.product === activeFilter)
              .map((product) => (
                <Col key={product.id}>
                  <Card>
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
      </Row>
    </Container>
  );
}

export default Cards;
