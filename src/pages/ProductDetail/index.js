import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Tooltip,
  OverlayTrigger,
  Toast,
  ToastContainer,
  NavLink,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar, faHeart } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../../components/Navbar";
import style from "./style.module.css";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

function ProductDetail() {
  const { product_id } = useParams();
  const { cart, addToCart, show, setShow } = useCart();
  const { favorites, addToFavorites } = useFavorites();

  const { isLoading, isError, data } = useQuery(
    ["product_id", product_id],
    () =>
      axios(`https://617947d1aa7f34001740495d.mockapi.io/clothes/${product_id}`) //bu endpointten gelen product detail data bilgisinde tutulur
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const renderTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      {findFavoriteItem ? "Remove from Favorites" : "Add to Favorites"}
    </Tooltip>
  );

  const findCartItem = cart.find((item) => item.id === product_id); //tıkladığım ürün sepettemi kontrol ediyoruz
  const findFavoriteItem = favorites.find((item) => item.id === product_id);

  return (
    <div>
      <NavBar />
      <Container className='my-5'>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href={`/products/${data.data.product}`}>
              {data.data.product}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{data.data.material}</Breadcrumb.Item>
          </Breadcrumb>
          <Col md={5}>
            <img
              className={style.productImg}
              src={data.data.image}
              alt={data.data.title}
            />
          </Col>
          <Col md={7}>
            <h4>{data.data.title}</h4>
            <FontAwesomeIcon icon={faStar} /> <span>500 Comment</span>
            <br />
            <br />
            <p>{data.data.price} $</p>
            <p>Color : {data.data.Color}</p>
            <p>Material : {data.data.material}</p>
            <p>{data.data.description}</p>
            <ToastContainer className={style.toastCont} position='top-end'>
              <Toast
                style={{ width: 240, backgroundColor: "white" }}
                onClose={() => setShow(false)}
                show={show}
                delay={6000}
                autohide>
                <Toast.Header>
                  <img
                    src='holder.js/20x20?text=%20'
                    className='rounded me-2'
                    alt=''
                  />
                  <strong className='me-auto'>Cart ({cart.length} Item)</strong>
                </Toast.Header>
                <Toast.Body>
                  {cart.map((item) => (
                    <NavLink key={item.id} className={style.cartLink}>
                      {item.title} - {item.price} $
                    </NavLink>
                  ))}
                  <button className={style.cartbtn}>Go to cart</button>
                  <button className={style.cartbtn}>Check Out</button>
                </Toast.Body>
              </Toast>
            </ToastContainer>
            <button
              className={style.cartbtn}
              onClick={() => addToCart(data.data, findCartItem)}>
              {findCartItem ? "Remove from Cart" : "Add to Cart"}
            </button>
            <OverlayTrigger
              placement='right'
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}>
              <button
                className={
                  findFavoriteItem ? style.favoritebtn : style.unFavoritebtn
                }
                variant='success'
                onClick={() => addToFavorites(data.data, findFavoriteItem)}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetail;
