import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavigationBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>DND test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}