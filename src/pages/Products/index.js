import { useState } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import Cards from "../../components/Cards";
import style from "./style.module.css";

function Products() {
  const [filter, setFilter] = useState("All");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
    handleClose();
  };

  return (
    <div>
      <NavBar />
      <Container className='mt-4'>
        <Row>
          <Col className={style.filterBtn} xs={12}>
            <button onClick={handleShow}>Filter</button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement='bottom'
              className={style.canvasBody}>
              <Offcanvas.Header closeButton className={style.canvasHeader}>
                <Offcanvas.Title>Select Filter</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h6>Categories</h6>
                <div onChange={changeFilter} className={style.filterInput}>
                  <input
                    type='radio'
                    value='All'
                    label='All'
                    checked={filter === "All"}
                    onChange={changeFilter}
                  />
                  All <br />
                  <input
                    type='radio'
                    value='Chair'
                    label='Chair'
                    checked={filter === "Chair"}
                    onChange={changeFilter}
                  />
                  Chair <br />
                  <input
                    type='radio'
                    value='Car'
                    label='Car'
                    checked={filter === "Car"}
                    onChange={changeFilter}
                  />
                  Car <br />
                  <input
                    type='radio'
                    value='Computer'
                    label='Computer'
                    checked={filter === "Computer"}
                    onChange={changeFilter}
                  />
                  Computer <br />
                  <input
                    type='radio'
                    value='Keyboard'
                    label='Keyboard'
                    checked={filter === "Keyboard"}
                    onChange={changeFilter}
                  />
                  Keyboard
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col className={style.filterList} md={2}>
            <h5>Categories</h5>
            <div className={style.filterInput}>
              <input
                type='radio'
                value='All'
                label='All'
                checked={filter === "All"}
                onChange={changeFilter}
              />
              All <br />
              <input
                type='radio'
                value='Chair'
                label='Chair'
                checked={filter === "Chair"}
                onChange={changeFilter}
              />
              Chair <br />
              <input
                type='radio'
                value='Car'
                label='Car'
                checked={filter === "Car"}
                onChange={changeFilter}
              />
              Car <br />
              <input
                type='radio'
                value='Computer'
                label='Computer'
                checked={filter === "Computer"}
                onChange={changeFilter}
              />
              Computer <br />
              <input
                type='radio'
                value='Keyboard'
                label='Keyboard'
                checked={filter === "Keyboard"}
                onChange={changeFilter}
              />
              Keyboard
            </div>
          </Col>
          <Col xs={12} md={10}>
            <Cards activeFilter={filter} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
