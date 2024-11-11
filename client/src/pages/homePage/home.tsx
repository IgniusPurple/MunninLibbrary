import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import { Navbar, Nav, Form, Dropdown, Container, Row, Col, Carousel } from 'react-bootstrap';
import './styles.css';
import muninnImg from '../../assets/munnin.png';
import laisImg from '../../assets/lais.png';
import anatomiaImg from '../../assets/anatomia.png';
import medicinaImg from '../../assets/medicina.png';
import dermaImg from '../../assets/derma.png';
import novaImg from '../../assets/nova.png';
import plantsImg from '../../assets/plants.png';
import guiaPraticoImg from '../../assets/guia_pratico.jpg';
import backImg from '../../assets/back.jpeg';
import frank from '../../assets/frank.png';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${backImg})` }}>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
        <Navbar.Brand href="#">
          <img src={muninnImg} alt="Corvo" className="logo" />
        </Navbar.Brand>
        <Form inline className="mx-3 my-2 search-bar">
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
        <div className="d-flex justify-content-start">
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
        </div>
          <span className="text-white ml-2 mb-3">Laís</span>
        </div>
      </Navbar>

      <Container className="mt-5 pt-5 black-box">
        <div className="box">
          <h1>Achamos que você vai curtir:</h1>
          <div className="content">
            <img src={anatomiaImg} alt="Anatomia Geral" className="float-left mr-3" />
            <div className="text">
              <h3>Anatomia Geral</h3>
              <p>Reconhecer os órgãos do corpo humano, e como estes se comportam para a formação dos sistemas...</p>
              <div className="additional-content">
                <img src={frank} alt="Circle" className="rounded-circle mr-4" />
                <span>Frank H. Netter</span>
              </div>
            </div>
            <h4 className="continue-reading-sub mt-4 ml-2">Continuar lendo</h4>
            <Carousel controls={false} indicators={false} className="mt-2">
              <Carousel.Item>
                <Row>
                  <Col md={2}><img src={medicinaImg} className="d-block w-100" alt="Medicina" /></Col>
                  <Col md={2}><img src={dermaImg} className="d-block w-100" alt="Derma" /></Col>
                  <Col md={2}><img src={novaImg} className="d-block w-100" alt="Nova" /></Col>
                  <Col md={2}><img src={plantsImg} className="d-block w-100" alt="Plants" /></Col>
                  <Col md={2}><img src={guiaPraticoImg} className="d-block w-100" alt="Guia Prático" /></Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
