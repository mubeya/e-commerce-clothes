import { useState, useRef } from "react";
import { Container, Row, Col, Alert, Modal } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const { cart, removeFromCart, emptyCart } = useCart();

  const [address, setAddress] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialRef = useRef();

  const total = cart.reduce((acc, obj) => acc + obj.price, 0); // sepetteki ürünlerin fiyat toplamı, acc o ana kadarki toplam, obj yeni gelen değer,  0 ise ilk toplam değer

  const handleSubmitForm = async () => {
    const itemIds = cart.map((item) => item._id);
    const input = {
      address,
      items: JSON.stringify(itemIds), //birden fazla ürün olunca obje olarak tutulduğu için json ile düzenleyip gönderdik bilgileri
    };

    await localStorage.setItem("shippingAddress", input); // form submit edildiğinde sepetteki ürün idlerini ve adres bilgisini api.js deki fonksiyon ile datatabasee kaydettik

    emptyCart();
    handleClose();
  };

  return (
    <div>
      <NavBar />
      <Container>
        {cart.length < 1 && (
          <Alert status='warning' className='mt-3'>
            You have not any items in your basket
          </Alert>
        )}
        {cart.length > 0 && (
          <>
            <Container className='mt-3'>
              {cart.map((item) => (
                <Row key={item.id} style={{ marginBottom: 20 }}>
                  <Col xs={4} md={2}>
                    <img
                      loading='lazy'
                      src={item.image}
                      alt='cart item'
                      href={`/${item.id}`}
                      className={style.cartImg}
                    />
                  </Col>
                  <Col xs={6} md={6}>
                    <span href={`/${item.id}`} className={style.cartText}>
                      {item.title} - {item.price} $
                    </span>
                  </Col>
                  <Col xs={2} md={4}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => removeFromCart(item.id)}
                      className={style.cartDelete}
                    />
                  </Col>
                </Row>
              ))}
            </Container>

            <div>
              <button className={style.btnOrder} onClick={handleShow}>
                Order
              </button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <button variant='secondary' onClick={handleClose}>
                  Close
                </button>
                <button variant='primary' onClick={handleClose}>
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </Container>
    </div>
  );
}

export default Cart;
