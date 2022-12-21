import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from './img/LOGO.png';

class NavbarComp extends Component {
  render() {
    return (
      <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand className='fw-bold' href="#home"><img className='mx-1' src={LOGO} width={40} height={40} />TernakSignature</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                     <Nav.Link href="#features">Beranda</Nav.Link>
                    <Nav.Link href="#pricing">Toko</Nav.Link>
                    <Nav.Link href="#deets">Aktivitas</Nav.Link>
                    <Nav.Link href="#memes">About Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
      </div>
    )
  }
}

export default NavbarComp;