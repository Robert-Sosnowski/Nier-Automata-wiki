
import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">My Simple Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/">Strona główna</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/characters"> Postacie</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/enemies">Wrogowie</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/races">Rasy</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/world">Świat</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/story">Historia</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;