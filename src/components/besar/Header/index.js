import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LogoPutih } from '../../../assets/logo';
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
                                <Link to='/tentangkami' style={navLink}>Tentang Kami</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/ibadahonline' style={navLink}>Ibadah Online</Link>
                            </Nav.Link>
                            <Nav.Link id="navbarScrollingDropdown">
                                <Link to='/timpengembalaan' style={navLink}>Tim Pengembalaan</Link>
                            </Nav.Link>


                            <NavDropdown title={<span style={navLink}>Komunitas</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to='/taruna' style={navLinkPop}>Taruna</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to='/nextgen' style={navLinkPop}>Next Generation</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to='/youth' style={navLinkPop}>Youth</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to='/haleluyaministry' style={navLinkPop}>Haleluya Ministry</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
const nav = {
    backgroundColor: colors.background.headerFooter
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
const navLinkPop = {
    textDecoration: 'none',
    color: colors.text.primary,
    fontFamily: 'Poppins',
    fontWeight: weight.font.bold
}
