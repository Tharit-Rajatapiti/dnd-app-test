import { Container, Nav, Navbar } from "react-bootstrap";

function AppNavigationBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>DND test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/characters">Characters</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/spells">Spells</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default AppNavigationBar;