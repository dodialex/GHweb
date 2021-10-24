import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LogoPutih } from '../../../assets/logo';
import { Link } from 'react-router-dom';
import { colors, weight } from '../../../random';

const Header = () => {
    return (
        <div style={div}>
            <Navbar style={nav} fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>
                            <img
                                alt="ini logo"
                                src={LogoPutih}
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mx-auto'>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to='/' style={navLink}>Beranda</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/artikel' style={navLink}>Artikel</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/galeri' style={navLink}>Galeri</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/tentangkami' style={navLink}>Tentang Kami</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
const nav = {
    backgroundColor: 'rgba(0, 128, 0, 0.8)'
}
const div = {
    marginBottom: '56px'
}

const navLink = {
    textDecoration: 'none',
    color: colors.text.secondary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold
}
