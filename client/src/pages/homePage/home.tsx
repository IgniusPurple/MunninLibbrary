import React, { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { Navbar, Nav, Form, Dropdown, Container, Row, Col, Carousel } from 'react-bootstrap';
import { getBooks } from "../../services/booksService";
import { Link } from 'react-router-dom';
import './styles.css';
import muninnImg from '../../assets/munnin.png';
import laisImg from '../../assets/lais.png';
import backImg from '../../assets/back.jpeg';

const Home: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const booksData = await getBooks();
              setBooks(booksData);
          } catch (error) {
              console.error("Failed to fetch books:", error);
          }
      };
      fetchBooks();
  }, []);

  return (
    <div className="home" style={{ backgroundImage: `url(${backImg})` }}>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
        <Navbar.Brand href="#">
          <img src={muninnImg} alt="Corvo" className="logo" />
        </Navbar.Brand>
        <Form form-inline className="mx-3 my-2 search-bar">
          <div className="position-relative">
            <MagnifyingGlass size={20} color="#666" className="search-icon" />
            <Form.Control
              type="search"
              placeholder="Pesquisar títulos, gêneros, autores"
              aria-label="Pesquisar"
              className="pl-4"
            />
          </div>
        </Form>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#">Explorar</Nav.Link>
            <Nav.Link href="#">Eventos</Nav.Link>
            <Nav.Link href="#">Comunidade</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center gap-2 user-info">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" style={{ padding: 0 }}>
              <img src={laisImg} alt="Laís" className="rounded-circle" style={{ width: '40px', height: '40px' }} />
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={Link} to="/myAccount">Minha Conta</Dropdown.Item>
              <Dropdown.Item href="#">Perfil</Dropdown.Item>
              <Dropdown.Item href="#">Listagem</Dropdown.Item>
              <Dropdown.Item href="/">Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="text-white ml-2 mb-3">Laís</span>
        </div>
      </Navbar>

      <Container className="mt-5 pt-5 black-box">
        <div className="box">
          <h1>Achamos que você vai curtir:</h1>
          <Carousel controls={false} indicators={false} className="mt-2">
            <Carousel.Item>
              <Row>
                {books.map((book) => (
                  <Col md={2} key={book.id}>
                    <div className="book-card">
                      <img src={book.cover || backImg} className="d-block w-100" alt={book.title} />
                      <p>{book.title}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Home;
