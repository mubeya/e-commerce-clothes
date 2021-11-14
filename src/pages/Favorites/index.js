import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar";
import { useFavorites } from "../../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            {favorites.length < 1 && (
              <Alert status='warning'>
                You have not any items in your favorites
              </Alert>
            )}
            {favorites.length > 0 && (
              <>
                <ul style={{ listStyleType: "decimal" }}>
                  {favorites.map((item) => (
                    <li key={item.id} style={{ marginBottom: 20 }}>
                      <Link to={`/${item.id}`}>
                        <p fontSize={18}>
                          {item.title} - {item.price} TL
                        </p>
                        <img
                          htmlWidth={200}
                          loading='lazy'
                          src={item.image}
                          alt='basket item'
                        />
                      </Link>
                      <button
                        mt='2'
                        size='sm'
                        colorScheme='pink'
                        onClick={() => removeFromFavorites(item.id)}>
                        Remove from favorites
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
