
import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {mainPage} from "../../routes/main-page";
import {characters} from "../../routes/characters";
import {enemies} from "../../routes/enemies";
import {races} from "../../routes/races";
import world from "../../routes/world";
import {story} from "../../routes/story";
const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">My Simple Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/">{mainPage()}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/characters">{characters}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/enemies">{enemies}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/races">{races}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/world">{world}</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/story">{story()}</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;