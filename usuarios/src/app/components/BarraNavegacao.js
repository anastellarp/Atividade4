'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Usuários</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

            </Container>
        </Navbar>
    )
}