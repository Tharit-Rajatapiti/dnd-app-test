import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

function AppNavigationBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>DND test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                    <Nav>
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                        <Link to="/characters" className="nav-link">
                            Characters
                        </Link>
                        <Link to="/skills" className="nav-link">
                            Skills
                        </Link>
                        <Nav.Link href="/spells">Spells</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default AppNavigationBar;